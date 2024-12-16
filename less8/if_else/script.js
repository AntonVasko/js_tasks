let select = document.querySelector("select");
let para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
    let choice = select.value;

  if (choice === "sunny") {
    para.textContent = "Сегодня хорошо и солнечно. Носите шорты! Идите на пляж, или в парк, и купите мороженое.";
  } else if (choice === "rainy") {
    para.textContent = "Дождь падает за окном; возьмите плащ и зонт, и не находитесь слишком долго на улице.";
  } else if (choice === "snowing") {
    para.textContent = "Снег падает - морозно! Лучше всего посидеть с чашкой горячего шоколада или слепить снеговика.";
  } else if (choice === "overcast") {
    para.textContent = "Дождя нет, но небо серое и мрачное; он все может измениться в любую минуту, поэтому на всякий случай возьмите дождевик.";
  } else {
    para.textContent = "";
  }
}