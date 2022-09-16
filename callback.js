const rl = require('node:readline').createInterface(process.stdin, process.stdout);
let number = Math.floor(Math.random() * 1000),
    count = 0;
console.log('Игра "Угадай число". Нажмите "q" для выхода или введите число от 1 до 999: ');

function guessNumber () {
    rl.question('Вы ввели: ', (guessUser) => {
        if (guessUser === 'q') {
            return (rl.close(console.log(`Выход из игры. Всего попыток: ${count}`)));
        } else if (isNaN(guessUser) || (guessUser < 0 || guessUser > 999)) {
            console.log(`Некорректное значение! Попытка ${++count}.`);
        } else if (guessUser > number) {
            console.log (`Загаданное число меньше! Попытка ${++count}.`);
        } else if (guessUser < number) {
            console.log (`Загаданное число больше! Попытка ${++count}.`);
        } else {
            return (rl.close(console.log (`Бинго! Загаданное число: ${number}. Вы угадали с ${++count} попытки.`)));
        } 
        guessNumber();
    })
}
guessNumber();
