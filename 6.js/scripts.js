//Задание 1

//Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

//Вам понадобятся методы строк.

let string = 'lorem impust dolor XXX';

let ucFirst = function (str) {
    let str2 = str[0];
    let str3 = str.substr(1, str.length);
    let str4 = str2.toUpperCase();
    let str5 = str4 + str3;
    return str5;
}

console.log(ucFirst(string));

//Задание 2

//Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
//Функция должна быть нечувствительна к регистру.
let checkSpam = function (str) {
    let strin = str.toLowerCase();
    let result;
    if (strin.includes('xxx') == true || (strin.includes('badword') == true)) {
        result = 'true';
    } else {
        result = 'false'
    }
    return result
}
console.log(checkSpam(string))





//Задание 3

//Написать функцию, которой на вход подается строка, на выход она дает символы наоборот (разворачивает строку). Пример: «привет Женя» -> «янеЖ тевирп»

//Обратите внимание: метод reverse существует только у массивов.
let smthstring = 'привет Женя';
let smthArray = smthstring.split('');
console.log(smthArray);
newArray = smthArray.reverse();
let anotherString = newArray.join('');
console.log(anotherString);

//Задание 4




//Массив содержит строки с информацией о железнодорожных станциях на севере Англии. Строки представляют собой трёхбуквенный код станции, 
//затем некоторые машиночитаемые данные, за которыми следует точка с запятой, а затем название станции, пригодное для чтения человеком. 








//Необходимо извлечь код станции и имя и поместить их в строку со следующей структурой:


//MAN: Manchester Piccadilly


//Вывести эти строки в консоль


//ПОДСКАЗКА:


//1. Извлеките трёхбуквенный код станции и сохраните его в новой переменной.

//2. Найдите номер символьного номера точки с запятой.

//3. Извлеките название для чтения человеком, используя номер индекса точки с запятой в качестве контрольной точки и сохраните его в новой переменной.

//4. Объедините две новые переменные и строк

let stations = [

    'MAN675847583748sjt567654;Manchester Piccadilly',

    'GNF576746573fhdg4737dh4;Greenfield',

    'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',

    'SYB4f65hf75f736463;Stalybridge',

    'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'

];

let abr1 = stations[0].slice(0, 3);
let abr2 = stations[1].slice(0, 3);
let abr3 = stations[2].slice(0, 3);
let abr4 = stations[3].slice(0, 3);
let abr5 = stations[4].slice(0, 3);
let i1 = stations[0].indexOf(';');
let i2 = stations[1].indexOf(';');
let i3 = stations[2].indexOf(';');
let i4 = stations[3].indexOf(';');
let i5 = stations[4].indexOf(';');
let name1 = stations[0].substring(i1 + 1, stations[0].length - 1);
let name2 = stations[1].substring(i2 + 1, stations[1].length - 1);
let name3 = stations[2].substring(i3 + 1, stations[2].length - 1);
let name4 = stations[3].substring(i4 + 1, stations[3].length - 1);
let name5 = stations[4].substring(i5 + 1, stations[4].length - 1);
console.log(abr1 + ': ' + name1);
console.log(abr2 + ': ' + name2);
console.log(abr3 + ': ' + name3);
console.log(abr4 + ': ' + name4);
console.log(abr5 + ': ' + name5);



//Задание 5

//Напишите функцию, которая проверяет, можержит ли массив элементы, равные нулю. Если да - возвращает true.

//Проверить работу функции на примере массивов [12, 4, 50, 1, 0, 18, 40], [56, 24, -55, 2, 9, -345]
let my1Array = [12, 4, 50, 1, 0, 18, 40];
console.log(my1Array.includes(0));

//Задание 6

//Напишите функцию unique(arr), которая принимает массив, а возвращает новый массив, содержащий только уникальные элементы arr.

//Пример:

//let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];

//console.log(unique(strings) ); должен вывести "кришна, харе, :-O"



//ПОДСКАЗКА

//- создать новый массив

//- обойти исходный массив, если элемент отсутствует в новом - добавлять его в новый. Таким образом в новый добавятся только уникальные.
let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
let unique = function (arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            newArr.push(arr[i])
        }
    }
    console.log(newArr);
}
unique(strings);


//Задание 7



//Женя и Юля изучают кошек. Каждая из них узнала у 10 владельцев кошек о возрасте их кошки и сохранила данные в массиве (по одному массиву для каждой девочки). 
//На данный момент им просто интересно узнать, является ли кошка взрослой или котёнком.

