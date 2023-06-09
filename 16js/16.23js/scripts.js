class Logo {
    constructor(url) {
      this.top = 0;
      this.left = 0;
      this.width = 200;
      this.imgUrl = url;
      this.html = null;
    }
  
    init() {
        let body = document.querySelector('body');
        body.style.background = '#000';
        let img = document.createElement('img');
        img.src = this.imgUrl;
        this.html = img;
        this.render()
    }
    
    render() {
        this.html.style.top = `${this.top}px`;
        this.html.style.left = `${this.left}px`;
        this.html.style.width = `${this.width}px`;
        this.html.style.position = 'fixed'
        
        document.body.appendChild(this.html)
    }
  
    moveUp() {
        this.top -= 20;
        this.render();
    }
    moveDown() {
        this.top += 20;
        this.render();
    }
    moveLeft() {
        this.left -= 20;
        this.render();
    }
    moveRight() {
        console.log(this.left)
        this.left += 20;
        this.render();
    }
  }
  
  const imgUrl = 'https://bit.ly/2tcDito';
  let mfLogotip = new Logo(imgUrl);
  
  // запускаем наше микро-приложение
  mfLogotip.init();
  
  mfLogotip.moveRight();
  mfLogotip.moveRight();
  mfLogotip.moveRight();
  mfLogotip.moveRight();
  mfLogotip.moveDown();
  mfLogotip.moveDown();
  mfLogotip.moveDown();
  mfLogotip.moveDown();
  //////

//   Задание 3


// Добавить к приложению желтый круг (пример ЗДЕСЬ)

// Реализовать с помощью класса Circle, который принимает аргументы size (ширина и высота фигуры), 
//color (цвет фигуры). При вызове метода render() из экземпляра класса Circle должен отрисоваться круг 
//с заданными стилями.

// Сделать по примеру из последнего видео в уроке.

class Circle{
  constructor(width, height, color){
    this.width = width;
    this.height = height;
    this.color = color;
  }

  render(){
    let div = document.createElement('div');
    div.style.width = `${this.width}px`;
    div.style.height = `${this.height}px`;
    div.style.backgroundColor = this.color;
    div.style.borderRadius = '50%';
    document.body.appendChild(div)
  }

  
}

let circle1 = new Circle(200, 200, 'red');
circle1.render()

