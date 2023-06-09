// Задание 4


// Создайте класс Calculator, который создаёт объекты. 
//У класса есть конструктор, который запрашивает два значения при помощи prompt
// и сохраняет их значение в свойствах объекта, и два метода:
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.

class Calculator{
    constructor(){
        this.num1 = + prompt('Введите первое значение');
        this.num2 = + prompt('Введите второе значение');
        console.log(this.mul());
        console.log(this.sum())
    }

    sum(){
        return `${this.num1 + this.num2}`
    }

    mul(){
        return `${this.num1 * this.num2}`
    }
}

let calc1 = new Calculator();
