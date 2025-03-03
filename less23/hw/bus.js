class Transport {
    constructor(model, speed) {
        this.model = model;
        this.speed = speed;
    }

    move() {
        console.log(`Транспорт едет со скоростью ${this.speed} км/ч.`)
    }
}

class Conductor {
    constructor(payment) {
        this.payment = payment;
        this.passedPassangers = 0;
    }
    
    checkPayment(pickedUpPassangers) {
        let passangerPayment = 0
        for (let i = 0; i < pickedUpPassangers; i++) {
            passangerPayment = 40 + Math.floor(Math.random() * 91);
            if (passangerPayment > this.payment){
                console.log('Пассажир оплатил');
                this.passedPassangers += 1;
            } else {
                console.log('Пассажир не оплатил');
            }
        }
        return this.passedPassangers;
    }
}

class Bus extends Transport {
    constructor(model, speed, passangers, maxPassangers) {
        super(model, speed);
        this.passangers = passangers;
        this.maxPassangers = maxPassangers;
        this.conductor = new Conductor(65);
    }

    pickUpPassangers(ammountPassangers) {
        this.passangers += this.conductor.checkPayment(ammountPassangers);
        this.conductor.passedPassangers = 0;
        if (this.passangers > this.maxPassangers) {
            console.log('Перевес!');
            this.passangers = this.maxPassangers;
        }
        console.log(`Кондуктор проверил всех пассажиров, свободных мест осталось ${this.maxPassangers - this.passangers}`);
    }
}

let bus = new Bus('Крутой автобус', 60, 0, 20);
bus.move();
console.log(bus.passangers);
bus.pickUpPassangers(15);
console.log(bus.passangers);
bus.pickUpPassangers(6);
console.log(bus.passangers);