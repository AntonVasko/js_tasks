let displayedImage = document.querySelector('.displayed-img');
let thumbBar = document.querySelector('.thumb-bar');
let allImg = document.querySelector('.full-img')

btn = document.querySelector('button');
let overlay = document.querySelector('.overlay');

/* Looping through images*/

  let newImage = document.createElement('img');
  newImage.setAttribute('src', xxx);
  thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
btn.onclick = function (){
  let btnStyle = btn.getAttribute('class');
  let toPut = '';
  if(btnStyle == 'dark'){
    toPut = 'light';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    btn.textContent = 'Темнее';
  } else {
    toPut = 'dark';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    btn.textContent = 'Светлее';
  }
  btn.setAttribute('class', toPut);
}
