 const navLinks = [
  {
    name: "home",
    link: "#home",
  },
  {
    name: "experience",
    link: "#experience",
  },
  {
    name: "skills",
    link: "#skills",
  },
  {
    name: "testimonials",
    link: "#testimonials",
  },
];

const Testimonials = [

'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure repellat odio sed eum praesentium possimus hic nam cupiditate architecto earum aliquam voluptatem harum nulla non, error facilis doloribus nobis assumenda nemo dolor! Dolore dicta cum dolores voluptatem tempore saepe asperiores commodi, fugit nihil adipisci placeat nostrum similique officiis nam esse?',
'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure repellat odio sed eum praesentium possimus hic nam cupiditate architecto earum aliquam voluptatem harum nulla non, error facilis doloribus nobis assumenda nemo dolor! Dolore dicta cum dolores voluptatem tempore saepe asperiores commodi, fugit nihil adipisci placeat nostrum similique officiis nam esse?',
'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure repellat odio sed eum praesentium possimus hic nam cupiditate architecto earum aliquam voluptatem harum nulla non, error facilis doloribus nobis assumenda nemo dolor! Dolore dicta cum dolores voluptatem tempore saepe asperiores commodi, fugit nihil adipisci placeat nostrum similique officiis nam esse?',

]

const Experiences = [
  {
    header: 'City Bank',
    experiences: [
      '<strong>Processed and managed sensitive customer data</strong> with meticulous accuracy and confidentiality, ensuring compliance with City Bank\'s security protocols for financial records.',
      '<strong>Contributed to a major digitalization initiative</strong> by converting paper-based account opening forms into a structured digital format, supporting the bank’s transition to a more efficient and secure data management system.',
    ],
  },
  {
    header: 'TaskEater',
    experiences: [
      '<strong>Maintained detailed game-day scorecards</strong>, accurately tracking scoring plays, key penalties, and time management for coaching staff and official records.',
      '<strong>Compiled and organized game statistics in real-time</strong>, providing reliable data to support coaching decisions and post-game analysis.',
      '<strong>Ensured 100% accuracy in record-keeping for a high-paced and time-sensitive environment</strong>, demonstrating a strong attention to detail and operational support skills.',
    ],
  },
  {
    header: 'Golden Harvest Info Tech',
    experiences: [
      '<strong>Transcribed and digitized historical records</strong> from 19th-century Orthodox Church forms written in Cyrillic, ensuring the precise conversion of data into a digital format. ',
      '<strong>Contributed to a historical preservation project</strong> by accurately entering transcribed Cyrillic text from fragile documents into a searchable database.',
      '<strong>Maintained meticulous attention to detail</strong> while transcribing complex handwritten Cyrillic text, ensuring the integrity of valuable historical and ecclesiastical information.',
    ],
  },
];

const TechIcons = [
  {
    name : 'VC Expert',
    path : './models/git-svg-transformed.glb',
    rotation : [0, 5, 0],
    scale: 0.025,
    position : [0, -0.6, -1.5]
  },
  {
    name :'Node Developer',
    path : './models/node-transformed.glb',
    rotation : [5, 39, 10],
    scale: 2,
    position : [0.2 ,0 ,-.2,0]
  },{
    name : 'React Developer',
    path : './models/react_logo-transformed.glb',
    rotation : [0, 0, 10],
    scale: 0.4,
    position : [0, 0, 0]
  },{
    name : 'ThreeJs Developer',
    path : './models/three.js-transformed.glb',
    rotation : [0, 5, 10],
    scale: 0.02,
    position : [0, 0, 0]
  },{
    name : 'Python Developer',
    path : './models/python-transformed.glb',
    rotation : [0, 0, 0],
    scale: 0.3,
    position : [0.1, 0.1, 0]
  },
]


export { navLinks ,Testimonials, Experiences, TechIcons }