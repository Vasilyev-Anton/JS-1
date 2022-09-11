class Good {
    constructor(id, name, description, sizes, price, available=true) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.sizes = sizes;
        this.price = price;
        this.available = available;
    };

    setAvailable(available) {
        this.available = available;
    }
}

class GoodsList {
    #goods

    constructor(filter, sortPrice, sortDir) {
        this.#goods = [];
        this.filter = filter;
        this.sortPrice = sortPrice;
        this.sortDir = sortDir;
    }

    get list () {
        let arr, result;
            arr = this.#goods.filter(good => good.available && good.name.match(this.filter))
        
        if (this.sortPrice && !this.sortDir) {
            result = arr.sort((thing1, thing2) => thing2.price-thing1.price);
            return result;
        }
        else if (this.sortPrice && this.sortDir) {
            result = arr.sort((thing1, thing2) => thing1.price-thing2.price);
            return result;
        }
        else {
            return arr;
        }
    }

    add(id, name, description, sizes, price, available) {
        let thing = new Good(id, name, description, sizes, price, available);
        this.#goods.push(thing);
    }

    remove(id) {
        for (let i = 0; i < this.#goods.length; i++) {
            if (id === this.#goods[i].id) {
                this.#goods.splice(i, 1);
            }
        }
    }
}

class BasketGood extends Good {
    constructor(id, name, description, sizes, price, available, amount) {
        super(id, name, description, sizes, price, available);
        this.amount = amount;
    }
}

class Basket {
    constructor() {
        this.goods = [];
    }

    get totalAmount() {
        let count = this.goods.reduce((count, good) => count + good.amount, 0);
        return count;
    }

    get totalSum() {
        let sum = 0;
        this.goods.forEach((good) => sum += good.price * good.amount);
        return sum;
    }

    add(good, amount) {
        const idx = this.goods.findIndex(thing => thing.id == good.id);

        if (idx === -1 && amount > 0) {
            let thing = new BasketGood(good.id, good.name, good.description, good.sizes, 
                good.price, good.available, amount);
            this.goods.push(thing);
        }

        else if (idx >= 0 && amount > 0) {
            this.goods[idx].amount += amount;
        }
    }

    remove(good, amount) {
        const idx = this.goods.findIndex(thing => thing.id == good.id)

        if (this.goods.length === 0) {
            console.log('Корзина пуста.');
        }
        else if (idx === -1) {
            console.log('Такого товара нет.');
        }
        else if (this.goods[idx].amount <= amount) {
            console.log(`Товар "${this.goods[idx].name}" был удалён.`);
            this.goods.splice(idx, 1);
        }
        else this.goods[idx].amount -= amount;
    }

    clear() {
        this.goods.length = 0;
    }

    removeUnavailable() {
        this.goods = this.goods.filter(good => good.available === true);
    }
}

let goodList = new GoodsList();

goodList.add(
    1,
    'Рубашка',
    'Мужская рубашка с коротким рукавом',
    [44, 46, 48, 50, 52, 54, 56, 58, 60],
    100,
);

goodList.add(
    2,
    'Брюки',
    'Классические брюки',
    [30, 32, 36],
    200,
);

goodList.add(
    3,
    'Ботинки',
    'Демисезонные ботинки',
    [40, 41, 42, 43, 44],
    150,
    false,
);

goodList.add(
    4,
    "Свитер",
    'Мужской вязаный свитер',
    [44, 46, 48, 50, 52, 54],
    300,
);

goodList.add(
    5,
    'Шорты',
    'Шорты для купания',
    [30, 32],
    100,
    true,
);

console.log(goodList.list);

let good1 = new Good(
    1,
    'Рубашка',
    'Мужская рубашка с коротким рукавом',
    [44, 46, 48, 50, 52, 54, 56, 58, 60],
    100,
);

let good2 = new Good(
    2,
    'Брюки',
    'Классические брюки',
    [30, 32, 36],
    200,
);

let good3 = new Good(
    3,
    'Ботинки',
    'Демисезонные ботинки',
    [40, 41, 42, 43, 44],
    150,
    false,
)

let good4 = new Good(
    4,
    "Свитер",
    'Мужской вязаный свитер',
    [44, 46, 48, 50, 52, 54],
    300,
    true,
)

let good5 = new Good(
    5,
    'Шорты',
    'Шорты для купания',
    [30, 32],
    100,
    true,
)

let basket = new Basket();

// good1.available = false;

basket.add(good1, 5);

basket.add(good2, 5);
basket.add(good2, 10);

basket.add(good3, 15);
basket.add(good3, 25);

console.log(basket);


basket.removeUnavailable();
console.log(basket);

basket.remove(good1, 5);
basket.remove(good2, 10);
basket.remove(good3, 15);
console.log(basket);

console.log(basket.totalAmount);
console.log(basket.totalSum);

// basket.clear();
// console.log(basket);
