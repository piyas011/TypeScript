// Class Practice --- Level 1

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const piyas = new Person("Piyas Ahmed", 21);
const prity = new Person("Prity", 20);

// console.log(piyas, prity);

// Task 2 : Car Class

class Car {
  brand: string;
  model: string;
  year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
}

const toyota = new Car("Toyota", "Corolla", 2024);
// console.log(toyota);

// Student Class

class Student {
  name: string;
  age: number;
  course: string;

  constructor(name: string, age: number, course: string) {
    this.name = name;
    this.age = age;
    this.course = course;
  }
}

const student1 = new Student("Piyas Ahmed", 21, "TypeScript");

console.log(student1);
