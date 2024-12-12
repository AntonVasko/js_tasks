const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = 'На улице было 94 по Фаренгейту, поэтому :insertx: пошел прогуляться. Добравшись до :inserty:, они несколько мгновений смотрели в ужасе, затем :insertz:. Боб все это увидел, но не удивился — :insertx: весит 300 фунтов, и день был жаркий.';
let insertX = ['Соловей-разбойник', 'Баба-яга', 'Дед Мороз'];
let insertY = ['кухня', 'Диснейленд', 'дремучий лес'];
let insertZ = ['самовозгорающийся', 'растаял в лужу на тротуаре', 'превратился в слизняка и уполз'];

randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    const name = customName.value;

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);

  }

  story.textContent = ;
  story.style.visibility = 'visible';
}