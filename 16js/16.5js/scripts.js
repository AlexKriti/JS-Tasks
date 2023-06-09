// Задание 5

// Создать класс Shape, с конструктором и методом render(), 
//Далее создать 3 дополнительных класса Square, Circle, Rectrangle,
// которые должны наследоваться от класса Shape, а также должны переписать 
//или дополнить его метод render(). При вызове данных методов должны рисоваться 
//соответствующие фигуры. В качестве аргументов принимаются цвет бэкграунда и размеры.

// Пример создания и вызова метода отрисовки для каждой из фигур:

// let square1 = new Square('red', 50);

// square1.render();

// let circle1 = new Circle('green', 150);

// circle1.render();

// let rectangle1 = new Rectangle('blue', 250, 100);

// rectangle1.render();

class Shape{
    constructor(width, color, height){
        this.color = color;
        this.width = width;
        if(height){
            this.height = height;
        } else{
            this.height = width;
        }
    }

    render(){
        let div = document.createElement('div');
        div.style.width = this.width + 'px';
        div.style.backgroundColor = this.color;
        return div

        //придумать начинку для render() в Shape и наполнить рендеры в оставшихся методах
    }
}

class Square extends Shape{
    render(){
        let div = super.render();
        div.style.height = this.width + 'px'; 
        document.body.appendChild(div)
    }
}

class Circle extends Shape{
    render(){
        let div = super.render();
        div.style.height = this.width + 'px'; 
        div.style.borderRadius = '50%';
        document.body.appendChild(div)
    }
}

class Rectangle extends Shape{
    render(){
        let div = super.render();
        div.style.height = this.height + 'px'; 
        document.body.appendChild(div)
    }
}

let square1 = new Square(100, 'red');
square1.render()
let circle1 = new Circle(200, 'violet');
circle1.render();
let rectangle1 = new Rectangle(150, 'blue', 350);
rectangle1.render();