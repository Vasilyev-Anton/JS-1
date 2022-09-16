const rl = require('node:readline').createInterface(process.stdin, process.stdout);
let number = Math.floor(Math.random() * 1000),
    count = 0;
console.log(number);

function guessNumber () {
    rl.question('Игра "Угадай число". Нажмите "q" для выхода или введите число от 1 до 999: ', (guessUser) => {
        if (guessUser === 'q') {
            return (rl.close(console.log(`Выход из игры. Всего попыток было: ${count}`)));
        } else if (isNaN(guessUser) || (guessUser < 0 || guessUser > 999)) {
            console.log(`Некорректное значение! Попытка ${++count}.`);
        } else if (guessUser > number) {
            console.log (`Больше! Попытка ${++count}.`);
        } else if (guessUser < number) {
            console.log (`Меньше! Попытка ${++count}.`);
        } else {
            return (rl.close(console.log (`Вы угадали с ${++count} попытки.`)));
        } 
        guessNumber();
    })
}
guessNumber();
