let select = document.querySelector('select');
let list = document.querySelector('ul');
let h1 = document.querySelector('h1');

select.onchange = function() {
    let choice = select.value;

  // ДОБАВЬТЕ СЮДА УСЛОВНОЕ ВЫРАЖЕНИЕ

  createCalendar(days, choice);
}

function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (let i = 1; i <= days; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
   }
}

createCalendar(31,'Январь');