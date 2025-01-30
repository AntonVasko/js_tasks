let table = document.querySelector('table');
let selected_number = document.querySelector('input');

function encode(number, sign){
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let signed_number = '';
    while (number != 0){
        signed_number += numbers[number % sign];
        number = Math.floor(number/sign);
    }
    signed_number = signed_number.split('').reverse().join('');
    return signed_number;
}

function to_unsigned(number, sign){
    ans = number%(2**(sign*8));
    if (number >= 0){
        ans = ans
    } else {
        ans += 2**(sign*8)
    }
    return ans;
}

function to_signed(number, sign){
    number = to_unsigned(number, sign);
    if (number < 2**(sign*8-1)){
        return number;
    } else {
        return number - (2**(sign*8));
    }
}

function to_memory(number, sign){
    number = to_unsigned(number, sign);
    ans = encode(number, 16);
    ans = ans.split('').reverse().join('');
    while (ans.length < sign*2){
        ans += '0';
    }
    return ans.split('').reverse().join('');
}
//Везде number - число которое мы хотим перевести sign - количество бит в функциях 2 - 4, а функции 1 - С/И в которую хотим перевести

//Оформление сайта

function createTable(number){
    let listItemPar = document.createElement('tr');
    let listItem = document.createElement('td');
    listItem.textContent = number;
    listItemPar.appendChild(listItem);
    listItem = document.createElement('td');
    listItem.textContent = 'Memory';
    listItemPar.appendChild(listItem);
    listItem = document.createElement('td');
    listItem.textContent = 'Unsigned';
    listItemPar.appendChild(listItem);
    listItem = document.createElement('td');
    listItem.textContent = 'Signed';
    listItemPar.appendChild(listItem);
    table.appendChild(listItemPar);    
}

selected_number.onchange = function(){
    table.innerHTML = '';
    let value_number = selected_number.value;
    selected_number.value = '';
    createTable(value_number);
    for (i = 1; i <= 4; i++){
        if (i == 3){
            continue;
        }
        let listItemPar = document.createElement('tr');
        let listItem = document.createElement('td');
        listItem.textContent = `${i} bytes`;
        listItemPar.appendChild(listItem);
        for (k = 0; k<3; k++){
            listItem = document.createElement('td');
            if (k == 0){
                listItem.textContent = to_memory(value_number, i);
            } else if (k==1) {
                listItem.textContent = to_unsigned(value_number, i);
            } else {
                listItem.textContent = to_signed(value_number, i);
            }
            listItemPar.appendChild(listItem);
        }
        table.appendChild(listItemPar);
    }
}