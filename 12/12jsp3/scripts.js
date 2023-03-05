// Задание 3

// 3.1.Цифровые часы

// Создать виджет - часы, как в примере ЗДЕСЬ.

// Вам понадобится каждую секунду(через setInterval)
//  запускать функцию, которая будет забирать время из объекта Date и выводить в разметку.Цвета и т.п.прописать в CSS.

let body = document.querySelector('body');
let time = document.querySelector('div.time');
let hours = document.querySelector('div.time span.hours');
let minutes = document.querySelector('div.time span.minutes');
let seconds = document.querySelector('div.time span.seconds');
let dot = document.querySelectorAll('div.time span.dot');
for(let item of dot){
    item.innerText = ':';
    item.style.display = 'none'
}
for(let item of dot){
    item.style.display = 'inline'
}
var now = new Date().toLocaleTimeString();
hours.innerText = now.slice(0,-6);
minutes.innerText = now.slice(3,5);
seconds.innerText = now.slice(6,8);
setInterval(() => {
    for(let item of dot){
        item.style.display = 'inline'
    }
    var now = new Date().toLocaleTimeString();
    hours.innerText = now.slice(0,-6);
    minutes.innerText = now.slice(3,5);
    seconds.innerText = now.slice(6,8);
}, 1000);