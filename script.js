document.addEventListener('DOMContentLoaded', function() {
  const whiteCover = document.getElementById('white-cover');
  const typewriterText = document.getElementById('typewriter-text');
  typewriterText.textContent = '@360macky';
  typewriterText.style.animation = 'fadeIn 0.3s';
  typewriterText.style.animationDelay = '0.3s'; // Add this line for the delay
  typewriterText.style.animationFillMode = 'both';

  setTimeout(function() {
    whiteCover.style.opacity = '0';
    whiteCover.style.transform = 'scale(1)';
    setTimeout(function() {
      whiteCover.style.display = 'none';
    }, 400);
  }, 700);
});



const scrollElements = document.querySelectorAll('.to-be-scrolled');

/**
 * Copy email address to system clipboard
 */
const copyEmailAddress = () => {
  const copyCallToAction = document.getElementById('copy-call-to-action');
  const copiedCallToAction = document.getElementById('copied-call-to-action');
  const email = 'hello@marceloarias.com';
  navigator.clipboard.writeText(email);
  const copyIcon = document.querySelector('.fa-copy');
  copyIcon.style.display = 'none';
  copyCallToAction.style.display = 'none';
  const checkIcon = document.querySelector('.fa-check');
  checkIcon.style.display = 'inline-block';
  copiedCallToAction.style.display = 'flex';
};

/**
 * Check if element is in view
 * @param {*} el
 * @param {*} percentageScroll
 * @returns void
 */
const elementInView = (el, percentageScroll = 100) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) * (percentageScroll / 100)
  );
};

/**
 * Display element after scrolling into view
 * @param {*} element
 */
const displayScrollElement = (element) => {
  element.classList.add('scrolled');
};

/**
 * Handle scroll animation for elements
 */
const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 70)) {
      displayScrollElement(el);
    }
  });
};

window.addEventListener('scroll', () => {
  handleScrollAnimation();
});

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
  image:
    '<div class="project-image-container"><div class="project-image" style="background-image: url(\'IMAGE\');"></div></div>',
  name: '<h3 class="project-title"><img src="logo" class="project-logo" alt="" />NAME</h3>',
  description: '<p class="project-description">DESCRIPTION</p>',
  url: `
        <div class="project-actions">
            <div class="project-actions__first-section">
                <a class="project-actions__button project-actions__button--secondary" href="URL_REPO" target="_blank" rel="noreferrer">
                    <i class="fas fa-laptop-code" role="img" aria-hidden="true"></i> <label class="lookCode">Code</label>
                </a>
                <a class="project-actions__button project-actions__button--secondary" href="URL_LEARN" target="_blank" rel="noreferrer">
                    <i class="fas fa-microscope" role="img" aria-hidden="true"></i> <label class="learnMore">Explore</label>
                </a>
            </div>
            <a class="project-actions__button project-actions__button--recommended" href="URL_DEPLOY" target="_blank" rel="noreferrer">
                <i class="fas fa-sort" role="img" aria-hidden="true"></i> <label class="use" id="use">Use!</label> <i class="fas fa-atom" role="img" aria-hidden="true"></i>
            </a>
        </div>`,
  tag: '<a href="https://www.google.com/search?q=TAG" target="_blank" title="TAG" rel="noreferrer">TAG</a>',
};

