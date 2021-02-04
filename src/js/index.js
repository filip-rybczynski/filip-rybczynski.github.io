import '../scss/main.scss';
import githubIcon from "../assets/img/github-icon-white.svg";

fetch('https://api.github.com/users/filip-rybczynski/repos?sort=created&direction=asc')
.then(resp => resp.json())
.then(resp => {
  for (let repo of resp) {
    const {name, description, html_url, homepage} = repo;
    if(homepage) {
    const projectList = document.querySelector('.projects--js');
    const projectTemplate = `<article class="project">
    <div class="project__bar"><span class="project__dot"></span></div>
    <div class="project__content">
      <img src="${githubIcon}" alt="">
    <h3 class="project__name project__grid">
      <span class="project__label">project:</span><span>${name}</span>
    </h3>
    <p class="project__description project__grid">
      <span class="project__label">description:</span><span>${description}</span>
    </p>
    <p class="project__demo project__grid">
      <span class="project__label">demo:</span>
      <span>
        &lt;<a href="${homepage}" title="link to project - demo">see here</a
        >&gt;</span
      >
    </p>
    <p class="project__github project__grid">
      <span class="project__label">github:</span><span
        >&lt;<a href="${html_url}" title="link to project - github">source code</a
        >&gt;</span
      >
    </p></div>
  </article>`;
    projectList.innerHTML += projectTemplate; //operator += pozwala dopisywać bez nadpisywania
    }
  }
})
.catch(error => {
  console.log(error);
})

const portrait = document.querySelector(".portrait--js");
const welcome = document.querySelector(".welcome--js");
const waveEmoji = document.querySelector(".wave--js");


portrait.addEventListener("mouseover", () => {
waveEmoji.classList.add("hero__wave");
welcome.classList.add("hero__pop");
});

portrait.addEventListener("mouseout", () => {
  waveEmoji.classList.remove("hero__wave");
  welcome.classList.remove("hero__pop");
  });