const sections = document.querySelectorAll('section');
let navList = document.querySelector("#navbar__list");
let navMenu = document.querySelector(".navbar__menu");

sections.forEach(section => {
  let find = section.getAttribute('id');
  let newLi = document.createElement('li');
  let newA = document.createElement('a');
  let aText = document.createTextNode(find);
  newA.appendChild(aText);
  newA.href = "#"+find;
  newA.classList.add('menu__link');
  newLi.classList.add(find);
  navList.appendChild(newLi);
  newLi.appendChild(newA);
});

function makeActive() {
  for (let section of sections){
  let find = section.getAttribute('id');
  let box = section.getBoundingClientRect();
  if (box.top <= 150 && box.bottom >= 150) {
    section.classList.add('your-active-class');
    document.querySelector("."+find).classList.add('active');
  } else {
    section.classList.remove('your-active-class');
    document.querySelector("."+find).classList.remove('active');
    }
  }
}

document.addEventListener('DOMContentLoaded',
function navHidder() {
setTimeout(() => {
    navMenu.classList.add('hide');
    navHidder();
  }, 4000);
});

document.addEventListener('scroll', () => {
  navMenu.classList.remove('hide');
  makeActive();
});
