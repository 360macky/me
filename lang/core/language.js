let languageCode = navigator.language.slice(0, 2);
document.cookie = 'preferredLanguage=' + languageCode;

let languageEs = {};
let languageEn = {};

const SPANISH_LANGUAGE = 'https://portfolio.marceloarias.com/lang/es.json';
const ENGLISH_LANGUAGE = 'https://portfolio.marceloarias.com/lang/en.json';

const ENGLISH_PROJECTS = {
  '0': {
      name: 'Saturn',
      description:
          'Ecommerce website powered by Firebase and integrated with Stripe',
      tags: ['ReactJS', 'Firebase', 'Material Icons', 'Stripe', 'React Router'],
      url_repo: 'https://github.com/360macky/Saturn',
      url_deploy: 'https://saturn-32b13.web.app/',
      image:
          'https://raw.githubusercontent.com/360macky/Saturn/master/.github/screenshot_tablet.png',
  },
  '1': {
      name: 'SpaceX Capsules Search',
      description:
          'SpaceX Capsules Finder with information like landings, status, type and more',
      tags: ['SpaceX API', 'ReactJS', 'NodeJS', 'SpaceX'],
      url_repo: 'https://github.com/360macky/spacex-capsules-search',
      url_deploy: 'https://spacex-capsules-search.vercel.app/',
      image:
          'https://raw.githubusercontent.com/360macky/spacex-capsules-search/master/src/images/spacex-background.jpg',
  },
  '2': {
      name: 'Lyrics Machine',
      description:
          'Get the lyrics of your favorite songs instantly',
      tags: ['Babel', 'Webpack', 'Sass', 'Fetch API', 'Bootstrap'],
      url_repo: 'https://github.com/360macky/lyrics-machine',
      url_deploy: 'https://lyrics-machine.vercel.app/',
      image:
          'https://github.com/360macky/lyrics-machine/raw/master/.github/screenshot.png',
  },
  '3': {
      name: 'ReactFlix',
      description:
          'Search and know more about your favorite movies instantly',
      tags: [
          'ReactJS',
          'NodeJS',
          'Async-await',
          'The Movie Database',
          'JSON',
          'JavaScript',
      ],
      url_repo: 'https://github.com/360macky/ReactFlix',
      url_deploy: 'https://reactflix.vercel.app/',
      image:
          'https://raw.githubusercontent.com/360macky/ReactFlix/master/.github/screenshot_1.png',
  },
  '4': {
      name: 'ISS Realtime Locator',
      description: 'Tracking locator for the International Space Station',
      tags: [
          'ReactJS',
          'Webpack',
          'Babel',
          'Sass',
          'Google Maps',
          'International Space Station',
      ],
      url_repo: 'https://github.com/360macky/ISS-Realtime-Locator/',
      url_deploy: 'https://iss-realtime-locator.vercel.app/',
      image:
          'https://github.com/360macky/ISS-Realtime-Locator/raw/master/.github/screenshot.png',
  },
  '5': {
    name: 'Manzana',
    description: 'The demo-platform for renting rooms, houses, and workspaces in LATAM',
    tags: ['Firebase', 'React Router', 'React Date Range', 'Node.js'],
    url_repo: 'https://github.com/360macky/manzana',
    url_deploy: 'https://manzana-app.web.app/',
    image:
        'https://github.com/360macky/manzana/raw/master/.github/screenshot.png',
    },
};

const SPANISH_PROJECTS = {
  '0': {
      name: 'Saturn',
      description:
          'Sitio web de comercio electrónico alojado en Firebase e integrado con Stripe',
      tags: ['ReactJS', 'Firebase', 'Material Icons', 'Stripe', 'React Router'],
      url_repo: 'https://github.com/360macky/Saturn',
      url_deploy: 'https://saturn-32b13.web.app/',
      image:
          'https://raw.githubusercontent.com/360macky/Saturn/master/.github/screenshot_tablet.png',
  },
  '1': {
      name: 'SpaceX Capsules Search',
      description:
          'Buscador de cápsulas SpaceX con información como aterrizajes, estado, tipo y más',
      tags: ['SpaceX API', 'ReactJS', 'NodeJS', 'SpaceX'],
      url_repo: 'https://github.com/360macky/spacex-capsules-search',
      url_deploy: 'https://spacex-capsules-search.vercel.app/',
      image:
          'https://raw.githubusercontent.com/360macky/spacex-capsules-search/master/src/images/spacex-background.jpg',
  },
  '2': {
      name: 'Máquina de letras',
      description:
          'Obtén la letra de una canción de forma instantánea',
      tags: ['Babel', 'Webpack', 'Sass', 'Fetch API', 'Bootstrap'],
      url_repo: 'https://github.com/360macky/lyrics-machine',
      url_deploy: 'https://lyrics-machine.vercel.app/',
      image:
          'https://github.com/360macky/lyrics-machine/raw/master/.github/screenshot.png',
  },
  '3': {
      name: 'ReactFlix',
      description:
          'Busca y conoce más sobre tus películas favoritas',
      tags: [
          'ReactJS',
          'NodeJS',
          'Async-await',
          'The Movie Database',
          'JSON',
      ],
      url_repo: 'https://github.com/360macky/ReactFlix',
      url_deploy: 'https://reactflix.vercel.app/',
      image:
          'https://raw.githubusercontent.com/360macky/ReactFlix/master/.github/screenshot_1.png',
  },
  '4': {
    name: 'Localizador en tiempo real de ISS',
    description: 'Localizador de seguimiento para la Estación Espacial Internacional',
    tags: [
        'ReactJS',
        'Webpack',
        'Babel',
        'Sass',
        'Google Maps',
        'International Space Station',
    ],
    url_repo: 'https://github.com/360macky/ISS-Realtime-Locator/',
    url_deploy: 'https://iss-realtime-locator.vercel.app/',
    image:
        'https://github.com/360macky/ISS-Realtime-Locator/raw/master/.github/screenshot.png',
  },
  '5': {
      name: 'Manzana',
      description: 'La plataforma demo para adquirir espacios libres en LATAM',
      tags: ['Firebase', 'React Router', 'React Date Range', 'Node.js'],
      url_repo: 'https://github.com/360macky/manzana',
      url_deploy: 'https://manzana-app.web.app/',
      image:
          'https://github.com/360macky/manzana/raw/master/.github/screenshot.png',
  },
};

