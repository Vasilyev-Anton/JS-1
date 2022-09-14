function getPasswordChecker(password) {
    return function passCheck(userInput) {
        if (userInput === password) {
            return true;
        }
        return false;
    }
}

let check = getPasswordChecker('123456a');

console.log(check('123456'));
console.log(check('a'));
console.log(check('123456A'));
console.log(check('123456a'));
