const projectData = [
  {
    id: 'third',
    name: 'Jet-Log',
    description: 'Jet-log is a real world practical app for renting planes from anywhere in the world.',
    featuredimg: './images/plane3.png',
    technologies: ['react', 'redux', 'ruby', 'rails', 'postgresql', 'css'],
    linktolive: 'https://super-cool-site-by-berkay-akbas.netlify.app/',
    linktosource: 'https://github.com/Berkay-akbas/jet-log-frontend',
    popupdescription: 'This app designed to make plane rentals easy and convenient! With this practical and user-friendly app, you can explore all the available planes at your fingertips. Simply click on a plane to see its detailed information and choose the one that suits you best. If you are ready to make a reservation, the app has got you covered with secure authentication. You can view all your past and current reservations in one place. And for the administrators, the app provides additional authorization to manage the plane database. Whether you are a frequent traveler or just need a plane for a special occasion, this app is the perfect solution for all your plane rental needs. Built with React for frontend and Rails for backend.',
    popupimg: './images/jetlogpop.png',
  },
  {
    id: 'forth',
    name: 'BudgetSnapp',
    description: 'BudgetSnapp is mobile web application for budget management.',
    featuredimg: './images/budgetsnapop.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    linktolive: 'https://berkay-akbas.github.io/Portfolio-Page',
    linktosource: 'https://github.com/Berkay-akbas/Portfolio-Page',
    popupdescription: 'A mobile web application for budget management, built with Ruby on Rails, allows users to manage their finances on the go. Users can log in and create custom categories, each with its own image, to track their expenses. By adding expenditures to their categories, the app will automatically keep a running total of their spending, making it easy to stay within their budget.',
    popupimg: './images/budgetsnapp.png',
  },
  {
    id: 'fifth',
    name: 'Crypto Metrics',
    description: 'A single page mobile web application that list cryptocurrencies by the market cap. User can click on the coin to get more detailed stats. Built with React and Redux',
    featuredimg: './images/metrics.png',
    technologies: ['redux', 'react', 'css'],
    linktolive: 'https://63101da901ad3a07f00ed7eb--heartfelt-travesseiro-a85e40.netlify.app/',
    linktosource: 'https://github.com/Berkay-akbas/crypto-metrics',
    popupdescription: 'A user-friendly mobile app that provides real-time crypto market insights. Features include a price chart, news feed, detailed coin stats, and the ability to sort coins by market cap, to enhance the user experience, the application has been built using React, a JavaScript library for building user interfaces, and Redux, a state management library for React applications. This enables seamless navigation and ensures that the state of the application is maintained consistently throughout all pages. It offers voice search for a seamless experience.',
    popupimg: './images/metricsd.png',
  },
  {
    id: 'sixth',
    name: 'Recipe App',
    description: 'The Recipe app is a app to keeps track of all your recipes, ingredients, and inventory.',
    featuredimg: './images/recipe1.png',
    technologies: ['ruby', 'rails', 'postgresql', 'css'],
    linktolive: 'https://github.com/Berkay-akbas/recipe-app',
    linktosource: 'https://github.com/Berkay-akbas/recipe-app',

    popupdescription: 'This is a simple app designed to help you organize your recipes, ingredients, and inventory. You can save ingredients, track what you have in your inventory, create public recipes to share with others, and check the inventory and recipes to see whats missing and generate a shopping list. The app is built using Ruby on Rails and utilizes PostgreSQL as its database.',
    popupimg: './images/recipe2.png',
  },
  {
    id: 'seventh',
    name: 'My-Blog',
    description: 'The My-Blog is a blog app to keeps track of all your and your friends posts.',
    featuredimg: './images/newblog.png',
    technologies: ['ruby', 'rails', 'postgresql', 'css'],
    linktolive: 'https://blog-scy8.onrender.com/users/',
    linktosource: 'https://github.com/Berkay-akbas/My-Blog',
    popupdescription: 'My-Blog is a dynamic and interactive web blog built with Ruby on Rails. You can create an account, log in, and create posts. You can also comment and like on other users’ posts. The app is built using Ruby on Rails and utilizes PostgreSQL as its database.',
    popupimg: './images/blog2.png',
  },
  {
    id: 'first',
    name: 'Simple To-Do List',
    description: 'To-do list is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete.',
    featuredimg: './images/sstodo.png',
    technologies: ['css', 'html', 'javascript'],
    linktolive: 'https://berkay-akbas.github.io/To-do-list/',
    linktosource: 'https://github.com/Berkay-akbas/To-do-list',
    popupdescription: 'To-Do List is a web application that helps users organize and prioritize their tasks. It allows users to create a list of tasks, set deadlines, and mark them as complete. The app has a clean and user-friendly interface, designed with HTML and CSS, making it easy to add, edit, and view tasks. The functionality of the app is powered by JavaScript, allowing users to interact with the app dynamically and in real-time. The app stores the data on local storage, ensuring that the users tasks and information are saved even if the user closes the app or refreshes the page. Whether you need to keep track of work tasks, personal goals, or household chores, this app is the perfect solution for staying organized and on top of your responsibilities.',
    popupimg: './images/sstodo.png',
  },
  {
    id: 'second',
    name: 'Bookstore',
    description: 'Bookstore is a webapp for storing books. It is a Single Page App (SPA) that allows users to store, comment and save progress about the books they are reading.',
    featuredimg: './images/bookstore.png',
    technologies: ['css', 'react'],
    linktolive: 'https://berkay-bookstore.netlify.app/',
    linktosource: 'https://github.com/Berkay-akbas/Bookstore',
    popupdescription: 'This app allows you to save your progress, add comments, and keep track of all your books in one place. With React, the app is designed to be fast, responsive, and user-friendly. The interface is sleek and modern, making it easy to navigate and find what you are looking for. You can add new books to your collection, see your reading progress, and share your thoughts with others by leaving comments. And since the app is built as a single page app, you wont have to worry about reloading the page or losing your place. Get ready to revolutionize your reading experience with this single page app built with React!',
    popupimg: './images/bookstore.png',
  },
];
const gridContainer = document.createElement('div');
gridContainer.classList.add('gridContainer');
document.querySelector('.works').appendChild(gridContainer);

