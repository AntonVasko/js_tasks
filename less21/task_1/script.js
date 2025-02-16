let text = document.querySelector("input");
let items = document.querySelector("ul");
let btn = document.querySelector("button");

btn.onclick = function(){
    let item = document.createElement("li");
    item.textContent = text.value;
    text.value = '';
    let delbtn = document.createElement("button");
    delbtn.textContent = 'Delete';
    item.appendChild(delbtn);
    items.appendChild(item);
    delbtn.onclick = function(){
        items.removeChild(item);
    }
}