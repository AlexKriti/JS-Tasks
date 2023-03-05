// Задание 2

// Сверстать любую простую страничку и реализовать смену темы.

// В шапке делаем кнопку «Тёмная тема», при нажатии этой кнопки странице(тегу body) присваивается доп.класс(напр.dark - theme) 
// и начинают работать стили тёмной темы.Сама кнопка меняется на «Светлая тема», при нажатии которой доп.класс с body удаляется.
let darkButton = document.querySelector('button.dark');
let lightButton = document.querySelector('button.light');
let body = document.querySelector('body');
darkButton.addEventListener('click', () => {
    darkButton.classList.add('hidden');
    lightButton.classList.remove('hidden');
    body.classList.add('dark')
})
lightButton.addEventListener('click', () => {
    darkButton.classList.remove('hidden');
    lightButton.classList.add('hidden');
    body.classList.remove('dark')
})