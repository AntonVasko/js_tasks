let list = document.querySelector('.output ul');
list.innerHTML = '';
let cities = ['лонДон', 'МанЧЕСТер', 'БиРминГЕМ', 'лиВЕРпуЛЬ'];
for(let i = 0; i < cities.length; i++){
    let input = cities[i];
    let tinput = '';
    for(let i = 0; i < input.length; i++){
        if(i==0){
            tinput += input[i].toUpperCase();
        } else {
            tinput += input[i].toLowerCase();
        }
    }
    let result = tinput;
    let listItem  = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem);
}