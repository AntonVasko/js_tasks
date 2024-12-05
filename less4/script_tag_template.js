let person = 'Oleg';
let age = 14;

function myTag(strings, personExp, ageExp){
    let str0 = strings[0]; // "That "
    let str1 = strings[1]; // " is a "
    let ageStr;
    if (ageExp > 99){
        ageStr = 'centenarian';
    } else {
        ageStr = 'youngster';
    }

    return `${str0}${personExp}${str1}${ageStr}`;
}

let output = myTag`That ${person} is a ${age}`;
console.log(output);

const tooutput = `I like this game.
I rate it 90%.`;
console.log(tooutput);