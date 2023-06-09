// Задание 1

// Создать класс Auto. В конструкторе класса задаются параметры: 
// марка, модель, цвет, год выпуска, объем двигателя. В классе должен быть метод,
// который определяет текущую дату и высчитывает возраст машины.

// Создать из класса 2 объекта с разными характеристиками.

// 1) Для каждого объекта вывысти в консоль текст: Автомобиль марки ..., возраст - ... лет.

// 2) Вывести фразу: ... (цвет) ... (марка) ... (модель) новее, чем ... (цвет) ... (марка) 
// ... (модель) на ... лет.



class Auto {
    constructor(mark, model, color, year, size) {
        this.mark = mark;
        this.model = model;
        this.color = color;
        this.year = year;
        this.size = size;
    }

    makeString() {
        let now = new Date();
        let age = now.getFullYear() - this.year;
        console.log(`Автомобиль марки ${this.mark}, возраст - ${age} лет`)
    }

    backObject() {
        return {
            color: this.color,
            mark: this.mark,
            model: this.model,
            year: this.year
        }
    }

    forConsole() {
        super.backObject()
    }

    makeMainString() {
        let obj = this.forConsole();
        if (this.year) {
            console.log(456);
            console.log(obj)
        } else {
            console.log(987)
        }
    }
}



let toyota = new Auto('Toyota', 'Camry', 'Black', 2017, 3.8);
let audi = new Auto('Audi', 'RS7', 'White', 2020, 4.0);

audi.makeString();
toyota.makeString();
if (audi.year < toyota.year) {
    console.log(`${audi.color} ${audi.mark} ${audi.model} новее, чем ${toyota.color} ${toyota.mark} ${toyota.model} на ${-audi.year + toyota.year} лет`)
} else {
    console.log(`${toyota.color} ${toyota.mark} ${toyota.model} новее, чем ${audi.color} ${audi.mark} ${audi.model} на ${audi.year - toyota.year} лет`)
}

/////////////////////////
