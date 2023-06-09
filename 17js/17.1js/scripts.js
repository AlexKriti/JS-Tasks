// let obj = {name: 'ALEX', age: 17};

// let {name, age} = obj;
// console.log(name);
// console.log(age) ;
// console.log({name, age})


// Задание 1
// , 'kiril', 'max'

// Задать массив имен.Создать 2 переменные, которые будут хранить первых 2 имени, 
// вывести их в консоль.Создать массив, который будет хранить остальные имена, вывести 
// имена из него по одному в консоль.Если кол - во элементов массива меньше 2, то вторая 
// переменная должна стать равна "alex".

let nameArr = ['petya', 'vasya', 'pavel', 'nikita'];
let [name1, name2, ...leftArr] = nameArr;
console.log(leftArr)
if (leftArr[1] == undefined) {
    name2 = 'alex';
}
leftArr.map(Name => console.log(Name))


console.log(name1, name2);

///////////////////

// Задание 2


// Задать массив имен.Задать функцию, которая принимает 3 параметра и выводит их в консоль.
// Передать массив в функцию.Внутри функции каждый параметр должен быть равен одному из элементов массива.


let nameArr2 = ['kiril', 'max', 'petya', 'vasya', 'pavel', 'nikita'];
function Consoling([para1, para2, para3]){
    console.log(para1)
    console.log(para2)
    console.log(para3)
}

Consoling(nameArr2);

////////////////////////////

// Задание 3


// Задать объект с N полей. Создать 2 переменные, которые будут называться так же, как поля,
//  и хранить 2 значения полей объекта. Если соответствующих полей в объекте нет, задать значения
//   чисел 1 и 2. Все остальные поля объекта записать в переменную fields.

let obj = {
    name:'Stepan', 
    age:25,
    work:'builder',
    hobby:'guitar',
    city:'London'
}


let fields = {};


let { flow, sky} = obj
if(obj.a == undefined && obj.b == undefined){
    obj.flow = 1;
    obj.sky = 2;
    const {flow, sky, ...fields} = obj;
    console.log( fields);
}
