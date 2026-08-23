"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const name = "Piyas Ahmed";
const age = 21;
const city = "Dhaka Bangladesh";
const isStudent = false;
console.log({ name, age, city, isStudent });
console.log("_________________________________________");
{
    const name = "Piyas Ahmed";
    const age = 21;
    const course = "TypeScript";
    const isActive = true;
    const totalMarks = 500;
    console.log(`
    name          = ${name},
    age,          = ${age}
    course,       = ${course}
    isActive,     = ${isActive}
    totalMarks,   = ${totalMarks}
  `);
    console.log("_________________________________________");
}
{
    let name = "Piyas";
    let age = 21;
    let isStudent = true;
    let score = 90.5;
    let city = "Dhaka";
    console.log(name, typeof name);
    console.log(age, typeof age);
    console.log(isStudent, typeof isStudent);
    console.log(score, typeof score);
    console.log(city, typeof city);
    console.log("_________________________________________");
}
{
    let value = "1000";
    console.log(typeof value);
    console.log(typeof parseInt(value));
}
{
    const checkType = (value) => {
        return typeof value;
    };
    console.log(checkType("hello"));
    console.log(checkType(12));
    console.log(checkType(true));
    console.log(checkType(undefined));
    console.log(checkType(null));
    console.log(checkType({}));
    console.log(checkType([]));
}
//# sourceMappingURL=revers.js.map