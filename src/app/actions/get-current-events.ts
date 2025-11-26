'use server';

export type EventItem = {
    id: string;
    title: string;
    date: string;
    organization: string;
    category: 'Grant' | 'Exhibition' | 'Performance' | 'Advocacy' | 'News';
    summary: string;
    imageUrl: string;
    link: string;
};

export async function getCurrentEvents(): Promise<EventItem[]> {
    try {
        const response = await fetch(
            'https://news.google.com/rss/search?q=Indiana+Art+Activism+OR+Indy+Arts+Council+OR+Indiana+Arts+Commission&hl=en-US&gl=US&ceid=US:en',
            { next: { revalidate: 3600 } } // Cache for 1 hour
        );

        if (!response.ok) {
            throw new Error('Failed to fetch news');
        }

        const xml = await response.text();

        // Simple regex parsing for RSS items
        const items = xml.match(/<item>[\s\S]*?<\/item>/g) || [];

        const events: EventItem[] = items.slice(0, 4).map((item, index) => {
            const titleMatch = item.match(/<title>(.*?)<\/title>/);
            const linkMatch = item.match(/<link>(.*?)<\/link>/);
            const pubDateMatch = item.match(/<pubDate>(.*?)<\/pubDate>/);
            const sourceMatch = item.match(/<source url=".*?">(.*?)<\/source>/);
            const descriptionMatch = item.match(/<description>(.*?)<\/description>/); // Often contains HTML

            // Clean up description: remove HTML tags and decode entities if needed
            let summary = descriptionMatch ? descriptionMatch[1] : '';
            summary = summary.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim();
            // Decode some common entities
            summary = summary.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");

            // Truncate summary if too long
            if (summary.length > 150) {
                summary = summary.substring(0, 150) + '...';
            }

            const date = pubDateMatch ? new Date(pubDateMatch[1]).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Recent';

            // Cycle through some default images since RSS doesn't give us good ones reliably
            const images = [
                '/mcmillenparkbasketballcourtmural.jpeg',
                '/together.jpg',
                '/wethepeople.webp',
                '/whispersfromthedivide.png'
            ];

            return {
                id: `rss-${index}`,
                title: titleMatch ? titleMatch[1].replace(/ - .*$/, '') : 'News Update', // Remove source from title
                date: date,
                organization: sourceMatch ? sourceMatch[1] : 'News Source',
                category: 'News',
                summary: summary || 'Click to read the full story.',
                imageUrl: images[index % images.length],
                link: linkMatch ? linkMatch[1] : '#',
            };
        });

        return events;
    } catch (error) {
        console.error('Error fetching current events:', error);
        return [];
    }
}
