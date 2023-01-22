console.log(navigator.userAgent)
console.log(location.href)

//Задание 1

//Просмотрите в консоли браузера объект navigator. Найдите информацию о своем браузере, системе.

//Просмотрите в консоли браузера объект location. Найдите в этом объекте текущий url, где вы находитесь.



//Выведите в консоль строку:

//С помощью браузера ... я открыл страничку ... 

//(необходимые значения добавьте с помощью BOM)
console.log(`С помощью браузера Chrome/108.0.0.0 я открыл страницу ${location.href}`)


//Задание 2

//В файле html есть разметка:

//<ul id="list">
//<li>Джон</li>
//<li>Пит</li>
//<li>Джессика</li>
//<li>Сара</li>
//</ul>

//Вывести в консоль каждое из имен (содержимое каждого li).

for (let li of document.body.children[0].children){
    console.log(li.innerText)
}


//Задание 3

//Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)
for ( let i = 0; i< document.querySelectorAll('li').length; i++){
    document.querySelectorAll('li')[i].innerText = i;
}

//Задание 4

//Создать с помощью js абзац (тег p). Добавить в него контент. Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.
let div = document.createElement('div');
div.className = 'divclass'
div.innerText = 'lorem impust dolor amet';
document.body.appendChild(div);


//Задание 5

//Написать в html тег заголовка с текстом "Сегодня:" 

//После заголовка подготовить в html пустой параграф. С помощью js добавить в него сегодняшнюю дату.
let h2 = document.createElement('h2');
h2.innerText = 'Сегодня';
document.body.appendChild(h2);
let p = document.createElement('p');
let now = new Date();
p.innerText = now.toLocaleDateString();
document.body.appendChild(p);


//Задание 6

//Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое. 
//Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом и внести содержимое. 
//Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.

let createTag = function(name, color, inside){
    let name1 = document.createElement(name);
    name1.innerText = inside;
    name1.style.background = color;
    document.body.appendChild(name1);
}
createTag('div', 'pink', 'sometext')



//Задание 7

//Вставить в страницу (в html документ) тег <select>. С помощью js (в цикле) добавить в этот select опции (option) под годы от 1960 по 2020.
let select = document.createElement('select');
document.body.appendChild(select);
for(let i = 1960; i<2021; i++){
    let option = document.createElement('option');
    option.innerText = i;
    select.appendChild(option)
}



//Задание 8

//Вставить в страницу (в html документ) ul.
//Предусмотреть в коде следующий массив:


//const clients = [

//{name: "Женя", order: true},
//{name: "Кристина", order: true},
//{name: "Павел", order: false},
//{name: "Виолетта", order: false},
//{name: "Костя", order: true}

//]



//Перебирать массив, для каждого элемента массива создать li, наполнить li текстом:
//- Клиент Женя оплатил заказ
//- Клиент Павел отменил заказ
//... остальные li с контентом



//Маска получается такой: "Клиент ИМЯ СТАТУС заказ", где имя - свойство объекта (а объект здесь - это текущая ячейка массива),
// статус зависит от от свойства order: если true – то оплатил, если false – то отменил.

const clients = [

    {Name: "Женя", order: true},
    {Name: "Кристина", order: true},
    {Name: "Павел", order: false},
    {Name: "Виолетта", order: false},
    {Name: "Костя", order: true}
    
    ]
for(let element of clients){
    if (element['order'] == true){
    console.log(`Клиент ${element['Name']} оплатил заказ`)} else{
        console.log(`Клиент ${element['Name']} отменил заказ`)}
    }



//Задание 9

//Есть массив ссылок:

//let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];

//Вам нужно:

//1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)

//2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег

//c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
//При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")

//ПОДСКАЗКА. Для создания атрибута используется js метод setAttribute:

//element.setAttribute(name, value) - где element - сам элемент, которому назначаем атрибут, name - 
//атрибут, который нужно добавить, value - его значение. Также для стандартных атрибутов существуют свойства, и их можно добавлять напрямую: напр. img.src = ''

//Вкладывать ссылки в див нужно с помощью метода appendChild или append.

//3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY

let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];
let Div = document.createElement('div');
Div.classList.add('ninethTask') 
document.body.appendChild(Div);
for(let i = 0; i<linksArr.length; i++){
    let a = document.createElement('a');
    a.setAttribute('href', linksArr[i]);
    a.setAttribute('target', "_blank");
    a.innerText = `${linksArr[i]}`
    document.querySelector('div.ninethTask').appendChild(a);
    console.log('1');
}






//Задание 10

//Добавить к нескольким тегам на странице класс "forRemove". Далее написать JS код, который найдет в HTML все элементы с классом "forRemove" и удалит их.

//ПОДСКАЗКА Для удаления DOM-элементов можно использовать метод element.remove().

//ВАЖНО: Вам нужно удалять не всю коллекцию li, а каждый отдльный li

let element = document.querySelectorAll('li.forRemove');
console.log(element)
for(let i = 0; i < element.length; i++){
    let secondElement = document.querySelector('li.forRemove');
    secondElement.remove();
}
//??????????????????????????????


//Задание 11*

//Создать массив объектов с полями name, age. Например:

//const users = [
//{name: 'Mark', age: 12},
//{name: 'Olga', age: 30},
//{name:'Tom', age: 25},

//{name:'Den', age: 43}
//]

//Создать в html таблицу (table).

//C помощью js заполнить таблицу информацией из массива, в одной колонке будут имена, во второй возраст. Имена должны быть красного цвета, age - синего.



//ПОДСКАЗКА, Таблица состоит из строк (tr) и ячеек (td) внутри этих строк. Строк должно создаваться столько, сколько объектов внутри массива, и их количество может быть любым.

const users = [
    {name: 'Mark', age: 12},
    {name: 'Olga', age: 30},
    {name:'Tom', age: 25},
    
    {name:'Den', age: 43}
    ];
let table = document.querySelector('table');
for(let i = 0;i < users.length; i++){
    
    let tr = document.createElement('tr');
    let tdFirst = document.createElement('td');
    let tdSecond = document.createElement('td');
    tdFirst.innerText = users[i].name;//?????????
    tdSecond.innerText = users[i].age;//?????????
    tr.appendChild(tdFirst);
    tr.appendChild(tdSecond);
    table.appendChild(tr);
}




//Задание 12

//Есть верстка: https://teenscool1.notion.site...

//С помощью JavaScript:

//1) Найти в коде список ul и добавить ему класс “list”.

//2) На li через один (начиная с самого первого) установить класс “item”

//3) На все ссылки в примере установить класс “custom-link”