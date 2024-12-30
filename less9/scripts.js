function ex12for(start, end){
    for(i = start; i<=end;i++){
        console.log(i);
    }
}

function ex12while(start, end){
    i = start;
    while (i <= end){
        console.log(i++);
    }
}

function ex3for(){
    for (i = 0; i <= 100; i+= 2){
        console.log(i);
    }
}

function ex3while(){
    i = -2;
    while (i < 100){
        console.log(i+= 2)
    }
}

function ex4for(){
    ans = 0;
    for(i = 1; i<=100; i++){
        ans += i;
    }
    console.log(ans);
}

function ex4while(){
    ans = 0;
    i = 1;
    while (i <= 100){
        ans += i;
        i++;
    }
    console.log(ans);
}

let for12mass = [1, 2, 3, 4, 5];
function for1(){
    for (i = 0; i < for12mass.length; i++){
        console.log(for1mass[i])
    }
}

let result = 0;
function for2(){
    for (i = 0; i < for12mass.length; i++){
        result += for12mass[i];
    }
    console.log(result); 
}

let for3mass = [2, 5, 9, 15, 0, 4];
function for3(){
    for (i = 0; i < for3mass.length; i++){
        if (for3mass[i] > 3 & for3mass[i] < 10){
            console.log(for3mass[i]);
        }
    }
}

let for4mass = [10, 20, 30, 50, 235, 3000, 100000];
function for4(){
    for (i = 0; i < for4mass.length; i++){
        if (for4mass[i].toString()[0] == '2' || for4mass[i].toString()[0] == '1' || for4mass[i].toString()[0] == '5'){
            console.log(for4mass[i]);
        }
    }
}

let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
function dowhile1(){
    i = -1;
    do{
        console.log(days[++i]);
    } while (i < days.length-1);
}

let n = 13;
function is_prime(number){
    for (q = 2; q <= Math.pow(number, 0.5); q++){
        if (i%q == 0){
            return false
        }
    }
    return true
}

function dowhile2(){
    i = 1
    do {
        i++
        if (is_prime(i)){
            console.log(i);
        }
    } while(i < n);
}