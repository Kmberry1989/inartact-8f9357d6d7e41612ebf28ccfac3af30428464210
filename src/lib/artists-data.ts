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
      "website": "https://18artcollective.com",
      "social_media": [
        "https://www.instagram.com/18artcollective"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Street Mural",
      "description": "A massive street mural where each of the 18 artists was assigned one letter of the phrase 'Black Lives Matter.' The mural is a vibrant affirmation of Black life and culture, located on a street with deep historical significance to Indianapolis's Black community.",
      "medium": "Street Paint / Public Mural",
      "date": "August 2020",
      "location": "Indianapolis (Indiana Avenue)",
      "cause": "Racial Justice, Activism",
      "imageUrl": "/artist-1.png",
      "credit": "static.wixstatic.com",
      "latitude": 39.7753,
      "longitude": -86.1649,
      "categories": [
        "mural",
        "public art",
        "activism"
      ],
      "searchQuery": "The Eighteen Art Collective Black Lives Matter Street Mural"
    }
  },
  {
    "id": "2",
    "artist": {
      "name": "Gary Gee",
      "isAlive": true,
      "bio": "Gary Gee is a multidisciplinary artist from Indianapolis who bridges the gap between street art and fine art. His work often incorporates ceramics, mixed media, and bold graphic styles to explore themes of urban life, hip-hop culture, and social justice.",
      "website": "https://artbygarygee.com",
      "social_media": [
        "https://www.instagram.com/originalgarygee"
      ]
    },
    "artwork": {
      "title": "We the People",
      "description": "Part of the 'Murals for Racial Justice', this panel depicts a diverse group of protesters demanding justice. The work contrasts the constitutional ideal of 'We the People' with the reality of police brutality and systemic inequality faced by marginalized communities.",
      "medium": "Acrylic on Plywood Banner",
      "date": "2020",
      "location": "Indianapolis (Archived by IndyPL)",
      "cause": "Civil Rights, Police Brutality",
      "imageUrl": "/artist-2.png",
      "credit": "i0.wp.com",
      "categories": [
        "street art",
        "public art"
      ],
      "searchQuery": "Gary Gee We the People"
    }
  },
  {
    "id": "3",
    "artist": {
      "name": "Mechi Shakur (Demetrius Green)",
      "isAlive": true,
      "bio": "Mechi Shakur (Demetrius Green) is a self-taught visual artist whose work is characterized by raw emotion and intense social commentary. He often uses his art to challenge comfort zones and confront viewers with the harsh realities of racial violence and systemic oppression.",
      "website": "https://ganggangculture.com/artists/mechi-shakur/",
      "social_media": [
        "https://www.instagram.com/mechishakur/"
      ]
    },
    "artwork": {
      "title": "Blkkk Lives Don't Matter",
      "description": "A powerful, eight-panel work created on boarded-up windows during the 2020 protests. The provocative title and imagery serve as a direct confrontation of the violence against Black bodies, challenging the viewer to acknowledge the disparity in how lives are valued.",
      "medium": "Acrylic on Plywood Banner",
      "date": "2020",
      "location": "Indianapolis (Archived by IndyPL)",
      "cause": "Racial Justice, Police Brutality",
      "imageUrl": "/artist-3.svg",
      "credit": "ganggangculture.com",
      "categories": [
        "controversial",
        "political"
      ],
      "searchQuery": "Mechi Shakur (Demetrius Green) Blkkk Lives Don't Matter"
    }
  },
  {
    "id": "4",
    "artist": {
      "name": "Israel Solomon",
      "isAlive": true,
      "bio": "Israel Solomon is a visual artist and educator known for his geometric, cubist-inspired style and vibrant use of color. His work frequently focuses on community, family, and the Black experience, often creating portraits that elevate everyday people to icons.",
      "website": "https://www.israelsolomonart.com",
      "social_media": [
        "https://www.instagram.com/israelsoloart/?hl=en",
        "https://www.facebook.com/israelsolomonart/"
      ]
    },
    "artwork": {
      "title": "American Duality",
      "description": "This piece explores the split experience of American life, highlighting the stark differences in safety, policing, and opportunity faced by Black Americans versus their white counterparts.",
      "medium": "Art/Mural on Plywood",
      "date": "2020",
      "location": "Indianapolis",
      "cause": "Social Justice (General)",
      "imageUrl": "/artist-4.jpg",
      "credit": "images.squarespace-cdn.com",
      "categories": [
        "mural",
        "public art"
      ],
      "searchQuery": "Israel Solomon American Duality"
    }
  },
  {
    "id": "5",
    "artist": {
      "name": "Fred Wilson",
      "isAlive": true,
      "bio": "Fred Wilson is a world-renowned conceptual artist known for his practice of 'mining the museum,' where he rearranges and recontextualizes objects to reveal hidden histories of racism and exclusion. He represented the U.S. at the Venice Biennale in 2003.",
      "website": "https://www.pacegallery.com/artists/fred-wilson/",
      "social_media": [
        "https://www.instagram.com/theartassignment/"
      ]
    },
    "artwork": {
      "title": "E Pluribus Unum",
      "description": "This controversial project proposed remixing the Soldiers' and Sailors' Monument by isolating the sole African American figure (a formerly enslaved man) and elevating him on a new pedestal holding a flag of the African diaspora. The project was cancelled due to public controversy.",
      "medium": "Sculptural Intervention (Proposed/Cancelled)",
      "date": "2007-2011",
      "location": "Indianapolis (Not Installed)",
      "cause": "Racial Justice, Historical Reconciliation",
      "imageUrl": "/EPluribusUnum.webp",
      "credit": "pacegallery.com",
      "categories": [
        "public art",
        "proposal",
        "conceptual"
      ],
      "searchQuery": "Fred Wilson E Pluribus Unum"
    }
  },
  {
    "id": "6",
    "artist": {
      "name": "Robert Indiana (Robert Clark)",
      "isAlive": false,
      "bio": "Robert Indiana was a preeminent figure in the Pop Art movement, best known for his iconic 'LOVE' series. Born in Indiana, his work often used bold text and hard-edge painting to critique American politics, identity, and the deceptive nature of the 'American Dream'.",
      "website": "https://www.robertindiana.com",
      "social_media": [
        "https://www.instagram.com/explore/tags/robertindiana/"
      ]
    },
    "artwork": {
      "title": "The Confederacy: Mississippi",
      "description": "Part of his 'Confederacy' series, this work is a blunt critique of Southern racism during the Civil Rights era. It features a map of Mississippi and references the 1964 murders of civil rights workers, condemning the state's violent resistance to justice.",
      "medium": "Oil on Canvas",
      "date": "1965",
      "location": "Various Collections",
      "cause": "Civil Rights",
      "imageUrl": "/artist-6.png",
      "credit": "s3.amazonaws.com",
      "categories": [
        "print",
        "pop art"
      ],
      "searchQuery": "Robert Indiana (Robert Clark) The Confederacy: Mississippi"
    }
  },
  {
    "id": "7",
    "artist": {
      "name": "Samuel Levi Jones",
      "isAlive": true,
      "bio": "Samuel Levi Jones is an artist who challenges the authority of established history by physically deconstructing institutional materials like encyclopedias and law books. He strips the covers and reassembles them into abstract grids, visually dismantling the systems that have historically excluded marginalized voices.",
      "website": "https://www.samuellevijones.com",
      "social_media": [
        "https://www.instagram.com/slevijones/?hl=en"
      ]
    },
    "artwork": {
      "title": "Poplar Trees",
      "description": "A diptych made from the skins of deconstructed books. The title references the song 'Strange Fruit' and the history of lynching (poplar trees), using the medium itself to critique how history and law have been used to oppress rather than protect.",
      "medium": "Deconstructed Books on Canvas",
      "date": "2015",
      "location": "IU Eskenazi Museum of Art (Bloomington)",
      "cause": "Racial Justice",
      "imageUrl": "/artist-7.jpg",
      "credit": "images.squarespace-cdn.com",
      "categories": [
        "mixed media"
      ],
      "searchQuery": "Samuel Levi Jones Poplar Trees"
    }
  },
  {
    "id": "8",
    "artist": {
      "name": "Shauta Marsh & Jim Walker",
      "isAlive": true,
      "bio": "Shauta Marsh and Jim Walker are the co-founders of Big Car Collaborative, a non-profit arts organization. They specialize in 'creative placemaking,' using art to transform public spaces, build social cohesion, and improve quality of life in Indianapolis neighborhoods.",
      "website": "https://www.bigcar.org",
      "social_media": [
        "https://www.instagram.com/bigcarpix/?hl=en",
        "https://www.facebook.com/groups/bigcar/"
      ]
    },
    "artwork": {
      "title": "Social Alchemy",
      "description": "Social Alchemy' is a multi-year project exploring the concepts of utopia and dystopia, drawing inspiration from New Harmony, Indiana. It uses art, radio, and design to facilitate social connection and reimagine how communities can live better together.",
      "medium": "Social Practice / Community Engagement",
      "date": "Ongoing (Since 2005)",
      "location": "Indianapolis (Garfield Park)",
      "cause": "Community Building",
      "imageUrl": "/artist-8.jpg",
      "credit": "bigcar.org",
      "latitude": 39.7326,
      "longitude": -86.1415,
      "categories": [
        "public art",
        "collaborative"
      ],
      "searchQuery": "Shauta Marsh & Jim Walker Social Alchemy"
    }
  },
  {
    "id": "9",
    "artist": {
      "name": "Andre Portee (AbsorbALL)",
      "isAlive": true,
      "bio": "Andre Portee is a Fort Wayne-based creative and the founder of AbsorbALL. He focuses on using art as a tool for community revitalization, specifically targeting public spaces in underserved neighborhoods to instill pride and ownership.",
      "website": "http://www.andreportee.com",
      "social_media": [
        "https://www.instagram.com/bodrega/?hl=en"
      ]
    },
    "artwork": {
      "title": "McMillen Park Basketball Court Murals",
      "description": "A massive, vibrant mural painted directly onto the basketball courts of McMillen Park. The project revitalized a gray, neglected space into a colorful destination, celebrating Black culture and providing a beautiful, dignified space for youth recreation.",
      "medium": "Court Paint / Public Art",
      "date": "2020",
      "location": "Fort Wayne (McMillen Park)",
      "cause": "Racial Justice, Community Building",
      "imageUrl": "/mcmillenparkbasketballcourtmural.jpeg",
      "latitude": 41.0582,
      "longitude": -85.1069,
      "categories": [
        "mural",
        "public art"
      ],
      "searchQuery": "Andre Portee (AbsorbALL) McMillen Park Basketball Court Murals"
    }
  },
  {
    "id": "10",
    "artist": {
      "name": "Rachel Kavathe",
      "isAlive": true,
      "bio": "Rachel Kavathe is an artist and landscape architect whose work lies at the intersection of nature, community, and urban design. She creates site-specific installations that highlight the identity of neighborhoods and the natural ecosystems they inhabit.",
      "website": "https://rachelkavathestudio.com",
      "social_media": [
        "https://www.instagram.com/rachelkavathe/?hl=en"
      ]
    },
    "artwork": {
      "title": "McDoel Blooms",
      "description": "A street mural project designed to calm traffic and beautify the McDoel Gardens neighborhood. The design features native flora and garden imagery, reflecting the neighborhood's history and the shared values of its residents.",
      "medium": "Street Mural / Public Art",
      "date": "2025",
      "location": "Bloomington (Allen & Fairview Streets)",
      "cause": "Community Building",
      "imageUrl": "/mcdoelblooms.webp",
      "latitude": 39.1539,
      "longitude": -86.5396,
      "categories": [
        "public art",
        "sculpture"
      ],
      "searchQuery": "Rachel Kavathe McDoel Blooms"
    }
  },
  {
    "id": "11",
    "artist": {
      "name": "Kacy Jackson",
      "isAlive": true,
      "bio": "Kacy Jackson, founder of 'The Art of Kacy', is a muralist known for his photorealistic portraits and ability to capture the human spirit. His work is dedicated to storytelling and uplifting community heroes through large-scale public art.",
      "website": "https://www.cityoffortwayne.in.gov/368/Faces-of-the-Fort",
      "social_media": [
        "https://www.instagram.com/kyjacksonart/"
      ]
    },
    "artwork": {
      "title": "Faces of the Fort: Southeast Mural",
      "description": "This mural honors local figures Irene Paxia, who supports refugees, and William E. Warfield, a historic Black real estate investor. It celebrates the contributions of immigrants and Black leaders to the fabric of Fort Wayne.",
      "medium": "Acrylic on Building / Mural",
      "date": "June 2021",
      "location": "Fort Wayne (4335 S Anthony Blvd)",
      "cause": "Civil Rights, Immigration",
      "imageUrl": "/facesofthefortkacyjackson.jfif",
      "categories": [
        "mural",
        "public art"
      ],
      "searchQuery": "Kacy Jackson Faces of the Fort: Southeast Mural"
    }
  },
  {
    "id": "12",
    "artist": {
      "name": "Benjamin Duke",
      "isAlive": true,
      "bio": "Benjamin Duke is a painter and professor at Michigan State University. His studio work often involves complex, figurative narratives, which translates into his murals as dynamic, multi-layered compositions that tackle history and social justice.",
      "website": "https://bendukeart.com",
      "social_media": [
        "https://www.instagram.com/bendukeart/"
      ]
    },
    "artwork": {
      "title": "Faces of the Fort: Northeast Mural",
      "description": "The mural depicts Glynn Hines, a long-time advocate for racial justice, and Genevieve Meyer, a crusader against child marriage in Indiana. It highlights the ongoing fight for legislative and social protection of vulnerable groups.",
      "medium": "Acrylic on Building / Mural",
      "date": "June 2021",
      "location": "Fort Wayne (1514 St. Joseph Blvd)",
      "cause": "Racial Justice, Inclusive Community",
      "imageUrl": "/artist-12.jpg",
      "credit": "bendukeart.com",
      "categories": [
        "mural",
        "public art"
      ],
      "searchQuery": "Benjamin Duke Faces of the Fort: Northeast Mural"
    }
  },
  {
    "id": "13",
    "artist": {
      "name": "Mitchell Egly",
      "isAlive": true,
      "bio": "Mitchell Egly is a Fort Wayne native and artist who specializes in large-scale public works that engage with local history. He returned to his hometown to contribute to its artistic renaissance, focusing on themes of civic pride and history.",
      "website": "https://mitchellegly.art"
    },
    "artwork": {
      "title": "Faces of the Fort: Southwest Mural",
      "description": "A tribute to diverse local leaders who have shaped the community's history. The mural serves as a visual history lesson, ensuring that the contributions of civil rights leaders and community builders are not forgotten.",
      "medium": "Acrylic on Building / Mural",
      "date": "June 2021",
      "location": "Fort Wayne (1818 Bluffton Road)",
      "cause": "Social Justice (General)",
      "imageUrl": "/artist-13.png",
      "credit": "static.wixstatic.com",
      "categories": [
        "mural",
        "public art"
      ],
      "searchQuery": "Mitchell Egly Faces of the Fort: Southwest Mural"
    }
  },
  {
    "id": "14",
    "artist": {
      "name": "May Wright Sewall",
      "isAlive": false,
      "bio": "May Wright Sewall was a legendary suffragist, educator, and peace activist. A close ally of Susan B. Anthony, she believed that access to culture and education was essential for women's liberation, leading her to found the Art Association (now Newfields) and the Propylaeum.",
      "website": "https://indyencyclopedia.org/may-wright-sewall/"
    },
    "artwork": {
      "title": "Founding the Art Association of Indianapolis",
      "description": "While not a visual artwork, her 'work' was the creation of the institutions themselves. She leveraged her influence to create spaces where women could organize, learn, and engage with the arts, laying the cultural foundation of Indianapolis.",
      "medium": "Institution Building",
      "date": "1883",
      "location": "Indianapolis",
      "cause": "Women's Suffrage, Education",
      "imageUrl": "/artist-14.jpg",
      "credit": "indyencyclopedia.org",
      "categories": [
        "portrait",
        "historical"
      ],
      "searchQuery": "May Wright Sewall Founding the Art Association of Indianapolis"
    }
  },
  {
    "id": "15",
    "artist": {
      "name": "Florita Eichel",
      "isAlive": false,
      "bio": "Florita Eichel was a pioneering artist and suffragist in Evansville, Indiana. She joined the suffrage movement at age 20 and later became a key figure in the local arts scene, founding the Evansville Artists Guild to support professional artists in the region.",
      "website": "https://historicevansville.com/"
    },
    "artwork": {
      "title": "Suffrage Movement Involvement & Guild Founding",
      "description": "Eichel used her position to bridge political activism and the arts in Southern Indiana. Her legacy is the professionalization of the arts in Evansville and her early grassroots work securing the vote for women in the state.",
      "medium": "Activism / Curatorial Work",
      "date": "Early 1900s",
      "location": "Evansville, Indiana",
      "cause": "Women's Suffrage",
      "imageUrl": "/floritaeichel.jpg",
      "categories": [
        "print",
        "historical"
      ],
      "searchQuery": "Florita Eichel Suffrage Movement Involvement & Guild Founding"
    }
  },
  {
    "id": "16",
    "artist": {
      "name": "Kassie Woodworth",
      "isAlive": true,
      "bio": "Kassie Woodworth is an Indianapolis-based sculptor and fiber artist. Her work often utilizes traditional 'domestic' crafts like quilting and embroidery to elevate women's history and explore themes of labor, memory, and social connectivity.",
      "website": "https://www.kassiewoodworth.com",
      "social_media": [
        "https://www.instagram.com/kassiewoodworth.art/"
      ]
    },
    "artwork": {
      "title": "Together",
      "description": "Commissioned for the 19th Amendment Centennial, this quilt commemorates the suffrage movement while explicitly acknowledging the racial divide within it. It honors the women of color whose fight for voting rights continued long after 1920.",
      "medium": "Quilt (Mixed media)",
      "date": "2020",
      "location": "Indianapolis (Indiana Statehouse)",
      "cause": "Women's Suffrage, Racial Justice",
      "imageUrl": "/artist-16.png",
      "credit": "static.wixstatic.com",
      "categories": [
        "quilt",
        "textile",
        "public art"
      ],
      "searchQuery": "Kassie Woodworth Together"
    }
  },
  {
    "id": "17",
    "artist": {
      "name": "Shelby Nower",
      "isAlive": true,
      "bio": "Shelby Nower is a fine artist and muralist from Decatur, Indiana. She is known for her colorful, illustrative style and character-driven works that often bring historical figures or community narratives to life.",
      "website": "https://shelbynower.com"
    },
    "artwork": {
      "title": "nINeteenth",
      "description": "A celebratory painting depicting women triumphantly casting their first votes. Nower integrated the names of prominent Indiana suffragists into the clothing of the figures, turning the painting into a historical document of the movement's leaders.",
      "medium": "Painting (Oil/Acrylic)",
      "date": "2020",
      "location": "Decatur / Indiana Statehouse",
      "cause": "Women's Suffrage",
      "imageUrl": "/nINeteenth.webp",
      "credit": "static1.squarespace.com",
      "categories": [
        "textile",
        "quilt",
        "public art"
      ],
      "searchQuery": "Shelby Nower nINeteenth"
    }
  },
  {
    "id": "18",
    "artist": {
      "name": "Bonnie Fillenwarth",
      "isAlive": true,
      "bio": "Bonnie Fillenwarth is an Indiana artist who works in painting and mixed media. She is deeply interested in women's history and uses her art to tell the stories of forgotten or underappreciated female figures.",
      "website": "https://www.herflag.com",
      "social_media": [
        "https://www.instagram.com/bonniefillenwarth/",
        "https://www.facebook.com/BonnieFillenwarthArt/"
      ]
    },
    "artwork": {
      "title": "Her Flag (Indiana Stripe)",
      "description": "Created as Indiana's contribution to the national 'Her Flag' collaborative project. The stripe illustrates key Hoosier suffragists, visually weaving Indiana's specific history into the larger national tapestry of the 19th Amendment ratification.",
      "medium": "Mixed Media on Fabric",
      "date": "2020",
      "location": "Indianapolis (Work travels nationally)",
      "cause": "Women's Suffrage",
      "imageUrl": "/herflag.webp",
      "credit": "static1.squarespace.com",
      "categories": [
        "textile",
        "public art"
      ],
      "searchQuery": "Bonnie Fillenwarth Her Flag (Indiana Stripe)"
    }
  },
  {
    "id": "19",
    "artist": {
      "name": "Robert Indiana (Suffrage Work)",
      "isAlive": false,
      "bio": "Robert Indiana was a preeminent figure in the Pop Art movement. Beyond his famous 'LOVE' works, he was deeply engaged with American history and created visual tributes to key historical figures, including suffragists.",
      "website": "https://www.robertindiana.com"
    },
    "artwork": {
      "title": "The Mother of Us All (Posters/Designs)",
      "description": "Indiana created the set design and costumes for the Virgil Thomson/Gertrude Stein opera 'The Mother of Us All', which chronicles the life of Susan B. Anthony. His pop-art aesthetic brought a modern, graphic energy to the story of the suffrage movement.",
      "medium": "Lithography / Set Design",
      "date": "1967 / 1976",
      "location": "Various Collections",
      "cause": "Women's Suffrage",
      "imageUrl": "/artist-19.png",
      "credit": "s3.amazonaws.com",
      "categories": [
        "poster",
        "pop art"
      ],
      "searchQuery": "Robert Indiana (Suffrage Work) The Mother of Us All (Posters/Designs)"
    }
  },
  {
    "id": "20",
    "artist": {
      "name": "Karen Boone",
      "isAlive": true,
      "bio": "Karen Boone is a 'natural pigment painter' who forages for clay, ochre, and charcoal near her home in Southern Indiana. She processes these materials by hand to create zero-waste paints, making her entire artistic process an act of environmental stewardship.",
      "website": "https://www.karenboone.com",
      "social_media": [
        "https://www.instagram.com/karenbooneartist/"
      ]
    },
    "artwork": {
      "title": "Natural Pigment Works",
      "description": "Her abstract paintings are literal pieces of the Indiana landscape. By refusing commercial, toxic paints in favor of earth-based materials, her work advocates for a sustainable relationship with the land.",
      "medium": "Painting / Mixed Media",
      "date": "Ongoing",
      "location": "Borden, Indiana",
      "cause": "Environmental Justice",
      "imageUrl": "/artist-20.png",
      "credit": "img1.wsimg.com",
      "categories": [
        "photo",
        "studio",
        "artist"
      ],
      "searchQuery": "Karen Boone Natural Pigment Works"
    }
  },
  {
    "id": "21",
    "artist": {
      "name": "Justin Roberts & Shannon Davis-Roberts",
      "isAlive": true,
      "bio": "Justin and Shannon operate 'Walk the Willow,' a creative studio specializing in large-scale sculptures made from woven willow branches. They are committed to using sustainable, biodegradable materials that eventually return to the earth without harm.",
      "website": "https://walkthewillow.wordpress.com",
      "social_media": [
        "https://www.instagram.com/walkthewillow/"
      ]
    },
    "artwork": {
      "title": "Walk the Willow Sculptures",
      "description": "Whimsical, large-scale woven sculptures (often figures or structures) that demonstrate how public art can be created with a zero-waste footprint. Their work emphasizes the beauty of natural, renewable materials.",
      "medium": "Willow Branches / Sculpture",
      "date": "Ongoing",
      "location": "Southern Indiana",
      "cause": "Environmental Justice, Zero Waste",
      "imageUrl": "/artist-21.jpg",
      "credit": "walkthewillow.wordpress.com",
      "categories": [
        "sculpture",
        "public art"
      ],
      "searchQuery": "Justin Roberts & Shannon Davis-Roberts Walk the Willow Sculptures"
    }
  },
  {
    "id": "22",
    "artist": {
      "name": "Pat Rowbottom",
      "isAlive": true,
      "bio": "Pat Rowbottom is a painter and a leader (Vice President) of the 'Artists for Climate Awareness' organization. She works to mobilize the arts community to address the climate crisis through exhibitions, education, and fundraising.",
      "website": "https://www.artistsforclimateawareness.org"
    },
    "artwork": {
      "title": "Artists for Climate Awareness",
      "description": "While her personal work often celebrates nature, her primary 'activist' work is organizational\u2014facilitating exhibits that force the community to confront climate change and conservation issues.",
      "medium": "Painting / Advocacy",
      "date": "Ongoing",
      "location": "Bloomington",
      "cause": "Environmental Justice",
      "imageUrl": "/patRowbottom-Mikes-Garden.jpg",
      "categories": [
        "photo",
        "portrait"
      ],
      "searchQuery": "Pat Rowbottom Artists for Climate Awareness"
    }
  },
  {
    "id": "23",
    "artist": {
      "name": "Angelica Frausto (Nerdy Brown Kid)",
      "isAlive": true,
      "bio": "Angelica Frausto, known as 'Nerdy Brown Kid,' is a Xicana artist and social scientist. Her work is deeply rooted in the experiences of women of color and immigrants, often serving as visual advocacy for the abolition of immigration detention.",
      "website": "https://nerdybrownkid.com",
      "social_media": [
        "https://www.instagram.com/nerdybrownkid/"
      ]
    },
    "artwork": {
      "title": "Portraits/Illustrations",
      "description": "Her illustrations are often used in campaigns for organizations like the Detention Watch Network. They focus on the humanity, dreams, and resilience of those impacted by the immigration system, countering dehumanizing political narratives.",
      "medium": "Digital Art / Graphic Design",
      "date": "Ongoing",
      "location": "South Bend",
      "cause": "Immigration, Detention Abolition",
      "imageUrl": "/artist-23.jpg",
      "credit": "s0.wp.com",
      "categories": [
        "digital art",
        "portrait"
      ],
      "searchQuery": "Angelica Frausto (Nerdy Brown Kid) Portraits/Illustrations"
    }
  },
  {
    "id": "24",
    "artist": {
      "name": "Beatriz Vasquez",
      "isAlive": true,
      "bio": "Beatriz Vasquez is a Mexican-American 'artivist' who specializes in papel picado (cut paper). She transforms this delicate folk art tradition into large-scale, political statements about border culture, human rights, and the realities of the immigrant experience.",
      "website": "https://beatrizvasquez.com",
      "social_media": [
        "https://www.instagram.com/beatrizvasquezartist/"
      ]
    },
    "artwork": {
      "title": "Immigrantes Bienvenidos (Immigrants Welcome)",
      "description": "A public installation designed to signal safety and welcome to Latinx neighbors. It uses the imagery of the Monarch butterfly\u2014a symbol of natural, borderless migration\u2014to advocate for the free movement and dignity of people.",
      "medium": "Papel Picado / Mural",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "Immigration, Community Safety",
      "imageUrl": "/beatrizvasquez.jpg",
      "credit": "static1.squarespace.com",
      "categories": [
        "public art",
        "paper art",
        "installation"
      ],
      "searchQuery": "Beatriz Vasquez Immigrantes Bienvenidos (Immigrants Welcome)"
    }
  },
  {
    "id": "25",
    "artist": {
      "name": "Nasreen Khan",
      "isAlive": true,
      "bio": "Nasreen Khan is a queer, biracial, immigrant artist and writer. Living in the Haughville neighborhood, she uses art to explore 'the margins'\u2014of race, gender, and geography\u2014often using scavenged urban wood to highlight the resilience of nature in the city.",
      "website": "https://nasreenkhan.com",
      "social_media": [
        "https://www.instagram.com/nasreenkhanartist/"
      ]
    },
    "artwork": {
      "title": "Paintings & Mixed Media",
      "description": "Her mixed media works often combine natural elements with personal narrative, grappling with the feeling of 'otherness' in the Midwest and challenging the viewer to see the beauty in the marginalized and the reclaimed.",
      "medium": "Visual Art / Scavenged Wood",
      "date": "Ongoing",
      "location": "Indianapolis (Haughville)",
      "cause": "Immigration, Gender & LGBTQ+ Rights",
      "imageUrl": "/nasreenkhanbluewoman.webp",
      "categories": [
        "portrait",
        "photography"
      ],
      "searchQuery": "Nasreen Khan Paintings & Mixed Media"
    }
  },
  {
    "id": "26",
    "artist": {
      "name": "Jawshing Arthur Liou",
      "isAlive": true,
      "bio": "Jawshing Arthur Liou is a digital media artist and professor whose work often involves pilgrimages to sacred or politically charged sites. He uses high-definition video to create meditative, immersive experiences that deal with human tragedy and impermanence.",
      "website": "https://www.jawshingliou.com",
      "social_media": [
        "https://www.instagram.com/jawshingarthurliou/"
      ]
    },
    "artwork": {
      "title": "Whispers from the Divide",
      "description": "A video installation filmed along the US-Mexico border. Rather than focusing on political rhetoric, the work captures the atmospheric and physical reality of the borderlands, fostering empathy and offering a meditative look at the barriers we erect.",
      "medium": "Video Installation",
      "date": "Recent",
      "location": "Bloomington (IU Museum)",
      "cause": "Immigration, Empathy",
      "imageUrl": "/whispersfromthedivide.png",
      "categories": [
        "installation",
        "public art"
      ],
      "searchQuery": "Jawshing Arthur Liou Whispers from the Divide"
    }
  },
  {
    "id": "28",
    "artist": {
      "name": "John Fabion",
      "isAlive": false,
      "bio": "John Fabion was a WPA artist. His work in Bedford is a direct homage to the specific labor history of the 'Limestone Capital of the World'.",
      "website": "https://livingnewdeal.org/projects/post-office-bedford-in/"
    },
    "artwork": {
      "title": "Limestone Quarry Workers",
      "description": "A relief sculpture capturing the dangerous and physically demanding work of quarrying limestone. It honors the dignity of the industrial worker during an era when labor rights were a central national conversation.",
      "medium": "Terra-Cotta Relief",
      "date": "1942",
      "location": "Bedford (U.S. Post Office)",
      "cause": "Labor Rights",
      "imageUrl": "/limestonequarryworkersjohnfabion.jpg",
      "categories": [
        "relief",
        "historical"
      ],
      "searchQuery": "John Fabion Limestone Quarry Workers"
    }
  },
  {
    "id": "29",
    "artist": {
      "name": "William F. Kaeser",
      "isAlive": false,
      "bio": "William F. Kaeser was an Indiana artist who participated in the New Deal art programs. His work often focused on the honest depiction of rural and industrial labor.",
      "website": "https://livingnewdeal.org/projects/post-office-mural-pendleton-in/"
    },
    "artwork": {
      "title": "Loggers",
      "description": "A mural depicting the logging industry, emphasizing the collective effort and physical strength required by the workers, serving as a permanent tribute to the region's working-class roots.",
      "medium": "Oil on Canvas Mural",
      "date": "1941",
      "location": "Pendleton (U.S. Post Office)",
      "cause": "Labor Rights",
      "imageUrl": "/artist-29.jpg",
      "credit": "livingnewdeal.org",
      "categories": [
        "mural",
        "historical"
      ],
      "searchQuery": "William F. Kaeser Loggers"
    }
  },
  {
    "id": "30",
    "artist": {
      "name": "Nat Werner",
      "isAlive": false,
      "bio": "Nat Werner was a sculptor known for his socially conscious work. His WPA commission in Fowler reflects the agricultural backbone of the local economy.",
      "website": "https://livingnewdeal.org/projects/post-office-relief-fowler-in/"
    },
    "artwork": {
      "title": "Rest during Prairie Plowing",
      "description": "A relief sculpture that humanizes the agricultural laborer, depicting a moment of rest. It acknowledges the exhaustion and humanity of the worker behind the agricultural production.",
      "medium": "Cast Stone Relief",
      "date": "1940",
      "location": "Fowler (U.S. Post Office)",
      "cause": "Labor Rights",
      "imageUrl": "/restduringprairieplowing.jpg",
      "categories": [
        "relief",
        "New Deal art"
      ],
      "searchQuery": "Nat Werner Rest during Prairie Plowing"
    }
  },
  {
    "id": "31",
    "artist": {
      "name": "Artists At Work (Indianapolis Cohort)",
      "isAlive": true,
      "bio": "Modeled after the WPA, 'Artists At Work' is a workforce resilience program that puts artists on a salary with benefits. It treats art-making as essential labor, pairing artists with social impact organizations to serve the community.",
      "website": "https://www.cicf.org"
    },
    "artwork": {
      "title": "Salaried Artist Employment Program",
      "description": "This is not a single artwork but a radical labor model. It validates art as 'work' deserving of a living wage and health insurance, directly combating the precarious financial reality that many artists face.",
      "medium": "Program/Economic Model",
      "date": "Ongoing (Since 2023)",
      "location": "Indianapolis",
      "cause": "Labor Rights for Artists",
      "imageUrl": "/artist-31.png",
      "credit": "cicf.org",
      "categories": [
        "logo",
        "graphic design"
      ],
      "searchQuery": "Artists At Work (Indianapolis Cohort) Salaried Artist Employment Program"
    }
  },
  {
    "id": "32",
    "artist": {
      "name": "Robert Indiana (Robert Clark)",
      "isAlive": false,
      "bio": "Robert Indiana was a preeminent figure in the Pop Art movement. His iconic 'LOVE' series is known worldwide, but he also engaged deeply with political themes, using his graphic style to support causes he believed in.",
      "website": "https://www.robertindiana.com"
    },
    "artwork": {
      "title": "HOPE",
      "description": "Created for Barack Obama's 2008 presidential campaign, the 'HOPE' sculpture utilizes Indiana's signature stacked typography. Proceeds from the print sales were donated to the campaign, marking a direct intersection of Pop Art and political activism.",
      "medium": "Mixed Media / Sculpture",
      "date": "2008",
      "location": "Various Collections (Global)",
      "cause": "Political Change/Satire",
      "imageUrl": "/artist-32.png",
      "credit": "s3.amazonaws.com",
      "categories": [
        "pop art",
        "icon"
      ],
      "searchQuery": "Robert Indiana (Robert Clark) HOPE"
    }
  },
  {
    "id": "33",
    "artist": {
      "name": "Jeffrey A. Wolin",
      "isAlive": true,
      "bio": "Jeffrey A. Wolin is a photographer and professor known for his unique combination of portraiture and hand-written text. His work gives voice to his subjects, allowing them to write their own stories directly onto the photographic prints.",
      "website": "https://jeffreywolin.com",
      "social_media": [
        "https://www.instagram.com/jeffreywolin/"
      ]
    },
    "artwork": {
      "title": "Written in Memory (Series)",
      "description": "This series documents the stories of Holocaust survivors. By combining portraits with the survivors' own written memories, Wolin ensures these personal histories are preserved and witnesses to the atrocities of the past are honored.",
      "medium": "Photography with Text",
      "date": "1990s\u20132000s",
      "location": "IU Bloomington",
      "cause": "Social Justice, Holocaust Memory",
      "imageUrl": "/artist-33.jpg",
      "credit": "jeffreywolin.com",
      "categories": [
        "photography",
        "documentary"
      ],
      "searchQuery": "Jeffrey A. Wolin Written in Memory (Series)"
    }
  },
  {
    "id": "34",
    "artist": {
      "name": "Kevin West",
      "isAlive": true,
      "bio": "Kevin West is a founding member of the Eighteen Art Collective. His vibrant, often abstract portraits focus on Black identity and strength, contributing to the cultural revitalization of Indiana Avenue.",
      "website": "https://www.kwestfineart.com",
      "social_media": [
        "https://www.instagram.com/artbykwest"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter 'K')",
      "description": "West painted the 'K' in the Black Lives Matter street mural. His contribution included the name of his cousin, Michael Taylor, a Black teenager killed by police in Indianapolis in 1987, making the piece a deeply personal protest against police violence.",
      "medium": "Street Paint / Mural",
      "date": "August 2020",
      "location": "Indianapolis (Indiana Avenue)",
      "cause": "Racial Justice",
      "imageUrl": "/artist-34.jpg",
      "credit": "static.wixstatic.com",
      "latitude": 39.7753,
      "longitude": -86.1649,
      "categories": [
        "mural",
        "activism"
      ],
      "searchQuery": "Kevin West Black Lives Matter Mural (Letter 'K')"
    }
  },
  {
    "id": "35",
    "artist": {
      "name": "John G. Moore",
      "isAlive": true,
      "bio": "John G. Moore, known as 'The Jas,' is an artist and preacher whose work often blends spiritual themes with social commentary. He is a member of the Eighteen Art Collective and uses his art to uplift the Black community.",
      "website": "https://indyarts.org/artist/john-moore-2/",
      "social_media": [
        "https://www.instagram.com/john.g.moore.jr/"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter 'L')",
      "description": "Moore contributed the second 'L' to the Indiana Avenue mural. His section incorporates the word 'VOTE' written vertically next to a ballot box, emphasizing civic engagement as a crucial tool for achieving justice.",
      "medium": "Street Paint / Mural",
      "date": "August 2020",
      "location": "Indianapolis (Indiana Avenue)",
      "cause": "Racial Justice, Spirituality",
      "imageUrl": "/placeholder-art.jpg",
      "latitude": 39.7753,
      "longitude": -86.1649,
      "categories": [
        "mural",
        "activism"
      ],
      "searchQuery": "John G. Moore Black Lives Matter Mural (Letter 'L')"
    }
  },
  {
    "id": "36",
    "artist": {
      "name": "Ess McKee",
      "isAlive": true,
      "bio": "Ess McKee is a multimedia artist and member of the Eighteen Art Collective. Her work often incorporates hip-hop culture and graphic design elements to challenge stereotypes and celebrate Black creativity.",
      "website": "https://www.iamessmckee.com",
      "social_media": [
        "https://www.instagram.com/iamessmckee"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter 'S')",
      "description": "McKee painted the 'S' in the mural (in 'LIVES'), using bold graphic lines and vibrant colors. Her work often fuses hip-hop aesthetics with fine art, bringing a youthful, energetic visual language to the street.",
      "medium": "Street Paint / Mural",
      "date": "August 2020",
      "location": "Indianapolis (Indiana Avenue)",
      "cause": "Racial Justice, Youth Empowerment",
      "imageUrl": "/artist-36.jpeg",
      "credit": "static.wixstatic.com",
      "latitude": 39.7753,
      "longitude": -86.1649,
      "categories": [
        "mural",
        "activism"
      ],
      "searchQuery": "Ess McKee Black Lives Matter Mural (Letter 'S')"
    }
  },
  {
    "id": "37",
    "artist": {
      "name": "Wavy Blayne",
      "isAlive": true,
      "bio": "Wavy Blayne is a visual artist known for his graffiti-inspired style. As part of the Eighteen Art Collective, his work brings a raw, street-level energy to the conversation about racial justice in Indianapolis.",
      "website": "https://ganggangculture.com/artists/wavy-blayne/",
      "social_media": [
        "https://www.instagram.com/wavyblayne/"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter 'M')",
      "description": "Blayne's 'M' in 'MATTER' features dynamic lettering and urban aesthetics, grounding the artwork in the language of the street and claiming public space for Black voices.",
      "medium": "Street Paint / Mural",
      "date": "August 2020",
      "location": "Indianapolis (Indiana Avenue)",
      "cause": "Racial Justice",
      "imageUrl": "/artist-37.svg",
      "credit": "ganggangculture.com",
      "latitude": 39.7753,
      "longitude": -86.1649,
      "categories": [
        "mural",
        "graffiti"
      ],
      "searchQuery": "Wavy Blayne Black Lives Matter Mural (Letter 'M')"
    }
  },
  {
    "id": "38",
    "artist": {
      "name": "Harriet Watson",
      "isAlive": true,
      "bio": "Harriet Watson is an artist and educator whose work often features portraiture and historical themes. A member of the Eighteen Art Collective, she uses art to teach and preserve Black history.",
      "website": "https://www.itsartmydearwatson.com",
      "social_media": [
        "https://www.instagram.com/harrietwatson.art/"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter 'A')",
      "description": "Watson painted the second 'A' in 'MATTER', incorporating historical references to the struggles of Black Americans. Her section serves as a reminder that the current movement is part of a long lineage of freedom fighting.",
      "medium": "Street Paint / Mural",
      "date": "August 2020",
      "location": "Indianapolis (Indiana Avenue)",
      "cause": "Racial Justice, Education",
      "imageUrl": "/placeholder-art.jpg",
      "credit": "static1.squarespace.com",
      "latitude": 39.7753,
      "longitude": -86.1649,
      "categories": [
        "mural",
        "activism"
      ],
      "searchQuery": "Harriet Watson Black Lives Matter Mural (Letter 'A')"
    }
  },
  {
    "id": "39",
    "artist": {
      "name": "Deonna Craig",
      "isAlive": true,
      "bio": "Deonna Craig is an Indianapolis-based artist and entrepreneur. Her vibrant, expressive works often focus on Black womanhood and community empowerment. She is a key member of the Eighteen Art Collective.",
      "website": "https://www.deonnacraigart.com",
      "social_media": [
        "https://www.instagram.com/deonna_heartbeat/"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter 'V')",
      "description": "Craig's contribution, the letter 'V', uses bright colors and flowing forms to represent the vitality and spirit of Black women, centralizing their role in the movement for racial justice.",
      "medium": "Street Paint / Mural",
      "date": "August 2020",
      "location": "Indianapolis (Indiana Avenue)",
      "cause": "Racial Justice, Gender Equity",
      "imageUrl": "/artist-39.jpg",
      "credit": "static.wixstatic.com",
      "latitude": 39.7753,
      "longitude": -86.1649,
      "categories": [
        "mural",
        "activism"
      ],
      "searchQuery": "Deonna Craig Black Lives Matter Mural (Letter 'V')"
    }
  },
  {
    "id": "40",
    "artist": {
      "name": "Danicia Mon\u00e9t",
      "isAlive": true,
      "bio": "Danicia Mon\u00e9t is an arts administrator, planner, and artist. Her work focuses on the intersection of art, urban planning, and equity, using creativity to redesign public spaces for marginalized communities.",
      "website": "https://daniciamonet.co",
      "social_media": [
        "@DaniciaMonet on Twitter",
        "Instagram",
        "and Facebook"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter 'E')",
      "description": "Mon\u00e9t's 'E' in the mural is not just a painting but a statement on spatial justice. It reclaims the pavement of Indiana Avenue, a historically Black corridor, asserting that Black lives belong in the city's design.",
      "medium": "Street Paint / Mural",
      "date": "August 2020",
      "location": "Indianapolis (Indiana Avenue)",
      "cause": "Spatial Justice, Urban Planning",
      "imageUrl": "/placeholder-art.jpg",
      "latitude": 39.7753,
      "longitude": -86.1649,
      "categories": [
        "mural",
        "activism"
      ],
      "searchQuery": "Danicia Mon\u00e9t Black Lives Matter Mural (Letter 'E')"
    }
  },
  {
    "id": "41",
    "artist": {
      "name": "Dr. Jarrod Dortch",
      "isAlive": true,
      "bio": "Dr. Jarrod Dortch is an artist, professor, and urban farmer. He combines his passion for agriculture with visual art to address food deserts and environmental justice in Black communities.",
      "website": "https://lostdoggallery.com/artists/dr-jarrod-dortch",
      "social_media": [
        "https://www.instagram.com/jarroddortch"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Symbol '#')",
      "description": "Dortch painted the hashtag '#' symbol at the beginning of the mural. His design incorporates natural imagery, linking the fight for racial justice with the fight for land sovereignty and environmental health in urban neighborhoods.",
      "medium": "Street Paint / Mural",
      "date": "August 2020",
      "location": "Indianapolis (Indiana Avenue)",
      "cause": "Environmental Justice, Racial Justice",
      "imageUrl": "/placeholder-art.jpg",
      "latitude": 39.7753,
      "longitude": -86.1649,
      "categories": [
        "mural",
        "activism"
      ],
      "searchQuery": "Dr. Jarrod Dortch Black Lives Matter Mural (Symbol '#')"
    }
  },
  {
    "id": "42",
    "artist": {
      "name": "Matthew Cooper",
      "isAlive": true,
      "bio": "Matthew Cooper is a muralist whose work often features bold typography and graphic elements. A member of the Eighteen Art Collective, he uses his skills to broadcast messages of solidarity and strength."
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter 'T')",
      "description": "Cooper contributed to the lettering of the mural, grounding the word in a strong, architectural style. His work emphasizes the solidity and permanence of the demand for justice.",
      "medium": "Street Paint / Mural",
      "date": "August 2020",
      "location": "Indianapolis (Indiana Avenue)",
      "cause": "Racial Justice",
      "imageUrl": "/placeholder-art.jpg",
      "latitude": 39.7753,
      "longitude": -86.1649,
      "categories": [
        "mural",
        "activism"
      ],
      "searchQuery": "Matthew Cooper Black Lives Matter Mural (Letter 'T')"
    }
  },
  {
    "id": "43",
    "artist": {
      "name": "Amiah Mims",
      "isAlive": true,
      "bio": "Amiah Mims is a graphic designer and muralist. Her work is characterized by fluid lines and organic shapes, often depicting Black figures in states of grace and power.",
      "website": "https://www.worksbymimsy.com",
      "social_media": [
        "https://www.instagram.com/worksbymimsy/"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter 'A')",
      "description": "Mims contributed the first 'A' in 'BLACK'. Her design features flowing, interconnected lines that suggest movement and the continuity of the struggle for civil rights.",
      "medium": "Street Paint / Mural",
      "date": "August 2020",
      "location": "Indianapolis (Indiana Avenue)",
      "cause": "Racial Justice",
      "imageUrl": "/placeholder-art.jpg",
      "latitude": 39.7753,
      "longitude": -86.1649,
      "categories": [
        "mural",
        "activism"
      ],
      "searchQuery": "Amiah Mims Black Lives Matter Mural (Letter 'A')"
    }
  },
  {
    "id": "44",
    "artist": {
      "name": "Rebecca Robinson",
      "isAlive": true,
      "bio": "Rebecca Robinson is a mixed-media artist known for using unconventional materials like cement and tar. Her work 'Concrete Jungle' explores the harsh realities of urban life while finding beauty in resilience.",
      "website": "https://www.psnob.com/",
      "social_media": [
        "https://www.instagram.com/psnob"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter 'L')",
      "description": "Robinson's 'L' incorporates her signature texture and gritty aesthetic, utilizing cement or tar-like visual elements to symbolize the hardness of the road to justice but also the enduring strength of the Black community.",
      "medium": "Street Paint / Mural",
      "date": "August 2020",
      "location": "Indianapolis (Indiana Avenue)",
      "cause": "Racial Justice",
      "imageUrl": "/placeholder-art.jpg",
      "latitude": 39.7753,
      "longitude": -86.1649,
      "categories": [
        "mural",
        "activism"
      ],
      "searchQuery": "Rebecca Robinson Black Lives Matter Mural (Letter 'L')"
    }
  },
  {
    "id": "45",
    "artist": {
      "name": "LaShawnda Crowe Storm",
      "isAlive": true,
      "bio": "LaShawnda Crowe Storm is a mixed media artist, activist, and community organizer. Her work creates spaces for dialogue around difficult topics like racial violence and gender justice.",
      "website": "https://www.lashawndacrowestorm.com/",
      "social_media": [
        "https://www.instagram.com/lynchquilts"
      ]
    },
    "artwork": {
      "title": "The Lynch Quilts Project",
      "description": "A community-based quilting project that explores the history and legacy of lynching in America. By using the comforting medium of quilting to address horrific violence, Storm fosters communal healing and historical reckoning.",
      "medium": "Textiles / Social Practice",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "Racial Justice, Historical Memory",
      "imageUrl": "/artist-45.jpg",
      "credit": "static.wixstatic.com",
      "categories": [
        "textile",
        "social practice",
        "activism"
      ],
      "searchQuery": "LaShawnda Crowe Storm The Lynch Quilts Project"
    }
  },
  {
    "id": "46",
    "artist": {
      "name": "Anila Quayyum Agha",
      "isAlive": true,
      "bio": "Anila Quayyum Agha is a Pakistani-American artist based in Indianapolis. Her large-scale light installations explore themes of gender, exclusion, and cultural intersectionality, drawing from Islamic architectural motifs.",
      "website": "https://anilaagha.com",
      "social_media": [
        "https://www.instagram.com/anilaquayyumagha"
      ]
    },
    "artwork": {
      "title": "Intersections",
      "description": "A laser-cut cube suspended from the ceiling with a single light source, casting intricate shadows that cover the entire room. The work creates a shared space where no one is excluded, challenging the gender-based exclusion she experienced in Pakistan.",
      "medium": "Laser-cut Steel / Light",
      "date": "2014",
      "location": "Indianapolis (Newfields / Various)",
      "cause": "Gender Equity, Religious Tolerance",
      "imageUrl": "/placeholder-art.jpg",
      "categories": [
        "installation",
        "sculpture"
      ],
      "searchQuery": "Anila Quayyum Agha Intersections"
    }
  },
  {
    "id": "47",
    "artist": {
      "name": "Mari Evans",
      "isAlive": false,
      "bio": "Mari Evans was a poet, writer, and activist associated with the Black Arts Movement. While primarily a writer, her image and words have been immortalized in public art across Indianapolis, serving as a visual conscience for the city.",
      "website": "https://indyencyclopedia.org/mari-evans/"
    },
    "artwork": {
      "title": "Mural of Mari Evans",
      "description": "A large-scale mural on Mass Ave (painted by Michael Jordan, inspired by her life) featuring Evans and her poetry. It visualizes her legacy as a voice for Black liberation and truth-telling in Indiana.",
      "medium": "Public Mural (Subject)",
      "date": "2016",
      "location": "Indianapolis (Mass Ave)",
      "cause": "Civil Rights, Literature",
      "imageUrl": "/artist-47.jpg",
      "credit": "indyencyclopedia.org",
      "latitude": 39.7728,
      "longitude": -86.1506,
      "categories": [
        "mural",
        "historical"
      ],
      "searchQuery": "Mari Evans Mural of Mari Evans"
    }
  },
  {
    "id": "48",
    "artist": {
      "name": "Etheridge Knight",
      "isAlive": false,
      "bio": "Etheridge Knight was a major African American poet who began writing while incarcerated at the Indiana State Prison. His work addressed the brutality of the prison system and the realities of Black life in America.",
      "website": "https://indyencyclopedia.org/etheridge-knight/"
    },
    "artwork": {
      "title": "The Idea of Ancestry (Visual Legacy)",
      "description": "Knight's poetry has inspired numerous visual artworks and community projects in Indianapolis. His legacy is often invoked in art activism focusing on mass incarceration and prison reform.",
      "medium": "Poetry / Cultural Influence",
      "date": "1968",
      "location": "Indianapolis",
      "cause": "Prison Reform, Racial Justice",
      "imageUrl": "/artist-48.jpg",
      "credit": "indyencyclopedia.org",
      "categories": [
        "literature",
        "activism"
      ],
      "searchQuery": "Etheridge Knight The Idea of Ancestry (Visual Legacy)"
    }
  },
  {
    "id": "49",
    "artist": {
      "name": "T.C. Steele",
      "isAlive": false,
      "bio": "Theodore Clement Steele was a leading member of the Hoosier Group of Impressionist painters. He was an early advocate for nature conservation, and his move to Brown County helped establish the area as an artistic colony and protected landscape.",
      "website": "https://www.indianamuseum.org/t-c-steele-state-historic-site/"
    },
    "artwork": {
      "title": "House of the Singing Winds",
      "description": "Steele's home and studio in Brown County. His landscapes celebrated the beauty of the Indiana wilderness, playing a crucial role in the state's early conservation movement and the eventual establishment of Brown County State Park.",
      "medium": "Oil on Canvas / Architecture",
      "date": "1907",
      "location": "Nashville, IN",
      "cause": "Environmental Justice, Conservation",
      "imageUrl": "/artist-49.webp",
      "credit": "indianamuseum.org",
      "latitude": 39.1842,
      "longitude": -86.2979,
      "categories": [
        "painting",
        "historical"
      ],
      "searchQuery": "T.C. Steele House of the Singing Winds"
    }
  },
  {
    "id": "50",
    "artist": {
      "name": "Gene Stratton-Porter",
      "isAlive": false,
      "bio": "Gene Stratton-Porter was an author, nature photographer, and naturalist. She used her commercial success as a novelist to advocate for the conservation of the Limberlost Swamp, which was being destroyed for agriculture.",
      "website": "https://www.indianamuseum.org/gene-stratton-porter-state-historic-site/"
    },
    "artwork": {
      "title": "Limberlost Photographs",
      "description": "Porter's photographs of the moths and birds of the Limberlost Swamp documented a disappearing ecosystem. Her visual work was a plea for the preservation of Indiana's wetlands.",
      "medium": "Photography",
      "date": "Early 1900s",
      "location": "Geneva, IN",
      "cause": "Environmental Justice, Conservation",
      "imageUrl": "/artist-50.webp",
      "credit": "indianamuseum.org",
      "latitude": 40.5911,
      "longitude": -84.9602,
      "categories": [
        "photography",
        "historical"
      ],
      "searchQuery": "Gene Stratton-Porter Limberlost Photographs"
    }
  },
  {
    "id": "51",
    "artist": {
      "name": "Janet Scudder",
      "isAlive": false,
      "bio": "Janet Scudder was a sculptor from Terre Haute who achieved international fame. She was an ardent feminist and suffragist, frequently organizing art exhibitions to raise money for the women's suffrage movement.",
      "website": "https://www.britannica.com/biography/Janet-scudder"
    },
    "artwork": {
      "title": "Suffrage Medallions",
      "description": "Scudder created sculpture and medals specifically to support the cause of women's voting rights. She famously opposed the 'male-dominated' tradition of equestrian statues, preferring garden sculptures that integrated with nature.",
      "medium": "Bronze Sculpture",
      "date": "1910s",
      "location": "Various Collections",
      "cause": "Women's Suffrage",
      "imageUrl": "/placeholder-art.jpg",
      "categories": [
        "sculpture",
        "historical"
      ],
      "searchQuery": "Janet Scudder Suffrage Medallions"
    }
  },
  {
    "id": "52",
    "artist": {
      "name": "Tom Torluemke",
      "isAlive": true,
      "bio": "Tom Torluemke is a contemporary painter and muralist based in Northwest Indiana. His work is known for its 'social surrealism,' often tackling tough subjects like environmental pollution, politics, and war with a satirical edge.",
      "website": "http://www.tomtorluemke.com"
    },
    "artwork": {
      "title": "Simple Truths",
      "description": "A public art installation or series that often critiques the industrial landscape of Northwest Indiana and the political climate, using bold colors and distorted figures to reveal uncomfortable truths.",
      "medium": "Painting / Public Art",
      "date": "Ongoing",
      "location": "Hammond / Northwest Indiana",
      "cause": "Environmental Justice, Political Satire",
      "imageUrl": "/artist-52.jpg",
      "credit": "tomtorluemke.com",
      "categories": [
        "painting",
        "political"
      ],
      "searchQuery": "Tom Torluemke Simple Truths"
    }
  },
  {
    "id": "53",
    "artist": {
      "name": "Malcolm Mobutu Smith",
      "isAlive": true,
      "bio": "Malcolm Mobutu Smith is a ceramic artist and professor at IU Bloomington. His work merges the aesthetics of hip-hop, jazz, and graphic art with ceramic vessels to explore issues of racial identity and cultural history.",
      "website": "https://www.malcolmmobutusmith.com",
      "social_media": [
        "https://www.instagram.com/mmsclay"
      ]
    },
    "artwork": {
      "title": "Cloud Vessels",
      "description": "Ceramic vessels that blur the line between sculpture and functional object. They often feature graphic, graffiti-like surfaces that reference Black cultural production and challenge the traditional, often exclusionary history of ceramics.",
      "medium": "Stoneware / Ceramics",
      "date": "Ongoing",
      "location": "Bloomington",
      "cause": "Racial Identity, Cultural Equity",
      "imageUrl": "/artist-53.jpg",
      "credit": "malcolmmobutusmith.com",
      "categories": [
        "ceramics",
        "sculpture"
      ],
      "searchQuery": "Malcolm Mobutu Smith Cloud Vessels"
    }
  },
  {
    "id": "54",
    "artist": {
      "name": "Taresa Downing",
      "isAlive": true,
      "bio": "Taresa Downing is an Indianapolis muralist. Her work creates vibrant, inclusive public spaces, often featuring diverse figures and flora that celebrate the community's growth and diversity."
    },
    "artwork": {
      "title": "Community Growth Mural",
      "description": "A mural project that revitalizes an urban wall with images of nature and diverse community members, symbolizing hope and the collective tending of the neighborhood.",
      "medium": "Mural",
      "date": "Recent",
      "location": "Indianapolis",
      "cause": "Community Building",
      "imageUrl": "/placeholder-art.jpg",
      "categories": [
        "mural",
        "public art"
      ],
      "searchQuery": "Taresa Downing Community Growth Mural"
    }
  },
  {
    "id": "55",
    "artist": {
      "name": "Boxx the Artist",
      "isAlive": true,
      "bio": "Boxx the Artist is a visual artist and community leader. Her work focuses on community engagement, mental health awareness, and creating safe spaces for creative expression in Indianapolis.",
      "website": "https://www.boxxtheartist.com",
      "social_media": [
        "https://www.instagram.com/boxxtheartist",
        "@boxxtheartist on other major platforms"
      ]
    },
    "artwork": {
      "title": "Afro-Futurism",
      "description": "A dynamic installation located at the Indianapolis International Airport. It examines ideas of Blackness through stylized portraits that display the intersectionality of identities within the African diaspora, using race, class, and gender to explore the evolving Black Experience.",
      "medium": "Acrylic / Digital Illustration",
      "date": "2022",
      "location": "Indianapolis International Airport",
      "cause": "Racial Justice, Representation",
      "imageUrl": "/artist-55.gif",
      "credit": "boxxtheartist.com",
      "categories": [
        "installation",
        "public art"
      ],
      "searchQuery": "Boxx the Artist Afro-Futurism"
    }
  },
  {
    "id": "56",
    "artist": {
      "name": "Shamira Wilson",
      "isAlive": true,
      "bio": "Shamira Wilson is an interdisciplinary visual artist. Her work explores ethnobotany and the relationship between humans and the environment, advocating for a more sustainable and connected way of living.",
      "website": "https://shamirawilson.com",
      "social_media": [
        "https://www.instagram.com/shamirawilson",
        "https://www.instagram.com/wilsonartlab",
        "Facebook @shamirawilson"
      ]
    },
    "artwork": {
      "title": "Ethnobotany Textiles",
      "description": "Textile and print works that document native plants and their uses, serving as an archive of natural knowledge and a call to protect local biodiversity.",
      "medium": "Textiles / Printmaking",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "Environmental Justice, Indigenous Knowledge",
      "imageUrl": "/placeholder-art.jpg",
      "credit": "static1.squarespace.com",
      "categories": [
        "textile",
        "environmental"
      ],
      "searchQuery": "Shamira Wilson Ethnobotany Textiles"
    }
  },
  {
    "id": "57",
    "artist": {
      "name": "Brose Partington",
      "isAlive": true,
      "bio": "Brose Partington creates kinetic sculptures that often deal with themes of surveillance, consumerism, and the precariousness of modern life. His work moves and interacts with the viewer, creating a physical dialogue about control.",
      "website": "https://brosepartingtonstudio.com",
      "social_media": [
        "https://www.instagram.com/brosepartington"
      ]
    },
    "artwork": {
      "title": "Entangled",
      "description": "A kinetic steel sculpture located at IUPUI (Herron School of Art). It consists of eight unique elements bolted together to create an enclosed form, referencing the shape of a bird's nest. The work examines the subtle movements around us and the patterns they create.",
      "medium": "Kinetic Steel Sculpture",
      "date": "2004",
      "location": "Indianapolis (IUPUI)",
      "cause": "Environmental Awareness, Systems Thinking",
      "imageUrl": "/placeholder-art.jpg",
      "credit": "static1.squarespace.com",
      "categories": [
        "sculpture",
        "kinetic"
      ],
      "searchQuery": "Brose Partington Entangled"
    }
  },
  {
    "id": "58",
    "artist": {
      "name": "Tiffany Black",
      "isAlive": true,
      "bio": "Tiffany Black is a muralist and community artist. She specializes in collaborative mural projects that involve local residents in the design and painting process, ensuring the art reflects the people who live there.",
      "website": "https://www.tblack.co",
      "social_media": [
        "https://www.instagram.com/tblack.co"
      ]
    },
    "artwork": {
      "title": "Neighborhood History Mural",
      "description": "A large-scale mural created in collaboration with neighborhood residents, depicting their specific history and heroes, countering gentrification by cementing local identity.",
      "medium": "Community Mural",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "Community Building, Anti-Gentrification",
      "imageUrl": "/placeholder-art.jpg",
      "credit": "static1.squarespace.com",
      "categories": [
        "mural",
        "community"
      ],
      "searchQuery": "Tiffany Black Neighborhood History Mural"
    }
  },
  {
    "id": "59",
    "artist": {
      "name": "Artur Silva",
      "isAlive": true,
      "bio": "Artur Silva is a Brazil-born artist who spent significant time in Indianapolis. His work involves social practice and public interventions that question power dynamics, consumer culture, and the role of art in society.",
      "website": "https://artursilva.com",
      "social_media": [
        "https://www.instagram.com/artursilvaart"
      ]
    },
    "artwork": {
      "title": "Fountain of Youth (Collaboration)",
      "description": "A project involving community engagement and public gatherings that reimagined public spaces as sites of leisure and discourse rather than just commerce.",
      "medium": "Social Practice",
      "date": "2010s",
      "location": "Indianapolis",
      "cause": "Public Space",
      "imageUrl": "/placeholder-art.jpg",
      "categories": [
        "social practice",
        "public art"
      ],
      "searchQuery": "Artur Silva Fountain of Youth (Collaboration)"
    }
  },
  {
    "id": "60",
    "artist": {
      "name": "Greg Hull",
      "isAlive": true,
      "bio": "Greg Hull is a sculptor and professor at Herron School of Art. His work often involves light and kinetic elements, exploring natural phenomena and the fragility of ecosystems.",
      "website": "http://www.greghull.com"
    },
    "artwork": {
      "title": "Breath",
      "description": "An installation that mimics the rhythm of breathing, connecting the viewer to the biological rhythms of life and subtly advocating for mindfulness and environmental awareness.",
      "medium": "Kinetic Installation",
      "date": "Various",
      "location": "Indianapolis",
      "cause": "Environmental Justice",
      "imageUrl": "/placeholder-art.jpg",
      "categories": [
        "installation",
        "sculpture"
      ],
      "searchQuery": "Greg Hull Breath"
    }
  },
  {
    "id": "61",
    "artist": {
      "name": "Mary Miss",
      "isAlive": true,
      "bio": "Mary Miss is a pioneer of environmental art. While based in NY, her project 'City Goes to the Water' in Indianapolis was a landmark effort to reconnect the city to its waterways, advocating for water access and ecology.",
      "website": "https://marymiss.com",
      "social_media": [
        "https://www.instagram.com/marymissstudio"
      ]
    },
    "artwork": {
      "title": "City Goes to the Water",
      "description": "A large-scale environmental art plan for the White River in Indianapolis. It proposed using art to reveal the water cycle and connect citizens to the river, anticipating modern urban ecology movements.",
      "medium": "Environmental Design",
      "date": "2010s",
      "location": "Indianapolis (White River)",
      "cause": "Environmental Justice, Urban Ecology",
      "imageUrl": "/artist-61.png",
      "credit": "marymiss.com",
      "categories": [
        "environmental",
        "conceptual"
      ],
      "searchQuery": "Mary Miss City Goes to the Water"
    }
  },
  {
    "id": "62",
    "artist": {
      "name": "Shawn Michael Warren",
      "isAlive": true,
      "bio": "Shawn Michael Warren is a painter and muralist known for his hyper-realistic historical narratives. He uses his art to correct historical omissions, painting Black figures into the prominence they deserve.",
      "website": "https://www.shawnmichaelwarren.com",
      "social_media": [
        "https://www.instagram.com/shawnmichaelwarren"
      ]
    },
    "artwork": {
      "title": "Major Taylor Mural",
      "description": "A towering mural in downtown Indianapolis dedicated to Marshall 'Major' Taylor, the Black cycling world champion who faced severe racism in his time. The mural restores his legacy to the city's skyline.",
      "medium": "Mural",
      "date": "2021",
      "location": "Indianapolis (Downtown)",
      "cause": "Racial Justice, Historical Correction",
      "imageUrl": "/artist-62.png",
      "credit": "shawnmichaelwarren.com",
      "latitude": 39.7684,
      "longitude": -86.1581,
      "categories": [
        "mural",
        "historical"
      ],
      "searchQuery": "Shawn Michael Warren Major Taylor Mural"
    }
  },
  {
    "id": "63",
    "artist": {
      "name": "Pamela Bliss",
      "isAlive": true,
      "bio": "Pamela Bliss is one of Indianapolis's most prolific muralists. Her work often focuses on local icons and jazz history, preserving the cultural memory of the city's musical heritage.",
      "website": "https://www.pamelabliss.gallery"
    },
    "artwork": {
      "title": "Jazz Masters of Indiana Avenue",
      "description": "A mural celebrating the jazz legends who played on Indiana Avenue. By visualizing this history, Bliss fights against the erasure of the city's Black musical heritage.",
      "medium": "Mural",
      "date": "Various",
      "location": "Indianapolis",
      "cause": "Cultural Preservation",
      "imageUrl": "/artist-63.jpg",
      "credit": "img1.wsimg.com",
      "categories": [
        "mural",
        "historical"
      ],
      "searchQuery": "Pamela Bliss Jazz Masters of Indiana Avenue"
    }
  },
  {
    "id": "64",
    "artist": {
      "name": "Constance Scoffield",
      "isAlive": true,
      "bio": "Constance Scoffield is a painter and community artist. Her work often features vibrant, stylized depictions of women and community life, advocating for joy and connection."
    },
    "artwork": {
      "title": "Women of Strength",
      "description": "A series or mural depicting diverse women in positions of power and joy, serving as a visual affirmation of female empowerment in the local community.",
      "medium": "Painting",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "Feminism, Community",
      "imageUrl": "/placeholder-art.jpg",
      "categories": [
        "painting",
        "activism"
      ],
      "searchQuery": "Constance Scoffield Women of Strength"
    }
  },
  {
    "id": "65",
    "artist": {
      "name": "D. Del Reverda-Jennings",
      "isAlive": true,
      "bio": "D. Del Reverda-Jennings is a self-taught artist, curator, and author. Her abstract and symbolic work explores African and Caribbean spirituality and the Black female experience.",
      "website": "http://ddelreverda-j.blogspot.com/"
    },
    "artwork": {
      "title": "Goddess Series",
      "description": "Paintings and sculptures that elevate the Black female form to the status of the divine, challenging Eurocentric standards of beauty and spirituality.",
      "medium": "Mixed Media",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "Spiritual Activism, Feminism",
      "imageUrl": "/artist-65.gif",
      "credit": "resources.blogblog.com",
      "categories": [
        "painting",
        "sculpture"
      ],
      "searchQuery": "D. Del Reverda-Jennings Goddess Series"
    }
  },
  {
    "id": "66",
    "artist": {
      "name": "Lobyn Hamilton",
      "isAlive": true,
      "bio": "Lobyn Hamilton creates art using crushed vinyl records. His portraits of musical icons address themes of cultural memory, the music industry, and the recycling of culture.",
      "website": "https://studiomuseum.org/artists/walter-lobyn-hamilton"
    },
    "artwork": {
      "title": "Vinyl Portraits",
      "description": "Portraits made from vinyl records that celebrate Black musical pioneers. The medium itself\u2014broken records\u2014suggests the fragmentation and resilience of Black cultural history.",
      "medium": "Vinyl Record Collage",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "Cultural History, Recycling",
      "imageUrl": "/artist-66.jpg",
      "credit": "studiomuseum.imgix.net",
      "categories": [
        "collage",
        "music"
      ],
      "searchQuery": "Lobyn Hamilton Vinyl Portraits"
    }
  },
  {
    "id": "67",
    "artist": {
      "name": "Kyng Rhodes",
      "isAlive": true,
      "bio": "Kyng Rhodes is a young artist and muralist. His work addresses contemporary social issues like gun violence and racial equity through a bold, illustrative style.",
      "website": "https://www.kyngrhodes.com",
      "social_media": [
        "https://www.instagram.com/kyngrhodes/"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter 'B')",
      "description": "Rhodes painted the letter 'B' in the Indianapolis Black Lives Matter street mural. Inspired by Kente fabric, he used colors to symbolize privileged and unprivileged lives, with a red handprint representing lives lost to police brutality.",
      "medium": "Street Paint / Mural",
      "date": "August 2020",
      "location": "Indianapolis (Indiana Avenue)",
      "cause": "Racial Justice",
      "imageUrl": "/placeholder-art.jpg",
      "credit": "static1.squarespace.com",
      "latitude": 39.7753,
      "longitude": -86.1649,
      "categories": [
        "mural",
        "activism"
      ],
      "searchQuery": "Kyng Rhodes Black Lives Matter Mural (Letter 'B')"
    }
  },
  {
    "id": "68",
    "artist": {
      "name": "Willie Ray Parish",
      "isAlive": true,
      "bio": "Willie Ray Parish is a sculptor and professor. His large-scale public works often engage with the environment and the history of the site, advocating for a thoughtful relationship with public space.",
      "website": "https://www.willierayparish.com"
    },
    "artwork": {
      "title": "Public Sculpture (General)",
      "description": "Parish's sculptures in public parks invite interaction and contemplation of the natural landscape, resisting the commercialization of public space.",
      "medium": "Sculpture",
      "date": "Various",
      "location": "Indianapolis",
      "cause": "Public Space",
      "imageUrl": "/placeholder-art.jpg",
      "categories": [
        "sculpture",
        "public art"
      ],
      "searchQuery": "Willie Ray Parish Public Sculpture (General)"
    }
  },
  {
    "id": "69",
    "artist": {
      "name": "Don Gummer",
      "isAlive": true,
      "bio": "Don Gummer is a sculptor originally from Indiana. His constructive sculptures explore balance and tension, often placed in public plazas to alter the pedestrian experience of the city.",
      "website": "https://dongummer.com"
    },
    "artwork": {
      "title": "Southern Circle",
      "description": "A large public sculpture commissioned for Indianapolis. It creates a focal point for community gathering, asserting the importance of abstract art in civic life.",
      "medium": "Sculpture",
      "date": "2004",
      "location": "Indianapolis",
      "cause": "Civic Engagement",
      "imageUrl": "/placeholder-art.jpg",
      "categories": [
        "sculpture",
        "public art"
      ],
      "searchQuery": "Don Gummer Southern Circle"
    }
  },
  {
    "id": "70",
    "artist": {
      "name": "George Rickey",
      "isAlive": false,
      "bio": "George Rickey was a kinetic sculptor born in South Bend. His work uses air currents to move, emphasizing the invisible forces of nature and the delicate balance of the environment.",
      "website": "https://rickeyfoundation.org"
    },
    "artwork": {
      "title": "Two Lines Oblique",
      "description": "A kinetic sculpture that moves with the wind. It highlights the power of natural forces, serving as a subtle reminder of our dependence on the environment.",
      "medium": "Kinetic Sculpture",
      "date": "1967",
      "location": "Various (South Bend roots)",
      "cause": "Environmental Justice",
      "imageUrl": "/placeholder-art.jpg",
      "categories": [
        "sculpture",
        "kinetic"
      ],
      "searchQuery": "George Rickey Two Lines Oblique"
    }
  },
  {
    "id": "71",
    "artist": {
      "name": "Bill Blass",
      "isAlive": false,
      "bio": "Bill Blass was a fashion designer from Fort Wayne. While primarily in fashion, his Ghost Army service in WWII used creative deception to save lives, a unique form of artistic activism.",
      "website": "https://www.billblass.com"
    },
    "artwork": {
      "title": "Ghost Army Camouflage",
      "description": "During WWII, Blass was part of the 'Ghost Army,' creating inflatable tanks and sound effects to deceive the enemy. This work used artistic skills directly to fight fascism.",
      "medium": "Camouflage / Design",
      "date": "1940s",
      "location": "Europe (Fort Wayne native)",
      "cause": "Anti-Fascism",
      "imageUrl": "/artist-71.png",
      "credit": "cdn.shopify.com",
      "categories": [
        "design",
        "historical"
      ],
      "searchQuery": "Bill Blass Ghost Army Camouflage"
    }
  },
  {
    "id": "72",
    "artist": {
      "name": "Michael Graves",
      "isAlive": false,
      "bio": "Michael Graves was an architect from Indianapolis. Late in life, after becoming paralyzed, he became a fierce advocate for accessible design, reshaping how products and buildings are made for people with disabilities.",
      "website": "https://www.michaelgraves.com"
    },
    "artwork": {
      "title": "Accessible Design Projects",
      "description": "Graves designed hospital furniture and home goods specifically for people with mobility issues, transforming the industry's approach to disability and design.",
      "medium": "Architecture / Product Design",
      "date": "2000s",
      "location": "Global (Indy native)",
      "cause": "Disability Rights, Accessibility",
      "imageUrl": "/artist-72.svg",
      "credit": "michaelgraves.com",
      "categories": [
        "architecture",
        "design"
      ],
      "searchQuery": "Michael Graves Accessible Design Projects"
    }
  },
  {
    "id": "73",
    "artist": {
      "name": "Twyla Tharp",
      "isAlive": true,
      "bio": "Twyla Tharp is a dancer and choreographer from Portland, IN. Her work revolutionized modern dance by blending ballet with jazz and pop, challenging elitist distinctions in high culture.",
      "website": "https://www.twylatharp.org",
      "social_media": [
        "https://www.instagram.com/twylatharpstudio"
      ]
    },
    "artwork": {
      "title": "Deuce Coupe",
      "description": "A ballet set to Beach Boys music. By bringing pop culture into the ballet world, Tharp democratized dance, making it accessible to broader audiences and breaking down class barriers in the arts.",
      "medium": "Choreography",
      "date": "1973",
      "location": "Global (Portland, IN native)",
      "cause": "Cultural Democracy",
      "imageUrl": "/placeholder-art.jpg",
      "categories": [
        "dance",
        "performance"
      ],
      "searchQuery": "Twyla Tharp Deuce Coupe"
    }
  },
  {
    "id": "74",
    "artist": {
      "name": "Phyllis Boyd",
      "isAlive": true,
      "bio": "Phyllis Boyd is a landscape architect and artist, currently leading Indy Parks. Her career has been defined by using design to address environmental racism and lack of green space in urban neighborhoods.",
      "website": "https://www.groundworkindy.org"
    },
    "artwork": {
      "title": "Groundwork Indy Projects",
      "description": "Community-led design projects that transform vacant lots into parks and green spaces. Her work treats the landscape itself as a medium for social justice and equity.",
      "medium": "Landscape Architecture",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "Environmental Justice",
      "imageUrl": "/artist-74.jpg",
      "credit": "static.wixstatic.com",
      "categories": [
        "landscape",
        "activism"
      ],
      "searchQuery": "Phyllis Boyd Groundwork Indy Projects"
    }
  },
  {
    "id": "75",
    "artist": {
      "name": "Kevin Wilson",
      "isAlive": true,
      "bio": "Kevin Wilson is a muralist whose work often focuses on community pride and local history. He uses public art to beautify neglected spaces and instill a sense of ownership in residents."
    },
    "artwork": {
      "title": "Community Pride Mural",
      "description": "A mural celebrating the specific history of an Indianapolis neighborhood, using art to fight the erasure that comes with urban development.",
      "medium": "Mural",
      "date": "Recent",
      "location": "Indianapolis",
      "cause": "Community Building",
      "imageUrl": "/placeholder-art.jpg",
      "categories": [
        "mural",
        "community"
      ],
      "searchQuery": "Kevin Wilson Community Pride Mural"
    }
  },
  {
    "id": "76",
    "artist": {
      "name": "Nick Smith",
      "isAlive": true,
      "bio": "Nick Smith is a designer and artist. His work often uses bold graphics to address social issues or celebrate local culture, contributing to the visual identity of Indianapolis."
    },
    "artwork": {
      "title": "Indy aesthetic graphics",
      "description": "Smith's work often appears in posters and public campaigns, using design to promote local businesses and community events, supporting the local economic ecosystem.",
      "medium": "Graphic Design",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "Local Economy",
      "imageUrl": "/placeholder-art.jpg",
      "categories": [
        "design",
        "community"
      ],
      "searchQuery": "Nick Smith Indy aesthetic graphics"
    }
  },
  {
    "id": "77",
    "artist": {
      "name": "Travis 'Fritz' Ross",
      "isAlive": true,
      "bio": "Travis 'Fritz' Ross is a tattoo artist and painter. His fine art often explores themes of mortality and the human condition, bringing a counter-cultural aesthetic to the gallery space."
    },
    "artwork": {
      "title": "Memento Mori",
      "description": "Paintings that explore death and impermanence, challenging the viewer to confront the fragility of life. His work bridges the gap between tattoo culture and fine art.",
      "medium": "Painting",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "Cultural Dialogue",
      "imageUrl": "/placeholder-art.jpg",
      "categories": [
        "painting",
        "tattoo"
      ],
      "searchQuery": "Travis 'Fritz' Ross Memento Mori"
    }
  },
  {
    "id": "78",
    "artist": {
      "name": "Milikah Bass",
      "isAlive": true,
      "bio": "Milikah Bass is an artist and photographer. Her work captures the vibrancy of the Black community in Indianapolis, documenting events and everyday life to create a visual archive of Black joy."
    },
    "artwork": {
      "title": "Black Joy Series",
      "description": "A photography series focusing on moments of celebration and happiness within the Black community, serving as a counter-narrative to media images of trauma.",
      "medium": "Photography",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "Racial Justice, Representation",
      "imageUrl": "/placeholder-art.jpg",
      "categories": [
        "photography",
        "activism"
      ],
      "searchQuery": "Milikah Bass Black Joy Series"
    }
  },
  {
    "id": "79",
    "artist": {
      "name": "Fingers (Graffiti Artist)",
      "isAlive": true,
      "bio": "Fingers is a legendary graffiti artist in Indianapolis. His work challenges the legal boundaries of art, reclaiming public space and questioning who has the right to author the city's visual landscape."
    },
    "artwork": {
      "title": "Street Graffiti",
      "description": "Various tags and pieces across the city. While often illicit, this work asserts the presence of the artist in the urban environment and challenges the privatization of public visual space.",
      "medium": "Graffiti",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "Public Space, Free Speech",
      "imageUrl": "/placeholder-art.jpg",
      "categories": [
        "graffiti",
        "street art"
      ],
      "searchQuery": "Fingers (Graffiti Artist) Street Graffiti"
    }
  },
  {
    "id": "80",
    "artist": {
      "name": "Sacred 317",
      "isAlive": true,
      "bio": "Sacred 317 is a street artist known for intricate, mandala-like designs painted on city streets and walls. His work brings a sense of spirituality and meditation to the chaotic urban environment."
    },
    "artwork": {
      "title": "Street Mandalas",
      "description": "Intricate, geometric spiritual patterns painted on public infrastructure like intersections and sidewalks. These works interrupt the mundane daily commute, inviting city dwellers to pause, reflect, and find a moment of zen in the urban chaos.",
      "medium": "Street Art",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "Spirituality, Beautification",
      "imageUrl": "/placeholder-art.jpg",
      "categories": [
        "street art",
        "spiritual"
      ],
      "searchQuery": "Sacred 317 Street Mandalas"
    }
  },
  {
    "id": "81",
    "artist": {
      "name": "Cierra Johnson",
      "isAlive": true,
      "bio": "Cierra Johnson is a visual artist whose work explores identity and self-perception. She often uses vibrant colors and surreal imagery to depict the internal worlds of her subjects.",
      "website": "https://cjcrtv.com",
      "social_media": [
        "https://www.instagram.com/cjcrtv"
      ]
    },
    "artwork": {
      "title": "Identity Portraits",
      "description": "Paintings that explore the complexity of Black identity, moving beyond stereotypes to show the rich inner life of her subjects.",
      "medium": "Painting",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "Identity Politics",
      "imageUrl": "/artist-81.jpg",
      "credit": "cdn.myportfolio.com",
      "categories": [
        "painting",
        "portrait"
      ],
      "searchQuery": "Cierra Johnson Identity Portraits"
    }
  },
  {
    "id": "82",
    "artist": {
      "name": "Kwazar Martin",
      "isAlive": true,
      "bio": "Kwazar Martin is a painter and muralist. His work often features realistic portraits of Black figures, celebrating their beauty and dignity in a society that often undervalues them.",
      "website": "https://kwazarmartinart.com/",
      "social_media": [
        "https://www.instagram.com/kwazarmartin/"
      ]
    },
    "artwork": {
      "title": "Community Portraits",
      "description": "Large-scale murals and paintings of local community members, elevating everyday people to the status of art subjects.",
      "medium": "Painting / Mural",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "Representation",
      "imageUrl": "/artist-82.webp",
      "credit": "img1.wsimg.com",
      "categories": [
        "mural",
        "portrait"
      ],
      "searchQuery": "Kwazar Martin Community Portraits"
    }
  },
  {
    "id": "83",
    "artist": {
      "name": "Shane 'Siv' Ray",
      "isAlive": true,
      "bio": "Shane 'Siv' Ray is a graffiti artist and muralist. His work bridges the gap between street culture and gallery art, advocating for the legitimacy of aerosol art."
    },
    "artwork": {
      "title": "Aerosol Murals",
      "description": "Vibrant, technical graffiti-style murals that beautify urban decay and assert the value of street art culture.",
      "medium": "Spray Paint",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "Artistic Freedom",
      "imageUrl": "/placeholder-art.jpg",
      "categories": [
        "graffiti",
        "mural"
      ],
      "searchQuery": "Shane 'Siv' Ray Aerosol Murals"
    }
  },
  {
    "id": "84",
    "artist": {
      "name": "Lisa Sears",
      "isAlive": true,
      "bio": "Lisa Sears is a painter and muralist. Her work often features botanical themes, advocating for the preservation of nature and bringing the calming influence of plants into the city."
    },
    "artwork": {
      "title": "Botanical Murals",
      "description": "Murals of flowers and plants that green the concrete landscape, serving as a reminder of nature's resilience and importance.",
      "medium": "Mural",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "Environmental Justice",
      "imageUrl": "/placeholder-art.jpg",
      "categories": [
        "mural",
        "environmental"
      ],
      "searchQuery": "Lisa Sears Botanical Murals"
    }
  },
  {
    "id": "85",
    "artist": {
      "name": "Megan Jefferson",
      "isAlive": true,
      "bio": "Megan Jefferson is an abstract painter and muralist. Her colorful, atmospheric works create spaces of joy and respite in the public realm, advocating for mental well-being through color.",
      "website": "https://www.jeffersonartstudio.com",
      "social_media": [
        "https://www.instagram.com/megsj1art/"
      ]
    },
    "artwork": {
      "title": "Color Field Murals",
      "description": "Abstract murals that use color psychology to improve the mood of public spaces, treating the city environment as a canvas for emotional health.",
      "medium": "Mural",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "Mental Health, Public Joy",
      "imageUrl": "/artist-85.jpg",
      "credit": "static.wixstatic.com",
      "categories": [
        "mural",
        "abstract"
      ],
      "searchQuery": "Megan Jefferson Color Field Murals"
    }
  },
  {
    "id": "86",
    "artist": {
      "name": "Jackie Head",
      "isAlive": true,
      "bio": "Jackie Head is a ceramic artist who creates large-scale tile installations. Her work focuses on pattern and geometry, transforming architectural spaces into immersive experiences.",
      "website": "https://www.jackiehead.com"
    },
    "artwork": {
      "title": "Tiled Environments",
      "description": "Intricate slip-cast tile installations that cover walls, changing the viewer's perception of space and advocating for the integration of craft into architecture.",
      "medium": "Ceramics",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "Craft Advocacy",
      "imageUrl": "/placeholder-art.jpg",
      "categories": [
        "ceramics",
        "installation"
      ],
      "searchQuery": "Jackie Head Tiled Environments"
    }
  },
  {
    "id": "87",
    "artist": {
      "name": "Lauren Kussro",
      "isAlive": true,
      "bio": "Lauren Kussro is a printmaker and installation artist. Her work often involves creating immersive environments from paper and print, exploring themes of nature and fragility.",
      "website": "https://www.laurenkussro.com",
      "social_media": [
        "https://www.instagram.com/laurenkussro"
      ]
    },
    "artwork": {
      "title": "Paper Gardens",
      "description": "Installations of thousands of cut paper flowers and forms, highlighting the delicate balance of ecosystems and the ephemeral beauty of nature.",
      "medium": "Printmaking / Installation",
      "date": "Ongoing",
      "location": "Indianapolis / Houston",
      "cause": "Environmental Fragility",
      "imageUrl": "/placeholder-art.jpg",
      "categories": [
        "installation",
        "printmaking"
      ],
      "searchQuery": "Lauren Kussro Paper Gardens"
    }
  },
  {
    "id": "88",
    "artist": {
      "name": "Stefan Chinov",
      "isAlive": true,
      "bio": "Stefan Chinov is a sculptor and professor. His work explores the intersection of history, language, and form, often creating monuments that question traditional narratives.",
      "website": "https://www.stefanchinov.com"
    },
    "artwork": {
      "title": "Sculptural Forms",
      "description": "Abstract sculptures that challenge the solidity of history, suggesting that our understanding of the past is fluid and constructed.",
      "medium": "Sculpture",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "Historical Dialogue",
      "imageUrl": "/placeholder-art.jpg",
      "categories": [
        "sculpture",
        "conceptual"
      ],
      "searchQuery": "Stefan Chinov Sculptural Forms"
    }
  },
  {
    "id": "89",
    "artist": {
      "name": "Gautam Rao",
      "isAlive": true,
      "bio": "Gautam Rao is an artist and designer. He is the creator of 'Color Code,' a project that uses algorithms to create patterns. He advocates for the intersection of art, technology, and design.",
      "website": "https://gautamraoart.net",
      "social_media": [
        "https://www.instagram.com/gautamraoart"
      ]
    },
    "artwork": {
      "title": "Color Code",
      "description": "Public art and design projects that use algorithmic patterns to create vibrant, engaging spaces, bridging the gap between coding and visual art.",
      "medium": "Digital Design / Mural",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "STEAM Education",
      "imageUrl": "/placeholder-art.jpg",
      "credit": "static1.squarespace.com",
      "categories": [
        "design",
        "technology"
      ],
      "searchQuery": "Gautam Rao Color Code"
    }
  },
  {
    "id": "90",
    "artist": {
      "name": "Marna Shopoff",
      "isAlive": true,
      "bio": "Marna Shopoff is an abstract painter interested in architectural space and urban design. Her work deconstructs the built environment, exploring how we inhabit cities.",
      "website": "https://www.ferrarashowman.com/exhibitions/marna-shopoff2, https://www.ferrarashowman.com/exhibitions/marna-shopoff4",
      "social_media": [
        "https://www.instagram.com/marnashopoff"
      ]
    },
    "artwork": {
      "title": "Spatial Abstractions",
      "description": "Paintings that layer architectural forms, reflecting the complexity of urban life and the constant flux of the city.",
      "medium": "Painting",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "Urban Awareness",
      "imageUrl": "/placeholder-art.jpg",
      "categories": [
        "painting",
        "abstract"
      ],
      "searchQuery": "Marna Shopoff Spatial Abstractions"
    }
  },
  {
    "id": "91",
    "artist": {
      "name": "Casey Roberts",
      "isAlive": true,
      "bio": "Casey Roberts creates large-scale cyanotypes. His work features silhouettes of nature and animals, often with a surreal or humorous twist, advocating for a connection to the wild.",
      "website": "https://caseyroberts.com",
      "social_media": [
        "https://www.instagram.com/caseyrobertsart"
      ]
    },
    "artwork": {
      "title": "Cyanotype Landscapes",
      "description": "Blue-hued chemical paintings that depict glowing, dreamlike natural scenes, reminding viewers of the magic and mystery of the natural world.",
      "medium": "Cyanotype",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "Nature Connection",
      "imageUrl": "/placeholder-art.jpg",
      "categories": [
        "cyanotype",
        "painting"
      ],
      "searchQuery": "Casey Roberts Cyanotype Landscapes"
    }
  },
  {
    "id": "92",
    "artist": {
      "name": "Quincy Owens",
      "isAlive": true,
      "bio": "Quincy Owens is a sculptor known for his colorful, light-based installations. He often collaborates with Luke Crawley to create works that explore science and the human experience.",
      "website": "https://www.quincyowensart.com, https://www.owensandcrawley.com",
      "social_media": [
        "https://www.instagram.com/quincyowensart"
      ]
    },
    "artwork": {
      "title": "Light Totems",
      "description": "Illuminated sculptures placed in public spaces. They serve as beacons of community and hope, transforming the nightscape of the city.",
      "medium": "Light Sculpture",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "Public Space, Beautification",
      "imageUrl": "/placeholder-art.jpg",
      "categories": [
        "sculpture",
        "light art"
      ],
      "searchQuery": "Quincy Owens Light Totems"
    }
  },
  {
    "id": "93",
    "artist": {
      "name": "Luke Crawley",
      "isAlive": true,
      "bio": "Luke Crawley is a science teacher and artist. His work with Quincy Owens combines scientific principles (like sound waves or DNA) with visual art to educate and inspire.",
      "website": "https://www.owensandcrawley.com"
    },
    "artwork": {
      "title": "Prime Commonality",
      "description": "Sculptures based on DNA sequences, highlighting the biological similarities that connect all humans, serving as a scientific argument against racism and division.",
      "medium": "Sculpture",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "Science Education, Unity",
      "imageUrl": "/placeholder-art.jpg",
      "credit": "owensandcrawley.com",
      "categories": [
        "sculpture",
        "science"
      ],
      "searchQuery": "Luke Crawley Prime Commonality"
    }
  },
  {
    "id": "94",
    "artist": {
      "name": "Arlon Bayliss",
      "isAlive": true,
      "bio": "Arlon Bayliss is a glass artist and sculptor. His public works often involve community participation and celebrate local history and unity.",
      "website": "https://arlonbayliss.com",
      "social_media": [
        "https://www.instagram.com/arlonbayliss"
      ]
    },
    "artwork": {
      "title": "Seeds of Light",
      "description": "A public sculpture featuring glass and light, symbolizing the growth and potential of the community. It serves as a landmark for gathering and shared identity.",
      "medium": "Glass / Sculpture",
      "date": "Recent",
      "location": "Indianapolis",
      "cause": "Community Building",
      "imageUrl": "/artist-94.svg",
      "credit": "arlonbayliss.com",
      "categories": [
        "sculpture",
        "public art"
      ],
      "searchQuery": "Arlon Bayliss Seeds of Light"
    }
  },
  {
    "id": "95",
    "artist": {
      "name": "Dale Enochs",
      "isAlive": true,
      "bio": "Dale Enochs is a limestone sculptor. He works with Indiana's native stone, advocating for the use of local materials and celebrating the geological history of the state.",
      "website": "https://daleenochs.com"
    },
    "artwork": {
      "title": "Limestone Monoliths",
      "description": "Monumental sculptures made from Indiana limestone, combining raw stone with polished metal. They ground the viewer in the physical reality of the Indiana landscape.",
      "medium": "Limestone / Metal",
      "date": "Ongoing",
      "location": "Bloomington / Indianapolis",
      "cause": "Material Heritage",
      "imageUrl": "/placeholder-art.jpg",
      "categories": [
        "sculpture",
        "stone"
      ],
      "searchQuery": "Dale Enochs Limestone Monoliths"
    }
  },
  {
    "id": "96",
    "artist": {
      "name": "Letitia Quesenberry",
      "isAlive": true,
      "bio": "Letitia Quesenberry is a contemporary artist based in Louisville/Southern Indiana. Her work explores perception, memory, and the boundaries of vision, often using light and blurry surfaces.",
      "website": "https://www.letitiaquesenberry.com"
    },
    "artwork": {
      "title": "Hyperspace",
      "description": "Abstract works that play with focus and light, challenging the viewer's certainty about what they are seeing and suggesting the subjectivity of experience.",
      "medium": "Mixed Media",
      "date": "Ongoing",
      "location": "New Albany / Indianapolis",
      "cause": "Perception Awareness",
      "imageUrl": "/artist-96.png",
      "credit": "letitiaquesenberry.com",
      "categories": [
        "mixed media",
        "abstract"
      ],
      "searchQuery": "Letitia Quesenberry Hyperspace"
    }
  },
  {
    "id": "97",
    "artist": {
      "name": "Brian McCutcheon",
      "isAlive": true,
      "bio": "Brian McCutcheon is a sculptor whose work recontextualizes everyday objects to explore themes of masculinity, labor, and memory.",
      "website": "https://www.brianmccutcheon.com",
      "social_media": [
        "https://www.instagram.com/dontthinkaboutthebluedoor"
      ]
    },
    "artwork": {
      "title": "Out of This World",
      "description": "Works exploring the imagery of space flight and childhood wonder, critiquing the heroic narratives of the space race while celebrating imagination.",
      "medium": "Sculpture",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "Cultural Critique",
      "imageUrl": "/artist-97.jpg",
      "credit": "static.wixstatic.com",
      "categories": [
        "sculpture",
        "conceptual"
      ],
      "searchQuery": "Brian McCutcheon Out of This World"
    }
  },
  {
    "id": "98",
    "artist": {
      "name": "Gregory Steel",
      "isAlive": true,
      "bio": "Gregory Steel is a sculptor and professor. His work utilizes industrial materials to explore philosophical concepts of existence and presence.",
      "website": "https://gregorysteel.com"
    },
    "artwork": {
      "title": "Victory Unchained",
      "description": "A large-scale metal sculpture installed at Indiana University Kokomo. Inspired by the Winged Victory of Samothrace, it represents the goddess Nike. The work reflects Steel's philosophical background, merging industrial materials with classical themes.",
      "medium": "Steel Sculpture",
      "date": "2023",
      "location": "Kokomo (IU Kokomo Campus)",
      "cause": "Industrial History, Classical Reinterpretation",
      "imageUrl": "/artist-98.jpg",
      "credit": "s3.amazonaws.com",
      "categories": [
        "sculpture",
        "minimalism"
      ],
      "searchQuery": "Gregory Steel Victory Unchained"
    }
  },
  {
    "id": "99",
    "artist": {
      "name": "Katrina Murray",
      "isAlive": true,
      "bio": "Katrina Murray is a painter and sculptor. Her work features organic, biomorphic forms that explore the interconnectedness of life and the body.",
      "website": "https://katrinajmurray.com",
      "social_media": [
        "https://www.instagram.com/katrinajmurray"
      ]
    },
    "artwork": {
      "title": "Biomorphic Forms",
      "description": "Sculptures and paintings that resemble cells or organs, highlighting the vulnerability and vitality of biological life.",
      "medium": "Ceramics / Painting",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "Biological Awareness",
      "imageUrl": "/placeholder-art.jpg",
      "categories": [
        "sculpture",
        "painting"
      ],
      "searchQuery": "Katrina Murray Biomorphic Forms"
    }
  },
  {
    "id": "100",
    "artist": {
      "name": "Rachel M. Simon",
      "isAlive": true,
      "bio": "Rachel M. Simon is a painter and educator. Her work often depicts lush, tangled natural environments, exploring themes of growth, decay, and the wildness of nature."
    },
    "artwork": {
      "title": "Overgrowth",
      "description": "Paintings of dense vegetation that threaten to overtake the canvas, symbolizing the power of nature to reclaim space and the futility of human control.",
      "medium": "Painting",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "Environmental Power",
      "imageUrl": "/placeholder-art.jpg",
      "categories": [
        "painting",
        "nature"
      ],
      "searchQuery": "Rachel M. Simon Overgrowth"
    }
  },
  {
    "id": "101",
    "artist": {
      "name": "Thomas Hart Benton",
      "isAlive": false,
      "bio": "Thomas Hart Benton was a renowned American painter and muralist. He was a leader of the Regionalist art movement. His famous 'Indiana Murals' (A Social History of Indiana) were created for the 1933 Chicago World's Fair and are now housed at Indiana University."
    },
    "artwork": {
      "title": "A Social History of Indiana (Indiana Murals)",
      "description": "A massive narrative mural cycle depicting the industrial and agricultural history of Indiana. It notably includes a tribute to socialist labor leader Eugene Debs and depicts the KKK, sparking controversy for its honest, unvarnished look at the state's history.",
      "medium": "Oil on Canvas Mural",
      "date": "1933",
      "location": "Bloomington (IU Auditorium)",
      "cause": "Labor Rights, Socialism",
      "imageUrl": "/placeholder-art.jpg",
      "categories": [
        "mural",
        "historical",
        "regionalism"
      ],
      "searchQuery": "Thomas Hart Benton A Social History of Indiana (Indiana Murals)"
    }
  },
  {
    "id": "102",
    "artist": {
      "name": "India Cruse-Griffin",
      "isAlive": true,
      "bio": "India Cruse-Griffin is an Indiana-based collage artist and educator. Her vibrant, mixed-media works often depict scenes of Black life, family, and community, celebrating the resilience and joy of the African American experience.",
      "website": "https://indiacruse-griffin.org",
      "social_media": [
        "https://www.instagram.com/indiacrusegriffin"
      ]
    },
    "artwork": {
      "title": "Hope Skip and Jump",
      "description": "A mixed-media collage work located at Eskenazi Health. The piece captures the energy and optimism of childhood, using layered paper and bright colors to convey a narrative of hope and the importance of play in community health.",
      "medium": "Canvas, Collage / Mixed Media",
      "date": "2012",
      "location": "Indianapolis (Eskenazi Health)",
      "cause": "Black Experience, Family",
      "imageUrl": "/placeholder-art.jpg",
      "categories": [
        "collage",
        "mixed media"
      ],
      "searchQuery": "India Cruse-Griffin Hope Skip and Jump"
    }
  }
];