function renderLanguageContent(language) {
  document.getElementById('switchLanguage').innerText =
    language.mainElements.switchLanguage.en.message;
  document.getElementById('title').innerText = language.welcomePage.title;
  document.getElementById('briefDescription').innerText =
    language.welcomePage.briefDescription;
  document.getElementById('buttonCallToAction').innerText =
    language.welcomePage.buttonCallToAction;

  // Projects
  document.getElementById('projectsTitle').innerText =
    language.projects.title;
  document.getElementById('search').placeholder =
    language.projects.projectInput;
  document.getElementById('show-all').innerText =
    language.projects.moreProjectsButton;

  // Nav
  document.getElementById('nav__hello').innerText =
    language.mainElements.nav[0];
  document.getElementById('nav__projects').innerText =
    language.mainElements.nav[1];
  document.getElementById('nav__about').innerText =
    language.mainElements.nav[2];
  document.getElementById('nav__contact').innerText =
    language.mainElements.nav[3];

  // About
  document.getElementById('aboutTitle').innerText = language.about.title;
  document.getElementById('briefStory').innerText =
    language.about.card_1.title;
  document.getElementById('briefStory__content').innerText =
    language.about.card_1.content;
  document.getElementById('today').innerText = language.about.card_2.title;
  document.getElementById('today__content').innerText =
    language.about.card_2.content;
  document.getElementById('moreData').innerText = language.about.card_3.title;
  document.getElementById(
    'moreData__content'
  ).children[0].children[1].innerText = language.about.card_3.content[0];
  document.getElementById(
    'moreData__content'
  ).children[1].children[1].innerText = language.about.card_3.content[1];
  document.getElementById(
    'moreData__content'
  ).children[2].children[1].innerText = language.about.card_3.content[2];
  document.getElementById(
    'moreData__content'
  ).children[3].children[1].innerText = language.about.card_3.content[3];

  // Contact
  document.getElementById('contactTitle').innerText = language.contact.title;
  document.getElementById('contactContent').children[0].children[1].innerText =
    language.contact.links['github'];
  document.getElementById('contactContent').children[1].children[1].innerText =
    language.contact.links['twitter'];
  document.getElementById('contactContent').children[2].children[1].innerText =
    language.contact.links['mail'];
  document.getElementById('contactContent').children[3].children[1].innerText =
    language.contact.links['youtube'];
  document.getElementById('contactContent').children[4].children[1].innerText =
    language.contact.links['linkedin'];

  for (
    let buttonIndex = 0;
    buttonIndex < document.getElementsByClassName('lookCode').length;
    buttonIndex++
  ) {
    document.getElementsByClassName('lookCode')[buttonIndex].innerText =
      language.projects.projectCard.lookCode;
  }

  for (
    let buttonIndex = 0;
    buttonIndex < document.getElementsByClassName('use').length;
    buttonIndex++
  ) {
    document.getElementsByClassName('use')[buttonIndex].innerText =
      language.projects.projectCard.use;
  }
}

function loadLanguage(languageCode) {
  document.documentElement.lang = languageCode;
  if (languageCode == 'es') {
    loadProjects(SPANISH_PROJECTS);
    fetch(SPANISH_LANGUAGE)
      .then((response) => response.json())
      .then((data) => {
        renderLanguageContent(data);
      });
  } else {
    loadProjects(ENGLISH_PROJECTS);
    fetch(ENGLISH_LANGUAGE)
      .then((response) => response.json())
      .then((data) => {
        renderLanguageContent(data);
      });
  }
}

function reloadLanguage() {
  if (languageCode == 'es') {
    languageCode = 'en';
    loadProjects(ENGLISH_PROJECTS);
  } else {
    languageCode = 'es';
    loadProjects(SPANISH_PROJECTS);
  }
  loadLanguage(languageCode);
}

loadLanguage(languageCode);
