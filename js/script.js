setTimeout(function () {
    let firstName = prompt('Введите ваше имя', 'Гость');
    let p = document.getElementById('greeting');
    p.innerText = (`Привет, ${firstName}!`); 
}, 500);