// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Santiago-R', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      // manual: {
      //   // Properties for manually specifying projects
      //   projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      // },
    },
    // external: {
    //   header: 'My Projects',
    //   To hide the `External Projects` section, keep it empty.
    //   projects: [
    //     {
    //       title: 'Project Name',
    //       description:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    //       imageUrl:
    //         'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
    //       link: 'https://example.com',
    //     },
    //     {
    //       title: 'Project Name',
    //       description:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    //       imageUrl:
    //         'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
    //       link: 'https://example.com',
    //     },
    //   ],
    // },
  },
  seo: {
    title: 'Portfolio of Santiago Ruiz-Valdepeñas Martín de Almagro',
    description: 'Inteligencia artificial. Aprendizaje automático. Tecnología médica.',
    imageURL: '',
  },
  social: {
    linkedin: 'santiagoruizvaldepenas',
    twitter: 'santiago_rval',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '9903597/santiago-ruiz-valdepeñas', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    // 'PHP',
    // 'Laravel',
    // 'JavaScript',
    // 'React.js',
    // 'Node.js',
    // 'Nest.js',
    // 'MySQL',
    // 'PostgreSQL',
    // 'Git',
    // 'Docker',
    // 'PHPUnit',
    // 'CSS',
    // 'Antd',
    // 'Tailwind',
  ],
  experiences: [
    {
      company: 'Insulcloud 360º',
      position: 'Machine Learning R&D Engineer',
      from: 'November 2021',
      to: 'Present',
      // companyLink: 'https://insulcloud.com/',
    },
    {
      company: 'Huru',
      position: 'Machine Learning Lead',
      from: 'October 2022',
      to: 'September 2023',
      // companyLink: 'https://example.com',
    },
    {
      company: 'Up Devices',
      position: 'Co-founder',
      from: 'March 2016',
      to: 'September 2022',
      // companyLink: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'University of Minnesota',
      degree: 'Master of Science (MS), Mechanical Engineering',
      from: '2011',
      to: '2012',
    },
    {
      institution: 'Universidad de Castilla-La Mancha',
      degree: 'Bachelor of Science, Industrial Engineering',
      from: '2007',
      to: '2012',
    },
  ],
  certifications: [
    {
      name: 'Mastering LLMs: A Conference for Developers and Data Scientists',
      body: 'Parlance Labs @ Maven',
      year: 'Jun 2024',
      link: 'https://maven.com/certificate/mDzHjmIU',
    },
  ],
  publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  // googleAnalytics: {
  //   id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  // },
  // // Track visitor interaction and behavior. https://www.hotjar.com
  // hotjar: {
  //   id: '',
  //   snippetVersion: 6,
  // },
  themeConfig: {
    defaultTheme: 'luxury',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: false,
    
    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'luxury',
      'sunset',
      'cupcake',
      'black',
      'halloween',
      'bumblebee',
      'coffee',
      'business',
      'corporate',
      'wireframe',
      'lofi',
      'forest',
      'emerald',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'garden',
      'aqua',
      'pastel',
      'fantasy',
      'dracula',
      'cmyk',
      'autumn',
      'acid',
      'lemonade',
      'night',
      'winter',
      'dim',
      'nord',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  enablePWA: true,
};

export default CONFIG;
