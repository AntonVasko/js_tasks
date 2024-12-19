/*
нарисовать 100 случайных кругов на элементе <canvas>. Нажмите кнопку "Обновить", 
чтобы снова и снова запускать пример и увидеть, что круги рисуются случайным образом.
*/
//example_1
let btn1 = document.querySelector(".button1");
let btn2 = document.querySelector(".button2");
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

let WIDTH = document.documentElement.clientWidth;
let HEIGHT = document.documentElement.clientHeight;

canvas.width = WIDTH;
canvas.height = HEIGHT;

function random(number) {
    return Math.floor(Math.random() * number);
}

function draw() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    for (var i = 0; i < 100; i++) {
        ctx.beginPath();
        ctx.fillStyle = "rgba(255,0,0,0.5)";
        ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
        ctx.fill();
    }
}
//=======================================================================================
//example_2
let cats = ["Билл", "Макс", "Пикси", "Алиса", "Жасмин"];
let info = "Моих кошек зовут ";
let para = document.querySelector("p");

function my_cats(){
for (let i = 0; i < cats.length; i++) {
  info += cats[i] + ", ";
}

para.textContent = info;
}
//=======================================================================================

//example_1
btn1.addEventListener("click", draw);

//example_2
btn2.addEventListener("click", my_cats);