const projectData = [
  {
    id: 'first',
    name: 'Multi-Post Stories',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    featuredimg: './images/img-Placeholder.png',
    technologies: ['css', 'html', 'bootstrap', 'ruby'],
    linktolive: 'https://berkay-akbas.github.io/Portfolio-Page',
    linktosource: 'https://github.com/Berkay-akbas/Portfolio-Page',
    popupdescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    popupimg: './images/snap.png',
  },
  {
    id: 'second',
    name: 'Data Dashboard Healtcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredimg: './images/snap.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    linktolive: 'https://berkay-akbas.github.io/Portfolio-Page',
    linktosource: 'https://github.com/Berkay-akbas/Portfolio-Page',
    popupdescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    popupimg: './images/snap.png',
  },
  {
    id: 'third',
    name: 'Website Portfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredimg: './images/snap.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    linktolive: 'https://berkay-akbas.github.io/Portfolio-Page',
    linktosource: 'https://github.com/Berkay-akbas/Portfolio-Page',
    popupdescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    popupimg: './images/snap.png',
  },
  {
    id: 'forth',
    name: 'Profesional Art <br> Printing Data More',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredimg: './images/snap.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    linktolive: 'https://berkay-akbas.github.io/Portfolio-Page',
    linktosource: 'https://github.com/Berkay-akbas/Portfolio-Page',
    popupdescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    popupimg: './images/snap.png',
  },
  {
    id: 'fifth',
    name: 'Data Dashboard Healtcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredimg: './images/snap.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    linktolive: 'https://berkay-akbas.github.io/Portfolio-Page',
    linktosource: 'https://github.com/Berkay-akbas/Portfolio-Page',
    popupdescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    popupimg: './images/snap.png',
  },
  {
    id: 'sixth',
    name: 'Website Portfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredimg: './images/snap.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    linktolive: 'https://berkay-akbas.github.io/Portfolio-Page',
    linktosource: 'https://github.com/Berkay-akbas/Portfolio-Page',
    popupdescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    popupimg: './images/snap.png',
  },
  {
    id: 'seventh',
    name: 'Profesional Art <br> Printing Data More',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredimg: './images/snap.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    linktolive: 'https://berkay-akbas.github.io/Portfolio-Page',
    linktosource: 'https://github.com/Berkay-akbas/Portfolio-Page',
    popupdescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    popupimg: './images/snap.png',
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
  `;
  document.body.appendChild(popup);

  const rest = document.querySelectorAll('.header, .headline, .works, .about, .form, .bottomfooter');

  for (let i = 0; i < rest.length; i += 1) {
    rest[i].classList.add('blur-filter');
  }

  const x = document.querySelector('.fa-times');

  x.addEventListener('click', () => {
    popup.parentNode.removeChild(popup);
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

const clickAction = document.querySelectorAll('.btn');
clickAction.forEach((e) => {
  e.addEventListener('click', pop);
});
