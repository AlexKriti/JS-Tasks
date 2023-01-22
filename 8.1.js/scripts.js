//Задание 12

//Есть верстка: https://teenscool1.notion.site...

//С помощью JavaScript:

//1) Найти в коде список ul и добавить ему класс “list”.

//2) На li через один (начиная с самого первого) установить класс “item”

//3) На все ссылки в примере установить класс “custom-link”


document.querySelector('ul').classList.add("list") ;
let element = document.querySelectorAll('li');
for(let i = 0; i< element.length; i = i+2){
    element[i].classList.add("item") ;
}
let a = document.querySelectorAll('a');
for(let i = 0; i<a.length;i++){
    a[i].classList.add("custom-link") ;
}
