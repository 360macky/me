let languageCode = navigator.language.slice(0, 2);
document.cookie = 'preferredLanguage=' + languageCode;

let languageEs = {};
let languageEn = {};

const SPANISH_LANGUAGE = 'https://marceloarias.com/lang/es.json';
const ENGLISH_LANGUAGE = 'https://marceloarias.com/lang/en.json';

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
  document.getElementById(
    'moreData__content'
  ).children[4].children[1].innerText = language.about.card_3.content[4];

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
    fetch(SPANISH_LANGUAGE)
      .then((response) => response.json())
      .then((data) => {
        renderLanguageContent(data);
      });
  } else {
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
  } else {
    languageCode = 'es';
  }
  loadLanguage(languageCode);
}

loadLanguage(languageCode);
