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
      "bio": "The Eighteen Art Collective is a group of 18 Indianapolis-based Black artists who came together in 2020 to paint the 'Black Lives Matter' mural on Indiana Avenue. They have since formalized as a collective to advocate for equity, civic engagement, and the support of Black creatives in the city.",
      "website": "18artcollective.com",
      "social_media": [
        "IG: @thexviii"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Street Mural",
      "description": "Racial Justice / BLM",
      "medium": "Street Paint",
      "date": "Aug. 2020",
      "location": "Indianapolis (Indiana Avenue)",
      "cause": "Racial Justice / BLM",
      "imageUrl": "/Images/18ArtCollective_BlackLivesMatterStreetMural.jpg",
      "categories": [],
      "searchQuery": "The Eighteen Art Collective Black Lives Matter Street Mural Indianapolis (Indiana Avenue) Racial Justice / BLM"
    }
  },
  {
    "id": "2",
    "artist": {
      "name": "Gary Gee",
      "isAlive": true,
      "bio": "Gary Gee is a multidisciplinary artist from Indianapolis who bridges the gap between street art and fine art. His work often incorporates ceramics, mixed media, and bold graphic styles to explore themes of urban life, hip-hop culture, and social justice.",
      "website": "artbygarygee.com",
      "social_media": [
        "IG: @originalgarygee"
      ]
    },
    "artwork": {
      "title": "We the People (Part of Murals for Racial Justice)",
      "description": "Civil Rights / Police Brutality",
      "medium": "Acrylic / Spray Paint",
      "date": "Aug. 2020",
      "location": "Indianapolis (Orig: 32 E. Washington; Archived: Ind. State Museum)",
      "cause": "Civil Rights / Police Brutality",
      "imageUrl": "/Images/GaryGee_WeThePeople .png",
      "credit": "The We The People mural installation in place at 32 E. Washington Street, 2020 (Courtesy of Indy Arts Council)",
      "categories": [],
      "searchQuery": "Gary Gee We the People (Part of Murals for Racial Justice) Indianapolis (Orig: 32 E. Washington; Archived: Ind. State Museum) Civil Rights / Police Brutality"
    }
  },
  {
    "id": "3",
    "artist": {
      "name": "Mechi Shakur (Demetrius Green)",
      "isAlive": true,
      "bio": "Mechi Shakur (Demetrius Green) is a self-taught visual artist whose work is characterized by raw emotion and intense social commentary. He often uses his art to challenge comfort zones and confront viewers with the harsh realities of racial violence and systemic oppression.",
      "website": "ganggangculture.com/artists/mechi-shakur",
      "social_media": [
        "IG: @mechishakur"
      ]
    },
    "artwork": {
      "title": "Blkkk Lives Don't Matter (Part of Murals for Racial Justice)",
      "description": "Racial Justice",
      "medium": "Acrylic",
      "date": "Aug. 2020",
      "location": "Indianapolis (Orig: Downtown; Archived: Ind. State Museum/Library)",
      "cause": "Racial Justice",
      "imageUrl": "/Images/DemetriusGreen_BLKKK LivesDon_tMatter.jpg",
      "categories": [],
      "searchQuery": "Mechi Shakur (Demetrius Green) Blkkk Lives Don't Matter (Part of Murals for Racial Justice) Indianapolis (Orig: Downtown; Archived: Ind. State Museum/Library) Racial Justice"
    }
  },
  {
    "id": "4",
    "artist": {
      "name": "Israel Solomon",
      "isAlive": true,
      "bio": "Israel Solomon is a visual artist and educator known for his geometric, cubist-inspired style and vibrant use of color. His work frequently focuses on community, family, and the Black experience, often creating portraits that elevate everyday people to icons.",
      "website": "israelsolomonart.com",
      "social_media": [
        "IG: @israelsoloart"
      ]
    },
    "artwork": {
      "title": "American Duality (Part of Art & Activism exhibit)",
      "description": "Racial Justice / Police Brutality",
      "medium": "Acrylic",
      "date": "Aug. 2020",
      "location": "Indianapolis (Orig: 140 W. Washington; Archived: Ind. State Museum)",
      "cause": "Racial Justice / Police Brutality",
      "imageUrl": "/Images/IsraelSolomon_AmericanDuality.png",
      "categories": [],
      "searchQuery": "Israel Solomon American Duality (Part of Art & Activism exhibit) Indianapolis (Orig: 140 W. Washington; Archived: Ind. State Museum) Racial Justice / Police Brutality"
    }
  },
  {
    "id": "5",
    "artist": {
      "name": "Fred Wilson",
      "isAlive": true,
      "bio": "Fred Wilson is a world-renowned conceptual artist known for his practice of 'mining the museum,' where he rearranges and recontextualizes objects to reveal hidden histories of racism and exclusion. He represented the U.S. at the Venice Biennale in 2003.",
      "website": "pacegallery.com/artists/fred-wilson",
      "social_media": [
        "N/A (See Pace Gallery: @pacegallery)"
      ]
    },
    "artwork": {
      "title": "E Pluribus Unum",
      "description": "Social Justice (Representation)",
      "medium": "Sculpture (Digital Model)",
      "date": "2007–2011 (Cancelled)",
      "location": "Indianapolis (Proposed for Cultural Trail; Cancelled)",
      "cause": "Social Justice (Representation)",
      "imageUrl": "/Images/FredWilson_EPluribusUnum.jpeg",
      "categories": [],
      "searchQuery": "Fred Wilson E Pluribus Unum Indianapolis (Proposed for Cultural Trail; Cancelled) Social Justice (Representation)"
    }
  },
  {
    "id": "6",
    "artist": {
      "name": "Shauta Marsh & Jim Walker (Big Car Collaborative) ",
      "isAlive": true,
      "bio": "",
      "website": "bigcar.org",
      "social_media": [
        "IG: @bigcarpix (Big Car Collaborative)"
      ]
    },
    "artwork": {
      "title": "Social Alchemy ",
      "description": "Community Building / Utopia",
      "medium": "Social Practice",
      "date": "2005–Present",
      "location": "Indianapolis (Tube Factory / Garfield Park)",
      "cause": "Community Building / Utopia",
      "imageUrl": "/Images/BigCarCollaborative_SocialAlchemy.png",
      "categories": [],
      "searchQuery": "Shauta Marsh & Jim Walker (Big Car Collaborative)  Social Alchemy  Indianapolis (Tube Factory / Garfield Park) Community Building / Utopia"
    }
  },
  {
    "id": "7",
    "artist": {
      "name": "May Wright Sewall",
      "isAlive": false,
      "bio": "May Wright Sewall was a legendary suffragist, educator, and peace activist. A close ally of Susan B. Anthony, she believed that access to culture and education was essential for women's liberation, leading her to found the Art Association (now Newfields) and the Propylaeum.",
      "website": "N/A (Historical figure, died 1920. Bio at in.gov is appropriate)**",
      "social_media": [
        "N/A (See @thepropylaeum for her legacy)"
      ]
    },
    "artwork": {
      "title": "Founding the Art Association of Indianapolis",
      "description": "Women's Suffrage / Education",
      "medium": "Civic Leadership",
      "date": "1883",
      "location": "Indianapolis (Art Association / Herron / Newfields)",
      "cause": "Women's Suffrage / Education",
      "imageUrl": "/artist-7.jpg",
      "credit": "Indiana Historical Society ",
      "categories": [],
      "searchQuery": "May Wright Sewall Founding the Art Association of Indianapolis Indianapolis (Art Association / Herron / Newfields) Women's Suffrage / Education"
    }
  },
  {
    "id": "8",
    "artist": {
      "name": "Andre Portee (AbsorbALL)",
      "isAlive": true,
      "bio": "Andre Portee is a Fort Wayne-based creative and the founder of AbsorbALL. He focuses on using art as a tool for community revitalization, specifically targeting public spaces in underserved neighborhoods to instill pride and ownership.",
      "website": "andreportee.com",
      "social_media": [
        "IG: @absorball (Project) & @bodrega (Personal)"
      ]
    },
    "artwork": {
      "title": "McMillen Park Basketball Court Murals",
      "description": "Racial Justice / Community",
      "medium": "Mural / Court Paint",
      "date": "Oct. 2020",
      "location": "Fort Wayne (McMillen Park)",
      "cause": "Racial Justice / Community",
      "imageUrl": "/artist-8.jpg",
      "categories": [],
      "searchQuery": "Andre Portee (AbsorbALL) McMillen Park Basketball Court Murals Fort Wayne (McMillen Park) Racial Justice / Community"
    }
  },
  {
    "id": "9",
    "artist": {
      "name": "Kacy Jackson",
      "isAlive": true,
      "bio": "Kacy Jackson, founder of 'The Art of Kacy', is a muralist known for his photorealistic portraits and ability to capture the human spirit. His work is dedicated to storytelling and uplifting community heroes through large-scale public art.",
      "website": "theartofkacy.com",
      "social_media": [
        "IG: @theartofkacy"
      ]
    },
    "artwork": {
      "title": "Faces of the Fort: Southeast Mural",
      "description": "Civil Rights / Immigrant Rights",
      "medium": "Acrylic Mural",
      "date": "June 2021",
      "location": "Fort Wayne (4335 S. Anthony Blvd)",
      "cause": "Civil Rights / Immigrant Rights",
      "imageUrl": "/Images/KacyJackson_SoutheastMural.png",
      "categories": [],
      "searchQuery": "Kacy Jackson Faces of the Fort: Southeast Mural Fort Wayne (4335 S. Anthony Blvd) Civil Rights / Immigrant Rights"
    }
  },
  {
    "id": "10",
    "artist": {
      "name": "Benjamin Duke",
      "isAlive": true,
      "bio": "Benjamin Duke is a painter and professor at Michigan State University. His studio work often involves complex, figurative narratives, which translates into his murals as dynamic, multi-layered compositions that tackle history and social justice.",
      "website": "bendukeart.com",
      "social_media": [
        "IG: @4th_culture_art"
      ]
    },
    "artwork": {
      "title": "Faces of the Fort: Northeast Mural",
      "description": "Inclusion / Community",
      "medium": "Acrylic Mural",
      "date": "June 2021",
      "location": "Fort Wayne (1514 St. Joseph Blvd)",
      "cause": "Inclusion / Community",
      "imageUrl": "/Images/BenjaminDuke_NortheastMural.png",
      "categories": [],
      "searchQuery": "Benjamin Duke Faces of the Fort: Northeast Mural Fort Wayne (1514 St. Joseph Blvd) Inclusion / Community"
    }
  },
  {
    "id": "11",
    "artist": {
      "name": "Mitchell Egly",
      "isAlive": true,
      "bio": "Mitchell Egly is a Fort Wayne native and artist who specializes in large-scale public works that engage with local history. He returned to his hometown to contribute to its artistic renaissance, focusing on themes of civic pride and history.",
      "website": "mitchellegly.art",
      "social_media": [
        "IG: @eglyillo"
      ]
    },
    "artwork": {
      "title": "Faces of the Fort: Southwest Mural",
      "description": "Breaking Barriers / Justice",
      "medium": "Acrylic Mural",
      "date": "June 2021",
      "location": "Fort Wayne (1818 Bluffton Road)",
      "cause": "Breaking Barriers / Justice",
      "imageUrl": "/Images/MitchellEgly_FacesoftheFort.jpg",
      "categories": [],
      "searchQuery": "Mitchell Egly Faces of the Fort: Southwest Mural Fort Wayne (1818 Bluffton Road) Breaking Barriers / Justice"
    }
  },
  {
    "id": "12",
    "artist": {
      "name": "Robert (Clark) Indiana",
      "isAlive": false,
      "bio": "",
      "website": "robertindiana.com",
      "social_media": [
        "IG: @robertindiana (Legacy Initiative)"
      ]
    },
    "artwork": {
      "title": "The Confederacy: Mississippi",
      "description": "Civil Rights",
      "medium": "Oil",
      "date": "May 1905",
      "location": "Various Collections (e.g., Miami Univ. Art Museum)",
      "cause": "Civil Rights",
      "imageUrl": "/artist-12.jpg",
      "categories": [],
      "searchQuery": "Robert (Clark) Indiana The Confederacy: Mississippi Various Collections (e.g., Miami Univ. Art Museum) Civil Rights"
    }
  },
  {
    "id": "13",
    "artist": {
      "name": "Robert (Clark) Indiana",
      "isAlive": false,
      "bio": "",
      "website": "robertindiana.com",
      "social_media": [
        "IG: @samuellevijones"
      ]
    },
    "artwork": {
      "title": "HOPE ",
      "description": "Political Change (Hope)",
      "medium": "Polychrome Aluminum",
      "date": "2008",
      "location": "Various Public Plazas (NYC, etc.)",
      "cause": "Political Change (Hope)",
      "imageUrl": "/Images/India Cruse-Griffin_HopeSkipandJump.png",
      "categories": [],
      "searchQuery": "Robert (Clark) Indiana HOPE  Various Public Plazas (NYC, etc.) Political Change (Hope)"
    }
  },
  {
    "id": "14",
    "artist": {
      "name": "Samuel Levi Jones",
      "isAlive": true,
      "bio": "Samuel Levi Jones is an artist who challenges the authority of established history by physically deconstructing institutional materials like encyclopedias and law books. He strips the covers and reassembles them into abstract grids, visually dismantling the systems that have historically excluded marginalized voices.",
      "website": "samuellevijones.com",
      "social_media": [
        "@samuellevijones"
      ]
    },
    "artwork": {
      "title": "Poplar Trees (Diptych)",
      "description": "Institutional Racism / Justice",
      "medium": "Deconstructed Books",
      "date": "July 1905",
      "location": "Indianapolis (Newfields / Eskenazi Museum)",
      "cause": "Institutional Racism / Justice",
      "imageUrl": "/Images/SamuelLeviJones_PoplarTrees.png",
      "categories": [],
      "searchQuery": "Samuel Levi Jones Poplar Trees (Diptych) Indianapolis (Newfields / Eskenazi Museum) Institutional Racism / Justice"
    }
  },
  {
    "id": "15",
    "artist": {
      "name": "Rachel Kavathe",
      "isAlive": true,
      "bio": "Rachel Kavathe is an artist and landscape architect whose work lies at the intersection of nature, community, and urban design. She creates site-specific installations that highlight the identity of neighborhoods and the natural ecosystems they inhabit.",
      "website": "rachelkavathe.com",
      "social_media": [
        "@rachelkavathe_studio"
      ]
    },
    "artwork": {
      "title": "McDoel Blooms",
      "description": "Community Connection",
      "medium": "Street Mural",
      "date": "2025 (Upcoming)",
      "location": "Bloomington (Allen & Fairview Streets)",
      "cause": "Community Connection",
      "imageUrl": "/Images/RachelKavathe_McDoelBlooms.webp",
      "credit": "Drone Photography by Caleb Poer",
      "categories": [],
      "searchQuery": "Rachel Kavathe McDoel Blooms Bloomington (Allen & Fairview Streets) Community Connection"
    }
  },
  {
    "id": "16",
    "artist": {
      "name": "Kassie Woodworth",
      "isAlive": true,
      "bio": "Kassie Woodworth is an Indianapolis-based sculptor and fiber artist. Her work often utilizes traditional 'domestic' crafts like quilting and embroidery to elevate women's history and explore themes of labor, memory, and social connectivity.",
      "website": "kassiewoodworth.com",
      "social_media": [
        "@kassiewoodworth"
      ]
    },
    "artwork": {
      "title": "Together",
      "description": "Women's Suffrage / Unity",
      "medium": "Quilt (Embroidery/Screenprint)",
      "date": "",
      "location": "Indianapolis (Indiana Statehouse)",
      "cause": "Women's Suffrage / Unity",
      "imageUrl": "/Images/KassieWoodworth_Together.png",
      "categories": [],
      "searchQuery": "Kassie Woodworth Together Indianapolis (Indiana Statehouse) Women's Suffrage / Unity"
    }
  },
  {
    "id": "17",
    "artist": {
      "name": "Shelby Nower",
      "isAlive": true,
      "bio": "Shelby Nower is a fine artist and muralist from Decatur, Indiana. She is known for her colorful, illustrative style and character-driven works that often bring historical figures or community narratives to life.",
      "website": "shelbynower.com",
      "social_media": [
        "@shelbynower"
      ]
    },
    "artwork": {
      "title": "nINeteenth",
      "description": "Women's Suffrage",
      "medium": "Acrylic / Mural",
      "date": "",
      "location": "Indianapolis (Indiana Statehouse)",
      "cause": "Women's Suffrage",
      "imageUrl": "/Images/ShelbyNower_Nineteenth.webp",
      "categories": [],
      "searchQuery": "Shelby Nower nINeteenth Indianapolis (Indiana Statehouse) Women's Suffrage"
    }
  },
  {
    "id": "18",
    "artist": {
      "name": "Bonnie Fillenwarth",
      "isAlive": true,
      "bio": "Bonnie Fillenwarth is an Indiana artist who works in painting and mixed media. She is deeply interested in women's history and uses her art to tell the stories of forgotten or underappreciated female figures.",
      "website": "bonniefillenwarth.com",
      "social_media": [
        "@bonniefillenwarth"
      ]
    },
    "artwork": {
      "title": "Her Flag (Indiana Stripe)",
      "description": "Women's Suffrage",
      "medium": "Mixed Media / Textile",
      "date": "2020",
      "location": "Various (Travels Nationally)",
      "cause": "Women's Suffrage",
      "imageUrl": "/Images/BonnieFillenwarth_HerFlag.webp",
      "categories": [],
      "searchQuery": "Bonnie Fillenwarth Her Flag (Indiana Stripe) Various (Travels Nationally) Women's Suffrage"
    }
  },
  {
    "id": "19",
    "artist": {
      "name": "Billy Hoodoo",
      "isAlive": true,
      "bio": "",
      "website": "18artcollective.com",
      "social_media": [
        "@billyhoodoo"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter C)",
      "description": "Racial Justice",
      "medium": "Street Paint",
      "date": "",
      "location": "Indianapolis (Indiana Ave - Archived)",
      "cause": "Racial Justice",
      "imageUrl": "/Images/18ArtCollective_BlackLivesMatterStreetMural.jpg",
      "categories": [],
      "searchQuery": "Billy Hoodoo Black Lives Matter Mural (Letter C) Indianapolis (Indiana Ave - Archived) Racial Justice"
    }
  },
  {
    "id": "20",
    "artist": {
      "name": "Justin Roberts & Shannon Davis-Roberts (Walk the Willow)",
      "isAlive": true,
      "bio": "",
      "website": "artistsforclimateawareness.org",
      "social_media": [
        "FB: Walk the Willow"
      ]
    },
    "artwork": {
      "title": "Walk the Willow Sculptures",
      "description": "Environmental Connection",
      "medium": "Willow Branches / Sculpture",
      "date": "Ongoing",
      "location": "Various (Nature Parks)",
      "cause": "Environmental Connection",
      "imageUrl": "/artist-20.jpg",
      "categories": [],
      "searchQuery": "Justin Roberts & Shannon Davis-Roberts (Walk the Willow) Walk the Willow Sculptures Various (Nature Parks) Environmental Connection"
    }
  },
  {
    "id": "21",
    "artist": {
      "name": "Angelica Frausto (Nerdy Brown Kid)",
      "isAlive": true,
      "bio": "Angelica Frausto, known as 'Nerdy Brown Kid,' is a Xicana artist and social scientist. Her work is deeply rooted in the experiences of women of color and immigrants, often serving as visual advocacy for the abolition of immigration detention.",
      "website": "nerdybrownkid.com",
      "social_media": [
        "@nerdybrownkid"
      ]
    },
    "artwork": {
      "title": "Justice for Migrant Communities",
      "description": "Gender & LGBTQ+ Rights",
      "medium": "Ink / Digital Illustration",
      "date": "2020",
      "location": "South Bend",
      "cause": "Gender & LGBTQ+ Rights",
      "imageUrl": "/Images/AngelicaFrausto_JusticeforMigrantComm.jpg",
      "credit": "https://www.creativewildfire.org/poster-portfolio#migrantcommunities",
      "categories": [],
      "searchQuery": "Angelica Frausto (Nerdy Brown Kid) Justice for Migrant Communities South Bend Gender & LGBTQ+ Rights"
    }
  },
  {
    "id": "22",
    "artist": {
      "name": "Beatriz Vasquez",
      "isAlive": true,
      "bio": "Beatriz Vasquez is a Mexican-American 'artivist' who specializes in papel picado (cut paper). She transforms this delicate folk art tradition into large-scale, political statements about border culture, human rights, and the realities of the immigrant experience.",
      "website": "beatrizvasquezart.com",
      "social_media": [
        "@beatrizvasquezart"
      ]
    },
    "artwork": {
      "title": "\"Hope & Loss — A Border Elegy\" (Exhibition)",
      "description": "Immigration Rights",
      "medium": "Papel Picado (Cut Paper)",
      "date": "2019",
      "location": "Indianapolis (Cultural Trail/Airport)",
      "cause": "Immigration Rights",
      "imageUrl": "/Images/Beatriz Vasquez.jpg",
      "credit": "https://directory.artsforlearningindiana.org/artists/BeatrizVasquez",
      "categories": [],
      "searchQuery": "Beatriz Vasquez \"Hope & Loss — A Border Elegy\" (Exhibition) Indianapolis (Cultural Trail/Airport) Immigration Rights"
    }
  },
  {
    "id": "23",
    "artist": {
      "name": "Nasreen Khan",
      "isAlive": true,
      "bio": "Nasreen Khan is a queer, biracial, immigrant artist and writer. Living in the Haughville neighborhood, she uses art to explore 'the margins'—of race, gender, and geography—often using scavenged urban wood to highlight the resilience of nature in the city.",
      "website": "nasreen-khan.com",
      "social_media": [
        "@nasreenkhanart"
      ]
    },
    "artwork": {
      "title": "Mother & Child / Breathe",
      "description": "Multiculturalism / Migration",
      "medium": "Mixed Media",
      "date": "Contemporary",
      "location": "Indianapolis",
      "cause": "Multiculturalism / Migration",
      "imageUrl": "/artist-23.jpg",
      "credit": "https://www.indystar.com/picture-gallery/news/2020/11/21/racial-justice-focus-art-display-indianapolis-central-library/6374181002/",
      "categories": [],
      "searchQuery": "Nasreen Khan Mother & Child / Breathe Indianapolis Multiculturalism / Migration"
    }
  },
  {
    "id": "24",
    "artist": {
      "name": "Ashley Nora",
      "isAlive": true,
      "bio": "",
      "website": "ashleynoraart.com",
      "social_media": [
        "@ashleynoraart"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter R)",
      "description": "Racial Justice / Black Joy",
      "medium": "Street Paint",
      "date": "",
      "location": "Indianapolis (Indiana Ave - Archived)",
      "cause": "Racial Justice / Black Joy",
      "imageUrl": "/Images/18ArtCollective_BlackLivesMatterStreetMural.jpg",
      "categories": [],
      "searchQuery": "Ashley Nora Black Lives Matter Mural (Letter R) Indianapolis (Indiana Ave - Archived) Racial Justice / Black Joy"
    }
  },
  {
    "id": "25",
    "artist": {
      "name": "Kenneth Hordge (Fingercreations)",
      "isAlive": true,
      "bio": "",
      "website": "ganggangculture.com",
      "social_media": [
        "@fingercreations"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Fist)",
      "description": "Racial Justice",
      "medium": "Street Paint / Drywall",
      "date": "",
      "location": "Indianapolis (Indiana Ave - Archived)",
      "cause": "Racial Justice",
      "imageUrl": "/Images/18ArtCollective_BlackLivesMatterStreetMural.jpg",
      "categories": [],
      "searchQuery": "Kenneth Hordge (Fingercreations) Black Lives Matter Mural (Fist) Indianapolis (Indiana Ave - Archived) Racial Justice"
    }
  },
  {
    "id": "26",
    "artist": {
      "name": "Robert Indiana",
      "isAlive": false,
      "bio": "Robert Indiana was a preeminent figure in the Pop Art movement, best known for his iconic 'LOVE' series. Born in Indiana, his work often used bold text and hard-edge painting to critique American politics, identity, and the deceptive nature of the 'American Dream'.",
      "website": "robertindiana.com",
      "social_media": [
        "@robertindiana"
      ]
    },
    "artwork": {
      "title": "The Mother of Us All",
      "description": "Women's Suffrage",
      "medium": "Lithography / Set Design",
      "date": "1967 / 1976",
      "location": "Various Collections",
      "cause": "Women's Suffrage",
      "imageUrl": "/Images/RobertIndiana_Hope.jpg",
      "credit": "https://www.artsy.net/artist-series/robert-indiana-mother-of-us-all",
      "categories": [],
      "searchQuery": "Robert Indiana The Mother of Us All Various Collections Women's Suffrage"
    }
  },
  {
    "id": "27",
    "artist": {
      "name": "Jeffrey A. Wolin",
      "isAlive": true,
      "bio": "Jeffrey A. Wolin is a photographer and professor known for his unique combination of portraiture and hand-written text. His work gives voice to his subjects, allowing them to write their own stories directly onto the photographic prints.",
      "website": "jeffreywolin.com",
      "social_media": [
        "N/A"
      ]
    },
    "artwork": {
      "title": "Written in Memory",
      "description": "Social Justice / Holocaust Memory",
      "medium": "Photography with Text",
      "date": "1990s",
      "location": "Bloomington (IU / Various)",
      "cause": "Social Justice / Holocaust Memory",
      "imageUrl": "/Images/JeffreyA.Wolin_Written in Memory.jpg",
      "credit": "https://www.jeffreywolin.com/jakob-schwartz/",
      "categories": [],
      "searchQuery": "Jeffrey A. Wolin Written in Memory Bloomington (IU / Various) Social Justice / Holocaust Memory"
    }
  },
  {
    "id": "28",
    "artist": {
      "name": "Kevin West",
      "isAlive": true,
      "bio": "Kevin West is a founding member of the Eighteen Art Collective. His vibrant, often abstract portraits focus on Black identity and strength, contributing to the cultural revitalization of Indiana Avenue.",
      "website": "artlafayette.org",
      "social_media": [
        "@kevinwestart"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter K)",
      "description": "Racial Justice / Police Brutality",
      "medium": "Street Paint",
      "date": "",
      "location": "Indianapolis (Indiana Ave - Archived)",
      "cause": "Racial Justice / Police Brutality",
      "imageUrl": "/Images/18ArtCollective_BlackLivesMatterStreetMural.jpg",
      "categories": [],
      "searchQuery": "Kevin West Black Lives Matter Mural (Letter K) Indianapolis (Indiana Ave - Archived) Racial Justice / Police Brutality"
    }
  },
  {
    "id": "29",
    "artist": {
      "name": "John G. Moore",
      "isAlive": true,
      "bio": "John G. Moore, known as 'The Jas,' is an artist and preacher whose work often blends spiritual themes with social commentary. He is a member of the Eighteen Art Collective and uses his art to uplift the Black community.",
      "website": "blcklst.com",
      "social_media": [
        "@johngmoorejr"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter L)",
      "description": "Racial Justice / Voting Rights",
      "medium": "Street Paint",
      "date": "",
      "location": "Indianapolis (Indiana Ave - Archived)",
      "cause": "Racial Justice / Voting Rights",
      "imageUrl": "/Images/18ArtCollective_BlackLivesMatterStreetMural.jpg",
      "categories": [],
      "searchQuery": "John G. Moore Black Lives Matter Mural (Letter L) Indianapolis (Indiana Ave - Archived) Racial Justice / Voting Rights"
    }
  },
  {
    "id": "30",
    "artist": {
      "name": "Ess McKee",
      "isAlive": true,
      "bio": "Ess McKee is a multimedia artist and member of the Eighteen Art Collective. Her work often incorporates hip-hop culture and graphic design elements to challenge stereotypes and celebrate Black creativity.",
      "website": "ganggangculture.com",
      "social_media": [
        "@essmckee"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter S)",
      "description": "Racial Justice",
      "medium": "Street Paint",
      "date": "",
      "location": "Indianapolis (Indiana Ave - Archived)",
      "cause": "Racial Justice",
      "imageUrl": "/Images/18ArtCollective_BlackLivesMatterStreetMural.jpg",
      "categories": [],
      "searchQuery": "Ess McKee Black Lives Matter Mural (Letter S) Indianapolis (Indiana Ave - Archived) Racial Justice"
    }
  },
  {
    "id": "31",
    "artist": {
      "name": "Wavy Blayne",
      "isAlive": true,
      "bio": "Wavy Blayne is a visual artist known for his graffiti-inspired style. As part of the Eighteen Art Collective, his work brings a raw, street-level energy to the conversation about racial justice in Indianapolis.",
      "website": "18artcollective.com",
      "social_media": [
        "@wavyblayne"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter M)",
      "description": "Racial Justice",
      "medium": "Street Paint",
      "date": "",
      "location": "Indianapolis (Indiana Ave - Archived)",
      "cause": "Racial Justice",
      "imageUrl": "/Images/18ArtCollective_BlackLivesMatterStreetMural.jpg",
      "categories": [],
      "searchQuery": "Wavy Blayne Black Lives Matter Mural (Letter M) Indianapolis (Indiana Ave - Archived) Racial Justice"
    }
  },
  {
    "id": "32",
    "artist": {
      "name": "Harriet Watson",
      "isAlive": true,
      "bio": "Harriet Watson is an artist and educator whose work often features portraiture and historical themes. A member of the Eighteen Art Collective, she uses art to teach and preserve Black history.",
      "website": "harrietwatsonart.com",
      "social_media": [
        "@harrietwatsonart"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter A)",
      "description": "Racial Justice",
      "medium": "Street Paint",
      "date": "",
      "location": "Indianapolis (Indiana Ave - Archived)",
      "cause": "Racial Justice",
      "imageUrl": "/Images/18ArtCollective_BlackLivesMatterStreetMural.jpg",
      "categories": [],
      "searchQuery": "Harriet Watson Black Lives Matter Mural (Letter A) Indianapolis (Indiana Ave - Archived) Racial Justice"
    }
  },
  {
    "id": "33",
    "artist": {
      "name": "Deonna Craig",
      "isAlive": true,
      "bio": "Deonna Craig is an Indianapolis-based artist and entrepreneur. Her vibrant, expressive works often focus on Black womanhood and community empowerment. She is a key member of the Eighteen Art Collective.",
      "website": "deonnacraigart.com",
      "social_media": [
        "@deonna_craig"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter V)",
      "description": "Racial Justice",
      "medium": "Street Paint",
      "date": "",
      "location": "Indianapolis (Indiana Ave - Archived)",
      "cause": "Racial Justice",
      "imageUrl": "/Images/18ArtCollective_BlackLivesMatterStreetMural.jpg",
      "categories": [],
      "searchQuery": "Deonna Craig Black Lives Matter Mural (Letter V) Indianapolis (Indiana Ave - Archived) Racial Justice"
    }
  },
  {
    "id": "34",
    "artist": {
      "name": "Danicia Monét (Danicia Malone)",
      "isAlive": true,
      "bio": "Danicia Monét is an arts administrator, planner, and artist. Her work focuses on the intersection of art, urban planning, and equity, using creativity to redesign public spaces for marginalized communities.",
      "website": "https://indianahumanities.org/danicia-monet-malone/",
      "social_media": [
        "@daniciamonet"
      ]
    },
    "artwork": {
      "title": "Black Poetics of Place, BlackSpace Indianapolis (Co-Founder)/ Rokh (Founder)",
      "description": "Racial Justice / Urban Design",
      "medium": "Architecture / Research",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "Racial Justice / Urban Design",
      "imageUrl": "/artist-34.jpg",
      "credit": " https://www.instagram.com/p/DMFqRA_sALO/",
      "categories": [],
      "searchQuery": "Danicia Monét (Danicia Malone) Black Poetics of Place, BlackSpace Indianapolis (Co-Founder)/ Rokh (Founder) Indianapolis Racial Justice / Urban Design"
    }
  },
  {
    "id": "35",
    "artist": {
      "name": "Dr. Jarrod Dortch",
      "isAlive": false,
      "bio": "Dr. Jarrod Dortch is an artist, professor, and urban farmer. He combines his passion for agriculture with visual art to address food deserts and environmental justice in Black communities.",
      "website": "digitaleducationhub.community",
      "social_media": [
        "@solfulgardens"
      ]
    },
    "artwork": {
      "title": "Solful Gardens (building family farms)",
      "description": "Food Justice",
      "medium": "Social Practice / Agriculture",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "Food Justice",
      "imageUrl": "/Images/Dr. Jarrod Dortch_Solful Gardens.jpg",
      "credit": "https://farmflavor.com/indiana/solful-gardens-offers-community-a-new-source-for-fresh-produce/",
      "categories": [],
      "searchQuery": "Dr. Jarrod Dortch Solful Gardens (building family farms) Indianapolis Food Justice"
    }
  },
  {
    "id": "36",
    "artist": {
      "name": "Matthew Cooper",
      "isAlive": true,
      "bio": "Matthew Cooper is a muralist whose work often features bold typography and graphic elements. A member of the Eighteen Art Collective, he uses his skills to broadcast messages of solidarity and strength.",
      "website": "debutart.com (Rep)",
      "social_media": [
        "N/A"
      ]
    },
    "artwork": {
      "title": "Truth Seekers",
      "description": "Racial Justice",
      "medium": "Mural / Mixed Media",
      "date": "2020",
      "location": "Indianapolis",
      "cause": "Racial Justice",
      "imageUrl": "/Images/Matthew Cooper_Truth Seekers.webp",
      "credit": "https://www.indystar.com/picture-gallery/news/2020/11/21/racial-justice-focus-art-display-indianapolis-central-library/6374181002/",
      "categories": [],
      "searchQuery": "Matthew Cooper Truth Seekers Indianapolis Racial Justice"
    }
  },
  {
    "id": "37",
    "artist": {
      "name": "Amiah Mims",
      "isAlive": true,
      "bio": "Amiah Mims is a graphic designer and muralist. Her work is characterized by fluid lines and organic shapes, often depicting Black figures in states of grace and power.",
      "website": "worksbymimsy.com",
      "social_media": [
        "@worksbymimsy"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter A)",
      "description": "Racial Justice / Resilience",
      "medium": "Street Paint",
      "date": "",
      "location": "Indianapolis (Indiana Ave - Archived)",
      "cause": "Racial Justice / Resilience",
      "imageUrl": "/Images/18ArtCollective_BlackLivesMatterStreetMural.jpg",
      "categories": [],
      "searchQuery": "Amiah Mims Black Lives Matter Mural (Letter A) Indianapolis (Indiana Ave - Archived) Racial Justice / Resilience"
    }
  },
  {
    "id": "38",
    "artist": {
      "name": "Rebecca Robinson",
      "isAlive": true,
      "bio": "Rebecca Robinson is a mixed-media artist known for using unconventional materials like cement and tar. Her work 'Concrete Jungle' explores the harsh realities of urban life while finding beauty in resilience.",
      "website": "psnob.com",
      "social_media": [
        "@psnob"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter L)",
      "description": "Racial Justice",
      "medium": "Street Paint / Concrete",
      "date": "",
      "location": "Indianapolis (Indiana Ave - Archived)",
      "cause": "Racial Justice",
      "imageUrl": "/Images/18ArtCollective_BlackLivesMatterStreetMural.jpg",
      "categories": [],
      "searchQuery": "Rebecca Robinson Black Lives Matter Mural (Letter L) Indianapolis (Indiana Ave - Archived) Racial Justice"
    }
  },
  {
    "id": "39",
    "artist": {
      "name": "LaShawnda Crowe Storm",
      "isAlive": true,
      "bio": "LaShawnda Crowe Storm is a mixed media artist, activist, and community organizer. Her work creates spaces for dialogue around difficult topics like racial violence and gender justice.",
      "website": "lashawndacrowestorm.com",
      "social_media": [
        "@lashawndacrowestorm"
      ]
    },
    "artwork": {
      "title": "Led the The Lynch Quilts Project (Quilt I: Her Name Was Laura Nelson)",
      "description": "Racial Justice / History",
      "medium": "Quilting / Community Art",
      "date": "Ongoing (Since 2000s)",
      "location": "Indianapolis",
      "cause": "Racial Justice / History",
      "imageUrl": "/Images/LaShawndaCroweStorm_LedLynchQuiltingProj.jpg",
      "credit": "https://indynow2010ls.wixsite.com/website-5/our-story",
      "categories": [],
      "searchQuery": "LaShawnda Crowe Storm Led the The Lynch Quilts Project (Quilt I: Her Name Was Laura Nelson) Indianapolis Racial Justice / History"
    }
  },
  {
    "id": "40",
    "artist": {
      "name": "Anila Quayyum Agha",
      "isAlive": true,
      "bio": "Anila Quayyum Agha is a Pakistani-American artist based in Indianapolis. Her large-scale light installations explore themes of gender, exclusion, and cultural intersectionality, drawing from Islamic architectural motifs.",
      "website": "anilaagha.com",
      "social_media": [
        "@anila_quayyum_agha"
      ]
    },
    "artwork": {
      "title": "Intersections",
      "description": "Gender & Cultural Intersectionality",
      "medium": "Laser-cut Steel / Light / Shadow",
      "date": "2014",
      "location": "Indianapolis / Global",
      "cause": "Gender & Cultural Intersectionality",
      "imageUrl": "/Images/Anila Quayyum Agha_Intersections.jpg",
      "credit": "https://www.anilaagha.com/intersections",
      "categories": [],
      "searchQuery": "Anila Quayyum Agha Intersections Indianapolis / Global Gender & Cultural Intersectionality"
    }
  },
  {
    "id": "41",
    "artist": {
      "name": "Mari Evans",
      "isAlive": false,
      "bio": "Mari Evans was a poet, writer, and activist associated with the Black Arts Movement. While primarily a writer, her image and words have been immortalized in public art across Indianapolis, serving as a visual conscience for the city.",
      "website": "marievans.org (Archived)",
      "social_media": [
        "N/A"
      ]
    },
    "artwork": {
      "title": "I Am A Black Woman",
      "description": "Civil Rights / Black Arts Movement",
      "medium": "Poetry / Literature",
      "date": "1970",
      "location": "Indianapolis (Mural of her on Mass Ave)",
      "cause": "Civil Rights / Black Arts Movement",
      "imageUrl": "/Images/Mari Evans_I Am A Black Woman.jpg",
      "credit": "https://www.poemhunter.com/poem/i-am-a-black-woman/#google_vignette",
      "categories": [],
      "searchQuery": "Mari Evans I Am A Black Woman Indianapolis (Mural of her on Mass Ave) Civil Rights / Black Arts Movement"
    }
  },
  {
    "id": "42",
    "artist": {
      "name": "Etheridge Knight",
      "isAlive": false,
      "bio": "Etheridge Knight was a major African American poet who began writing while incarcerated at the Indiana State Prison. His work addressed the brutality of the prison system and the realities of Black life in America.",
      "website": "poetryfoundation.org",
      "social_media": [
        "N/A"
      ]
    },
    "artwork": {
      "title": "Poems from Prison",
      "description": "Prison Reform / Black Arts Movement",
      "medium": "Poetry",
      "date": "1968",
      "location": "Indianapolis (Buried in Crown Hill)",
      "cause": "Prison Reform / Black Arts Movement",
      "imageUrl": "/Images/Etheridge Knight.jpg",
      "credit": "https://www.poetryfoundation.org/poets/etheridge-knight",
      "categories": [],
      "searchQuery": "Etheridge Knight Poems from Prison Indianapolis (Buried in Crown Hill) Prison Reform / Black Arts Movement"
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
      "description": "Nature Conservation",
      "medium": "Oil Painting",
      "date": "Late 1800s/Early 1900s",
      "location": "Brown County (Historic Site)",
      "cause": "Nature Conservation",
      "imageUrl": "/artist-43.jpg",
      "credit": "https://trail.tcsteele.org/singing-winds/",
      "categories": [],
      "searchQuery": "T.C. Steele House of the Singing Winds Brown County (Historic Site) Nature Conservation"
    }
  },
  {
    "id": "44",
    "artist": {
      "name": "Teresa Dunn",
      "isAlive": true,
      "bio": "Visibility in the \"Flyover\" States - activism through identity",
      "website": "",
      "social_media": [
        "N/A"
      ]
    },
    "artwork": {
      "title": "US",
      "description": "Community Arts",
      "medium": "Mixed Media",
      "date": "Contemporary",
      "location": "Indianapolis",
      "cause": "Community Arts",
      "imageUrl": "/Images/AngelicaFrausto_JusticeforMigrantComm.jpg",
      "credit": "https://teresa-dunn.com/about",
      "categories": [],
      "searchQuery": "Teresa Dunn US Indianapolis Community Arts"
    }
  },
  {
    "id": "45",
    "artist": {
      "name": "Boxx the Artist",
      "isAlive": true,
      "bio": "Boxx the Artist is a visual artist and community leader. Her work focuses on community engagement, mental health awareness, and creating safe spaces for creative expression in Indianapolis.",
      "website": "ganggangculture.com/artists/bbox",
      "social_media": [
        "@boxxtheartist"
      ]
    },
    "artwork": {
      "title": "The Women In Between",
      "description": "Black Women's Stories",
      "medium": "Multimedia / Portraiture",
      "date": "2025",
      "location": "Indianapolis (Harrison Center)",
      "cause": "Black Women's Stories",
      "imageUrl": "/Images/Boxx the Artist.jpg",
      "credit": "https://www.indystar.com/story/entertainment/arts/2024/02/02/art-and-soul-indianapolis-boxx-the-artist-has-built-a-business-with-talent-and-entrepreneurship/72370950007/?gnt-cfr=1&gca-cat=p&gca-uir=true&gca-epti=z115450d00----v115450d--61--b--61--&gca-ft=47&gca-ds=sophi",
      "categories": [],
      "searchQuery": "Boxx the Artist The Women In Between Indianapolis (Harrison Center) Black Women's Stories"
    }
  },
  {
    "id": "46",
    "artist": {
      "name": "Shamira Wilson",
      "isAlive": true,
      "bio": "Shamira Wilson is an interdisciplinary visual artist. Her work explores ethnobotany and the relationship between humans and the environment, advocating for a more sustainable and connected way of living.",
      "website": "shamirawilson.com",
      "social_media": [
        "@shamirawilson"
      ]
    },
    "artwork": {
      "title": "Ethnobotany Series",
      "description": "Environmental Justice",
      "medium": "Painting / Textiles",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "Environmental Justice",
      "imageUrl": "/Images/Shamira Wilson_ Ethnobotany Series.jpg",
      "credit": "https://shamirawilson.com/about",
      "categories": [],
      "searchQuery": "Shamira Wilson Ethnobotany Series Indianapolis Environmental Justice"
    }
  },
  {
    "id": "47",
    "artist": {
      "name": "Brose Partington",
      "isAlive": true,
      "bio": "Brose Partington creates kinetic sculptures that often deal with themes of surveillance, consumerism, and the precariousness of modern life. His work moves and interacts with the viewer, creating a physical dialogue about control.",
      "website": "brosepartington.com",
      "social_media": [
        "@brosepartington"
      ]
    },
    "artwork": {
      "title": "Harvesting Knowledge",
      "description": "Man vs. Nature / Motion",
      "medium": "Kinetic Sculpture",
      "date": "2004",
      "location": "Indianapolis (IUPUI Campus)",
      "cause": "Man vs. Nature / Motion",
      "imageUrl": "/Images/Brose Partington_Harvesting Knowledge.jpg",
      "credit": "https://www.thepubliccollection.org/artists/brose-partington/",
      "categories": [],
      "searchQuery": "Brose Partington Harvesting Knowledge Indianapolis (IUPUI Campus) Man vs. Nature / Motion"
    }
  },
  {
    "id": "48",
    "artist": {
      "name": "Tiffany Black",
      "isAlive": true,
      "bio": "Tiffany Black is a muralist and community artist. She specializes in collaborative mural projects that involve local residents in the design and painting process, ensuring the art reflects the people who live there.",
      "website": "tblack.co",
      "social_media": [
        "@tiffanyblackart"
      ]
    },
    "artwork": {
      "title": "August 15 (Mural)",
      "description": "Refugee Support / Social Justice",
      "medium": "Mural / Terrazzo",
      "date": "2021",
      "location": "Franklin / Camp Atterbury",
      "cause": "Refugee Support / Social Justice",
      "imageUrl": "/Images/Tiffany Black_August 15 (Mural).jpg",
      "credit": "https://www.tblack.co/august15",
      "categories": [],
      "searchQuery": "Tiffany Black August 15 (Mural) Franklin / Camp Atterbury Refugee Support / Social Justice"
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
      "description": "Cultural Critique / History",
      "medium": "Digital Print / Mural",
      "date": "2022",
      "location": "Indianapolis (Gainbridge Fieldhouse)",
      "cause": "Cultural Critique / History",
      "imageUrl": "/Images/Artur Silva_Cultural Cannibal.jpg",
      "credit": "https://culturalcannibals.wordpress.com/about/",
      "categories": [],
      "searchQuery": "Artur Silva/ Kyle Long Cultural Cannibal Indianapolis (Gainbridge Fieldhouse) Cultural Critique / History"
    }
  },
  {
    "id": "50",
    "artist": {
      "name": "Mary Miss",
      "isAlive": true,
      "bio": "Mary Miss is a pioneer of environmental art. While based in NY, her project 'City Goes to the Water' in Indianapolis was a landmark effort to reconnect the city to its waterways, advocating for water access and ecology.",
      "website": "",
      "social_media": [
        "@cityaslivinglab"
      ]
    },
    "artwork": {
      "title": "FLOW: Can You See the River?",
      "description": "Environmental Awareness (Water)",
      "medium": "Mirrors / Markers",
      "date": "2011",
      "location": "Indianapolis (White River)",
      "cause": "Environmental Awareness (Water)",
      "imageUrl": "/Images/Mary Miss_FLOW.jpg",
      "credit": "https://www.cityaslivinglab.org/flow",
      "categories": [],
      "searchQuery": "Mary Miss FLOW: Can You See the River? Indianapolis (White River) Environmental Awareness (Water)"
    }
  },
  {
    "id": "51",
    "artist": {
      "name": "Shawn Michael Warren",
      "isAlive": true,
      "bio": "Shawn Michael Warren is a painter and muralist known for his hyper-realistic historical narratives. He uses his art to correct historical omissions, painting Black figures into the prominence they deserve.",
      "website": "shawnmichaelwarren.com",
      "social_media": [
        "@shawnmichaelwarren"
      ]
    },
    "artwork": {
      "title": "\"The World's Fastest\" (Mural of Marshall \"Major\" Taylor)",
      "description": "Racial Justice / History",
      "medium": "Oil / Mural",
      "date": "2020s",
      "location": "Indianapolis (Work often travels)",
      "cause": "Racial Justice / History",
      "imageUrl": "/Images/Shawn Michael Warren_The Words Fastest.jpg",
      "credit": "https://www.shawnmichaelwarren.com/murals",
      "categories": [],
      "searchQuery": "Shawn Michael Warren \"The World's Fastest\" (Mural of Marshall \"Major\" Taylor) Indianapolis (Work often travels) Racial Justice / History"
    }
  },
  {
    "id": "52",
    "artist": {
      "name": "Pamela Bliss",
      "isAlive": true,
      "bio": "Pamela Bliss is one of Indianapolis's most prolific muralists. Her work often focuses on local icons and jazz history, preserving the cultural memory of the city's musical heritage.",
      "website": "pamelabliss.gallery",
      "social_media": [
        "FB: Pamela Bliss"
      ]
    },
    "artwork": {
      "title": "Eva Kor Mural",
      "description": "Civic Pride / History",
      "medium": "Mural",
      "date": "2018",
      "location": "Indianapolis (Downtown)",
      "cause": "Civic Pride / History",
      "imageUrl": "/Images/PamelaBliss_EvaKorMural.webp",
      "credit": "https://www.indystar.com/story/news/local/indianapolis/2020/10/12/larger-than-life-mural-holocaust-survivor-eva-kor-coming-downtown/5936019002/",
      "categories": [],
      "searchQuery": "Pamela Bliss Eva Kor Mural Indianapolis (Downtown) Civic Pride / History"
    }
  },
  {
    "id": "53",
    "artist": {
      "name": "D. Del Reverda-Jennings",
      "isAlive": true,
      "bio": "D. Del Reverda-Jennings is a self-taught artist, curator, and author. Her abstract and symbolic work explores African and Caribbean spirituality and the Black female experience.",
      "website": "indyarts.org/artist/d-del-reverda-jennings",
      "social_media": [
        "@ddelreverdajennings"
      ]
    },
    "artwork": {
      "title": "FLAVA FRESH",
      "description": "Underrepresented Artists",
      "medium": "Sculpture / Curation",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "Underrepresented Artists",
      "imageUrl": "/Images/D. Del Reverda-Jennings’_FlavaFresh.jpg",
      "credit": "https://artsmidwest.org/stories/indiana-artist-champions-spaces-for-underrepresented-creatives/",
      "categories": [],
      "searchQuery": "D. Del Reverda-Jennings FLAVA FRESH Indianapolis Underrepresented Artists"
    }
  },
  {
    "id": "54",
    "artist": {
      "name": "Lobyn Hamilton (Walter “Lobyn” Hamilton)",
      "isAlive": true,
      "bio": "Lobyn Hamilton creates art using crushed vinyl records. His portraits of musical icons address themes of cultural memory, the music industry, and the recycling of culture.",
      "website": "lobynhamilton.com",
      "social_media": [
        "@lobynhamilton"
      ]
    },
    "artwork": {
      "title": "What I Have Is What You Have",
      "description": "Music History / Culture",
      "medium": "Assemblage / Collage",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "Music History / Culture",
      "imageUrl": "/Images/LobynHamilton_What I Have Is What You Have.jpg",
      "credit": "https://www.instagram.com/p/C7E8rv4OuhR/",
      "categories": [],
      "searchQuery": "Lobyn Hamilton (Walter “Lobyn” Hamilton) What I Have Is What You Have Indianapolis Music History / Culture"
    }
  },
  {
    "id": "55",
    "artist": {
      "name": "Kyng Rhodes (Nathaniel Rhodes)",
      "isAlive": true,
      "bio": "Kyng Rhodes is a young artist and muralist. His work addresses contemporary social issues like gun violence and racial equity through a bold, illustrative style.",
      "website": "kyngrhodes.com",
      "social_media": [
        "@kyngrhodes"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter B)",
      "description": "Racial Justice",
      "medium": "Street Paint",
      "date": "August 2020",
      "location": "Indianapolis (Indiana Ave - Archived)",
      "cause": "Racial Justice",
      "imageUrl": "/Images/18ArtCollective_BlackLivesMatterStreetMural.jpg",
      "categories": [],
      "searchQuery": "Kyng Rhodes (Nathaniel Rhodes) Black Lives Matter Mural (Letter B) Indianapolis (Indiana Ave - Archived) Racial Justice"
    }
  },
  {
    "id": "56",
    "artist": {
      "name": "Phyllis Boyd",
      "isAlive": true,
      "bio": "Phyllis Boyd is a landscape architect and artist, currently leading Indy Parks. Her career has been defined by using design to address environmental racism and lack of green space in urban neighborhoods.",
      "website": "ganggangculture.com/artists/phyllis-viola-boyd",
      "social_media": [
        "@phyllisviolaboyd"
      ]
    },
    "artwork": {
      "title": "RECLAIM Project",
      "description": "Environmental Justice / Urban Renewal",
      "medium": "Landscape Arch. / Social Practice",
      "date": "Ongoing",
      "location": "Indianapolis (Riverside / various parks)",
      "cause": "Environmental Justice / Urban Renewal",
      "imageUrl": "/Images/Phyllis Viola Boyd_RECLAIM Project.jpg",
      "credit": "https://indynow2010ls.wixsite.com/website-5/projects",
      "categories": [],
      "searchQuery": "Phyllis Boyd RECLAIM Project Indianapolis (Riverside / various parks) Environmental Justice / Urban Renewal"
    }
  },
  {
    "id": "57",
    "artist": {
      "name": "Kevin Wilson",
      "isAlive": true,
      "bio": "Kevin Wilson is a muralist whose work often focuses on community pride and local history. He uses public art to beautify neglected spaces and instill a sense of ownership in residents.",
      "website": "saatchiart.com/kevinjameswilson",
      "social_media": [
        "Kevin James Wilson"
      ]
    },
    "artwork": {
      "title": "Kings of the Castle",
      "description": "Black History / Sports Legacy",
      "medium": "Mural / Illustration",
      "date": "2021",
      "location": "Indianapolis (Airport / Downtown)",
      "cause": "Black History / Sports Legacy",
      "imageUrl": "/Images/KevinWilson_Kings of the Castle.jpg",
      "credit": "https://www.blackartinamerica.com/products/wilson-kevin-the-kings-of-the-castle",
      "categories": [],
      "searchQuery": "Kevin Wilson Kings of the Castle Indianapolis (Airport / Downtown) Black History / Sports Legacy"
    }
  },
  {
    "id": "58",
    "artist": {
      "name": "Rae Parker",
      "isAlive": true,
      "bio": "",
      "website": "raeparkerart.com",
      "social_media": [
        "@rpartdesigns"
      ]
    },
    "artwork": {
      "title": "No Shade (Tribute to Black Queer Joy)",
      "description": "LGBTQ+ Rights / Black Joy",
      "medium": "Multimedia",
      "date": "2023",
      "location": "Indianapolis (Newfields)",
      "cause": "LGBTQ+ Rights / Black Joy",
      "imageUrl": "/Images/RaeParker_No Shade.jpg",
      "credit": "raeparkerart.com",
      "categories": [],
      "searchQuery": "Rae Parker No Shade (Tribute to Black Queer Joy) Indianapolis (Newfields) LGBTQ+ Rights / Black Joy"
    }
  },
  {
    "id": "59",
    "artist": {
      "name": "Fingers (Graffiti Artist)",
      "isAlive": true,
      "bio": "Fingers is a legendary graffiti artist in Indianapolis. His work challenges the legal boundaries of art, reclaiming public space and questioning who has the right to author the city's visual landscape.",
      "website": "N/A",
      "social_media": [
        "@fingercreations"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Fist)",
      "description": "Racial Justice",
      "medium": "Street Paint / Drywall",
      "date": "August 2020",
      "location": "Indianapolis (Indiana Ave)",
      "cause": "Racial Justice",
      "imageUrl": "/Images/18ArtCollective_BlackLivesMatterStreetMural.jpg",
      "categories": [],
      "searchQuery": "Fingers (Graffiti Artist) Black Lives Matter Mural (Fist) Indianapolis (Indiana Ave) Racial Justice"
    }
  },
  {
    "id": "60",
    "artist": {
      "name": "Cierra Johnson",
      "isAlive": true,
      "bio": "Cierra Johnson is a visual artist whose work explores identity and self-perception. She often uses vibrant colors and surreal imagery to depict the internal worlds of her subjects.",
      "website": "cjcrtv.com",
      "social_media": [
        "@cjcrtv"
      ]
    },
    "artwork": {
      "title": "Storytelling Drawing Sessions / Making Martindale",
      "description": "Neighborhood Preservation / Justice",
      "medium": "Illustration / Advocacy",
      "date": "2022",
      "location": "Indianapolis",
      "cause": "Neighborhood Preservation / Justice",
      "imageUrl": "/Images/CierraJohnson_Storytelling Drawing Sessions _ Making Martindale.png",
      "credit": "https://cjcrtv.com/storytelling-drawing-sessions   (anti-erasure)",
      "categories": [],
      "searchQuery": "Cierra Johnson Storytelling Drawing Sessions / Making Martindale Indianapolis Neighborhood Preservation / Justice"
    }
  },
  {
    "id": "61",
    "artist": {
      "name": "Kwazar Martin",
      "isAlive": true,
      "bio": "Kwazar Martin is a painter and muralist. His work often features realistic portraits of Black figures, celebrating their beauty and dignity in a society that often undervalues them.",
      "website": "kwazarmartinart.com",
      "social_media": [
        "@kwazarmartin"
      ]
    },
    "artwork": {
      "title": "I Can't Breathe",
      "description": "Racial Justice",
      "medium": "Mural",
      "date": "2024",
      "location": "Indianapolis (38th & College)",
      "cause": "Racial Justice",
      "imageUrl": "/Images/Kwazar Martin_I Can_t Breathe.jpg",
      "credit": "https://indyencyclopedia.org/exhibit/i-cant-breathe/",
      "categories": [],
      "searchQuery": "Kwazar Martin I Can't Breathe Indianapolis (38th & College) Racial Justice"
    }
  },
  {
    "id": "62",
    "artist": {
      "name": "Shane Young (FITZ)",
      "isAlive": true,
      "bio": "",
      "website": "artbyfitz.org",
      "social_media": [
        "@artbyfitz"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter T)",
      "description": "Racial Justice",
      "medium": "Street Paint",
      "date": "August 2020",
      "location": "Indianapolis (Indiana Ave)",
      "cause": "Racial Justice",
      "imageUrl": "/Images/18ArtCollective_BlackLivesMatterStreetMural.jpg",
      "categories": [],
      "searchQuery": "Shane Young (FITZ) Black Lives Matter Mural (Letter T) Indianapolis (Indiana Ave) Racial Justice"
    }
  },
  {
    "id": "63",
    "artist": {
      "name": "Lisa Sears",
      "isAlive": true,
      "bio": "Lisa Sears is a painter and muralist. Her work often features botanical themes, advocating for the preservation of nature and bringing the calming influence of plants into the city.",
      "website": "lisasearsart.com",
      "social_media": [
        "@lisasearsart"
      ]
    },
    "artwork": {
      "title": "Principio Obstate (Statue of Liberty)",
      "description": "Democracy / Feminism",
      "medium": "Acrylic / Digital Layering",
      "date": "2017",
      "location": "Indianapolis",
      "cause": "Democracy / Feminism",
      "imageUrl": "/Images/Lisa Sears_Principio Obstate.jpg",
      "credit": "https://www.lisasearsart.com/principioobstate.html",
      "categories": [],
      "searchQuery": "Lisa Sears Principio Obstate (Statue of Liberty) Indianapolis Democracy / Feminism"
    }
  },
  {
    "id": "64",
    "artist": {
      "name": "Megan Jefferson",
      "isAlive": true,
      "bio": "Megan Jefferson is an abstract painter and muralist. Her colorful, atmospheric works create spaces of joy and respite in the public realm, advocating for mental well-being through color.",
      "website": "indyarts.org/artist/megan-jefferson",
      "social_media": [
        "@meganjeffersonart"
      ]
    },
    "artwork": {
      "title": "Dept of Public Words - Public Mural Project",
      "description": "Mental Health / Color Therapy",
      "medium": "Oil / Mural",
      "date": "Ongoing",
      "location": "Indianapolis (Edington Gallery)",
      "cause": "Mental Health / Color Therapy",
      "imageUrl": "/Images/MeganJefferson_Ms.Pink.jpeg",
      "credit": "https://www.jeffersonartstudio.com/murals",
      "categories": [],
      "searchQuery": "Megan Jefferson Dept of Public Words - Public Mural Project Indianapolis (Edington Gallery) Mental Health / Color Therapy"
    }
  },
  {
    "id": "65",
    "artist": {
      "name": "Lauren Kussro",
      "isAlive": true,
      "bio": "Lauren Kussro is a printmaker and installation artist. Her work often involves creating immersive environments from paper and print, exploring themes of nature and fragility.",
      "website": "laurenkussro.com",
      "social_media": [
        "@laurenkussro"
      ]
    },
    "artwork": {
      "title": "Our Ocean Installation",
      "description": "Environmental Fragility",
      "medium": "Screenprint / Installation",
      "date": "2024",
      "location": "Houston (Formerly Indy)",
      "cause": "Environmental Fragility",
      "imageUrl": "/Images/LaurenKussro_OurOceanInstallation.jpg",
      "credit": "https://www.laurenkussro.com/",
      "categories": [],
      "searchQuery": "Lauren Kussro Our Ocean Installation Houston (Formerly Indy) Environmental Fragility"
    }
  },
  {
    "id": "66",
    "artist": {
      "name": "Gautam Rao",
      "isAlive": true,
      "bio": "Gautam Rao is an artist and designer. He is the creator of 'Color Code,' a project that uses algorithms to create patterns. He advocates for the intersection of art, technology, and design.",
      "website": "gautamraoart.net",
      "social_media": [
        "@gautamrao"
      ]
    },
    "artwork": {
      "title": "Indians, Alphabetically",
      "description": "Play / Inclusive Design",
      "medium": "Design / Public Art",
      "date": "Ongoing",
      "location": "Indianapolis (Butler Univ)",
      "cause": "Play / Inclusive Design",
      "imageUrl": "/Images/GautamRao_Indians, Alphabetically.jpg",
      "credit": "gautamraoart.net",
      "categories": [],
      "searchQuery": "Gautam Rao Indians, Alphabetically Indianapolis (Butler Univ) Play / Inclusive Design"
    }
  },
  {
    "id": "67",
    "artist": {
      "name": "Casey Roberts",
      "isAlive": true,
      "bio": "Casey Roberts creates large-scale cyanotypes. His work features silhouettes of nature and animals, often with a surreal or humorous twist, advocating for a connection to the wild.",
      "website": "wildernessoverload.com",
      "social_media": [
        "@caseyrobertsart"
      ]
    },
    "artwork": {
      "title": "Cyanotype Nature Series (a soft spot in the sea ice)",
      "description": "Nature Conservation / Surrealism",
      "medium": "Cyanotype / Chemical",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "Nature Conservation / Surrealism",
      "imageUrl": "/Images/CaseyRoberts_A Soft Spot in the Sea Ice.jpg",
      "credit": "https://www.artsy.net/artwork/casey-roberts-a-soft-spot-in-the-sea-ice",
      "categories": [],
      "searchQuery": "Casey Roberts Cyanotype Nature Series (a soft spot in the sea ice) Indianapolis Nature Conservation / Surrealism"
    }
  },
  {
    "id": "68",
    "artist": {
      "name": "Quincy Owens",
      "isAlive": true,
      "bio": "Quincy Owens is a sculptor known for his colorful, light-based installations. He often collaborates with Luke Crawley to create works that explore science and the human experience.",
      "website": "owensandcrawley.com",
      "social_media": [
        "@quincyowens"
      ]
    },
    "artwork": {
      "title": "Fissure at the Athenaeum",
      "description": "Public Art Access / Science",
      "medium": "Sculpture / Light",
      "date": "Ongoing",
      "location": "Indianapolis (Various Sites)",
      "cause": "Public Art Access / Science",
      "imageUrl": "/Images/QuincyOwens_Fissureatthe Athenaeum.jpg",
      "credit": "https://www.owensandcrawley.com/fissure.html",
      "categories": [],
      "searchQuery": "Quincy Owens Fissure at the Athenaeum Indianapolis (Various Sites) Public Art Access / Science"
    }
  },
  {
    "id": "69",
    "artist": {
      "name": "Luke Crawley",
      "isAlive": true,
      "bio": "Luke Crawley is a science teacher and artist. His work with Quincy Owens combines scientific principles (like sound waves or DNA) with visual art to educate and inspire.",
      "website": "owensandcrawley.com",
      "social_media": [
        "@lukecrawley"
      ]
    },
    "artwork": {
      "title": "Up in Air",
      "description": "STEAM Education / Physics",
      "medium": "Sculpture / Sound",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "STEAM Education / Physics",
      "imageUrl": "/Images/LukeCrawley_Up in Air..jpg",
      "credit": "https://artinoddplaces.org/artists/crawley-luke/",
      "categories": [],
      "searchQuery": "Luke Crawley Up in Air Indianapolis STEAM Education / Physics"
    }
  },
  {
    "id": "70",
    "artist": {
      "name": "Dale Enochs",
      "isAlive": true,
      "bio": "Dale Enochs is a limestone sculptor. He works with Indiana's native stone, advocating for the use of local materials and celebrating the geological history of the state.",
      "website": "daleenochs.com",
      "social_media": [
        "@daleenochs"
      ]
    },
    "artwork": {
      "title": "Elemental Indiana",
      "description": "Indiana Geology / History",
      "medium": "Sculpture",
      "date": "2008",
      "location": "Indianapolis (Airport)",
      "cause": "Indiana Geology / History",
      "imageUrl": "/Images/Dale Enochs_Elemental Indiana.png",
      "credit": "https://www.daleenochs.com/julien-clarke",
      "categories": [],
      "searchQuery": "Dale Enochs Elemental Indiana Indianapolis (Airport) Indiana Geology / History"
    }
  },
  {
    "id": "71",
    "artist": {
      "name": "Brian McCutcheon",
      "isAlive": true,
      "bio": "Brian McCutcheon is a sculptor whose work recontextualizes everyday objects to explore themes of masculinity, labor, and memory.",
      "website": "brianmccutcheon.com",
      "social_media": [
        "@brianmccutcheon"
      ]
    },
    "artwork": {
      "title": "NDY",
      "description": "LGBTQ+ ",
      "medium": "Sculpture / Fabrication",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "LGBTQ+ ",
      "imageUrl": "/Images/Brian McCutcheon_NDY.png",
      "credit": "https://www.ignitionarts.com/projects/ndy",
      "categories": [],
      "searchQuery": "Brian McCutcheon NDY Indianapolis LGBTQ+"
    }
  },
  {
    "id": "72",
    "artist": {
      "name": "Katrina Murray",
      "isAlive": true,
      "bio": "Katrina Murray is a painter and sculptor. Her work features organic, biomorphic forms that explore the interconnectedness of life and the body.",
      "website": "katrinajmurray.com",
      "social_media": [
        "@katrinajmurray"
      ]
    },
    "artwork": {
      "title": "This Is Us",
      "description": "Human Condition / Bias",
      "medium": "Conceptual Installation",
      "date": "2022",
      "location": "Indianapolis",
      "cause": "Human Condition / Bias",
      "imageUrl": "/Images/Katrina Murray_This Is Us.png",
      "credit": "https://katrinajmurray.com/pdfs.html",
      "categories": [],
      "searchQuery": "Katrina Murray This Is Us Indianapolis Human Condition / Bias"
    }
  },
  {
    "id": "73",
    "artist": {
      "name": "India Cruse-Griffin",
      "isAlive": true,
      "bio": "India Cruse-Griffin is an Indiana-based collage artist and educator. Her vibrant, mixed-media works often depict scenes of Black life, family, and community, celebrating the resilience and joy of the African American experience.",
      "website": "indiacruse-griffin.org",
      "social_media": [
        "@indiacrusegriffin"
      ]
    },
    "artwork": {
      "title": "Hope Skip and Jump",
      "description": "Black Experience / Family",
      "medium": "Collage / Mixed Media",
      "date": "2012",
      "location": "Indianapolis (Eskenazi Health)",
      "cause": "Black Experience / Family",
      "imageUrl": "/Images/India Cruse-Griffin_HopeSkipandJump.png",
      "credit": "https://publicartarchive.org/art/Hope-Skip-and-Jump/ca85f4e7",
      "categories": [],
      "searchQuery": "India Cruse-Griffin Hope Skip and Jump Indianapolis (Eskenazi Health) Black Experience / Family"
    }
  }
];
