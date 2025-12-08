import { Artist } from './types';

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

export const artists: Artist[] = [
  {
    "id": "1",
    "artist": {
      "name": "The Eighteen Art Collective",
      "isAlive": true,
      "website": "18artcollective.com",
      "social_media": [
        "IG: @thexviii"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Street Mural",
      "description": "",
      "medium": "Street Paint",
      "date": "Aug. 2020",
      "location": "Indianapolis (Indiana Avenue)",
      "cause": "Racial Justice / BLM",
      "imageUrl": "/artist-1.jpg",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "The Eighteen Art Collective Black Lives Matter Street Mural  Indianapolis (Indiana Avenue) Racial Justice / BLM"
    }
  },
  {
    "id": "2",
    "artist": {
      "name": "Gary Gee",
      "isAlive": true,
      "website": "artbygarygee.com",
      "social_media": [
        "IG: @originalgarygee"
      ]
    },
    "artwork": {
      "title": "We the People (Part of Murals for Racial Justice)",
      "description": "",
      "medium": "Acrylic / Spray Paint",
      "date": "Aug. 2020",
      "location": "Indianapolis (Orig: 32 E. Washington; Archived: Ind. State Museum)",
      "cause": "Civil Rights / Police Brutality",
      "imageUrl": "/artist-2.jpg",
      "credit": "The We The People mural installation in place at 32 E. Washington Street, 2020 (Courtesy of Indy Arts Council)",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Gary Gee We the People (Part of Murals for Racial Justice)  Indianapolis (Orig: 32 E. Washington; Archived: Ind. State Museum) Civil Rights / Police Brutality"
    }
  },
  {
    "id": "3",
    "artist": {
      "name": "Mechi Shakur (Demetrius Green)",
      "isAlive": true,
      "website": "ganggangculture.com/artists/mechi-shakur",
      "social_media": [
        "IG: @mechishakur"
      ]
    },
    "artwork": {
      "title": "Blkkk Lives Don't Matter (Part of Murals for Racial Justice)",
      "description": "",
      "medium": "Acrylic",
      "date": "Aug. 2020",
      "location": "Indianapolis (Orig: Downtown; Archived: Ind. State Museum/Library)",
      "cause": "Racial Justice",
      "imageUrl": "/artist-3.jpg",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Mechi Shakur (Demetrius Green) Blkkk Lives Don't Matter (Part of Murals for Racial Justice)  Indianapolis (Orig: Downtown; Archived: Ind. State Museum/Library) Racial Justice"
    }
  },
  {
    "id": "4",
    "artist": {
      "name": "Israel Solomon",
      "isAlive": true,
      "website": "israelsolomonart.com",
      "social_media": [
        "IG: @israelsoloart"
      ]
    },
    "artwork": {
      "title": "American Duality (Part of Art & Activism exhibit)",
      "description": "",
      "medium": "Acrylic",
      "date": "Aug. 2020",
      "location": "Indianapolis (Orig: 140 W. Washington; Archived: Ind. State Museum)",
      "cause": "Racial Justice / Police Brutality",
      "imageUrl": "/artist-4.jpg",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Israel Solomon American Duality (Part of Art & Activism exhibit)  Indianapolis (Orig: 140 W. Washington; Archived: Ind. State Museum) Racial Justice / Police Brutality"
    }
  },
  {
    "id": "5",
    "artist": {
      "name": "Fred Wilson",
      "isAlive": true,
      "website": "pacegallery.com/artists/fred-wilson",
      "social_media": [
        "N/A (See Pace Gallery: @pacegallery)"
      ]
    },
    "artwork": {
      "title": "E Pluribus Unum",
      "description": "",
      "medium": "Sculpture (Digital Model)",
      "date": "2007–2011 (Cancelled)",
      "location": "Indianapolis (Proposed for Cultural Trail; Cancelled)",
      "cause": "Social Justice (Representation)",
      "imageUrl": "/artist-5.jpg",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Fred Wilson E Pluribus Unum  Indianapolis (Proposed for Cultural Trail; Cancelled) Social Justice (Representation)"
    }
  },
  {
    "id": "6",
    "artist": {
      "name": "Shauta Marsh & Jim Walker (Big Car Collaborative) ",
      "isAlive": true,
      "website": "bigcar.org",
      "social_media": [
        "IG: @bigcarpix (Big Car Collaborative)"
      ]
    },
    "artwork": {
      "title": "Social Alchemy ",
      "description": "",
      "medium": "Social Practice",
      "date": "2005–Present",
      "location": "Indianapolis (Tube Factory / Garfield Park)",
      "cause": "Community Building / Utopia",
      "imageUrl": "/artist-6.jpg",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Shauta Marsh & Jim Walker (Big Car Collaborative)  Social Alchemy   Indianapolis (Tube Factory / Garfield Park) Community Building / Utopia"
    }
  },
  {
    "id": "7",
    "artist": {
      "name": "May Wright Sewall",
      "isAlive": false,
      "website": "N/A (Historical figure, died 1920). Bio at in.gov is appropriate)**",
      "social_media": [
        "N/A (See @thepropylaeum for her legacy)"
      ]
    },
    "artwork": {
      "title": "Founding the Art Association of Indianapolis",
      "description": "",
      "medium": "Civic Leadership",
      "date": "1883",
      "location": "Indianapolis (Art Association / Herron / Newfields)",
      "cause": "Women's Suffrage / Education",
      "imageUrl": "/artist-7.jpg",
      "credit": "Indiana Historical Society ",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "May Wright Sewall Founding the Art Association of Indianapolis  Indianapolis (Art Association / Herron / Newfields) Women's Suffrage / Education"
    }
  },
  {
    "id": "8",
    "artist": {
      "name": "Andre Portee (AbsorbALL)",
      "isAlive": true,
      "website": "andreportee.com",
      "social_media": [
        "IG: @absorball (Project) & @bodrega (Personal)"
      ]
    },
    "artwork": {
      "title": "McMillen Park Basketball Court Murals",
      "description": "",
      "medium": "Mural / Court Paint",
      "date": "Oct. 2020",
      "location": "Fort Wayne (McMillen Park)",
      "cause": "Racial Justice / Community",
      "imageUrl": "/artist-8.jpg",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Andre Portee (AbsorbALL) McMillen Park Basketball Court Murals  Fort Wayne (McMillen Park) Racial Justice / Community"
    }
  },
  {
    "id": "9",
    "artist": {
      "name": "Kacy Jackson",
      "isAlive": true,
      "website": "theartofkacy.com",
      "social_media": [
        "IG: @theartofkacy"
      ]
    },
    "artwork": {
      "title": "Faces of the Fort: Southeast Mural",
      "description": "",
      "medium": "Acrylic Mural",
      "date": "June 2021",
      "location": "Fort Wayne (4335 S. Anthony Blvd)",
      "cause": "Civil Rights / Immigrant Rights",
      "imageUrl": "/artist-9.jpg",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Kacy Jackson Faces of the Fort: Southeast Mural  Fort Wayne (4335 S. Anthony Blvd) Civil Rights / Immigrant Rights"
    }
  },
  {
    "id": "10",
    "artist": {
      "name": "Benjamin Duke",
      "isAlive": true,
      "website": "bendukeart.com",
      "social_media": [
        "IG: @4th_culture_art"
      ]
    },
    "artwork": {
      "title": "Faces of the Fort: Northeast Mural",
      "description": "",
      "medium": "Acrylic Mural",
      "date": "June 2021",
      "location": "Fort Wayne (1514 St. Joseph Blvd)",
      "cause": "Inclusion / Community",
      "imageUrl": "/artist-10.jpg",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Benjamin Duke Faces of the Fort: Northeast Mural  Fort Wayne (1514 St. Joseph Blvd) Inclusion / Community"
    }
  },
  {
    "id": "11",
    "artist": {
      "name": "Mitchell Egly",
      "isAlive": true,
      "website": "mitchellegly.art",
      "social_media": [
        "IG: @eglyillo"
      ]
    },
    "artwork": {
      "title": "Faces of the Fort: Southwest Mural",
      "description": "",
      "medium": "Acrylic Mural",
      "date": "June 2021",
      "location": "Fort Wayne (1818 Bluffton Road)",
      "cause": "Breaking Barriers / Justice",
      "imageUrl": "/artist-11.jpg",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Mitchell Egly Faces of the Fort: Southwest Mural  Fort Wayne (1818 Bluffton Road) Breaking Barriers / Justice"
    }
  },
  {
    "id": "12",
    "artist": {
      "name": "Robert (Clark) Indiana",
      "isAlive": false,
      "website": "robertindiana.com",
      "social_media": [
        "IG: @robertindiana (Legacy Initiative)"
      ]
    },
    "artwork": {
      "title": "The Confederacy: Mississippi",
      "description": "",
      "medium": "Oil",
      "date": "May 1905",
      "location": "Various Collections (e.g., Miami Univ. Art Museum)",
      "cause": "Civil Rights",
      "imageUrl": "/artist-12.jpg",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Robert (Clark) Indiana The Confederacy: Mississippi  Various Collections (e.g., Miami Univ. Art Museum) Civil Rights"
    }
  },
  {
    "id": "13",
    "artist": {
      "name": "Robert (Clark) Indiana",
      "isAlive": false,
      "website": "robertindiana.com",
      "social_media": [
        "IG: @samuellevijones"
      ]
    },
    "artwork": {
      "title": "HOPE ",
      "description": "",
      "medium": "Polychrome Aluminum",
      "date": "2008",
      "location": "Various Public Plazas (NYC, etc.)",
      "cause": "Political Change (Hope)",
      "imageUrl": "/artist-13.jpg",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Robert (Clark) Indiana HOPE   Various Public Plazas (NYC, etc.) Political Change (Hope)"
    }
  },
  {
    "id": "14",
    "artist": {
      "name": "Samuel Levi Jones",
      "isAlive": true,
      "website": "samuellevijones.com",
      "social_media": [
        "@samuellevijones"
      ]
    },
    "artwork": {
      "title": "Poplar Trees (Diptych)",
      "description": "",
      "medium": "Deconstructed Books",
      "date": "July 1905",
      "location": "Indianapolis (Newfields / Eskenazi Museum)",
      "cause": "Institutional Racism / Justice",
      "imageUrl": "/artist-14.jpg",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Samuel Levi Jones Poplar Trees (Diptych)  Indianapolis (Newfields / Eskenazi Museum) Institutional Racism / Justice"
    }
  },
  {
    "id": "15",
    "artist": {
      "name": "Rachel Kavathe",
      "isAlive": true,
      "website": "rachelkavathe.com",
      "social_media": [
        "@rachelkavathe_studio"
      ]
    },
    "artwork": {
      "title": "McDoel Blooms",
      "description": "",
      "medium": "Street Mural",
      "date": "2025 (Upcoming)",
      "location": "Bloomington (Allen & Fairview Streets)",
      "cause": "Community Connection",
      "imageUrl": "/artist-15.jpg",
      "credit": "Drone Photography by Caleb Poer",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Rachel Kavathe McDoel Blooms  Bloomington (Allen & Fairview Streets) Community Connection"
    }
  },
  {
    "id": "16",
    "artist": {
      "name": "Kassie Woodworth",
      "isAlive": true,
      "website": "kassiewoodworth.com",
      "social_media": [
        "@kassiewoodworth"
      ]
    },
    "artwork": {
      "title": "Together",
      "description": "",
      "medium": "Quilt (Embroidery/Screenprint)",
      "date": "",
      "location": "Indianapolis (Indiana Statehouse)",
      "cause": "Women's Suffrage / Unity",
      "imageUrl": "/artist-16.jpg",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Kassie Woodworth Together  Indianapolis (Indiana Statehouse) Women's Suffrage / Unity"
    }
  },
  {
    "id": "17",
    "artist": {
      "name": "Shelby Nower",
      "isAlive": true,
      "website": "shelbynower.com",
      "social_media": [
        "@shelbynower"
      ]
    },
    "artwork": {
      "title": "nINeteenth",
      "description": "",
      "medium": "Acrylic / Mural",
      "date": "",
      "location": "Indianapolis (Indiana Statehouse)",
      "cause": "Women's Suffrage",
      "imageUrl": "/artist-17.jpg",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Shelby Nower nINeteenth  Indianapolis (Indiana Statehouse) Women's Suffrage"
    }
  },
  {
    "id": "18",
    "artist": {
      "name": "Bonnie Fillenwarth",
      "isAlive": true,
      "website": "bonniefillenwarth.com",
      "social_media": [
        "@bonniefillenwarth"
      ]
    },
    "artwork": {
      "title": "Her Flag (Indiana Stripe)",
      "description": "",
      "medium": "Mixed Media / Textile",
      "date": "2020",
      "location": "Various (Travels Nationally)",
      "cause": "Women's Suffrage",
      "imageUrl": "/artist-18.jpg",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Bonnie Fillenwarth Her Flag (Indiana Stripe)  Various (Travels Nationally) Women's Suffrage"
    }
  },
  {
    "id": "19",
    "artist": {
      "name": "Billy Hoodoo",
      "isAlive": true,
      "website": "18artcollective.com",
      "social_media": [
        "@billyhoodoo"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter C)",
      "description": "",
      "medium": "Street Paint",
      "date": "",
      "location": "Indianapolis (Indiana Ave - Archived)",
      "cause": "Racial Justice",
      "imageUrl": "/artist-19.jpg",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Billy Hoodoo Black Lives Matter Mural (Letter C)  Indianapolis (Indiana Ave - Archived) Racial Justice"
    }
  },
  {
    "id": "20",
    "artist": {
      "name": "Justin Roberts & Shannon Davis-Roberts (Walk the Willow)",
      "isAlive": true,
      "website": "artistsforclimateawareness.org",
      "social_media": [
        "FB: Walk the Willow"
      ]
    },
    "artwork": {
      "title": "Walk the Willow Sculptures",
      "description": "",
      "medium": "Willow Branches / Sculpture",
      "date": "Ongoing",
      "location": "Various (Nature Parks)",
      "cause": "Environmental Connection",
      "imageUrl": "/artist-20.jpg",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Justin Roberts & Shannon Davis-Roberts (Walk the Willow) Walk the Willow Sculptures  Various (Nature Parks) Environmental Connection"
    }
  },
  {
    "id": "21",
    "artist": {
      "name": "Angelica Frausto (Nerdy Brown Kid)",
      "isAlive": true,
      "bio": "Justice for Migrant Communities",
      "website": "nerdybrownkid.com",
      "social_media": [
        "@nerdybrownkid"
      ]
    },
    "artwork": {
      "title": "Justice for Migrant Communities",
      "description": "",
      "medium": "Ink / Digital Illustration",
      "date": "2020",
      "location": "South Bend",
      "cause": "Gender & LGBTQ+ Rights",
      "imageUrl": "/artist-21.jpg",
      "credit": "https://www.creativewildfire.org/poster-portfolio#migrantcommunities",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Angelica Frausto (Nerdy Brown Kid) Justice for Migrant Communities Justice for Migrant Communities South Bend Gender & LGBTQ+ Rights"
    }
  },
  {
    "id": "22",
    "artist": {
      "name": "Beatriz Vasquez",
      "isAlive": true,
      "bio": "In this body of work, she used her papel picado (cut paper) technique to depict ICE detention centers and the border wall.",
      "website": "beatrizvasquezart.com",
      "social_media": [
        "@beatrizvasquezart"
      ]
    },
    "artwork": {
      "title": \"Hope & Loss — A Border Elegy\" (Exhibition)",
      "description": "",
      "medium": "Papel Picado (Cut Paper)",
      "date": "2019",
      "location": "Indianapolis (Cultural Trail/Airport)",
      "cause": "Immigration Rights",
      "imageUrl": "/artist-22.jpg",
      "credit": "https://directory.artsforlearningindiana.org/artists/BeatrizVasquez",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Beatriz Vasquez \"Hope & Loss — A Border Elegy\" (Exhibition) In this body of work, she used her papel picado (cut paper) technique to depict ICE detention centers and the border wall. Indianapolis (Cultural Trail/Airport) Immigration Rights"
    }
  },
  {
    "id": "23",
    "artist": {
      "name": "Nasreen Khan",
      "isAlive": true,
      "website": "nasreen-khan.com",
      "social_media": [
        "@nasreenkhanart"
      ]
    },
    "artwork": {
      "title": "Mother & Child / Breathe",
      "description": "",
      "medium": "Mixed Media",
      "date": "Contemporary",
      "location": "Indianapolis",
      "cause": "Multiculturalism / Migration",
      "imageUrl": "/artist-23.jpg",
      "credit": "https://www.indystar.com/picture-gallery/news/2020/11/21/racial-justice-focus-art-display-indianapolis-central-library/6374181002/",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Nasreen Khan Mother & Child / Breathe  Indianapolis Multiculturalism / Migration"
    }
  },
  {
    "id": "24",
    "artist": {
      "name": "Ashley Nora",
      "isAlive": true,
      "website": "ashleynoraart.com",
      "social_media": [
        "@ashleynoraart"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter R)",
      "description": "",
      "medium": "Street Paint",
      "date": "",
      "location": "Indianapolis (Indiana Ave - Archived)",
      "cause": "Racial Justice / Black Joy",
      "imageUrl": "/artist-24.jpg",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Ashley Nora Black Lives Matter Mural (Letter R)  Indianapolis (Indiana Ave - Archived) Racial Justice / Black Joy"
    }
  },
  {
    "id": "25",
    "artist": {
      "name": "Kenneth Hordge (Fingercreations)",
      "isAlive": true,
      "website": "ganggangculture.com",
      "social_media": [
        "@fingercreations"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Fist)",
      "description": "",
      "medium": "Street Paint / Drywall",
      "date": "",
      "location": "Indianapolis (Indiana Ave - Archived)",
      "cause": "Racial Justice",
      "imageUrl": "/artist-25.jpg",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Kenneth Hordge (Fingercreations) Black Lives Matter Mural (Fist)  Indianapolis (Indiana Ave - Archived) Racial Justice"
    }
  },
  {
    "id": "26",
    "artist": {
      "name": "Robert Indiana",
      "isAlive": false,
      "bio": "The opera itself centers on women’s suffrage via Susan B. Anthony, and Indiana’s designs visually amplify that political history. The most blunt proof is that his design materials include a scene explicitly titled \"Women of America Want To Vote\" with women carrying \"Vote\" signs.",
      "website": "robertindiana.com",
      "social_media": [
        "@robertindiana"
      ]
    },
    "artwork": {
      "title": "The Mother of Us All",
      "description": "",
      "medium": "Lithography / Set Design",
      "date": "1967 / 1976",
      "location": "Various Collections",
      "cause": "Women's Suffrage",
      "imageUrl": "/artist-26.jpg",
      "credit": "https://www.artsy.net/artist-series/robert-indiana-mother-of-us-all",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Robert Indiana The Mother of Us All The opera itself centers on women’s suffrage via Susan B. Anthony, and Indiana’s designs visually amplify that political history. The most blunt proof is that his design materials include a scene explicitly titled \"Women of America Want To Vote\" with women carrying \"Vote\" signs. Various Collections Women's Suffrage"
    }
  },
  {
    "id": "27",
    "artist": {
      "name": "Jeffrey A. Wolin",
      "isAlive": true,
      "bio": "Holocaust memory / anti-erasure activism.",
      "website": "jeffreywolin.com",
      "social_media": [
        "N/A"
      ]
    },
    "artwork": {
      "title": "Written in Memory",
      "description": "",
      "medium": "Photography with Text",
      "date": "1990s",
      "location": "Bloomington (IU / Various)",
      "cause": "Social Justice / Holocaust Memory",
      "imageUrl": "/artist-27.jpg",
      "credit": "https://www.jeffreywolin.com/jakob-schwartz/",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Jeffrey A. Wolin Written in Memory Holocaust memory / anti-erasure activism. Bloomington (IU / Various) Social Justice / Holocaust Memory"
    }
  },
  {
    "id": "28",
    "artist": {
      "name": "Kevin West",
      "isAlive": true,
      "website": "artlafayette.org",
      "social_media": [
        "@kevinwestart"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter K)",
      "description": "",
      "medium": "Street Paint",
      "date": "",
      "location": "Indianapolis (Indiana Ave - Archived)",
      "cause": "Racial Justice / Police Brutality",
      "imageUrl": "/artist-28.jpg",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Kevin West Black Lives Matter Mural (Letter K)  Indianapolis (Indiana Ave - Archived) Racial Justice / Police Brutality"
    }
  },
  {
    "id": "29",
    "artist": {
      "name": "John G. Moore",
      "isAlive": true,
      "website": "blcklst.com",
      "social_media": [
        "@johngmoorejr"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter L)",
      "description": "",
      "medium": "Street Paint",
      "date": "",
      "location": "Indianapolis (Indiana Ave - Archived)",
      "cause": "Racial Justice / Voting Rights",
      "imageUrl": "/artist-29.jpg",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "John G. Moore Black Lives Matter Mural (Letter L)  Indianapolis (Indiana Ave - Archived) Racial Justice / Voting Rights"
    }
  },
  {
    "id": "30",
    "artist": {
      "name": "Ess McKee",
      "isAlive": true,
      "website": "ganggangculture.com/artists/ess-mckee",
      "social_media": [
        "@essmckee"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter S)",
      "description": "",
      "medium": "Street Paint",
      "date": "",
      "location": "Indianapolis (Indiana Ave - Archived)",
      "cause": "Racial Justice",
      "imageUrl": "/artist-30.jpg",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Ess McKee Black Lives Matter Mural (Letter S)  Indianapolis (Indiana Ave - Archived) Racial Justice"
    }
  },
  {
    "id": "31",
    "artist": {
      "name": "Wavy Blayne",
      "isAlive": true,
      "website": "18artcollective.com",
      "social_media": [
        "@wavyblayne"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter M)",
      "description": "",
      "medium": "Street Paint",
      "date": "",
      "location": "Indianapolis (Indiana Ave - Archived)",
      "cause": "Racial Justice",
      "imageUrl": "/artist-31.jpg",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Wavy Blayne Black Lives Matter Mural (Letter M)  Indianapolis (Indiana Ave - Archived) Racial Justice"
    }
  },
  {
    "id": "32",
    "artist": {
      "name": "Harriet Watson",
      "isAlive": true,
      "website": "harrietwatsonart.com",
      "social_media": [
        "@harrietwatsonart"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter A)",
      "description": "",
      "medium": "Street Paint",
      "date": "",
      "location": "Indianapolis (Indiana Ave - Archived)",
      "cause": "Racial Justice",
      "imageUrl": "/artist-32.jpg",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Harriet Watson Black Lives Matter Mural (Letter A)  Indianapolis (Indiana Ave - Archived) Racial Justice"
    }
  },
  {
    "id": "33",
    "artist": {
      "name": "Deonna Craig",
      "isAlive": true,
      "website": "deonnacraigart.com",
      "social_media": [
        "@deonna_craig"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter V)",
      "description": "",
      "medium": "Street Paint",
      "date": "",
      "location": "Indianapolis (Indiana Ave - Archived)",
      "cause": "Racial Justice",
      "imageUrl": "/artist-33.jpg",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Deonna Craig Black Lives Matter Mural (Letter V)  Indianapolis (Indiana Ave - Archived) Racial Justice"
    }
  },
  {
    "id": "34",
    "artist": {
      "name": "Danicia Monét (Danicia Malone)",
      "isAlive": true,
      "website": "https://indianahumanities.org/danicia-monet-malone/",
      "social_media": [
        "@daniciamonet"
      ]
    },
    "artwork": {
      "title": "Black Poetics of Place, BlackSpace Indianapolis (Co-Founder)/ Rokh (Founder)",
      "description": "",
      "medium": "Architecture / Research",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "Racial Justice / Urban Design",
      "imageUrl": "/artist-34.jpg",
      "credit": "https://www.instagram.com/p/DMFqRA_sALO/",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Danicia Monét (Danicia Malone) Black Poetics of Place, BlackSpace Indianapolis (Co-Founder)/ Rokh (Founder)  Indianapolis Racial Justice / Urban Design"
    }
  },
  {
    "id": "35",
    "artist": {
      "name": "Dr. Jarrod Dortch",
      "isAlive": true,
      "website": "digitaleducationhub.community",
      "social_media": [
        "@solfulgardens"
      ]
    },
    "artwork": {
      "title": "Solful Gardens (building family farms)",
      "description": "",
      "medium": "Social Practice / Agriculture",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "Food Justice",
      "imageUrl": "/artist-35.jpg",
      "credit": "https://farmflavor.com/indiana/solful-gardens-offers-community-a-new-source-for-fresh-produce/",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Dr. Jarrod Dortch Solful Gardens (building family farms)  Indianapolis Food Justice"
    }
  },
  {
    "id": "36",
    "artist": {
      "name": "Matthew Cooper",
      "isAlive": true,
      "website": "debutart.com (Rep)",
      "social_media": [
        "N/A"
      ]
    },
    "artwork": {
      "title": "Truth Seekers",
      "description": "",
      "medium": "Mural / Mixed Media",
      "date": "2020",
      "location": "Indianapolis",
      "cause": "Racial Justice",
      "imageUrl": "/artist-36.jpg",
      "credit": "https://www.indystar.com/picture-gallery/news/2020/11/21/racial-justice-focus-art-display-indianapolis-central-library/6374181002/",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Matthew Cooper Truth Seekers  Indianapolis Racial Justice"
    }
  },
  {
    "id": "37",
    "artist": {
      "name": "Amiah Mims",
      "isAlive": true,
      "website": "worksbymimsy.com",
      "social_media": [
        "@worksbymimsy"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter A)",
      "description": "",
      "medium": "Street Paint",
      "date": "",
      "location": "Indianapolis (Indiana Ave - Archived)",
      "cause": "Racial Justice / Resilience",
      "imageUrl": "/artist-37.jpg",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Amiah Mims Black Lives Matter Mural (Letter A)  Indianapolis (Indiana Ave - Archived) Racial Justice / Resilience"
    }
  },
  {
    "id": "38",
    "artist": {
      "name": "Rebecca Robinson",
      "isAlive": true,
      "website": "psnob.com",
      "social_media": [
        "@psnob"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter L)",
      "description": "",
      "medium": "Street Paint / Concrete",
      "date": "",
      "location": "Indianapolis (Indiana Ave - Archived)",
      "cause": "Racial Justice",
      "imageUrl": "/artist-38.jpg",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Rebecca Robinson Black Lives Matter Mural (Letter L)  Indianapolis (Indiana Ave - Archived) Racial Justice"
    }
  },
  {
    "id": "39",
    "artist": {
      "name": "LaShawnda Crowe Storm",
      "isAlive": true,
      "bio": "They are Co-Founder of The RECLAIM Project with Phyllis Boyd.",
      "website": "lashawndacrowestorm.com",
      "social_media": [
        "@lashawndacrowestorm"
      ]
    },
    "artwork": {
      "title": "Led the The Lynch Quilts Project (Quilt I: Her Name Was Laura Nelson)",
      "description": "",
      "medium": "Quilting / Community Art",
      "date": "Ongoing (Since 2000s)",
      "location": "Indianapolis",
      "cause": "Racial Justice / History",
      "imageUrl": "/artist-39.jpg",
      "credit": "https://indynow2010ls.wixsite.com/website-5/our-story",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "LaShawnda Crowe Storm Led the The Lynch Quilts Project (Quilt I: Her Name Was Laura Nelson) They are Co-Founder of The RECLAIM Project with Phyllis Boyd. Indianapolis Racial Justice / History"
    }
  },
  {
    "id": "40",
    "artist": {
      "name": "Anila Quayyum Agha",
      "isAlive": true,
      "bio": "Co-exsistance in sacred spaces",
      "website": "anilaagha.com",
      "social_media": [
        "@anila_quayyum_agha"
      ]
    },
    "artwork": {
      "title": "Intersections",
      "description": "",
      "medium": "Laser-cut Steel / Light / Shadow",
      "date": "2014",
      "location": "Indianapolis / Global",
      "cause": "Gender & Cultural Intersectionality",
      "imageUrl": "/artist-40.jpg",
      "credit": "https://www.anilaagha.com/intersections",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Anila Quayyum Agha Intersections Co-exsistance in sacred spaces Indianapolis / Global Gender & Cultural Intersectionality"
    }
  },
  {
    "id": "41",
    "artist": {
      "name": "Mari Evans",
      "isAlive": false,
      "bio": "Also started the show \"The Black Experiance\" ",
      "website": "marievans.org (Archived)",
      "social_media": [
        "N/A"
      ]
    },
    "artwork": {
      "title": "I Am A Black Woman",
      "description": "",
      "medium": "Poetry / Literature",
      "date": "1970",
      "location": "Indianapolis (Mural of her on Mass Ave)",
      "cause": "Civil Rights / Black Arts Movement",
      "imageUrl": "/artist-41.jpg",
      "credit": "https://www.poemhunter.com/poem/i-am-a-black-woman/#google_vignette",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Mari Evans I Am A Black Woman Also started the show \"The Black Experiance\"  Indianapolis (Mural of her on Mass Ave) Civil Rights / Black Arts Movement"
    }
  },
  {
    "id": "42",
    "artist": {
      "name": "Etheridge Knight",
      "isAlive": false,
      "bio": "Humanizing Inmates was his key activism ",
      "website": "poetryfoundation.org",
      "social_media": [
        "N/A"
      ]
    },
    "artwork": {
      "title": "Poems from Prison",
      "description": "",
      "medium": "Poetry",
      "date": "1968",
      "location": "Indianapolis (Buried in Crown Hill)",
      "cause": "Prison Reform / Black Arts Movement",
      "imageUrl": "/artist-42.jpg",
      "credit": "https://www.poetryfoundation.org/poets/etheridge-knight",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Etheridge Knight Poems from Prison Humanizing Inmates was his key activism  Indianapolis (Buried in Crown Hill) Prison Reform / Black Arts Movement"
    }
  },
  {
    "id": "43",
    "artist": {
      "name": "T.C. Steele",
      "isAlive": false,
      "bio": "T.C. Steele’s \"activism\" was the visual argument for conservation. He didn't write laws; he painted the reason why the laws were needed. Steele (and the artists who followed him) painted the hills, the haze, and the changing seasons with such reverence that he completely rebranded the region. *Key in Brown County, Indiana's Reframing \"Worthless\" Land as \"Priceless\" Art.",
      "website": "tcsteele.org",
      "social_media": [
        "N/A"
      ]
    },
    "artwork": {
      "title": "House of the Singing Winds",
      "description": "",
      "medium": "Oil Painting",
      "date": "Late 1800s/Early 1900s",
      "location": "Brown County (Historic Site)",
      "cause": "Nature Conservation",
      "imageUrl": "/artist-43.jpg",
      "credit": "https://trail.tcsteele.org/singing-winds/",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "T.C. Steele House of the Singing Winds T.C. Steele’s \"activism\" was the visual argument for conservation. He didn't write laws; he painted the reason why the laws were needed. Steele (and the artists who followed him) painted the hills, the haze, and the changing seasons with such reverence that he completely rebranded the region. *Key in Brown County, Indiana's Reframing \"Worthless\" Land as \"Priceless\" Art. Brown County (Historic Site) Nature Conservation"
    }
  },
  {
    "id": "44",
    "artist": {
      "name": "Teresa Dunn",
      "isAlive": true,
      "bio": "Visibility in the \"Flyover\" States - activism through identity",
      "social_media": [
        "N/A"
      ]
    },
    "artwork": {
      "title": "US",
      "description": "",
      "medium": "Mixed Media",
      "date": "Contemporary",
      "location": "Indianapolis",
      "cause": "Community Arts",
      "imageUrl": "/artist-44.jpg",
      "credit": "https://teresa-dunn.com/about",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Teresa Dunn US Visibility in the \"Flyover\" States - activism through identity Indianapolis Community Arts"
    }
  },
  {
    "id": "45",
    "artist": {
      "name": "Boxx the Artist",
      "isAlive": true,
      "bio": "social activist for black women leaders that are dark skinned",
      "website": "ganggangculture.com/artists/bbox",
      "social_media": [
        "@boxxtheartist"
      ]
    },
    "artwork": {
      "title": "The Women In Between",
      "description": "",
      "medium": "Multimedia / Portraiture",
      "date": "2025",
      "location": "Indianapolis (Harrison Center)",
      "cause": "Black Women's Stories",
      "imageUrl": "/artist-45.jpg",
      "credit": "https://www.indystar.com/story/entertainment/arts/2024/02/02/art-and-soul-indianapolis-boxx-the-artist-has-built-a-business-with-talent-and-entrepreneurship/72370950007/?gnt-cfr=1&gca-cat=p&gca-uir=true&gca-epti=z115450d00----v115450d--61--b--61--&gca-ft=47&gca-ds=sophi",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Boxx the Artist The Women In Between social activist for black women leaders that are dark skinned Indianapolis (Harrison Center) Black Women's Stories"
    }
  },
  {
    "id": "46",
    "artist": {
      "name": "Shamira Wilson",
      "isAlive": true,
      "bio": "Her activism isn't just in the painting; it is in the process. She manages a research plot at White River State Park where she grows over 140 Okra plants.The \"Closed Loop\": She doesn't just buy canvas and paint: She harvests the fiber from the Okra stalks to weave her own textiles. She uses the flowers to make her own dyes/pigments. She saves the seeds to give away to the community. Why it's Impactful: This is Environmental Justice. In a world of fast fashion and toxic art materials, she is proving that an artist can be self-sustaining. She is modeling a \"non-extractive\" relationship with the earth.",
      "website": "shamirawilson.com",
      "social_media": [
        "@shamirawilson"
      ]
    },
    "artwork": {
      "title": "Ethnobotany Series",
      "description": "",
      "medium": "Painting / Textiles",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "Environmental Justice",
      "imageUrl": "/artist-46.jpg",
      "credit": "https://shamirawilson.com/about",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Shamira Wilson Ethnobotany Series Her activism isn't just in the painting; it is in the process. She manages a research plot at White River State Park where she grows over 140 Okra plants.The \"Closed Loop\": She doesn't just buy canvas and paint: She harvests the fiber from the Okra stalks to weave her own textiles. She uses the flowers to make her own dyes/pigments. She saves the seeds to give away to the community. Why it's Impactful: This is Environmental Justice. In a world of fast fashion and toxic art materials, she is proving that an artist can be self-sustaining. She is modeling a \"non-extractive\" relationship with the earth. Indianapolis Environmental Justice"
    }
  },
  {
    "id": "47",
    "artist": {
      "name": "Brose Partington",
      "isAlive": true,
      "bio": "This piece was part of a specific campaign (\"The Public Collection\") to eradicate \"book deserts\" in Indianapolis. It didn't just complain about lack of access to education; it fixed it by distributing free books to thousands of people.",
      "website": "brosepartington.com",
      "social_media": [
        "@brosepartington"
      ]
    },
    "artwork": {
      "title": "Harvesting Knowledge",
      "description": "",
      "medium": "Kinetic Sculpture",
      "date": "2004",
      "location": "Indianapolis (IUPUI Campus)",
      "cause": "Man vs. Nature / Motion",
      "imageUrl": "/artist-47.jpg",
      "credit": "https://www.thepubliccollection.org/artists/brose-partington/",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Brose Partington Harvesting Knowledge This piece was part of a specific campaign (\"The Public Collection\") to eradicate \"book deserts\" in Indianapolis. It didn't just complain about lack of access to education; it fixed it by distributing free books to thousands of people. Indianapolis (IUPUI Campus) Man vs. Nature / Motion"
    }
  },
  {
    "id": "48",
    "artist": {
      "name": "Tiffany Black",
      "isAlive": true,
      "bio": "The date \"August 15\" is painted in the center of the mural. For the world, that date was just a headline. For the people painting it, it was the day their lives ended and restarted. The mural serves as a primary historical document created by the witnesses themselves, ensuring their story wasn't erased or rewritten by American media.",
      "website": "tblack.co",
      "social_media": [
        "@tiffanyblackart"
      ]
    },
    "artwork": {
      "title": "August 15 (Mural)",
      "description": "",
      "medium": "Mural / Terrazzo",
      "date": "2021",
      "location": "Franklin / Camp Atterbury",
      "cause": "Refugee Support / Social Justice",
      "imageUrl": "/artist-48.jpg",
      "credit": "https://www.tblack.co/august15",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Tiffany Black August 15 (Mural) The date \"August 15\" is painted in the center of the mural. For the world, that date was just a headline. For the people painting it, it was the day their lives ended and restarted. The mural serves as a primary historical document created by the witnesses themselves, ensuring their story wasn't erased or rewritten by American media. Franklin / Camp Atterbury Refugee Support / Social Justice"
    }
  },
  {
    "id": "49",
    "artist": {
      "name": "Artur Silva/ Kyle Long",
      "isAlive": true,
      "bio": "Culture War: \"Decolonizing the Midwest through music and visual art. Remapping Indiana history to include the voices you weren't taught in school.\"",
      "website": "artursilva.com",
      "social_media": [
        "@artur_silva"
      ]
    },
    "artwork": {
      "title": "Cultural Cannibal",
      "description": "",
      "medium": "Digital Print / Mural",
      "date": "2022",
      "location": "Indianapolis (Gainbridge Fieldhouse)",
      "cause": "Cultural Critique / History",
      "imageUrl": "/artist-49.jpg",
      "credit": "https://culturalcannibals.wordpress.com/about/",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Artur Silva/ Kyle Long Cultural Cannibal Culture War: \"Decolonizing the Midwest through music and visual art. Remapping Indiana history to include the voices you weren't taught in school.\" Indianapolis (Gainbridge Fieldhouse) Cultural Critique / History"
    }
  },
  {
    "id": "50",
    "artist": {
      "name": "Mary Miss",
      "isAlive": true,
      "bio": "it argued that \"nature is essential infrastructure.\" It helped pave the way for current efforts in Indianapolis to clean up and redevelop the White River.",
      "social_media": [
        "@cityaslivinglab"
      ]
    },
    "artwork": {
      "title": "FLOW: Can You See the River?",
      "description": "",
      "medium": "Mirrors / Markers",
      "date": "2011",
      "location": "Indianapolis (White River)",
      "cause": "Environmental Awareness (Water)",
      "imageUrl": "/artist-50.jpg",
      "credit": "https://www.cityaslivinglab.org/flow",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Mary Miss FLOW: Can You See the River? it argued that \"nature is essential infrastructure.\" It helped pave the way for current efforts in Indianapolis to clean up and redevelop the White River. Indianapolis (White River) Environmental Awareness (Water)"
    }
  },
  {
    "id": "51",
    "artist": {
      "name": "Shawn Michael Warren",
      "isAlive": true,
      "bio": "restorative justice",
      "website": "shawnmichaelwarren.com",
      "social_media": [
        "@shawnmichaelwarren"
      ]
    },
    "artwork": {
      "title": \"The World's Fastest\" (Mural of Marshall \"Major\" Taylor)",
      "description": "",
      "medium": "Oil / Mural",
      "date": "2020s",
      "location": "Indianapolis (Work often travels)",
      "cause": "Racial Justice / History",
      "imageUrl": "/artist-51.jpg",
      "credit": "https://www.shawnmichaelwarren.com/murals",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Shawn Michael Warren \"The World's Fastest\" (Mural of Marshall \"Major\" Taylor) restorative justice Indianapolis (Work often travels) Racial Justice / History"
    }
  },
  {
    "id": "52",
    "artist": {
      "name": "Pamela Bliss",
      "isAlive": true,
      "bio": "Pamela has many important murals. This is the best example of activism. Key to do fight against black history earasure",
      "website": "pamelabliss.gallery",
      "social_media": [
        "FB: Pamela Bliss"
      ]
    },
    "artwork": {
      "title": "Eva Kor Mural",
      "description": "",
      "medium": "Mural",
      "date": "2018",
      "location": "Indianapolis (Downtown)",
      "cause": "Civic Pride / History",
      "imageUrl": "/artist-52.jpg",
      "credit": "https://www.indystar.com/story/news/local/indianapolis/2020/10/12/larger-than-life-mural-holocaust-survivor-eva-kor-coming-downtown/5936019002/",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Pamela Bliss Eva Kor Mural Pamela has many important murals. This is the best example of activism. Key to do fight against black history earasure Indianapolis (Downtown) Civic Pride / History"
    }
  },
  {
    "id": "53",
    "artist": {
      "name": "D. Del Reverda-Jennings",
      "isAlive": true,
      "bio": "D. Del Reverda-Jennings’ activism is Structural.She built a pipeline (FLAVA FRESH !) to ensure that hundreds of other artists could follow her.",
      "website": "indyarts.org/artist/d-del-reverda-jennings",
      "social_media": [
        "@ddelreverdajennings"
      ]
    },
    "artwork": {
      "title": "FLAVA FRESH",
      "description": "",
      "medium": "Sculpture / Curation",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "Underrepresented Artists",
      "imageUrl": "/artist-53.jpg",
      "credit": "https://artsmidwest.org/stories/indiana-artist-champions-spaces-for-underrepresented-creatives/",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "D. Del Reverda-Jennings FLAVA FRESH D. Del Reverda-Jennings’ activism is Structural.She built a pipeline (FLAVA FRESH !) to ensure that hundreds of other artists could follow her. Indianapolis Underrepresented Artists"
    }
  },
  {
    "id": "54",
    "artist": {
      "name": "Lobyn Hamilton (Walter “Lobyn” Hamilton)",
      "isAlive": true,
      "bio": "Based on your interest in how art can be used to build actual infrastructure for a community (like Phyllis Boyd's parks or Lobyn Hamilton's real estate), the \"top form\" of art activism that Lobyn Hamilton practices is Social Practice Art—specifically a project called the B-SIDE Creative Campus. While he is famous for his vinyl portraits, he considers his real estate development to be an extension of his art practice. Here is the breakdown of his \"top form\" (the campus) and his \"top piece\" (the exhibition that defines his philosophy). 1. The \"Top Form\" of Activism: B-SIDE Creative Campus What it is: This is not a painting or a sculpture; it is a neighborhood revitalization project in the Brookside area of Indianapolis (where Hamilton grew up). The Activist Act: Hamilton buys blighted, abandoned properties (like old churches or storefronts) and renovates them into subsidized live/work studios for other artists. Why it is Activism: This is Anti-Gentrification Activism. The Problem: Usually, when artists make a neighborhood \"cool,\" developers move in, raise the rent, and kick the artists out. The Solution: By owning the land and controlling the rent, Hamilton creates a \"safe zone\" (what he calls \"Creative Care\") where local Black artists can afford to stay and build wealth in their own community. He is using art proceeds to buy back the block.",
      "website": "lobynhamilton.com",
      "social_media": [
        "@lobynhamilton"
      ]
    },
    "artwork": {
      "title": "What I Have Is What You Have",
      "description": "",
      "medium": "Assemblage / Collage",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "Music History / Culture",
      "imageUrl": "/artist-54.jpg",
      "credit": "https://www.instagram.com/p/C7E8rv4OuhR/",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Lobyn Hamilton (Walter \"Lobyn\" Hamilton) What I Have Is What You Have Based on your interest in how art can be used to build actual infrastructure for a community (like Phyllis Boyd's parks or Lobyn Hamilton's real estate), the \"top form\" of art activism that Lobyn Hamilton practices is Social Practice Art—specifically a project called the B-SIDE Creative Campus. While he is famous for his vinyl portraits, he considers his real estate development to be an extension of his art practice. Here is the breakdown of his \"top form\" (the campus) and his \"top piece\" (the exhibition that defines his philosophy). 1. The \"Top Form\" of Activism: B-SIDE Creative Campus What it is: This is not a painting or a sculpture; it is a neighborhood revitalization project in the Brookside area of Indianapolis (where Hamilton grew up). The Activist Act: Hamilton buys blighted, abandoned properties (like old churches or storefronts) and renovates them into subsidized live/work studios for other artists. Why it is Activism: This is Anti-Gentrification Activism. The Problem: Usually, when artists make a neighborhood \"cool,\" developers move in, raise the rent, and kick the artists out. The Solution: By owning the land and controlling the rent, Hamilton creates a \"safe zone\" (what he calls \"Creative Care\") where local Black artists can afford to stay and build wealth in their own community. He is using art proceeds to buy back the block. Indianapolis Music History / Culture"
    }
  },
  {
    "id": "55",
    "artist": {
      "name": "Kyng Rhodes (Nathaniel Rhodes)",
      "isAlive": true,
      "website": "kyngrhodes.com",
      "social_media": [
        "@kyngrhodes"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter B)",
      "description": "",
      "medium": "Street Paint",
      "date": "August 2020",
      "location": "Indianapolis (Indiana Ave - Archived)",
      "cause": "Racial Justice",
      "imageUrl": "/artist-55.jpg",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Kyng Rhodes (Nathaniel Rhodes) Black Lives Matter Mural (Letter B)  Indianapolis (Indiana Ave - Archived) Racial Justice"
    }
  },
  {
    "id": "56",
    "artist": {
      "name": "Phyllis Boyd",
      "isAlive": true,
      "website": "ganggangculture.com/artists/phyllis-viola-boyd",
      "social_media": [
        "@phyllisviolaboyd"
      ]
    },
    "artwork": {
      "title": "RECLAIM Project",
      "description": "",
      "medium": "Landscape Arch. / Social Practice",
      "date": "Ongoing",
      "location": "Indianapolis (Riverside / various parks)",
      "cause": "Environmental Justice / Urban Renewal",
      "imageUrl": "/artist-56.jpg",
      "credit": "https://indynow2010ls.wixsite.com/website-5/projects",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Phyllis Boyd RECLAIM Project  Indianapolis (Riverside / various parks) Environmental Justice / Urban Renewal"
    }
  },
  {
    "id": "57",
    "artist": {
      "name": "Kevin Wilson",
      "isAlive": true,
      "website": "saatchiart.com/kevinjameswilson",
      "social_media": [
        "Kevin James Wilson"
      ]
    },
    "artwork": {
      "title": "Kings of the Castle",
      "description": "",
      "medium": "Mural / Illustration",
      "date": "2021",
      "location": "Indianapolis (Airport / Downtown)",
      "cause": "Black History / Sports Legacy",
      "imageUrl": "/artist-57.jpg",
      "credit": "https://www.blackartinamerica.com/products/wilson-kevin-the-kings-of-the-castle",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Kevin Wilson Kings of the Castle  Indianapolis (Airport / Downtown) Black History / Sports Legacy"
    }
  },
  {
    "id": "58",
    "artist": {
      "name": "Rae Parker",
      "isAlive": true,
      "website": "raeparkerart.com",
      "social_media": [
        "@rpartdesigns"
      ]
    },
    "artwork": {
      "title": "No Shade (Tribute to Black Queer Joy)",
      "description": "",
      "medium": "Multimedia",
      "date": "2023",
      "location": "Indianapolis (Newfields)",
      "cause": "LGBTQ+ Rights / Black Joy",
      "imageUrl": "/artist-58.jpg",
      "credit": "raeparkerart.com",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Rae Parker No Shade (Tribute to Black Queer Joy)  Indianapolis (Newfields) LGBTQ+ Rights / Black Joy"
    }
  },
  {
    "id": "59",
    "artist": {
      "name": "Fingers (Graffiti Artist)",
      "isAlive": true,
      "website": "N/A",
      "social_media": [
        "@fingercreations"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Fist)",
      "description": "",
      "medium": "Street Paint / Drywall",
      "date": "August 2020",
      "location": "Indianapolis (Indiana Ave)",
      "cause": "Racial Justice",
      "imageUrl": "/artist-59.jpg",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Fingers (Graffiti Artist) Black Lives Matter Mural (Fist)  Indianapolis (Indiana Ave) Racial Justice"
    }
  },
  {
    "id": "60",
    "artist": {
      "name": "Cierra Johnson",
      "isAlive": true,
      "website": "cjcrtv.com",
      "social_media": [
        "@cjcrtv"
      ]
    },
    "artwork": {
      "title": "Storytelling Drawing Sessions / Making Martindale",
      "description": "",
      "medium": "Illustration / Advocacy",
      "date": "2022",
      "location": "Indianapolis",
      "cause": "Neighborhood Preservation / Justice",
      "imageUrl": "/artist-60.jpg",
      "credit": "https://cjcrtv.com/storytelling-drawing-sessions   (anti-erasure)",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Cierra Johnson Storytelling Drawing Sessions / Making Martindale  Indianapolis Neighborhood Preservation / Justice"
    }
  },
  {
    "id": "61",
    "artist": {
      "name": "Kwazar Martin",
      "isAlive": true,
      "website": "kwazarmartinart.com",
      "social_media": [
        "@kwazarmartin"
      ]
    },
    "artwork": {
      "title": "I Can't Breathe",
      "description": "",
      "medium": "Mural",
      "date": "2024",
      "location": "Indianapolis (38th & College)",
      "cause": "Racial Justice",
      "imageUrl": "/artist-61.jpg",
      "credit": "https://indyencyclopedia.org/exhibit/i-cant-breathe/",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Kwazar Martin I Can't Breathe  Indianapolis (38th & College) Racial Justice"
    }
  },
  {
    "id": "62",
    "artist": {
      "name": "Shane Young (FITZ)",
      "isAlive": true,
      "website": "artbyfitz.org",
      "social_media": [
        "@artbyfitz"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter T)",
      "description": "",
      "medium": "Street Paint",
      "date": "August 2020",
      "location": "Indianapolis (Indiana Ave)",
      "cause": "Racial Justice",
      "imageUrl": "/artist-62.jpg",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Shane Young (FITZ) Black Lives Matter Mural (Letter T)  Indianapolis (Indiana Ave) Racial Justice"
    }
  },
  {
    "id": "63",
    "artist": {
      "name": "Lisa Sears",
      "isAlive": true,
      "website": "lisasearsart.com",
      "social_media": [
        "@lisasearsart"
      ]
    },
    "artwork": {
      "title": "Principio Obstate (Statue of Liberty)",
      "description": "",
      "medium": "Acrylic / Digital Layering",
      "date": "2017",
      "location": "Indianapolis",
      "cause": "Democracy / Feminism",
      "imageUrl": "/artist-63.jpg",
      "credit": "https://www.lisasearsart.com/principioobstate.html",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Lisa Sears Principio Obstate (Statue of Liberty)  Indianapolis Democracy / Feminism"
    }
  },
  {
    "id": "64",
    "artist": {
      "name": "Megan Jefferson",
      "isAlive": true,
      "website": "indyarts.org/artist/megan-jefferson",
      "social_media": [
        "@meganjeffersonart"
      ]
    },
    "artwork": {
      "title": "Dept of Public Words - Public Mural Project",
      "description": "",
      "medium": "Oil / Mural",
      "date": "Ongoing",
      "location": "Indianapolis (Edington Gallery)",
      "cause": "Mental Health / Color Therapy",
      "imageUrl": "/artist-64.jpg",
      "credit": "https://www.jeffersonartstudio.com/murals",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Megan Jefferson Dept of Public Words - Public Mural Project  Indianapolis (Edington Gallery) Mental Health / Color Therapy"
    }
  },
  {
    "id": "65",
    "artist": {
      "name": "Lauren Kussro",
      "isAlive": true,
      "bio": "The Piece: This is a series of six massive \"flags\" (some over 15 feet wide) made entirely from thousands of jagged shards of broken vinyl records and album covers.",
      "website": "laurenkussro.com",
      "social_media": [
        "@laurenkussro"
      ]
    },
    "artwork": {
      "title": "Our Ocean Installation",
      "description": "",
      "medium": "Screenprint / Installation",
      "date": "2024",
      "location": "Houston (Formerly Indy)",
      "cause": "Environmental Fragility",
      "imageUrl": "/artist-65.jpg",
      "credit": "https://www.laurenkussro.com/",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Lauren Kussro Our Ocean Installation The Piece: This is a series of six massive \"flags\" (some over 15 feet wide) made entirely from thousands of jagged shards of broken vinyl records and album covers. Houston (Formerly Indy) Environmental Fragility"
    }
  },
  {
    "id": "66",
    "artist": {
      "name": "Gautam Rao",
      "isAlive": true,
      "bio": "The Activism: This is Cultural Memory Activism.",
      "website": "gautamraoart.net",
      "social_media": [
        "@gautamrao"
      ]
    },
    "artwork": {
      "title": "Indians, Alphabetically",
      "description": "",
      "medium": "Design / Public Art",
      "date": "Ongoing",
      "location": "Indianapolis (Butler Univ)",
      "cause": "Play / Inclusive Design",
      "imageUrl": "/artist-66.jpg",
      "credit": "gautamraoart.net",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Gautam Rao Indians, Alphabetically The Activism: This is Cultural Memory Activism. Indianapolis (Butler Univ) Play / Inclusive Design"
    }
  },
  {
    "id": "67",
    "artist": {
      "name": "Casey Roberts",
      "isAlive": true,
      "bio": "Visualizing Shared History: Hamilton uses albums from the 70s, 80s, and 90s to trigger a collective memory. He argues that music is the one thing that truly connects us across racial and political lines.",
      "website": "wildernessoverload.com",
      "social_media": [
        "@caseyrobertsart"
      ]
    },
    "artwork": {
      "title": "Cyanotype Nature Series (a soft spot in the sea ice)",
      "description": "",
      "medium": "Cyanotype / Chemical",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "Nature Conservation / Surrealism",
      "imageUrl": "/artist-67.jpg",
      "credit": "https://www.artsy.net/artwork/casey-roberts-a-soft-spot-in-the-sea-ice",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Casey Roberts Cyanotype Nature Series (a soft spot in the sea ice) Visualizing Shared History: Hamilton uses albums from the 70s, 80s, and 90s to trigger a collective memory. He argues that music is the one thing that truly connects us across racial and political lines. Indianapolis Nature Conservation / Surrealism"
    }
  },
  {
    "id": "68",
    "artist": {
      "name": "Quincy Owens",
      "isAlive": true,
      "website": "owensandcrawley.com",
      "social_media": [
        "@quincyowens"
      ]
    },
    "artwork": {
      "title": "Fissure at the Athenaeum",
      "description": "",
      "medium": "Sculpture / Light",
      "date": "Ongoing",
      "location": "Indianapolis (Various Sites)",
      "cause": "Public Art Access / Science",
      "imageUrl": "/artist-68.jpg",
      "credit": "https://www.owensandcrawley.com/fissure.html",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Quincy Owens Fissure at the Athenaeum  Indianapolis (Various Sites) Public Art Access / Science"
    }
  },
  {
    "id": "69",
    "artist": {
      "name": "Luke Crawley",
      "isAlive": true,
      "bio": "The \"Flag\" Metaphor: By turning records (pop culture) into Flags (national symbols), he is arguing that culture is our true country. He creates a \"Hip Hop Flag,\" a \"Rock Flag,\" etc., forcing the viewer to ask: Which flag do I pledge allegiance to?",
      "website": "owensandcrawley.com",
      "social_media": [
        "@lukecrawley"
      ]
    },
    "artwork": {
      "title": "Up in Air",
      "description": "",
      "medium": "Sculpture / Sound",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "STEAM Education / Physics",
      "imageUrl": "/artist-69.jpg",
      "credit": "https://artinoddplaces.org/artists/crawley-luke/",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Luke Crawley Up in Air The \"Flag\" Metaphor: By turning records (pop culture) into Flags (national symbols), he is arguing that culture is our true country. He creates a \"Hip Hop Flag,\" a \"Rock Flag,\" etc., forcing the viewer to ask: Which flag do I pledge allegiance to? Indianapolis STEAM Education / Physics"
    }
  },
  {
    "id": "70",
    "artist": {
      "name": "Dale Enochs",
      "isAlive": true,
      "bio": "While it is not \"protest art\" in the traditional sense (it doesn't explicitly protest a policy or event), it functions as activism through cultural reclamation, visibility, and decolonization. About Indigneous people",
      "website": "daleenochs.com",
      "social_media": [
        "@daleenochs"
      ]
    },
    "artwork": {
      "title": "Elemental Indiana",
      "description": "",
      "medium": "Sculpture",
      "date": "2008",
      "location": "Indianapolis (Airport)",
      "cause": "Indiana Geology / History",
      "imageUrl": "/artist-70.jpg",
      "credit": "https://www.daleenochs.com/julien-clarke",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Dale Enochs Elemental Indiana While it is not \"protest art\" in the traditional sense (it doesn't explicitly protest a policy or event), it functions as activism through cultural reclamation, visibility, and decolonization. About Indigneous people Indianapolis (Airport) Indiana Geology / History"
    }
  },
  {
    "id": "71",
    "artist": {
      "name": "Brian McCutcheon",
      "isAlive": true,
      "bio": "While Brian McCutcheon's NDY sculpture began as a branding tool, it functioned as civic activism. It provided a physical platform for residents to visually protest the RFRA controversy and reassert an identity of inclusivity during a political crisis.",
      "website": "brianmccutcheon.com",
      "social_media": [
        "@brianmccutcheon"
      ]
    },
    "artwork": {
      "title": "NDY",
      "description": "",
      "medium": "Sculpture / Fabrication",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "LGBTQ+ ",
      "imageUrl": "/artist-71.jpg",
      "credit": "https://www.ignitionarts.com/projects/ndy",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Brian McCutcheon NDY While Brian McCutcheon's NDY sculpture began as a branding tool, it functioned as civic activism. It provided a physical platform for residents to visually protest the RFRA controversy and reassert an identity of inclusivity during a political crisis. Indianapolis LGBTQ+ "
    }
  },
  {
    "id": "72",
    "artist": {
      "name": "Katrina Murray",
      "isAlive": true,
      "website": "katrinajmurray.com",
      "social_media": [
        "@katrinajmurray"
      ]
    },
    "artwork": {
      "title": "This Is Us",
      "description": "",
      "medium": "Conceptual Installation",
      "date": "2022",
      "location": "Indianapolis",
      "cause": "Human Condition / Bias",
      "imageUrl": "/artist-72.jpg",
      "credit": "https://katrinajmurray.com/pdfs.html",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Katrina Murray This Is Us  Indianapolis Human Condition / Bias"
    }
  },
  {
    "id": "73",
    "artist": {
      "name": "India Cruse-Griffin",
      "isAlive": true,
      "website": "indiacruse-griffin.org",
      "social_media": [
        "@indiacrusegriffin"
      ]
    },
    "artwork": {
      "title": "Hope Skip and Jump",
      "description": "",
      "medium": "Collage / Mixed Media",
      "date": "2012",
      "location": "Indianapolis (Eskenazi Health)",
      "cause": "Black Experience / Family",
      "imageUrl": "/artist-73.jpg",
      "credit": "https://publicartarchive.org/art/Hope-Skip-and-Jump/ca85f4e7",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "India Cruse-Griffin Hope Skip and Jump  Indianapolis (Eskenazi Health) Black Experience / Family"
    }
  }
]
