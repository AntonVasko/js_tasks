let select = document.querySelector('select');
let list = document.querySelector('ul');
let h1 = document.querySelector('h1');
let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
let month = document.querySelector('option');

for (i = 0; i < months.length; i++){
  let listItem = document.createElement('option');
  listItem.textContent = months[i];
  select.appendChild(listItem);
}

select.onchange = function() {
    let choice = select.value;
    if (choice == 'Февраль'){
      days = 28;
    } else if (choice == 'Апрель' || choice == 'Июнь' || choice == 'Сентябрь' || choice == 'Ноябрь'){
      days = 30;
    } else {
      days = 31;
    }
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