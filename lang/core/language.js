let languageCode = navigator.language.slice(0, 2);
document.cookie = 'preferredLanguage=' + languageCode;

let languageEs = {};
let languageEn = {};

const SPANISH_LANGUAGE = '/lang/es.json';
const ENGLISH_LANGUAGE = '/lang/en.json';

const ENGLISH_PROJECTS = {
    0: {
        name: 'Saturn',
        description: 'Ecommerce website powered by Firebase and integrated with Stripe',
        tags: ['React', 'Firebase', 'Material Icons', 'Stripe', 'React Router'],
        url_repo: 'https://github.com/360macky/Saturn',
        url_learn: 'https://github.com/360macky/Saturn',
        url_deploy: 'https://saturn-32b13.web.app/',
        image: 'https://portfolio.marceloarias.com/images/projects/saturn.webp',
    },
    1: {
        name: '1spaceX',
        description: 'SpaceX Capsules Finder with information like landings, status, type and more',
        tags: ['SpaceX API', 'React', 'NodeJS', 'SpaceX'],
        url_repo: 'https://github.com/360macky/spacex-capsules-search',
        url_learn: 'https://github.com/360macky/spacex-capsules-search',
        url_deploy: 'https://1spacex.com/',
        image: 'https://portfolio.marceloarias.com/images/projects/spacex-search.webp',
    },
    2: {
        name: 'MiniEdit',
        description: 'A simple photo editing web app',
        tags: ['JavaScript', 'Filters.js'],
        url_repo: 'https://github.com/360macky/miniedit',
        url_learn: 'https://github.com/360macky/miniedit',
        url_deploy: 'https://miniedit.me/',
        image: 'https://portfolio.marceloarias.com/images/projects/miniedit.webp',
    },
    3: {
        name: 'ReactFlix',
        description: 'Search and know more about your favorite movies instantly',
        tags: ['React', 'NodeJS', 'Async-await', 'The Movie Database', 'JSON', 'JavaScript'],
        url_repo: 'https://github.com/360macky/ReactFlix',
        url_learn: 'https://github.com/360macky/ReactFlix',
        url_deploy: 'https://reactflix.vercel.app/',
        image: 'https://portfolio.marceloarias.com/images/projects/reactflix.webp',
    },
    4: {
        name: 'Hackbank',
        description: 'The first Bank-to-bank transfer simulator in Peru',
        tags: ['React', 'React Native', 'Expo', 'React Navigation'],
        url_repo: 'https://github.com/360macky/hackbank/',
        url_learn: 'https://github.com/360macky/hackbank/',
        url_deploy: 'https://hackbank.app/',
        image: 'https://portfolio.marceloarias.com/images/projects/hackbank.webp',
    },
    5: {
        name: 'PlatziKey',
        description:
            'A Chrome extension that improves Platzi Exams with keyboard shortcuts, an integrated whiteboard and Zen/SSH mode',
        tags: ['Chrome', 'JavaScript', 'Extension', 'DOM'],
        url_repo: 'https://github.com/360macky/platzikey',
        url_learn: 'https://github.com/360macky/platzikey',
        url_deploy: 'https://github.com/360macky/platzikey',
        image: 'https://portfolio.marceloarias.com/images/projects/platzikey.webp',
    },
};

