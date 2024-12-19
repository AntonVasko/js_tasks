let para = document.querySelector("p");
let input = document.querySelector("input");
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let num = input.value;
input.value = "";
input.focus();
para.textContent = "Вы ввели: " + num + ". Результат: ";
for (let i = 1; i <= num; i++) {
    let sqRoot = Math.sqrt(i);
    if (Math.floor(sqRoot) !== sqRoot) {
        continue;
    }

    para.textContent += i + " ";
}
});