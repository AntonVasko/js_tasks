let select = document.querySelector("select");
let html = document.querySelector("html");
document.body.style.padding = "10px";

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}
/*
обработчик событий onchange, использующийся для запуска функции, содержащей тернарный оператор. 
Сначала она проверяет условие — select.value === 'black'. 
Если возвращается true, мы запускаем функцию update() с параметрами чёрного и белого, в результате чего получаем чёрный цвет фона и белый цвет текста. 
Если возвращается false, мы запускаем функцию update() с параметрами белого и чёрного, в результате чего цвета веб-сайта меняются на противоположные.
*/
select.onchange = function () {
  select.value === "black" ? update("black", "white") : update("white", "black");
};

