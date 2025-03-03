class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Человеку по имени ${this.name} ${this.age} лет.`);
    }
}

class Student extends Person {
    constructor(name, age, course) {
        super(name, age);
        this.course = course;
    }

    introduce() {
        super.introduce();
        console.log(`Он учится на ${this.course}м курсе.`);
    }
}

let oleg = new Student('Олег', 21, 3);
oleg.introduce();