import fs from 'fs';
import path from 'path';
import ogs from 'open-graph-scraper';

const RSS_URL = 'https://news.google.com/rss/search?q=Indiana+Art+Activism+OR+Indy+Arts+Council+OR+Indiana+Arts+Commission&hl=en-US&gl=US&ceid=US:en';
const OUTPUT_FILE = path.join(__dirname, '../src/lib/news-data.json');

async function fetchNews() {
    console.log('Fetching RSS feed...');
    const response = await fetch(RSS_URL);
    const xml = await response.text();

    // Regex to parse RSS items
    const items = xml.match(/<item>[\s\S]*?<\/item>/g) || [];

    const newsItems = [];

    console.log(`Found ${items.length} items. Processing top 8...`);

    for (let i = 0; i < Math.min(items.length, 8); i++) {
        const item = items[i];
        const titleMatch = item.match(/<title>(.*?)<\/title>/);
        const linkMatch = item.match(/<link>(.*?)<\/link>/);
        const pubDateMatch = item.match(/<pubDate>(.*?)<\/pubDate>/);
        const sourceMatch = item.match(/<source url=".*?">(.*?)<\/source>/);

        // Clean title
        let title = titleMatch ? titleMatch[1] : 'News Update';
        title = title.replace(/ - .*$/, ''); // Remove source suffix

        const link = linkMatch ? linkMatch[1] : '';
        const date = pubDateMatch ? new Date(pubDateMatch[1]).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Recent';
        const source = sourceMatch ? sourceMatch[1] : 'News Source';

        console.log(`[${i}] Processing: ${title}`);

        let imageUrl = '';

        if (link) {
            try {
                const { result } = await ogs({ url: link });
                if (result.success && result.ogImage && result.ogImage.length > 0) {
                    imageUrl = result.ogImage[0].url;
                    console.log(`    -> Found OG Image: ${imageUrl}`);
                }
            } catch (e) {
                const errorMessage = e instanceof Error ? e.message : String(e);
                console.log(`    -> Failed to fetch OG image: ${errorMessage}`);
            }
        }

        newsItems.push({
            id: `news-${i}`,
            title,
            date,
            organization: source, // Using source as organization/credit
            category: 'News',
            summary: 'Click to read full story.', // We'll let the user click through
            imageUrl: imageUrl || '', // Empty if not found
            link,
            credit: source // Explicit credit field
        });
    }

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(newsItems, null, 2));
    console.log(`\nSaved ${newsItems.length} items to ${OUTPUT_FILE}`);
}

fetchNews();
