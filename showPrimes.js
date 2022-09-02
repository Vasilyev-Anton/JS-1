function showPrimes(n) {
    const I = [];
    console.time();
    nextPrime: for (let i = 2; I.length < n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }
        I.push(i);
    }
    console.timeEnd();
    return I;
}
console.log(showPrimes(process.argv[2]));