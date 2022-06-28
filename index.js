function primeNumb(n) {
    const prime = [];
    console.time()
    for (let i = 2; prime.length < n; i++) {
        if (i === 2 || i % 2 !== 0) {
            if (i === 3 || i % 3 !== 0) {
                if (i === 5 || i % 5 !== 0) {
                    if (i === 7 || i % 7 !== 0) prime.push(i)
                }
            }
        }
    }
    console.timeEnd()
    return prime
}

console.log(primeNumb(process.argv[2]));