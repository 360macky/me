function searchOnChange() {
    let projects;

    if (languageCode == 'es') {
        projects = SPANISH_PROJECTS;
    } else {
        projects = ENGLISH_PROJECTS;
    }

    let searchText = document.getElementById('search').value;

    if (searchText) {
        let results = {};
        let resultsIndex = 0;

        for (let projectIndex in projects) {
            let searchPattern = new RegExp(searchText, 'i');

            if (
                projects[projectIndex].name.search(searchPattern) != -1 ||
                projects[projectIndex].description.search(searchPattern) != -1 ||
                projects[projectIndex].tags.join(' ').search(searchPattern) != -1
            ) {
                results[resultsIndex] = projects[projectIndex];
                resultsIndex++;
            }
        }
        loadProjects(results);
    } else {
        loadProjects(projects);
    }
}

const cardElement = {
    image: '<div class="project-image-container"><div class="project-image" style="background-image: url(\'IMAGE\');"></div></div>',
    name: '<p class="project-title">NAME</p>',
    description: '<p class="project-description">DESCRIPTION</p>',
    url: '<div class="project-actions"><a class="project-actions__button project-actions__button--secondary" href="URL_REPO" target="_blank" rel="noreferrer"><i class="fas fa-laptop-code"></i> <label class="lookCode">Look code</label> <i class="fas fa-microscope"></i></a><a class="project-actions__button project-actions__button--recommended" href="URL_DEPLOY" target="_blank" rel="noreferrer"><i class="fas fa-meteor"></i> <label class="use">Use!</label> <i class="fas fa-atom"></i></a></div>',
    tag: '<a href="https://www.google.com/search?q=TAG" target="_blank" title="TAG" rel="noreferrer">TAG</a>',
};

function loadProjects(projectsStack) {
    let projectsGrid = document.getElementById('projects-grid');
    let projectsCards = [];

    for (let projectIndex in projectsStack) {
        let project = projectsStack[projectIndex];
        let projectCard = '<div class="project-card">';
        let projectUrlElement = cardElement['url'];

        projectCard = projectCard.concat(
            cardElement['image'].replace('image'.toUpperCase(), projectsStack[projectIndex]['image'])
        );

        projectCard = projectCard.concat(
            cardElement['name'].replace('name'.toUpperCase(), projectsStack[projectIndex]['name'])
        );

        projectCard = projectCard.concat(
            cardElement['description'].replace(
                'description'.toUpperCase(),
                projectsStack[projectIndex]['description']
            )
        );

        let projectTagsElement = '<p class="project-tags" id="project-tags"><b>Tags:</b>&nbsp;';

        for (let tagIndex in project['tags']) {
            let tag = project['tags'][tagIndex];
            projectTagsElement = projectTagsElement.concat(cardElement['tag'].replace(/TAG/g, tag));
        }

        projectTagsElement = projectTagsElement.concat('</p>');

        projectCard = projectCard.concat(projectTagsElement);

        projectUrlElement = projectUrlElement.replace('URL_REPO', project['url_repo']);

        projectUrlElement = projectUrlElement.replace('URL_DEPLOY', project['url_deploy']);

        projectCard = projectCard.concat(projectUrlElement);
        projectCard = projectCard.concat('</div>');

        projectsCards.push(projectCard);
    }
    projectsCards = projectsCards.join('');
    projectsGrid.innerHTML = projectsCards;
}

function switchTheme() {
    const ifDarkThemeEnabled = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (ifDarkThemeEnabled) {
        console.log('Tonight is gonna b');
        document.documentElement.style.setProperty('--white', '#f3f3f3');
        document.documentElement.style.setProperty('--color-default', '#2a313a');
        document.documentElement.style.setProperty('--color-black', '#1b1f25');
        document.documentElement.style.setProperty('--color-default-darker', '#001367');
        document.documentElement.style.setProperty('--color-primary', '#425fc7');
        document.documentElement.style.setProperty('--color-dark', '#003696');
    } else {
        document.documentElement.style.setProperty('--white', '#1b1f25');
        document.documentElement.style.setProperty('--color-default', '#dddddd');
        document.documentElement.style.setProperty('--color-black', '#f3f3f3');
        document.documentElement.style.setProperty('--color-default-darker', '#bac6ff');
        document.documentElement.style.setProperty('--color-primary', '#839eff');
        document.documentElement.style.setProperty('--color-dark', '#839eff');
    }
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', switchTheme);
switchTheme();