const SPANISH_PROJECTS = {
    0: {
        name: 'Saturn',
        description: 'Sitio web de comercio electrónico alojado en Firebase e integrado con Stripe',
        tags: ['React', 'Firebase', 'Material Icons', 'Stripe', 'React Router'],
        url_repo: 'https://github.com/360macky/Saturn',
        url_learn: 'https://github.com/360macky/Saturn',
        url_deploy: 'https://saturn-32b13.web.app/',
        image: 'https://portfolio.marceloarias.com/images/projects/saturn.webp',
    },
    1: {
        name: '1spaceX',
        description: 'Buscador de cápsulas SpaceX con información como aterrizajes, estado, tipo y más',
        tags: ['SpaceX API', 'React', 'NodeJS', 'SpaceX'],
        url_repo: 'https://github.com/360macky/spacex-capsules-search',
        url_learn: 'https://github.com/360macky/spacex-capsules-search',
        url_deploy: 'https://1spacex.com/',
        image: 'https://portfolio.marceloarias.com/images/projects/spacex-search.webp',
    },
    2: {
        name: 'MiniEdit',
        description: 'Una aplicación web simple de edición de fotografías.',
        tags: ['JavaScript', 'Filters.js'],
        url_repo: 'https://github.com/360macky/miniedit',
        url_learn: 'https://github.com/360macky/miniedit',
        url_deploy: 'https://miniedit.me/',
        image: 'https://portfolio.marceloarias.com/images/projects/miniedit.webp',
    },
    3: {
        name: 'ReactFlix',
        description: 'Busca y conoce más sobre tus películas favoritas',
        tags: ['React', 'NodeJS', 'Async-await', 'The Movie Database', 'JSON'],
        url_repo: 'https://github.com/360macky/ReactFlix',
        url_learn: 'https://github.com/360macky/ReactFlix',
        url_deploy: 'https://reactflix.vercel.app/',
        image: 'https://portfolio.marceloarias.com/images/projects/reactflix.webp',
    },
    4: {
        name: 'Hackbank',
        description: 'El primer simulador de transferencia de banco-a-banco en Perú',
        tags: ['React', 'React Native', 'Expo', 'React Navigation'],
        url_repo: 'https://github.com/360macky/hackbank/',
        url_learn: 'https://github.com/360macky/hackbank/',
        url_deploy: 'https://hackbank.app/',
        image: 'https://portfolio.marceloarias.com/images/projects/hackbank.webp',
    },
    5: {
        name: 'PlatziKey',
        description:
            'Una extensión que mejora la experiencia de los exámenes de Platzi con atajos de teclado, una pizarra integrada y modo Zen/SSH',
        tags: ['Chrome', 'JavaScript', 'Extension', 'DOM'],
        url_repo: 'https://github.com/360macky/platzikey',
        url_learn: 'https://github.com/360macky/platzikey',
        url_deploy: 'https://github.com/360macky/platzikey',
        image: 'https://portfolio.marceloarias.com/images/projects/platzikey.webp',
    },
};

function renderLanguageContent(language) {
    document.getElementById('switchLanguage').textContent =
        language.mainElements.switchLanguage.en.message;
    document.getElementById('title').textContent = language.welcomePage.title;
    document.getElementById('briefDescription').textContent = language.welcomePage.briefDescription;
    document.getElementById('buttonCallToAction').textContent = language.welcomePage.buttonCallToAction;

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
    document.getElementById('today').textContent = language.about.card_2.title;
    document.getElementById('today__content').textContent = language.about.card_2.content;
    document.getElementById('moreData').textContent = language.about.card_3.title;
    document.getElementById('moreData__content').children[0].children[1].textContent =
        language.about.card_3.content[0];
    document.getElementById('moreData__content').children[1].children[1].textContent =
        language.about.card_3.content[1];
    document.getElementById('moreData__content').children[2].children[1].textContent =
        language.about.card_3.content[2];
    document.getElementById('moreData__content').children[3].children[1].textContent =
        language.about.card_3.content[3];

    // Contact
    document.getElementById('contactTitle').textContent = language.contact.title;
    document.getElementById('contactContent').children[0].children[1].textContent =
        language.contact.links['github'];
    document.getElementById('contactContent').children[1].children[1].textContent =
        language.contact.links['twitter'];
    document.getElementById('contactContent').children[2].children[1].textContent =
        language.contact.links['mail'];
    document.getElementById('contactContent').children[3].children[1].textContent =
        language.contact.links['youtube'];
    document.getElementById('contactContent').children[4].children[1].textContent =
        language.contact.links['linkedin'];
    document.getElementById('contactContent').children[5].children[1].textContent =
        language.contact.links['blog'];

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

    for (
        let buttonIndex = 0;
        buttonIndex < document.getElementsByClassName('use').length;
        buttonIndex++
    ) {
        document.getElementsByClassName('use')[buttonIndex].textContent =
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