for (let i = 1; i < projectData.length; i += 1) {
  let li = '';
  for (let k = 0; k < projectData[i].technologies.length; k += 1) li += `<li>${projectData[i].technologies[k]}</li>`;

  const data = document.createElement('div');
  data.classList.add('card');
  data.style.backgroundImage = `url(${projectData[i].featuredimg})`;
  // data.style.background-blend-mode = 'multiply';  // eslint-disable-line

  data.innerHTML = `
        
          <div class="hide">
            <h4>
            ${projectData[i].name}
            </h4>
            <p>
            ${projectData[i].description}
            </p>
            <ul>
              ${li}
            </ul>
          </div>
          <a href="javascript:void(0)" id="${projectData[i].id}" class="btn">See Project</a>
        
    `;

  document.querySelector('.gridContainer').appendChild(data);
}

const multi = document.createElement('div');
multi.classList.add('multi-stories');
multi.innerHTML = `
    <img src=${projectData[0].featuredimg} alt="placeholder" />
      <div class="multiwrapper">
        <h3>${projectData[0].name}</h3>
        <p>
        ${projectData[0].description}
        </p>
        <ul>
          <li>css</li>
          <li>html</li>
          <li>bootstrap</li>
          <li>ruby</li>
        </ul>
        <a href="javascript:void(0)" id="${projectData[0].id}" class="btn">See Project</a>
      </div>
      `;
const reference = document.querySelector('.gridContainer');
const parent = document.querySelector('.works');
parent.insertBefore(multi, reference);

function pop(event) {
  const clickButton = event.target.getAttribute('id');
  let currentWork = '';
  projectData.forEach((e) => {
    if (clickButton === e.id) currentWork = e;
  });

  const popup = document.createElement('div');
  let liTag = '';
  for (
    let j = 0;
    j < currentWork.technologies.length;
    j += 1
  ) {
    liTag += `<li>${currentWork.technologies[j]}</li>`;
  }

  popup.classList.add('popup-container');
  popup.classList.add('visible');
  popup.setAttribute('id', 'popup');
  popup.innerHTML = `
  <div class="popup">
  
  <h3 class="title">
    ${currentWork.name}
    </h3>
    <i class="fas fa-times insidex"></i>
    <ul class="pop-ul">
      ${liTag}
    </ul>
  <div class="popupwrapper">
  <div class="project-image">
       
    <img src="${currentWork.popupimg}" alt=" " />
  </div>
  <div class="pop-desc">
    
    
  <p class="text">
   ${currentWork.popupdescription}
  </p>
    <div class="popup-buttons">
      <button type="button" class="see-live">
        See Live
          <i class="fas fa-arrow-alt-circle-right"></i>
      </button>
      <button type="button" class="see-source">
        See Source
        <i class="fab fa-github"></i>
    </div>
    </div>
  </div>  
  </div>
  `;
  document.body.appendChild(popup);
  setTimeout(() => popup.classList.add('animate'), 200);

  const rest = document.querySelectorAll('.header, .headline, .works, .about, .form, .bottomfooter');

  for (let i = 0; i < rest.length; i += 1) {
    rest[i].classList.add('blur-filter');
  }

  const x = document.querySelector('.fa-times');

  function removeFadeOut(el, speed) {
    const seconds = speed / 1000;
    el.style.transition = `all ${seconds}s ease`;
    el.style.transform = 'scale(0)';

    el.style.opacity = 0;
    setTimeout(() => {
      el.parentNode.removeChild(el);
    }, speed);
  }

  x.addEventListener('click', () => {
    removeFadeOut(popup, 500);
    for (let i = 0; i < rest.length; i += 1) {
      rest[i].classList.remove('blur-filter');
    }
  });

  document.querySelectorAll('.see-live').forEach((e) => {
    e.addEventListener('click', () => {
      window.open(currentWork.linktolive);
    });
  });

  document.querySelectorAll('.see-source').forEach((e) => {
    e.addEventListener('click', () => {
      window.open(currentWork.linktosource);
    });
  });
}

const clickAction = document.querySelectorAll('.btn');
clickAction.forEach((e) => {
  e.addEventListener('click', pop);
});
