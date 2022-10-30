let word = 'dress';
if (word = 'hidden') {
    word = 'visible';
} else {
    word = 'hidden';
}

alert(45 % 45);

let number = 3;
if (number = 0) {
    number = 1;
}
if (number < 0) {
    number = 'less than zero';
}
if (number > 0) {
    number *= 10;
}


let number1;       
number1 = prompt('Введите число:');
Number(number1);
+ number1;
let numberresault = number1 < 5 ? 0 : 1;
console.log(numberresault); 



let number11 = prompt('Введите первое число');
let number12 = prompt('Введите второе число');
Number(number11);
+number11
Number(number12);
+number12
if (number11>number12) {
    console.log('Большее число: ', number11);
} else if(number11 < number12) {
    console.log('Большее число: ', number12);
} else {
    console.log('Числа равны.');
}


let num1 = prompt('Введите первое число');
let num2 = prompt('Введите второе число');
Number(num1);
+num1
Number(num2);
+num2
let result = (num1 % num2) ;
if (result > 0) {
    console.log('Первое число не делится на второе без остатка');
} else {
    console.log('Первое число делится на второе без остатка');
};




let midmark = prompt('Введите ваш средний балл: ');
Number(midmark);
+midmark
if (4 >= midmark) {
    console.log('Двоечник, иди учись!');
} else if (8 >= midmark ) {
    console.log('Неплохо, но давай ещё поднажмем!');
} else {
    console.log('Ого, да ты настоящий отличник!');
};



let exammark = prompt('Введите ваш балл за экзамен: ');
let projects = prompt('Введите количество проектов: ');
Number(exammark);
+exammark
if (exammark > 90 && projects > 10){
    console.log('Ваш выпускной балл: 100');
} else if (exammark > 75 && projects >= 5) {
    console.log('Ваш выпускной балл: 90');
} else if (exammark > 50 && projects >= 2) {
    console.log('Ваш выпускной балл: 50');
} else {
    console.log('Ваш выпускной балл: 0');
};



let daynum = prompt('на сколько дней в арендуйте машину?');
let money = 0
Number(daynum);
+daynum
if (daynum >= 7) {
    money = daynum *40 - 50;
    console.log('Сумма: ' , money);
} else if (daynum >= 3) {
    money = daynum *40 - 20;
    console.log('Сумма: ' , money);
} else {
    money = daynum *40;
    console.log('Сумма: ' , money);
}
        



let x ; 
for(x = 0; x<10; x++) { console.log(x);}




let sms;
    for(sms=0; sms<5 ; sms++) {
        let numb = prompt('Введите какое-то число: ');
        Number(numb);
        +numb
        let numb2 = numb * 2;
        if (numb2 == 10) {
            console.log('Равно 10');
        } else {
            console.log('Не равно 10');
        }
    }






let message = prompt('Введите кол-во чисел');
Number(message);
+message
let smthnumb;
smthnumb = -1;
 
    for ( message-- >= 0 ; message--
        ;) {
        smthnumb++ 
        console.log(smthnumb*smthnumb);
    }






    
    for( let smthnumber= 0 ;smthnumber < 101; smthnumber++ ) {
        let smthnumber3 = smthnumber % 3;
        let smthnumber5 = smthnumber % 5;
        if((smthnumber5 == 0) && (smthnumber3 == 0)){
            console.log('FizzBuzz');
        }else if (smthnumber3 == 0)  {
            console.log('Fizz');
        } else if(smthnumber5 == 0){
            console.log('Buzz');
        } else {
            console.log(smthnumber);
        }
        
    }; 

