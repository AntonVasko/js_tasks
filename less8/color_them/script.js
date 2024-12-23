let select = document.querySelector("select");
let html = document.querySelector("html");
document.body.style.padding = "10px";

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.onchange = function(){
  let choice = select.value;

  switch (choice) {
    case "black":
      update('black', 'white');
      console.log('dadsaf');
      break;
    case "green":
      update('green','white');
      break;
    case "purple":
      update('purple','white');
      break;
    case "red":
      update('red','white');
      break;
    case "yellow":
      update('yellow','black');
      break;
    case "brown":
      update('brown','white');
      break;
    case "blue":
      update('blue','black');
      break;
    case "dark blue":
      update('darkblue','white');
      break;
    case "violet":
      update('blueviolet','black');
      break;    
    default:
      update('white', 'black');
  }
}