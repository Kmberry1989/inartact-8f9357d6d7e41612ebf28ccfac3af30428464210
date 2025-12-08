
const fs = require('fs');
const papa = require('papaparse');
const path = require('path');

const csvFilePath = path.join(__dirname, '..', 'Art Activist Inventory Sheet - Information for Website.csv');
const outputFilePath = path.join(__dirname, '..', 'src', 'lib', 'artists-data.ts');
const csvFileContent = fs.readFileSync(csvFilePath, 'utf8');

papa.parse(csvFileContent, {
  header: true,
  complete: (results) => {
    const artists = results.data.map((row, index) => {
      // Skip empty rows
      if (!row['Artist Name']) {
        return null;
      }
      const artist = {
        id: (index + 1).toString(),
        artist: {
          name: row['Artist Name'] || '',
          isAlive: row['Still Alive? (Check means yes)'] === 'TRUE',
          bio: row['Notes:'] || '',
          website: row['Website'] || '',
          social_media: row['Handle/Link'] ? [row['Handle/Link']] : [],
        },
        artwork: {
          title: row['Title of Work'] || '',
          description: '',
          medium: row['Medium'] || '',
          date: row['Date of Creation'] || '',
          location: row['Where Located in Indiana?'] || '',
          cause: row['Social Cause Description'] || '',
          imageUrl: `/artist-${index + 1}.jpg`, // Placeholder, will need to be updated
          credit: row['Photo Credit'] || null,
          latitude: null,
          longitude: null,
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
