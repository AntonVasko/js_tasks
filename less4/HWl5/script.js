let list = document.querySelector('.output ul');
list.innerHTML = '';
let cities = ['лонДон', 'МанЧЕСТер', 'БиРминГЕМ', 'лиВЕРпуЛЬ'];
for(let i = 0; i < cities.length; i++){
    let input = cities[i];
    let tinput
    for(let i = 0; i < input.length; i++);
        
    let result = input;
    let listItem  = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem);
}