function random(number) {
    return Math.floor(Math.random()*number);
}

function bgChange() {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    return rndCol;
}

const container = document.querySelector('#container');
container.addEventListener('click', e => e.target.style.backgroundColor = bgChange());