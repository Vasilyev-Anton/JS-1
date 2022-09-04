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
        goodId: 2,
        name: 'Брюки',
        amount: 2,
        price: 200,
    },

    {
        goodId: 5,
        name: 'Шорты',
        amount: 1,
        price: 100,
    },

    {
        goodId: 1,
        name: 'Рубашка',
        amount: 5,
        price: 100,
    },
];
function addThing(name = "Свитер", amount = 2) {
    for (let i in goods) {
        if (goods[i].name === name) {
           let thing = {
                goodId: goods[i].id,
                name: goods[i].name,
                amount,
                price: goods[i].price,
            }
            basket.push(thing);
        }
    
    }
    return basket
}

console.log(addThing(process.argv[2]))