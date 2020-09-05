


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
        '<div class="project-actions"><a class="project-actions__button project-actions__button--secondary" href="URL_REPO" target="_blank"><i class="fas fa-laptop-code"></i> <label class="lookCode">Look code</label> <i class="fas fa-microscope"></i></a><a class="project-actions__button project-actions__button--recommended" href="URL_DEPLOY" target="_blank"><i class="fas fa-meteor"></i> <label class="use">Use!</label> <i class="fas fa-atom"></i></a></div>',
    tag:
        '<a href="https://www.google.com/search?q=TAG" target="_blank" title="TAG">TAG</a>',
};

function loadProjects(projectsStack) {
    let projectsGrid = document.getElementById('projects-grid');
    let projectsCards = [];

    for (let projectIndex in projectsStack) {
        let project = projectsStack[projectIndex];
        let projectCard = '<div class="project-card">';
        let projectUrlElement = cardElement['url'];

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
