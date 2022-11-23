//Задание 1



//Написать функцию, которая принимает два параметра и складывает их.

//Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке. Также обраьботайте случай, если не было введено два параметра.



//Примеры результатов вызова функции:

//sum(2,4); // 6

//sum('d',4); // введенные данные не являются числами

//sum(1, [2]); // введенные данные не являются числами

//sum(1); // введите два параметра

//sum(); // введите два параметра
let sum = function (a, b){
    if(typeof a == 'number'&&typeof b == 'number'){
        console.log(a*b);
    } else if(typeof a == undefined||typeof b == 'undefined'){
        console.log('введите два параметра')
    } else{
        console.log('введенные данные не являются числами')
    }
}



sum(1, [2]);






//Задание 2

//Измените функцию "square" так, чтобы в случае ее вызова без аргумента генерировалась консольная ошибка (console.error):
//"Функция "square" не может быть вызвана без аргумента"


//function square(a) {
//  console.log(a * a)
//}

//square(10) // 100

//square()
// ДО: NaN
// ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента

function square(a) {
    if(typeof a  == 'undefined'){
        
        console.log('Uncaught Error: Функция "square" не может быть вызвана без аргумента')
    }
    else{console.log(a * a)}
  }
  
  square(10) // 100
  
  square();




  //Задание 3



//Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.

//Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”

//Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.

//Написать функцию в стрелочном синтаксисе.

let unknownNumber = (a) => {
    if(a<=10 && a>=0){
        let num = getRandomInteger(1, 10);
        if (a == num){
            console.log('Вы выиграли');
        } else{
            console.log(`Вы не угадали, ваше число -  ${a},  а выпало число ${num}`)
        }
    }
}
function getRandomInteger(min, max) {
return Math.floor(Math.random() * (max - min)) + min;
}       
unknownNumber(Number(prompt('Введите число от 1 до 10')));




//Задание 4

//Определить массив, например let arr = [5, 4, 3, 8, 0];
//Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a. 
//Например, запуск функции filterFor(arr, 5) дает результат [5,8]
//запуск функции filterFor(arr, 10) дает результат []
//запуск функции filterFor(arr, 3.11) дает результат [4,5,8]
let arr = [5, 4, 3, 8, 0];
function filterFor(arr, a){
    let array = [];
    for(let i = 0 ; i < arr.length; i++ ){
        if(arr[i] >= a){
            array.push(arr[i]);
        }
    }
    console.log(array);
}
filterFor(arr, 4);



//Задание 5

    //Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива.
    const users = [
        { name: 'Igor', age: 19 },
        { name: 'Danil', age: 1 },
        { name: 'Vovan', age: 4 },
        { name: 'Matvey', age: 16 },
      ];    
          let names2 =[]
          users.forEach(function(index){
              names2.push(index);
          })
          console.log(names2);



//Задание 6

//Создайте функцию sumObjectValues, которая будет суммировать все значения свойств, которые являются числами. Сумму чисел необходимо вернуть из функции.



//Проверить работу функции можно на объекте:

//const objectWithNumbers = {
//  a: 10,
//  b: 20,
//  c: 'string',
//  d: 12,
//}
const objectWithNumbers = {
    a: 10,
    b: 20,
    c: 'string',
    d: 12,
  }
  sumObjectValues = function(array){
      let sum = 0;
      for(let element in array){
          if(typeof array[element] == 'number'){
              sum = sum + array[element];
          }
      }
      return sum;
  }
  console.log(sumObjectValues(objectWithNumbers))