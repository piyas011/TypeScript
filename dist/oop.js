"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createStudent = (name, age, mark, email) => {
    return { name, age, email, mark };
};
const piyas = createStudent("Piyas", 21, 100, "apiyas221@gmail.com");
console.log(piyas);
console.log(piyas.email);
console.log("--------------------------------------------");
class Student {
    name;
    age;
    roll;
    mark;
    constructor(name, age, roll, mark) {
        this.name = name;
        this.age = age;
        this.roll = roll;
        this.mark = mark;
    }
    getInfo() {
        return `
    Name : ${this.name}
    Age  : ${this.age}
    Roll : ${this.roll}
    Mark : ${this.mark}
    `;
    }
}
const firstStudent = new Student("Piyas", 21, 2278, 100);
const secondStudent = new Student("Prity", 20, 22777, 200);
console.log(firstStudent.name);
console.log(firstStudent.age);
console.log(firstStudent.mark);
console.log(firstStudent.roll);
console.log(firstStudent.getInfo());
console.log(secondStudent.getInfo());
console.log(firstStudent);
console.log("___________________________________");
class TeaShope {
    name;
    location;
    soldItems = [];
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    buy(name, price) {
        this.soldItems.push({ name, price });
    }
}
const shop1 = new TeaShope("Hello Tea", "Dhaka");
shop1.buy("Tea", 100);
shop1.buy("cake", 10);
console.log(shop1);
//# sourceMappingURL=oop.js.map