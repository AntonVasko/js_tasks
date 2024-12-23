let xItems = ['aboba', 3, 'строка', '!не строка'];
let massive = [randomValueFromArray(xItems), randomValueFromArray(xItems), randomValueFromArray(xItems), randomValueFromArray(xItems), randomValueFromArray(xItems)];
let checkedMassive = [];
let aboba = 0;
let three = 0;
let stroka = 0;
let notstorka = 0;

let students = [11, 'Ваня', 12, 'Артём', 15, 'Олег', 9, 'Кирилл', 61, 'Саша', 8, 'Слава', 13, 'Артемий']

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
    let checkedStudents = [students[0], students[1]];
    let maxYear = students[0];
    for(i = 2; i < students.length; i += 2){
        if (students[i] >= maxYear){
            checkedStudents.push(students[i]);
            checkedStudents.push(students[i+1]);
            maxYear = students[i];
        } else {
            checkedStudents.push('');
            checkedStudents.push('');
            for(k = 0; k < checkedStudents.length - 2; k += 2){
                if (students[i] < checkedStudents[k]) {
                    for (j = checkedStudents.length-1; j > k+1; j--){
                        checkedStudents[j] = checkedStudents[j-2];
                    }
                    checkedStudents[k] = students[i];
                    checkedStudents[k+1] = students[i+1];
                    break;
                }
            }
        }
    }
    let ans = '';
    for (i = 0; i < checkedStudents.length; i+=2){
        ans += checkedStudents[i];
        ans += ' ';
        ans += checkedStudents[i+1];
        ans += '\n';
    }
    return ans;
}

console.log(workWithStudents());