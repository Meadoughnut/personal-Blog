const themeSwitcher = document.querySelector('#themeSwitcher');
const container= document.querySelector(".container");

let mode = "light";
themeSwitcher.addEventListener('click', function(){

  if (mode ===  "light") {
    mode = 'dark';
    container.setAttribute('class', 'dark');
  }
  else {
    mode = 'light';
    container.setAttribute("class", 'light');
  }
});

  



