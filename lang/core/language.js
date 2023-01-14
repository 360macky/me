let languageCode = navigator.language.slice(0, 2);
document.cookie = 'preferredLanguage=' + languageCode;

let languageEs = {};
let languageEn = {};

const SPANISH_LANGUAGE = '/lang/es/texts.json';
const ENGLISH_LANGUAGE = '/lang/en/texts.json';

const ENGLISH_PROJECTS = {
  0: {
    name: 'Graphem',
    description: 'GraphQL telemetry plugin connector for NASA visualization framework',
    tags: ['GraphQL', 'WebSockets', 'Open MCT', 'Node package'],
    url_repo: 'https://github.com/360macky/graphem',
    url_learn: 'https://graphem.space/',
    url_deploy: 'https://articles.marceloarias.com/posts/graphem/',
    image: 'https://marceloarias.com/images/projects/graphem.webp',
  },
  1: {
    name: 'ScannerCam',
    description: 'Computer Vision web app recognizer of objects in camera with speech',
    tags: ['React', 'Tensorflow', 'Speech Synthesis API', 'TypeScript'],
    url_repo: 'https://github.com/360macky/scannercam',
    url_learn: 'https://articles.marceloarias.com/posts/scannercam/',
    url_deploy: 'https://scanner.cam/',
    image: 'https://marceloarias.com/images/projects/scannercam.webp',
  },
  2: {
    name: 'MiniEdit',
    description: 'A simple photo editing web app',
    tags: ['JavaScript', 'Filters.js'],
    url_repo: 'https://github.com/360macky/miniedit',
    url_learn: 'https://miniedit.me/about',
    url_deploy: 'https://miniedit.me/',
    image: 'https://marceloarias.com/images/projects/miniedit.webp',
  },
  3: {
    name: 'Hackbank',
    description: 'Bank-to-bank transfer simulator for Web, Android and iPhone',
    tags: ['React', 'React Native', 'Expo', 'React Navigation'],
    url_repo: 'https://github.com/360macky/hackbank/',
    url_learn: 'https://articles.marceloarias.com/posts/hackbank/',
    url_deploy: 'https://hackbank.app/',
    image: 'https://marceloarias.com/images/projects/hackbank.webp',
  },
  4: {
    name: '1spaceX',
    description: 'Search platform for SpaceX complex physical items: Capsules, Launches, Payloads, Rockets and more',
    tags: ['SpaceX API', 'React', 'NodeJS', 'SpaceX'],
    url_repo: 'https://github.com/360macky/1spaceX/',
    url_learn: 'https://1spacex.com/about',
    url_deploy: 'https://1spacex.com/',
    image: 'https://marceloarias.com/images/projects/spacex-search.webp',
  },
  5: {
    name: 'PlatKey',
    description:
      'Chrome/Safari extension that improves Platzi with keyboard shortcuts, integrated whiteboard and Zen/SSH mode',
    tags: ['Chrome', 'JavaScript', 'WebKit', 'Extension'],
    url_repo: 'https://github.com/360macky/platzikey',
    url_learn: 'https://articles.marceloarias.com',
    url_deploy: 'https://platkey.dev/',
    image: 'https://marceloarias.com/images/projects/platzikey.webp',
  },
};

const SPANISH_PROJECTS = {
  0: {
    name: 'Graphem',
    description: 'Plugin de telemtría conector entre GraphQL y el framework de visualización de NASA',
    tags: ['GraphQL', 'WebSockets', 'Open MCT', 'Node package'],
    url_repo: 'https://github.com/360macky/graphem',
    url_deploy: 'https://articles.marceloarias.com/posts/graphem/',
    url_deploy: 'https://graphem.space/',
    image: 'https://marceloarias.com/images/projects/graphem.webp',
  },
  1: {
    name: 'ScannerCam',
    description: 'Aplicación web de reconocimiento óptico de objetos en cámara con voz',
    tags: ['React', 'Tensorflow', 'Speech Synthesis API', 'TypeScript'],
    url_repo: 'https://github.com/360macky/scannercam',
    url_learn: 'https://articles.marceloarias.com/posts/scannercam/',
    url_deploy: 'https://scanner.cam/',
    image: 'https://marceloarias.com/images/projects/scannercam.webp',
  },
  2: {
    name: 'MiniEdit',
    description: 'Una aplicación web simple de edición de fotografías',
    tags: ['JavaScript', 'Filters.js'],
    url_repo: 'https://github.com/360macky/miniedit',
    url_learn: 'https://miniedit.me/about',
    url_deploy: 'https://miniedit.me/',
    image: 'https://marceloarias.com/images/projects/miniedit.webp',
  },
  3: {
    name: 'Hackbank',
    description: 'Simulador de transferencia de banco-a-banco para Web, Android y iPhone',
    tags: ['React', 'React Native', 'Expo', 'React Navigation'],
    url_repo: 'https://github.com/360macky/hackbank/',
    url_learn: 'https://articles.marceloarias.com/posts/hackbank/',
    url_deploy: 'https://web.hackbank.app/',
    image: 'https://marceloarias.com/images/projects/hackbank.webp',
  },
  4: {
    name: '1spaceX',
    description: 'Plataforma de búsqueda para componentes físicos: Capsulas, Lanzamientos, Cohetes y más',
    tags: ['SpaceX API', 'React', 'NodeJS', 'SpaceX'],
    url_repo: 'https://github.com/360macky/1spaceX/',
    url_learn: 'https://1spacex.com/about',
    url_deploy: 'https://1spacex.com/',
    image: 'https://marceloarias.com/images/projects/spacex-search.webp',
  },
  5: {
    name: 'PlatKey',
    description:
      'Extensión que mejora la experiencia de Platzi con atajos de teclado, una pizarra integrada y modo Zen/SSH',
    tags: ['Chrome', 'JavaScript', 'WebKit', 'Extension'],
    url_repo: 'https://github.com/360macky/platzikey',
    url_learn: 'https://articles.marceloarias.com',
    url_deploy: 'https://platkey.dev/',
    image: 'https://marceloarias.com/images/projects/platzikey.webp',
  },
};

