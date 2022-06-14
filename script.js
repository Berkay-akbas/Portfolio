const menu = document.querySelector('#menu');
const navbar = document.querySelector('.navbar');
const logo = document.querySelector('.logo');

menu.addEventListener('click', () => {
  logo.classList.toggle('off');
  navbar.classList.toggle('active');
  menu.classList.toggle('fa-times');
});

navbar.addEventListener('click', () => {
  logo.classList.remove('off');
  navbar.classList.remove('active');
  menu.classList.remove('fa-times');
});

const projects = [
  {
  name: "Data Dashboard Healtcare",
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  featuredimg: "",
  technologies: "Html",
  linktolive: "#",
  linktosource: "#",
  },
  {
  name: "Data Dashboard Healtcare",
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  featuredimg: "",
  technologies: "Html",
  linktolive: "#",
  linktosource: "#",
  },
  {
  name: "asd",
  description: "asd",
  featuredimg: "asd",
  technologies: "",
  linktolive: "",
  linktosource: "",
  },
  {
  name: "asd",
  description: "asd",
  featuredimg: "asd",
  technologies: "",
  linktolive: "",
  linktosource: "",
  },
  {
  name: "asd",
  description: "asd",
  featuredimg: "asd",
  technologies: "",
  linktolive: "",
  linktosource: "",
  },
  {
  name: "asd",
  description: "asd",
  featuredimg: "asd",
  technologies: "",
  linktolive: "",
  linktosource: "",
  },
  {
  name: "asd",
  description: "asd",
  featuredimg: "asd",
  technologies: "",
  linktolive: "",
  linktosource: "",
  },
]

