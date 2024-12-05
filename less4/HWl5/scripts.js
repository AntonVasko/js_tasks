let myNumber = 123; 
let myString = 'bebra';

function numberToString(num){
    return num.toString()
}

function lenString(my_string){
    return my_string.length
}

function lenText(text){
    return `${text.length}\n${text}`
}

numString = numberToString(myNumber)
console.log(typeof numString, numString)
console.log(lenString`My name is Oleg.`)
console.log(lenText(myText))
