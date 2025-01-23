const para = document.querySelector('ul');

const x = 1;

function a() {
    const y = 2;
    return y;
}

function b() {
    const z = 3;
    return z;
}

function output(value) {
    const y = a()
    const z = b()
    console.log(value);
    let listItem1 = document.createElement('li');
    listItem1.textContent = `Value: ${value}`;
    para.appendChild(listItem1);
    let listItem2 = document.createElement('li');
    listItem2.textContent = `Value: ${y}`;
    para.appendChild(listItem2);
    let listItem3 = document.createElement('li');
    listItem3.textContent = `Value: ${z}`;
    para.appendChild(listItem3);
}

output(x);