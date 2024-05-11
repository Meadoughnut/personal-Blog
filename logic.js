const themeSwitcher = document.querySelector('#theme-switcher');
const cont= document.querySelector(".container");

let mode = "dark";
themeSwitcher.addEventListener('click', function () {

  if (mode ===  "dark") {
    mode = 'light';
    container.setAttribute('class', 'light');
  }
  else {
    mode = 'dark';
    container.setAttribute("class", 'dark');
  }
  




});