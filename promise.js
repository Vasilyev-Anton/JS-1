const rl = require('node:readline').createInterface(process.stdin, process.stdout);
let number = Math.floor(Math.random() * 1000),
    count = 0;
console.log('Игра "Угадай число". Нажмите "q" для выхода или введите число от 1 до 999.');

function question(quest){
    return new Promise((resolve) => {
        rl.question(quest, (guessUser) => {
            resolve(guessUser);
        })
    })
}

async function guessNumber () {
    while (true) {
    const guessUser = await question('Вы ввели: ');
        if (guessUser === 'q') {
            return (rl.close(console.log(`Выход из игры. Всего попыток: ${count}`)));
        } else if (isNaN(guessUser) || (guessUser < 0 || guessUser > 999)) {
            console.log(`Некорректное значение! Попытка ${++count}.`);
            console.log();
        } else if (guessUser > number) {
            console.log (`Загаданное число меньше! Попытка ${++count}.`);
            console.log();
        } else if (guessUser < number) {
            console.log (`Загаданное число больше! Попытка ${++count}.`);
            console.log();
        } else {
            return (rl.close(console.log (`Бинго! Вы угадали с ${++count} попытки.`)));
        } 
    }
}
guessNumber();
