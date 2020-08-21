let languageCode = navigator.language.slice(0, 2);
document.cookie = 'preferredLanguage=' + languageCode;

let languageEs = {};
let languageEn = {};

function loadLanguage(languageCode) {
  if (languageCode == 'es') {
    fetch('https://360macky.github.io/me/lang/es.json')
      .then((response) => response.json())
      .then((data) => (languageEs = data))
      .then(() => {
        document.getElementById('switchLanguage').innerText =
          languageEs.mainElements.switchLanguage.en.message;
        document.getElementById('title').innerText =
          languageEs.welcomePage.title;
        document.getElementById('briefDescription').innerText =
          languageEs.welcomePage.briefDescription;
        document.getElementById('longerDescription').innerText =
          languageEs.welcomePage.longerDescription;
        document.getElementById('buttonCallToAction').innerText =
          languageEs.welcomePage.buttonCallToAction;

        // Projects
        document.getElementById('projectsTitle').innerText =
          languageEs.projects.title;
        document.getElementById('search').placeholder =
          languageEs.projects.projectInput;
        document.getElementById('show-all').innerText =
          languageEs.projects.moreProjectsButton;

        // Nav
        document.getElementById('nav__hello').innerText =
          languageEs.mainElements.nav[0];
        document.getElementById('nav__projects').innerText =
          languageEs.mainElements.nav[1];
        document.getElementById('nav__about').innerText =
          languageEs.mainElements.nav[2];
        document.getElementById('nav__contact').innerText =
          languageEs.mainElements.nav[3];

        // About
        document.getElementById('aboutTitle').innerText =
          languageEs.about.title;
        document.getElementById('briefStory').innerText =
          languageEs.about.card_1.title;
        document.getElementById('briefStory__content').innerText =
          languageEs.about.card_1.content;
        document.getElementById('today').innerText =
          languageEs.about.card_2.title;
        document.getElementById('today__content').innerText =
          languageEs.about.card_2.content;
        document.getElementById('moreData').innerText =
          languageEs.about.card_3.title;
        document.getElementById(
          'moreData__content'
        ).children[0].children[1].innerText =
          languageEs.about.card_3.content[0];
        document.getElementById(
          'moreData__content'
        ).children[1].children[1].innerText =
          languageEs.about.card_3.content[1];
        document.getElementById(
          'moreData__content'
        ).children[2].children[1].innerText =
          languageEs.about.card_3.content[2];
        document.getElementById(
          'moreData__content'
        ).children[3].children[1].innerText =
          languageEs.about.card_3.content[3];
        document.getElementById(
          'moreData__content'
        ).children[4].children[1].innerText =
          languageEs.about.card_3.content[4];

        // Contact
        document.getElementById('contactTitle').innerText =
          languageEs.contact.title;
        document.getElementById(
          'contactContent'
        ).children[0].children[1].innerText =
          languageEs.contact.links['github'];
        document.getElementById(
          'contactContent'
        ).children[1].children[1].innerText =
          languageEs.contact.links['twitter'];
        document.getElementById(
          'contactContent'
        ).children[2].children[1].innerText = languageEs.contact.links['mail'];
        document.getElementById(
          'contactContent'
        ).children[3].children[1].innerText =
          languageEs.contact.links['youtube'];
        document.getElementById(
          'contactContent'
        ).children[4].children[1].innerText =
          languageEs.contact.links['linkedin'];

        for (
          let buttonIndex = 0;
          buttonIndex < document.getElementsByClassName('lookCode').length;
          buttonIndex++
        ) {
          document.getElementsByClassName('lookCode')[buttonIndex].innerText =
            languageEs.projects.projectCard.lookCode;
        }

        for (
          let buttonIndex = 0;
          buttonIndex < document.getElementsByClassName('use').length;
          buttonIndex++
        ) {
          document.getElementsByClassName('use')[buttonIndex].innerText =
            languageEs.projects.projectCard.use;
        }
      });
  } else {
    fetch('https://360macky.github.io/me/lang/es.json')
      .then((response) => response.json())
      .then((data) => (languageEn = data))
      .then(() => {});
  }
}

function reloadLanguage() {
  if (languageCode == 'es') {
    languageCode = 'en';
  } else {
    languageCode = 'es';
  }
  console.log(languageCode);
  loadLanguage(languageCode);
}

loadLanguage(languageCode);
