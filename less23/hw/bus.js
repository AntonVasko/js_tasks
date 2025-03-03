class Transport {
    constructor(model, speed) {
        this.model = model;
        this.speed = speed;
    }

    move() {
        console.log(`Транспорт едет со скоростью ${this.speed} км/ч.`)
    }
}

class Bus extends Transport {
    constructor(model, speed, passangers, maxPassangers) {
        super(model, speed);
        this.passangers = passangers;
        this.maxPassangers = maxPassangers;
    }

    pickUpPassangers(ammountPassangers) {
        this.passangers += this.conductor(ammountPassangers);
        if (this.passangers > this.maxPassangers) {
            console.log('Перевес!');
            this.passangers = this.maxPassangers;
        }
    }

    conductor(ammountPassangers_topick) {
        let payed =  Math.floor(Math.random() * ammountPassangers_topick);
        console.log(`Всего заплатили ${payed} человек, а выгнали из автобуса ${ammountPassangers_topick - payed} людей.`);
        return(payed);
    } 
}

let bus = new Bus('Крутой автобус', 60, 0, 20);
bus.move();
console.log(bus.passangers);
bus.pickUpPassangers(15);
console.log(bus.passangers);
bus.pickUpPassangers(6);
console.log(bus.passangers);