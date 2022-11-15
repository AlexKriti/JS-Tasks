let a = 0;
while(a<10){
    console.log(a);
    a++
}


//Задание 1

//Перепишите код, заменив цикл for на while, без изменения поведения цикла.

//for (let i = 0; i < 3; i++) {
//alert( `number ${i}!` );
//}

let i = 0; 
while (i < 3) {
    alert( `number ${i}!` );
    i++
    }


 //   Задание 2

//Перепишите код с использованием тернарного оператора



//let country = 'Sweden';

//let access;

//if (country == 'Sweden') {

//access = true;

//} else{

//access = false;

//}


    let country = 'Sweden';

    let access=(country == 'Sweden')? true  : false
    
    console.log(access);



    //Задание 3

    //Дан массив логических значений (true/false). Например: const roles = [true, false, false, true, false]
    
    //Каждое значение обозначает админ (true) или пользователь (false).
    
    //Из этого массива с помощью цикла сформировать массив объектов - roles, такой же длины, как и заданный массив.  У каждого объекта должно быть одно поле, role, которое равно admin, если значение в заданном массиве - true, и user, если значение в заданном массиве - false.
    
    //Т.е. из
    
    //[true, false, false]
    
    //должно получиться
    
    //[{ role: 'admin' }, { role: 'user' }, { role: 'user' } ]


    const roles = [true, false, false, true, false];
    let newRoles = [];
    for(let item of roles){
        if( item == true){
            newRoles.push({role : 'admin'});
        } else {
            newRoles.push({role : 'user'})
        }
    }
    console.log(newRoles);




    //Задание 4 Создайте функцию findPositiveNumbers(). Она принимает массив в качестве 
    //параметра и возвращает новый массив, в котором содержатся только положительны элементы.

//Проверьте работу функции на примере массивов:

//const nums = [5, 4, 3, -3, -10, -1, 8, -20, 0]

//const numbers = [443, -39, 0, -105, -21, 38, -20, 3, 90].
const nums = [5, 4, 3, -3, -10, -1, 8, -20, 0]

const numbers = [443, -39, 0, -105, -21, 38, -20, 3, 90]
function findPositiveNumbers(){
    let array = [];
    for(let i  = 0; i<numbers.length; i++){
        if(numbers[i]>0){
            array.push(numbers[i]);
        }
    }
    console.log(array)

}
findPositiveNumbers()


//Задание 5 Напишите функцию, которая принимает два параметра: значение и количество элементов. 
        //Функция создает новый массив и заполняет его этим значением в указанном количестве.


//Например: из переданных значений ('a', 3) получаем массив ['a', 'a', 'a']
function meanAndNumberOfElements(element, mainNumber){
    let someArray = [];
    for(let i = 0; mainNumber - i !== 0; i++){
        someArray.push(element);
    }
    console.log(someArray);
}
meanAndNumberOfElements('a', 3);



//Задание 6



    //Определите массив, например let arr = [5, 4, 3, 8, 0].
    //Создайте функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, 
    //но в нем должны содержаться элементы, которые больше или равны (>=) значению переменной a.


    //Например, запуск функции filterFor(arr, 5) дает результат [5,8]
    //а запуск функции filterFor(arr, 10) дает результат []
    //а запуск функции filterFor(arr, 3.11) дает результат [4,5,8]
    let array1 = [5, 4, 3, 8, 0];
    function filterFor(arr, a){
        let newArray =[];
        for(let i = 0; i<arr.length;i++){
            if(arr[i]>=a){
                newArray.push(arr[i]);
            }
        }
        console.log(newArray);
    }
    filterFor(array1, 5);









        //Задание 7



//Написать функцию получения случайного цвета. Это будет строка вида "rgb(10,55,250)"

//Здесь у вас будет две функции: одна ваша - с названием getRandomRGB, а вторая - функция получения случайного числа в диапазоне min - max.
// Вот эта функция (просто скопируйте, она уже готова):
//function getRandomInteger(min, max) {
//return Math.floor(Math.random() * (max - min)) + min;
//}
//ПОДСКАЗКИ: 

//Каждый цвет - это строка, в которой участвуют 3 числа в диапазоне от 0 до 255. 

//Одна функция может вызывать другую функцию.
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
    }
    function getRandomRGB() {
        console.log(`rgb(${getRandomInteger(0, 255)},${getRandomInteger(0, 255)},${getRandomInteger(0, 255)})`)
    }
    getRandomRGB();




        //Задание 8



//Написать функцию, которая выводит в консоль квадраты чисел из заданного диапазона (от min до max),
//где значения min и max передаются в функцию как параметры.

//Примеры вызова такой функции:

//getSquares(0, 100) - выведет квадраты чисел от 0 до 100

//getSquares(56, 87) - выведет квадраты чисел от 56 до 87
function getSquares(min, max){
    for(let i = 0; i<= max - min; i++){
        console.log((min + i)*(min + i));

    }
}
getSquares(56, 78);



//Задание 9



        //Написать функцию isInteger(x), которая определяет, является ли число целым, 
        //и возвращает true либо false.
        
        //Для проверки, целое ли число, вам понадобится опеатор % (подумайте, остаток 
        //от деления на какое число подойдет для вашей цели)
        function isInteger(x){
            let result;
            if (0 < x % 2 && x%2 < 1){
                result = false
            } else if(1 < x % 2){
                result = false;
            } else {
                result = true;
            }
            console.log(result);
        }
        isInteger(12);



//Задание 10



        //Написать функцию, которая принимает целое число n.   
        
        //Внутри функции запустить цикл от 1 до n с шагом 0.5. 
        //На каждой итерации цикла выводить в консоль текущее число (i)
        // и информацию о том, целое ли оно.
        
        
        //Пример, при запуске функции с параметром 3:
        
        //"1 integer"
        //"1.5 decimal"
        //"2 integer"
        
        //"2.5 decimal"
        function isInteger2(x){
            let result;
            if (0 < x % 2 && x%2 < 1){
                result = 'decimal';
            } else if(1 < x % 2){
                result = 'decimal';
            } else {
                result = 'integer';
            }
            return result;

        }
        let item = prompt('Введите целое число: ');
        +item;
        for(let i = 0; i < item; i = i + 0.5){
            console.log(`${i} ${isInteger2(i)}`)
        }