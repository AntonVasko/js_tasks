let link = document.querySelector('a');
link.textContent = 'google'
link.href = 'https://google.com'
let sect = document.querySelector('section');
let para = document.createElement('p');
para.textContent = 'Текст';
sect.appendChild(para);
let text = document.createTextNode('- текст');
let linkPara = document.querySelector('p');
linkPara.appendChild(text);
para.setAttribute('class', 'highlight')