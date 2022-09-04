const goods = [
    {
        id: 1,
        name: 'Рубашка',
        description: 'Мужская рубашка с коротким рукавом',
        sizes: [44, 46, 48, 50, 52, 54, 56, 58, 60],
        price: 100,
        available: 'Есть в наличии',
    },

    {
        id: 2,
        name: 'Брюки',
        description: 'Классические брюки',
        sizes: [30, 32, 36],
        price: 200,
        available: 'Есть в наличии',
    },

    {
        id: 3,
        name: 'Ботинки',
        description: 'Демисезонные ботинки',
        sizes: [40, 41, 42, 43, 44],
        price: 150,
        available: 'Товар закончился',
    },

    {
        id: 4,
        name: "Свитер",
        description: 'Мужской вязаный свитер',
        sizes: [44, 46, 48, 50, 52, 54],
        price: 300,
        available: 'Есть в наличии',
    },

    {
        id: 5,
        name: 'Шорты',
        description: 'Шорты для купания',
        sizes: [30, 32],
        price: 100,
        available: 'Есть в наличии',
    },
];

let basket = [
    {
        good: 2,
        amount: 2,
    },

    {
        good: 5,
        amount: 1,
    },

    {
        good: 1,
        amount: 5,
    },
];

function addThing(name, amount) {
    for (let i in goods) {
        if (goods[i].name === name) {
            let thing = {
                good: goods[i].id,
                amount,
            }
            basket.push(thing);
        }
    }
    return basket
}

function delThing(name) {
    for (let i in goods) {
        if (goods[i].name === name) {
            let thing = {
                good: goods[i].id,
            }
            for (let j in basket) {
                if (basket[j].good === thing.good) {
                    basket.splice(j, 1);
                }
            }
        }
    }
    return basket;
}

function clearBasket() {
    basket.length = 0;
    return basket;
}

function totalCalc() {
let totalAmount = 0,
    totalSumm = 0,
    i, 
    j;
    for (i in basket) {
        totalAmount += basket[i].amount
        for (j in goods) {
            if (goods[j].id === basket[i].good) {
                totalSumm += (goods[j].price * basket[i].amount)
            }
        }
    }
    return ({totalAmount, totalSumm})
}
// console.log(addThing(process.argv[2], +process.argv[3]))
// console.log(delThing(process.argv[2]))
// console.log(clearBasket())
console.log(totalCalc())