function loadProjects(projectsStack) {
  let projectsGrid = document.getElementById('projects-grid');
  let projectsCards = [];

  for (let projectIndex in projectsStack) {
    let project = projectsStack[projectIndex];
    let projectCard = '<div class="project-card" role="listitem">';
    let projectUrlElement = cardElement['url'];

    projectCard = projectCard.concat(
      cardElement['image'].replace('image'.toUpperCase(), projectsStack[projectIndex]['image'])
    );

    projectCard = projectCard.concat(
      cardElement['name'].replace('name'.toUpperCase(), projectsStack[projectIndex]['name'])
      .replace('logo', projectsStack[projectIndex]['logo'])
    );

    projectCard = projectCard.concat(
      cardElement['description'].replace(
        'description'.toUpperCase(),
        projectsStack[projectIndex]['description']
      )
    );

    let projectTagsElement = '<p class="project-tags" id="project-tags">&nbsp;';

    for (let tagIndex in project['tags']) {
      let tag = project['tags'][tagIndex];
      projectTagsElement = projectTagsElement.concat(cardElement['tag'].replace(/TAG/g, tag));
    }

    projectTagsElement = projectTagsElement.concat('</p>');

    projectCard = projectCard.concat(projectTagsElement);

    projectUrlElement = projectUrlElement.replace('URL_REPO', project['url_repo']);

    projectUrlElement = projectUrlElement.replace('URL_LEARN', project['url_learn']);

    projectUrlElement = projectUrlElement.replace('URL_DEPLOY', project['url_deploy']);

    projectCard = projectCard.concat(projectUrlElement);
    projectCard = projectCard.concat('</div>');

    projectsCards.push(projectCard);
  }
  projectsCards = projectsCards.join('');
  projectsGrid.innerHTML = projectsCards;
}

const welcomeSection = document.querySelector('.welcome-section');

function switchTheme() {
  const ifDarkThemeEnabled = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (ifDarkThemeEnabled) {
    document.querySelector('link[rel="icon"]').href = './images/favicon/icon-dark.ico';
    document.getElementsByTagName('meta')['theme-color'].content = '#000000';
    document.documentElement.style.setProperty('--color-white', '#f7f7f7');
    document.documentElement.style.setProperty('--color-default', '#2a313a');
    document.documentElement.style.setProperty('--color-black', '#1b1f25');
    document.documentElement.style.setProperty('--color-default-darker', '#333333');
    document.documentElement.style.setProperty('--color-primary', '#3d3d3d');
    document.documentElement.style.setProperty('--color-dark', '#111111');
    document.documentElement.style.setProperty('--color-dark50', '#11111180');
    document.documentElement.style.setProperty('--color-primary-lighter', '#e7e7e7');
    welcomeSection.style.backgroundImage = `url('../images/dark-background.webp')`;
  } else {
    document.querySelector('link[rel="icon"]').href = './images/favicon/icon-light.ico';
    document.getElementsByTagName('meta')['theme-color'].content = '#FFFFFF';
    document.documentElement.style.setProperty('--color-white', '#1b1f25');
    document.documentElement.style.setProperty('--color-default', '#f7f7f7');
    document.documentElement.style.setProperty('--color-black', '#f7f7f7');
    document.documentElement.style.setProperty('--color-default-darker', '#cccccc');
    document.documentElement.style.setProperty('--color-primary', '#c2c2c2');
    document.documentElement.style.setProperty('--color-dark', '#eeeeee');
    document.documentElement.style.setProperty('--color-dark50', '#eeeeee80');
    document.documentElement.style.setProperty('--color-primary-lighter', '#2e2e2e');
    welcomeSection.style.backgroundImage = `url('../images/background.webp')`;
  }
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', switchTheme);
switchTheme();

// Animations at the beginning of the page

const nav = document.querySelector('.nav');
const socialNetworks = document.querySelector('.welcome-section__social-networks');
const websiteTitle = document.querySelector('.website-title');
const websiteDescription = document.querySelector('.welcome-section__handle');
const switchLanguage = document.querySelector('.welcome-section__switch_language');
const websiteWorks = document.querySelector('.welcome-section__work');
const description = websiteDescription.textContent;

setTimeout(() => {
  websiteTitle.style.opacity = '100';
  websiteTitle.style.transform = 'unset';
}, 1000);

setTimeout(() => {
  websiteDescription.style.opacity = '100';
  switchLanguage.style.opacity = '100';
  socialNetworks.style.opacity = '100';
  websiteWorks.style.opacity = '100';
  nav.style.transform = 'translateY(0)';
}, 1200);

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
      nav.classList.add('nav-scroll-down');
  } else {
      nav.classList.remove('nav-scroll-down');
  }
});
