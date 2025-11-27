import fs from 'fs';
import path from 'path';
import ogs from 'open-graph-scraper';

const RSS_URL = 'https://www.bing.com/news/search?q=Indiana+Arts&format=rss';
const OUTPUT_FILE = path.join(__dirname, '../src/lib/news-data.json');

async function fetchNews() {
    console.log('Fetching RSS feed from Bing...');
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
        const sourceMatch = item.match(/<source url=".*?">(.*?)<\/source>/); // Bing might not have source tag same way

        let title = titleMatch ? titleMatch[1] : 'News Update';
        let link = linkMatch ? linkMatch[1] : '';
        const date = pubDateMatch ? new Date(pubDateMatch[1]).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Recent';

        // Extract real URL from Bing link
        // Link format: http://www.bing.com/news/apiclick.aspx?...&url=https%3a%2f%2f...&...
        let realUrl = link;
        const urlParamMatch = link.match(/url=(.*?)(&|$)/);
        if (urlParamMatch) {
            try {
                realUrl = decodeURIComponent(urlParamMatch[1]);
            } catch (e) {
                console.log('Failed to decode Bing URL param');
            }
        }

        // Bing doesn't always provide <source>, so we might need to extract domain from realUrl
        let source = 'News Source';
        try {
            source = new URL(realUrl).hostname.replace('www.', '');
        } catch (e) { }

        console.log(`[${i}] Processing: ${title}`);
        console.log(`    -> Real URL: ${realUrl}`);

        let imageUrl = '';

        if (realUrl) {
            try {
                const { result } = await ogs({ url: realUrl });
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
            organization: source,
            category: 'News',
            summary: 'Click to read full story.',
            imageUrl: imageUrl || '',
            link: realUrl, // Use real URL for the link too
            credit: source
        });
    }

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(newsItems, null, 2));
    console.log(`\nSaved ${newsItems.length} items to ${OUTPUT_FILE}`);
}

fetchNews();
