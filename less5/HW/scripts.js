function countBy(x, n){
    let z = [];
    for(i = x; i <= n*x; i += x){
        z.push(i);
    }
    return z;
}

function findNeedle(where){
    for(let i = 0; i < where.length; i++){
        if(where[i] === 'игла'){
            return `Игла найдена в позиции ${i}`;
        } 
    }
}

console.log(countBy(2, 10));
console.log(findNeedle(['ыв', 'игла', 's', 's', 's']));