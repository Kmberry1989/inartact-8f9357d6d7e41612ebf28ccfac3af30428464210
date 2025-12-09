
const fs = require('fs');
const papa = require('papaparse');
const path = require('path');

const csvFilePath = path.join(__dirname, '..', 'Art Activist Inventory Sheet - Information for Website.csv');
const outputFilePath = path.join(__dirname, '..', 'src', 'lib', 'artists-data.ts');
const csvFileContent = fs.readFileSync(csvFilePath, 'utf8');

const bioCsvFilePath = path.join(__dirname, '..', 'bio info.csv');
const bioCsvContent = fs.existsSync(bioCsvFilePath) ? fs.readFileSync(bioCsvFilePath, 'utf8') : '';

// Parse bio info manually since it's just lines of text with "bio" header
const bioLines = bioCsvContent.split('\n')
  .map(line => line.trim())
  .filter(line => line && line !== 'bio') // Filter header and empty lines
  .map(line => line.replace(/^"(.*)"$/, '$1').trim()); // Remove surrounding quotes

papa.parse(csvFileContent, {
  header: true,
  complete: (results) => {
    const artists = results.data.map((row, index) => {
      // Skip empty rows
      if (!row['Artist Name']) {
        return null;
      }
      // Image matching logic
      const normalize = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, '');
      const artistName = row['Artist Name'] || '';
      const title = row['Title of Work'] || '';
      const normalizedArtist = normalize(artistName);
      const normalizedTitle = normalize(title);

      // Find matching image in public/Images
      const imagesDir = path.join(__dirname, '..', 'public', 'Images');
      let matchedImage = null;

      if (fs.existsSync(imagesDir)) {
        const files = fs.readdirSync(imagesDir);
        // Try strict match first: ArtistName_Title
        matchedImage = files.find(file => {
          const normFile = normalize(file);
          return normFile.includes(normalizedArtist) || (normalizedTitle && normFile.includes(normalizedTitle.substring(0, 15))); // Partial title match
        });

        // Specific manual overrides or smarter matching could go here
        if (!matchedImage) {
          // Try matching just artist name if it's unique-ish
          matchedImage = files.find(file => normalize(file).includes(normalizedArtist));
        }
      }

      // Bio matching logic
      const cleanName = artistName.replace(/\s*\(.*?\)\s*/g, '').trim(); // Remove () parts for matching
      // Find bio that starts with the artist name (either full or clean)
      let matchedBio = bioLines.find(line => {
        const lowerLine = line.toLowerCase();
        return lowerLine.startsWith(artistName.toLowerCase()) ||
          (cleanName.length > 3 && lowerLine.startsWith(cleanName.toLowerCase()));
      });

      // Special case for Robert Indiana if needed, or fallback to Notes
      const bio = matchedBio || row['Notes:'] || row['Bio'] || '';

      const artist = {
        id: (index + 1).toString(),
        artist: {
          name: row['Artist Name'] || '',
          isAlive: row['Still Alive? (Check means yes)'] === 'TRUE',
          bio: bio, // Use matched bio or fallback
          website: row['Website'] || '',
          social_media: row['Handle/Link'] ? [row['Handle/Link']] : [],
        },
        artwork: {
          title: row['Title of Work'] || '',
          description: row['Social Cause Description'] || '', // Map Social Cause to description to ensure section appears
          medium: row['Medium'] || '',
          date: row['Date of Creation'] || '',
          location: row['Where Located in Indiana?'] || '',
          cause: row['Social Cause Description'] || '',
          imageUrl: matchedImage ? `/Images/${matchedImage}` : `/artist-${index + 1}.jpg`,
          credit: row['Photo Credit'] || undefined,
          latitude: undefined,
          longitude: undefined,
          categories: [],
          searchQuery: `${row['Artist Name'] || ''} ${row['Title of Work'] || ''} ${row['Where Located in Indiana?'] || ''} ${row['Social Cause Description'] || ''}`.trim(),
        },
      };
      return artist;
    }).filter(Boolean); // remove nulls

    const fileContent = `import { Artist } from './types';

// Centralized Cause Constants to ensure consistency across filters
const CAUSES = {
  RACIAL_JUSTICE: "Racial Justice",
  CIVIL_RIGHTS: "Civil Rights",
  ENVIRONMENT: "Environmental Justice",
  WOMENS_RIGHTS: "Women's Suffrage",
  IMMIGRATION: "Immigration",
  LABOR: "Labor Rights",
  COMMUNITY: "Community Building",
  MENTAL_HEALTH: "Mental Health",
  PUBLIC_ART: "Public Space",
  POLITICAL: "Political Change/Satire"
} as const;

export const artists: Artist[] = ${JSON.stringify(artists, null, 2)};
`;

    fs.writeFileSync(outputFilePath, fileContent, 'utf8');
    console.log('Successfully updated artists-data.ts');
  }
});
