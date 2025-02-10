let displayedImage = document.querySelector('.displayed-img');
let thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
let overlay = document.querySelector('.overlay');

/* Looping through images*/
for(i = 1; i <= 6; i++){
  let newImage = document.createElement('img');
  let xxx = `images/pic${i}.jpg`;
  newImage.setAttribute('src', xxx);
  newImage.setAttribute('class', `pic${i}`)
  thumbBar.appendChild(newImage);
  newImage.onclick = function(){
    displayedImage.setAttribute('src', xxx);
  }
}


/*
let pic1 = document.querySelector('.pic1') 
let pic2 = document.querySelector('.pic2') 
let pic3 = document.querySelector('.pic3') 
let pic4 = document.querySelector('.pic4') 
let pic5 = document.querySelector('.pic5') 

pic1.onclick = function(){
  displayedImage.setAttribute('src', 'images/pic1.jpg')  
}
pic2.onclick = function(){
  displayedImage.setAttribute('src', 'images/pic2.jpg')  
}
pic3.onclick = function(){
  displayedImage.setAttribute('src', 'images/pic3.jpg')  
}
pic4.onclick = function(){
  displayedImage.setAttribute('src', 'images/pic4.jpg')  
}
pic5.onclick = function(){
  displayedImage.setAttribute('src', 'images/pic5.jpg')  
}
*/



/* Wiring up the Darken/Lighten button */
btn.onclick = function(){
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
