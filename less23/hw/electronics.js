class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    get totalPrice() {
        return this.getTotalPrice();
    }

    getTotalPrice() {
        return this.price * this.quantity
    }
}

class Electronics extends Product {
    constructor(name, price, quantity, warranty) {
        super(name, price, quantity);
        this.warranty = warranty;
    }

    extandWarranty(toExtand) {
        this.warranty += toExtand;
    }
}

let PC = new Electronics('ПК', 10000, 12, 6);
console.log(PC.warranty);
PC.extandWarranty(6);
console.log(PC.warranty);