function renderLanguageContent(language) {
  document.title = language.title;

  document.getElementById('switchLanguage').textContent =
    language.mainElements.switchLanguage.en.message;
  document.getElementById('title').textContent = language.welcomePage.title;
  document.getElementById('briefDescription').textContent = language.welcomePage.briefDescription;
  document.getElementById('buttonCallToAction').textContent = language.welcomePage.buttonCallToAction;
  document.getElementById('contributionsDescription').textContent = language.welcomePage.contributionsDescription;

  // Projects
  document.getElementById('projectsTitle').textContent = language.projects.title;
  document.getElementById('projectsDescription').textContent = language.projects.description;
  document.getElementById('show-all').textContent = language.projects.moreProjectsButton;
  document.getElementById('show-all-text').textContent = language.projects.textMoreProjects;

  // Nav
  document.getElementById('nav__hello').textContent = language.mainElements.nav[0];
  document.getElementById('nav__projects').textContent = language.mainElements.nav[1];
  document.getElementById('nav__about').textContent = language.mainElements.nav[2];
  document.getElementById('nav__contact').textContent = language.mainElements.nav[3];

  // About
  document.getElementById('aboutTitle').textContent = language.about.title;

  document.getElementById('briefStory').textContent = language.about.card_1.title;
  document.getElementById('briefStory__content').textContent = language.about.card_1.content;

  document.getElementById('techWriting').textContent = language.about.card_2.title;
  document.getElementById('techWriting__content').textContent = language.about.card_2.content;

  document.getElementById('workStory').textContent = language.about.card_3.title;
  document.getElementById('workStory__content').textContent = language.about.card_3.content;

  document.getElementById('openSource').textContent = language.about.card_4.title;
  document.getElementById('openSource__content').textContent = language.about.card_4.content;

  document.getElementById('creator').textContent = language.about.card_5.title;
  document.getElementById('creator__content').textContent = language.about.card_5.content;

  document.getElementById('lifelongLearner').textContent = language.about.card_6.title;
  document.getElementById('lifelongLearner__content').textContent = language.about.card_6.content;

  document.getElementById('today').textContent = language.about.card_7.title;
  document.getElementById('today__content').textContent = language.about.card_7.content;

  document.getElementById('contributions').textContent = language.about.contributions;
  document.getElementById('devArticles').textContent = language.about.devArticles;
  document.getElementById('onlineCertifications').textContent = language.about.onlineCertifications;

  // Contact
  document.getElementById('contactTitle').textContent = language.contact.title;
  document.getElementById('contactDescription').textContent = language.contact.description;
  document.getElementById('contactCallToAction').textContent = language.contact.buttonCallToAction;
  document.getElementById('contactContent').children[0].children[1].textContent =
    language.contact.links['github'];
  document.getElementById('contactContent').children[1].children[1].textContent =
    language.contact.links['twitter'];
  document.getElementById('contactContent').children[2].children[1].textContent =
    language.contact.links['youtube'];
  document.getElementById('contactContent').children[3].children[1].textContent =
    language.contact.links['linkedin'];
  document.getElementById('contactContent').children[4].children[1].textContent =
    language.contact.links['blog'];
  document.getElementById('contactContent').children[5].children[1].textContent =
    language.contact.links['google'];

  for (
    let buttonIndex = 0;
    buttonIndex < document.getElementsByClassName('lookCode').length;
    buttonIndex++
  ) {
    document.getElementsByClassName('lookCode')[buttonIndex].textContent =
      language.projects.projectCard.lookCode;
  }

  for (
    let buttonIndex = 0;
    buttonIndex < document.getElementsByClassName('learnMore').length;
    buttonIndex++
  ) {
    document.getElementsByClassName('learnMore')[buttonIndex].textContent =
      language.projects.projectCard.learnMore;
  }

  for (let buttonIndex = 0; buttonIndex < document.getElementsByClassName('use').length; buttonIndex++) {
    document.getElementsByClassName('use')[buttonIndex].textContent = language.projects.projectCard.use;
  }
}

const loadLanguage = async (languageCode) => {
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
};

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
