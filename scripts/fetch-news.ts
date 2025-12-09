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

    console.log(`Found ${items.length} items. Processing candidates...`);

    // Process more candidates to find ones with valid images
    for (let i = 0; i < Math.min(items.length, 20); i++) {
        if (newsItems.length >= 8) break; // Stop once we have 8 good items

        const item = items[i];
        const titleMatch = item.match(/<title>(.*?)<\/title>/);
        const linkMatch = item.match(/<link>(.*?)<\/link>/);
        const pubDateMatch = item.match(/<pubDate>(.*?)<\/pubDate>/);

        // ... (regex parsing matches original) ...

        let title = titleMatch ? titleMatch[1] : 'News Update';
        let link = linkMatch ? linkMatch[1] : '';
        const date = pubDateMatch ? new Date(pubDateMatch[1]).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Recent';

        // Extract real URL from Bing link
        let realUrl = link;
        const urlParamMatch = link.match(/url=(.*?)(&|$)/);
        if (urlParamMatch) {
            try {
                realUrl = decodeURIComponent(urlParamMatch[1]);
            } catch (e) {
                console.log('Failed to decode Bing URL param');
            }
        }

        let source = 'News Source';
        try {
            source = new URL(realUrl).hostname.replace('www.', '');
        } catch (e) { }

        console.log(`[${i}] Checking candidate: ${title}`);

        let imageUrl = '';

        if (realUrl) {
            try {
                const { result } = await ogs({ url: realUrl });
                if (result.success && result.ogImage && result.ogImage.length > 0) {
                    imageUrl = result.ogImage[0].url;
                    // Check if URL is valid (basic check)
                    if (!imageUrl.startsWith('http')) {
                        console.log(`    -> Invalid image URL format: ${imageUrl}`);
                        imageUrl = '';
                    } else {
                        console.log(`    -> Found Valid OG Image: ${imageUrl}`);
                    }
                }
            } catch (e) {
                console.log(`    -> Failed to fetch OG image`);
            }
        }

        // ONLY add if we have a valid image
        if (imageUrl) {
            newsItems.push({
                id: `news-${newsItems.length}`,
                title,
                date,
                organization: source,
                category: 'News',
                summary: 'Click to read full story.',
                imageUrl: imageUrl,
                link: realUrl,
                credit: source
            });
            console.log(`    -> ADDED to list (Total: ${newsItems.length})`);
        } else {
            console.log(`    -> SKIPPED (No valid image)`);
        }
    }

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(newsItems, null, 2));
    console.log(`\nSaved ${newsItems.length} items to ${OUTPUT_FILE}`);
}

fetchNews();
