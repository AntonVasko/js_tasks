//Цикл do while
let output = document.querySelector('.output');
output.innerHTML = '';

let i = 10;

while(i >= 0) {
    let para = document.createElement('p');
 if(i === 10) {
 para.textContent = 'Countdown ' + i;
 } else if(i === 0) {
  para.textContent = 'Blast off!';
 } else {
 para.textContent = i;
 }

 output.appendChild(para);

 i--;
}

//Цикл do while
let people = ['Крис', 'Анна', 'Колин', 'Терри', 'Фил', 'Лола', 'Сём', 'Кай', 'Брюс'];

let admitted = document.querySelector('.admitted');
let refused = document.querySelector('.refused');

admitted.textContent = 'Пригласить: ';
refused.textContent = 'Не приглашать(!): '
let j = 0;

do {
 if(people[j] === 'Фил' || people[j] === 'Лола') {
 refused.textContent += people[j] + ', ';
 } else {
    admitted.textContent += people[j] + ', ';
 }
 j++;
} while(j < people.length);

refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';
admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';