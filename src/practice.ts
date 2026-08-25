{
  // Task 1 -- Student Result

  const name: string = "Piyas Ahmed";
  const age: number = 21;
  const mark: number = 100;

  const result = (mark: number): number | string => {
    if (Number.isNaN(mark) || mark < 0 || mark > 100) {
      return "Invalid Mark";
    } else if (mark >= 80) {
      return "A+";
    } else if (mark >= 70) {
      return "A";
    } else if (mark >= 60) {
      return "A-";
    } else if (mark >= 50) {
      return "B";
    } else if (mark >= 40) {
      return "C";
    } else if (mark >= 33) {
      return "D";
    }

    return "Fail";
  };

  console.log(
    `
    Student Name : ${name}
    Student Age  : ${age}
    Student Mark : ${mark}
    Student Result : ${result(mark)} 
    `,
  );
}
