const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'На улице было 94 по Фаренгейту, поэтому :insertx: пошел прогуляться. Добравшись до :inserty:, они несколько мгновений смотрели в ужасе, затем :insertz:. Антон все это увидел, но не удивился — :insertx: весит 300 фунтов, и день был жаркий.';
const insertX = ['Соловей-разбойник', 'Баба-яга', 'Дед Мороз'];
const insertY = ['кухня', 'Диснейленд', 'дремучий лес'];
const insertZ = ['самовозгорающийся', 'растаял в лужу на тротуаре', 'превратился в слизняка и уполз'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Антон', name)
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/2.205) + ' килограммы';
    const temperature =  Math.round((94-32) * (5/9)) + ' по Цельсию';
    newStory = newStory.replaceAll('94 по Фаренгейту', temperature);
    newStory = newStory.replaceAll('300 фунтов', weight);
  }

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:', xItem);
  newStory = newStory.replaceAll(':inserty:', yItem);
  newStory = newStory.replaceAll(':insertz:', zItem);

  story.textContent = newStory;
  story.style.visibility = 'visible';
}


