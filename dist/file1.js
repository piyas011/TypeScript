"use strict";
// Class Practice --- Level 1
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const piyas = new Person("Piyas Ahmed", 21);
const prity = new Person("Prity", 20);
// console.log(piyas, prity);
// Task 2 : Car Class
class Car {
    brand;
    model;
    year;
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}
const toyota = new Car("Toyota", "Corolla", 2024);
// console.log(toyota);
// Student Class
class Student {
    name;
    age;
    course;
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }
}
const student1 = new Student("Piyas Ahmed", 21, "TypeScript");
// console.log(student1);
class ShoppingCart {
    name;
    price;
    employee;
    constructor(name, price, employee) {
        this.name = name;
        this.price = price;
        this.employee = employee;
    }
}
const user1 = new ShoppingCart("apple", 400, ["jon", "jahid"]);
console.log(user1);
//# sourceMappingURL=file1.js.map