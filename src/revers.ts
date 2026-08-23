const name: string = "Piyas Ahmed";
const age: number = 21;
const city: string = "Dhaka Bangladesh";
const isStudent: boolean = false;

console.log({ name, age, city, isStudent });
console.log("_________________________________________");

{
  const name: string = "Piyas Ahmed";
  const age: number = 21;
  const course: string = "TypeScript";
  const isActive: boolean = true;
  const totalMarks: number = 500;

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
  let name: string = "Piyas";
  let age: number = 21;
  let isStudent: boolean = true;
  let score: number = 90.5;
  let city: string = "Dhaka";

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
  const checkType = (value: any): any => {
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
