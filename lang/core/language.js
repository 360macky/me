let languageCode = navigator.language.slice(0, 2);
document.cookie = 'preferredLanguage=' + languageCode;

let languageEs = {};
let languageEn = {};

const SPANISH_LANGUAGE = 'https://marceloarias.com/lang/es.json';
const ENGLISH_LANGUAGE = 'https://marceloarias.com/lang/en.json';

const ENGLISH_PROJECTS = {
  '0': {
      name: 'SpaceX Capsules Search',
      description:
          'SpaceX Capsules Finder with information like landings, status, type and more',
      tags: ['SpaceX API', 'ReactJS', 'NodeJS', 'SpaceX'],
      url_repo: 'https://github.com/360macky/spacex-capsules-search',
      url_deploy: 'https://spacex-capsules-search.vercel.app/',
      image:
          'https://raw.githubusercontent.com/360macky/spacex-capsules-search/master/src/images/spacex-background.jpg',
  },
  '1': {
      name: 'Lyrics Machine',
      description:
          'Get the lyrics of your favorite songs instantly',
      tags: ['Babel', 'Webpack', 'Sass', 'Fetch API', 'Bootstrap'],
      url_repo: 'https://github.com/360macky/lyrics-machine',
      url_deploy: 'https://lyrics-machine.vercel.app/',
      image:
          'https://github.com/360macky/lyrics-machine/raw/master/.github/screenshot.png',
  },
  '2': {
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
  '3': {
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
  '4': {
      name: 'Clickmoji',
      description: 'Beautiful emoji app with Vue',
      tags: ['Vue', 'JavaScript', 'Vue Components', 'GitHub Pages'],
      url_repo: 'https://github.com/360macky/clickmoji',
      url_deploy: 'https://360macky.github.io/clickmoji/',
      image:
          'https://github.com/360macky/clickmoji/raw/master/screenshot.png',
  },
  '5': {
    name: 'SurveyFormCSS',
    description: 'Modern style form on GitHub Pages',
    tags: ['HTML', 'CSS', 'freeCodeCamp'],
    url_repo: 'https://github.com/360macky/SurveyFormCSS',
    url_deploy: 'https://360macky.github.io/SurveyFormCSS/',
    image:
        'https://github.com/360macky/SurveyFormCSS/raw/master/screenshot.png',
    },
};

const SPANISH_PROJECTS = {
  '0': {
      name: 'SpaceX Capsules Search',
      description:
          'Buscador de cápsulas SpaceX con información como aterrizajes, estado, tipo y más',
      tags: ['SpaceX API', 'ReactJS', 'NodeJS', 'SpaceX'],
      url_repo: 'https://github.com/360macky/spacex-capsules-search',
      url_deploy: 'https://spacex-capsules-search.vercel.app/',
      image:
          'https://raw.githubusercontent.com/360macky/spacex-capsules-search/master/src/images/spacex-background.jpg',
  },
  '1': {
      name: 'Máquina de letras',
      description:
          'Obtén la letra de una canción de forma instantánea',
      tags: ['Babel', 'Webpack', 'Sass', 'Fetch API', 'Bootstrap'],
      url_repo: 'https://github.com/360macky/lyrics-machine',
      url_deploy: 'https://lyrics-machine.vercel.app/',
      image:
          'https://github.com/360macky/lyrics-machine/raw/master/.github/screenshot.png',
  },
  '2': {
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
  '3': {
      name: 'Pedro Paulet Tribute',
      description: 'Aplicación web de rastreo de la estación espacial internacional en tiempo real',
      tags: [
          'HTML',
          'CSS',
          'freeCodeCamp',
      ],
      url_repo: 'https://github.com/360macky/PedroPauletTribute',
      url_deploy: 'https://360macky.github.io/PedroPauletTribute/',
      image:
          'https://camo.githubusercontent.com/22bc2c94ec3dbdfebd495a024c3c515ebd5de6a2/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f612f61642f506564726f5f5061756c65742532435f70616472655f64655f6c615f4165726f6e6175746963612e504e47',
  },
  '4': {
      name: 'SurveyFormCSS',
      description: 'Formulario de estilo moderno en GitHub Pages',
      tags: ['HTML', 'CSS', 'freeCodeCamp'],
      url_repo: 'https://github.com/360macky/SurveyFormCSS',
      url_deploy: 'https://360macky.github.io/SurveyFormCSS/',
      image:
          'https://github.com/360macky/SurveyFormCSS/raw/master/screenshot.png',
  },
  '5': {
      name: 'Clickmoji',
      description: 'Aplicación de emojis y colores en VueJS',
      tags: ['HTML', 'CSS', 'VueJS'],
      url_repo: 'https://github.com/360macky/clickmoji',
      url_deploy: 'https://360macky.github.io/clickmoji/',
      image:
          'https://github.com/360macky/clickmoji/raw/master/screenshot.png',
  },
  '6': {
      name: 'Localizador de la ISS',
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