//Кошка считается взрослой, если ей не менее 2 лет, и котёнком, если ей менее 2 лет.

//Создайте функцию verifyCats, которая принимает 2 массива возрастов кошек (catsJane и catsJulia) и выполняет следующие действия:

//1. Женя выяснила, что владельцы первой и последней кошки на самом деле имеют собак, а не кошек! Поэтому удалите возраст собак из Жениного массива.

//2. Создайте общий массив с данными Жени (исправленными) и Юли.

//3. Для каждой кошки этого общего массива выведите в консоль текст:

//- если кошка взрослая -  Кошка № 1 взрослая, ей 6 лет

//- если котёнок - Кошка № 2 ещё котёнок

//4. Вызовите функцию для двух наборов тестовых данных.

//Тестовые данные:

//1.  Данные Жени [4, 5, 3, 11, 6, 2, 4, 1, 5, 9]

//Данные Юли [2, 4, 5, 1, 13, 2, 15, 8, 3, 7]

//2.  Данные Жени [3, 5, 9, 14, 1, 2, 6, 8, 3, 10]

//Данные Юли [8, 2, 10, 1, 2, 5, 6, 3, 1, 4]



//В задании необходимо использовать методы массивов: forEach, splice, concat


let janeValues = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9];
let juliaValues = [2, 4, 5, 1, 13, 2, 15, 8, 3, 7];

let verifyCats = function (jane, julia) {
    let newJaneValues = jane.slice(1, jane.length - 1);
    let allArray = newJaneValues.concat(julia);
    allArray.forEach((element, index) => {
        if (element >= 2) {
            console.log(`Кошка № ${index + 1} взрослая, ей ${element} лет`)
        } else {
            console.log(`Кошка № ${index + 1} ещё котёнок`)
        }

    });
}

verifyCats(janeValues, juliaValues)



//Задание 8



//Решить 4 задание из прошлой темы, используя метод filter


//Определить массив, например let arr = [5, 4, 3, 8, 0];
//Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.
//Например, запуск функции filterFor(arr, 5) дает результат [5,8]
//запуск функции filterFor(arr, 10) дает результат []
//запуск функции filterFor(arr, 3.11) дает результат [4,5,8]


let arr = [5, 4, 3, 8, 0];
let filterFor = function(arr, a){
    let newArray =  arr.filter(function (item) {
        return item >= a;
    });
    return newArray;
}
console.log(filterFor(arr, 5))



//Задание 10



//Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы 
//(размер массива определяется его длиной): [ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd'] ]



//ПОДСКАЗКА. Для правильной сортировки метод sort принимает функцию, параметры 
//которой a и b - это элементы массива. В данной задаче элементы массива, то есть параметры a и b, сами являются массивами и обладают всеми свойствами массивов.

let combineArray = [ [14, 45], [1], ['a', 'c', 'd'] ];
let newCombineArray = combineArray.sort();
console.log(newCombineArray);



//Задание 11



//Создайте функцию getAverageHumanAge, которая принимает массив возрастов кошек (catAges) и выполняет следующие действия по порядку:

//1. Рассчитывает человеческий возраст по следующей формуле: если возраст кошки <= 2 года, человеческий возраст = возраст кошки * 10.
// Если кошке больше 2 лет, человеческий возраст = возраст кошки * 7. (сделать через map)

//2. Исключает всех кошек младше 18 человеческих лет. (сделать через filter)

//3. Возвращает средний человеческий возраст для всех взрослых кошек. (сумму для среднего посчитать через reduce)

//Вызовите функцию для обоих наборов тестовых данных.

//Тестовые данные:

//1: [7 , 3, 2, 4, 1, 15, 8, 1, 9, 2]

//2: [1, 16, 12, 4, 5, 1, 3, 11, 7, 2]



//В задании необходимо использовать методы массивов: map, filter, reduce
let Array1 = [7 , 3, 2, 4, 1, 15, 8, 1, 9, 2];
let Array2 = [1, 16, 12, 4, 5, 1, 3, 11, 7, 2];
let ageOfArray = Array1.map(function(item){
    if(item <= 2){
        return item * 10 ;
    } else {
        return item * 7;
    }
});
let filterAgeOfArray = ageOfArray.filter(function(item){
    return item >=18;
});
let sum = filterAgeOfArray.reduce(function(acc, item){
    return acc+item;
}, 0)
let endNumber = sum/filterAgeOfArray.length
console.log(ageOfArray);
console.log(filterAgeOfArray);
console.log(sum);
console.log(endNumber);