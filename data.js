const projectData = [
  {
  name: "Multi-Post Stories", 
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  featuredimg: "./images/snap.png",
  technologies: ["css", "html", "bootstrap", "ruby"],
  linktolive: "https://berkay-akbas.github.io/Portfolio-Page",
  linktosource: "https://github.com/Berkay-akbas/Portfolio-Page",
  },
  {
  name: "Data Dashboard Healtcare",
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  featuredimg: "./images/snap.png",
  technologies: ["html", "bootstrap", "ruby"],
  linktolive: "https://berkay-akbas.github.io/Portfolio-Page",
  linktosource: "https://github.com/Berkay-akbas/Portfolio-Page",
  },
  {
  name: "Website Portfolio",
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  featuredimg: "./images/snap.png",
  technologies: ["html", "bootstrap", "ruby"],
  linktolive: "https://berkay-akbas.github.io/Portfolio-Page",
  linktosource: "https://github.com/Berkay-akbas/Portfolio-Page",
  },
  {
  name: "Profesional Art Printing Data More",
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  featuredimg: "./images/snap.png",
  technologies: ["html", "bootstrap", "ruby"],
  linktolive: "https://berkay-akbas.github.io/Portfolio-Page",
  linktosource: "https://github.com/Berkay-akbas/Portfolio-Page",
  },
  {
  name: "Data Dashboard Healtcare",
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  featuredimg: "./images/snap.png",
  technologies: ["html", "bootstrap", "ruby"],
  linktolive: "https://berkay-akbas.github.io/Portfolio-Page",
  linktosource: "https://github.com/Berkay-akbas/Portfolio-Page",
  },
  {
  name: "Website Portfolio",
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  featuredimg: "./images/snap.png",
  technologies: ["html", "bootstrap", "ruby"],
  linktolive: "https://berkay-akbas.github.io/Portfolio-Page",
  linktosource: "https://github.com/Berkay-akbas/Portfolio-Page",
  },
  {
  name: "Profesional Art Printing Data More",
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  featuredimg: "./images/snap.png",
  technologies: ["html", "bootstrap", "ruby"],
  linktolive: "https://berkay-akbas.github.io/Portfolio-Page",
  linktosource: "https://github.com/Berkay-akbas/Portfolio-Page",
  },
]

for (let i = 1; i < projectData.length; i += 1) {
  let li = '';
  for (let k = 0; k < projectData[i].technologies.length; k ++)
    li += `<li>${projectData[i].technologies[k]}</li>`;

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
          <a href="#">See Project</a>
        
    `;

  document.querySelector('.gridContainer').appendChild(data);
}
const multi = document.createElement('div');
multi.classList.add('multi-stories')
multi.innerHTML = `
    <img src=${projectData[0].featuredimg} alt="placeholder" />
      <div class="multiwrapper">
        <h3>${projectData[0].name}</h3>
        <p>
        ${projectData[0].description}
        </p>
        <ul>
          ${li}
        </ul>
        <a href="#">See Project</a>
      </div>
      `;
 document.querySelector('.works').appendChild(multi);     
 