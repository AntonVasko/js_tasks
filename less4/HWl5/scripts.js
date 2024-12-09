let myNumber = 123; 
let myString = 'bebra';
let myText = 'fdsdf';

function numberToString(num){
    return num.toString();
}

function lenString(my_string){
    return my_string.length;
}

function lenText(text){
    return `${text.length}\n${text}`;
}

function glassLetters(text){
    text = text.toLowerCase();
    console.log(text);
    let glassFound = [];
    for(let i = 0; i < text.length; i++){
        //console.log(text[i]);
        for(let k = 0; k < glass.length; k++){
            if(text[i] === glass[k]){
                glassFound.push(text[i]);
                break
            }
        }
    }
    return glassFound;
}

let glass = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я', 'a', 'e', 'i', 'o', 'u', 'y'];
numString = numberToString(myNumber);
console.log(typeof numString, numString);
console.log(lenString`My name is Oleg.`);
console.log(lenText(myText));
console.log(glassLetters('Алё привеет'));
