const languageCode = navigator.language.slice(0, 2);

const projects = {
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
        name: 'Fashion Item Classifier',
        description:
            'A  fashion-item classifier developed with TensorFlow 2.0.0',
        tags: ['TensorFlow', 'Python', 'Keras', 'Neural Networks'],
        url_repo: 'https://github.com/360macky/FashionItem-Classifier',
        url_deploy: 'https://spacex-capsules-search.vercel.app/',
        image:
            'https://github.com/zalandoresearch/fashion-mnist/raw/master/doc/img/fashion-mnist-sprite.png',
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
            'https://github.com/360macky/ReactFlix/raw/master/screenshot_1.png',
    },
    '3': {
        name: 'ISS-Tracker',
        description: 'Tracking locator for the International Space Station',
        tags: [
            'Python',
            'ISS Tracker',
            'Requests',
            'International Space Station',
        ],
        url_repo: 'https://github.com/360macky/ISS-tracker',
        url_deploy: 'https://github.com/360macky/ISS-tracker',
        image:
            'https://github.com/360macky/ISS-tracker/raw/master/screenshot.png',
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
};

function searchOnChange() {
    let searchText = document.getElementById('search').value;

    let notFoundMessageBox = document.getElementById(
        'projects--projects-not-found'
    );

    let notFoundMessage = document.getElementById('searchtext-not-found');

    if (searchText) {
        let results = {};
        let resultsIndex = 0;

        for (let projectIndex in projects) {
            let searchPattern = new RegExp(searchText, 'i');

            if (
                projects[projectIndex].name.search(searchPattern) != -1 ||
                projects[projectIndex].description.search(searchPattern) !=
                    -1 ||
                projects[projectIndex].tags.join(' ').search(searchPattern) !=
                    -1
            ) {
                results[resultsIndex] = projects[projectIndex];
                resultsIndex++;
            }
        }

        if (!results.hasOwnProperty(0)) {
            notFoundMessageBox.style.display = 'block';
            notFoundMessage.innerText = searchText;
        } else {
            notFoundMessageBox.style.display = 'none';
        }

        // console.log({ searchText });
        console.log(results);
        loadProjects(results);
    } else {
        loadProjects(projects);
        notFoundMessageBox.style.display = 'none';
    }

    // If search is not -1
    // then storage this object
    // In a object group and show it
}

const cardElement = {
    image:
        '<div class="project-image-container"><div class="project-image" style="background-image: url(\'IMAGE\');"></div></div>',
    name: '<p class="project-title">NAME</p>',
    description: '<p class="project-description">DESCRIPTION</p>',
    url:
        '<div class="project-actions"><a class="project-actions__button project-actions__button--secondary" href="URL_REPO" target="_blank"><i class="fas fa-laptop-code"></i> Look code <i class="fas fa-microscope"></i></a><a class="project-actions__button project-actions__button--recommended" href="URL_DEPLOY" target="_blank"><i class="fas fa-meteor"></i> Use! <i class="fas fa-atom"></i></a></div>',
    tag:
        '<a href="https://www.google.com/search?q=TAG" target="_blank" title="TAG">TAG</a>',
};

function concatAndReplaceTemplate(template, projectIndex, element) {
    return template.concat(
        cardElement[element].replace(
            element.toUpperCase(),
            projects[projectIndex][element]
        )
    );
}

function loadProjects(projectsStack) {
    let projectsGrid = document.getElementById('projects-grid');
    let projectsCards = [];

    for (let projectIndex in projectsStack) {
        let project = projectsStack[projectIndex];
        let projectCard = '<div class="project-card">';
        let projectUrlElement = cardElement['url'];

        // projectCard = concatAndReplaceTemplate(
        //     projectCard,
        //     projectIndex,
        //     'image'
        // );

        projectCard = projectCard.concat(
            cardElement['image'].replace(
                'image'.toUpperCase(),
                projectsStack[projectIndex]['image']
            )
        );

        projectCard = projectCard.concat(
            cardElement['name'].replace(
                'name'.toUpperCase(),
                projectsStack[projectIndex]['name']
            )
        );

        projectCard = projectCard.concat(
            cardElement['description'].replace(
                'description'.toUpperCase(),
                projectsStack[projectIndex]['description']
            )
        );

        // projectCard = concatAndReplaceTemplate(
        //     projectCard,
        //     projectIndex,
        //     'name'
        // );
        // projectCard = concatAndReplaceTemplate(
        //     projectCard,
        //     projectIndex,
        //     'description'
        // );

        let projectTagsElement =
            '<p class="project-tags" id="project-tags"><b>Tags:</b>&nbsp;';

        for (let tagIndex in project['tags']) {
            let tag = project['tags'][tagIndex];
            projectTagsElement = projectTagsElement.concat(
                cardElement['tag'].replace(/TAG/g, tag)
            );
        }

        projectTagsElement = projectTagsElement.concat('</p>');

        projectCard = projectCard.concat(projectTagsElement);

        projectUrlElement = projectUrlElement.replace(
            'URL_REPO',
            project['url_repo']
        );

        projectUrlElement = projectUrlElement.replace(
            'URL_DEPLOY',
            project['url_deploy']
        );

        projectCard = projectCard.concat(projectUrlElement);
        projectCard = projectCard.concat('</div>');

        projectsCards.push(projectCard);
    }
    projectsCards = projectsCards.join('');
    projectsGrid.innerHTML = projectsCards;
}

loadProjects(projects);
