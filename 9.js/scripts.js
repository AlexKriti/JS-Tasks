//document.querySelector('div').addEventListener('click', () => alert('hi!'));
//let input = document.querySelector('input');
//input.addEventListener('keydown', function(event){
 //   console.log(event.key)
//})

//Задание 1

//Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша.
document.querySelector('input').addEventListener('keydown', function(event){
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerText = `${event.key}`;
    ul.appendChild(li)
});


//Задание 2


//Вставить в html тег input (просто предусмотреть в разметке).


//Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, как 
//только клиент вписывает любой символ в поле (или стирает любой символ из поля). Вам понадобится считывать значение поля, это input.value

document.querySelector('input').addEventListener('keyup', function(event){
    console.log(document.querySelector('input').value)
});


//Задание 3

//Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. 
//Его содержимое - введенный текст (input.value). После отправки формы инпут должен быть очищен (проставить пустую строку в value).
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    let input = document.querySelectorAll('input')[1];
    li.innerText = `${input.value}`;
    ul.appendChild(li)
    input.value = '';
});


//Задание 4

//Калькулятор. 

//Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. Внутри select будут options - 
//арифметические знаки. В оба инпута пользователь вводит число. Когда пользователь отправляет форму (событие submit), над двумя числами выполняется действие, 
//выбранное в select (чтобы получить выбранный пользователем option, мы "забираем" значение  select.value). Результат отображается в div.



//1) решить с помощью if

//2) решить с помощью evel (https://developer.mozilla.org/...)

let div = document.createElement('div');
document.body.appendChild(div);
let secondForm = document.querySelectorAll('form')[1];
secondForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let zeroInput = secondForm.querySelectorAll('input')[0];
    let firstInput = secondForm.querySelectorAll('input')[1];
    let selectA = secondForm.querySelector('select');
    if(selectA.value == '+'){
        let a = Number(zeroInput.value)+Number(firstInput.value);
        div.innerText = a;
    } else if(selectA.value == '-'){
        let a = Number(zeroInput.value) - Number(firstInput.value);
        div.innerText = a;
    } else if(selectA.value == '*'){
        let a = Number(zeroInput.value)*Number(firstInput.value);
        div.innerText = a;
    } else if(selectA.value == '/'){
        let a = Number(zeroInput.value) / Number(firstInput.value);
        div.innerText = a;
    }
})


//Задание 5

//Вставить в разметку html тег button без js (просто предусмотреть в разметке). При наведении на кнопку изменять ее цвет каждый раз рандомным цветом.
// При выведении мышки за пределы кнопки поворачивать кнопку на рандомный угол от -180 до 180 градусов. Использовать обработку событий mouseenter, mouseleave на этой кнопке.

let button = document.querySelector('button');
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
    }
button.addEventListener('mouseenter', (event) => {
    button.style.backgroundColor = `rgb(${getRandomInteger(0, 255)}, ${getRandomInteger(0, 255)}, ${getRandomInteger(0, 255)})`
})
button.addEventListener('mouseleave', () =>{
    button.style.transform = `rotate(${getRandomInteger(-180, 180)}deg)`
})