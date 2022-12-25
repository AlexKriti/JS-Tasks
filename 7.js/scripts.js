//Задание 1

//Примените каждый из этих методов округления к трем числам: 5.4, 5.5, 5.6:

//Math.round(x)

//Math.ceil(x)
//Math.floor(x)

//В комментариях к каждой строке напишите, как работают эти округления.
let number1 = 5.4;
let number2 = 5.5;
let number3 = 5.6;
//Math.round() возвращает число, округлённое к ближайшему целому
console.log(Math.round(number1));
console.log(Math.round(number2));
console.log(Math.round(number3));
//Math.ceil()- округление вверх. Округляет аргумент до следующего большего присутствия.
console.log(Math.ceil(number1));
console.log(Math.ceil(number2));
console.log(Math.ceil(number3));
//Math.floor()- округление вниз. Округляет аргумент до следующего меньшего присутствия.
console.log(Math.floor(number1));
console.log(Math.floor(number2));
console.log(Math.floor(number3));



//Задание 2

//Выведите в консоль фразы в 2 строки:
//Сегодня 27.10.2022 (здесь будет ваша дата)

//19 часов 20 минут (здесь будет ваше время)
let now = new Date();
hour = now.getHours();
minute = now.getMinutes();
console.log('Сегодня ' + now.toLocaleDateString())
let last = hour % 10
let last2 = minute % 10
if (last == 1 ) {
    if(last2 == 1 ){console.log(`${hour} час ${minute} минута`)}
    else if(last2 < 5){console.log(`${hour} час ${minute} минуты`)}
    else if(last2 < 11  || (minute<=20 && minute>= 10) ){console.log(`${hour} час ${minute} минут`)}
} else if (last < 5) {
    if(last2 == 1 ){console.log(`${hour} часа ${minute} минута`)}
    else if(last2 < 5){console.log(`${hour} часа ${minute} минуты`)}
    else if(last2 < 11 || (minute<=20 && minute>= 10)){console.log(`${hour} часа ${minute} минут`)}
    
} else if (last < 11 ) {
    if(last2 == 1 ){console.log(`${hour} часов ${minute} минута`)}
    else if(last2 < 5){console.log(`${hour} часов ${minute} минуты`)}
    else if(last2 < 11 || (minute<=20 && minute>= 10)){console.log(`${hour} часов ${minute} минут`)}
}