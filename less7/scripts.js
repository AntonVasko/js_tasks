let xItems = ['aboba', 3, 'строка', '!не строка'];
let massive = [randomValueFromArray(xItems), randomValueFromArray(xItems), randomValueFromArray(xItems), randomValueFromArray(xItems), randomValueFromArray(xItems)];
let checkedMassive = [];
let aboba = 0;
let three = 0;
let stroka = 0;
let notstorka = 0;

let students = [11, 'Ваня', 12, 'Артём', 15, 'Олег', 9, 'Кирилл', 61, 'Саша', 8, 'Слава']

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

function workWithMassive(){
    for(i = 0; i <= massive.length; i++){
        if (massive[i] == 'aboba'){
            aboba += 1;
        } else if (massive[i] == 3){
            three += 1;
        } else if (massive[i] == 'строка'){
            stroka += 1;
        } else if (massive[i] == '!не строка'){
            notstorka += 1;
        }
        for(let k = 0; k <= checkedMassive.length; k++){
            if (k === checkedMassive.length){
                checkedMassive.push(massive[i]);
                break;
            } else if (checkedMassive[k] == massive[i]){
                break;
            }
        }
    }
    return `${massive} - исходный массив\nВсего 'aboba' в массиве встречается ${aboba} раза, 3 - ${three} раза, 'строка' - ${stroka} раза, '!не строка' - ${notstorka} раза\nИсходный массив без повторений - ${checkedMassive}`
}

function workWithStudents(){
    let checkedStudents = [];
    for(i = 0; i < students.length; i += 2){
        for(k = 0; k <= checkedStudents.length; k += 2){
            if (k == checkedStudents.length){
                checkedStudents.push(students[i], students[i+1]);
                break;
            } else if (students[i] <= checkedStudents[k]){
                checkedStudents.push('','');
                for(j = checkedStudents.length; j > k; j-= 2){
                    checkedStudents[j-1] = checkedStudents[j-3];
                    checkedStudents[j] = checkedStudents[j-2];
                }
            }
            console.log(checkedStudents);
        }    
    }
}

console.log(workWithStudents());