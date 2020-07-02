// Задание 1:
// Необходимо вывести на экран числа от 1 до 5.

for (let i = 1; i <= 5; i++) {
    document.write(i + ' ');
}

document.write('<hr>');

// Задание 2:
// Необходимо вывести на экран числа от 5 до 1.

for (let i =5; i >= 1; i--) {
    document.write(i + ' ')
}


document.write('<hr>');

// Задание 3:
// Необходимо вывести на экран таблицу умножения на 3:

// 3*1=3
// 3*2=6
// 3*3=9
// 3*4=12
// 3*5=15
// 3*6=18
// 3*7=21
// 3*8=24
// 3*9=27
// 3*10=30

let num = 3;

for (let i = 1; i <= 10; i++) {
    document.write(num * i + '<br/>')
}

document.write('<hr>');


// Задание 4:
// Напишите программу, где пользователь вводит любое целое положительное число. А программа суммирует все числа от 1 до введенного пользователем числа.

let a = +prompt('Введите целое число');
let basic = 0;

function res () {
    if (a > 0 && a != null && a != '') {
        for (let i = 1; i <= a; i++) {
            basic += i;
        }
    } else {
        alert('Вы ввели неверное значение');
    }
}


res();
document.write(basic);


document.write('<hr>');

// Задание 5
// Вычислить факториал введенного числа.

let b = +prompt('Введите число');
let c = 1;

if (b) {
    for (let i = 1; i <= b; i++) {
        c *= i;
    }
}
document.write(c);


document.write('<hr>');

// Задание 6:
// Нарисовать треугольник из символов *. Высоту выбирает пользователь. Например: высота = 10, на экране.


let h = +prompt('Введите высоту');
let star = '*';

for (let i = 1; i <= h; i++) {
    for (let j = 1; j <= i; j++) {
        document.write(star);
    }
    document.write('<br/>');
}

document.write('<hr>');


// Задание 7:
// Нарисовать прямоугольник любым символом, пользователь вводит символ, ширину и высоту.

let width = +prompt('Введите ширину');
let height = +prompt('Введите высоту');
let symbol = prompt('Введите символ');

for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= width; j++) {
        document.write(symbol + ' ');
    }
    document.write('<br/>');
}

document.write('<hr>');


// Задание 8:
// Нарисовать равнобедренный треугольник.

let triangl = +prompt('Введите высоту треугольника');
let arrow = '*';

for (let i = 1; i <= triangl; i++) {
    for (let k = 1; k <= (triangl - i); k++) {
        document.write('&nbsp;');
    }
    for (j = 1; j <= i; j++) {
        document.write(arrow);
    }
    document.write('<br/>');
}

document.write('<hr>');

// Задание 9:
// В программе генерируется случайное целое число от 0 до 100. Пользователь должен его отгадать не более чем за 10 попыток. После каждой неудачной попытки должно сообщаться больше или меньше введенное пользователем число, чем то, что загадано. Если за 10 попыток число не отгадано, то вывести загаданное число.

let min = 0;
let max = 100;
let random = Math.random() * (max - min) + min;
let attempt = 10;
let question = +prompt('Угадайте число');


for (let i = 2; i <= attempt; i++) {
    if (question === random) {
        alert('Вы угадали')
    } else {
        question = +prompt('Повторите попытку');
    }
    if (question != random) {
        alert('Попробуйте в следующий раз');
    }
}
