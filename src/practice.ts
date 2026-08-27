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

  /**   console.log(
    `
    Student Name : ${name}
    Student Age  : ${age}
    Student Mark : ${mark}
    Student Result : ${result(mark)} 
    `,
  );
  */
}

{
  // Task 2 Number Analyzer

  const numberAnalyzer = (number: number): string => {
    const negativePositiveCheck: string =
      number > 0 ? "Positive" : number <= 0 ? "Negative" : "Zero";
    // console.log(negativePositiveCheck);
    const evenOddCheck: string =
      number % 2 === 0 ? "Even Number" : "Odd Number";
    // console.log(evenOddCheck);
    const square: number = number * number;
    // console.log(square);

    return ` 

    Number -> ${number}

    ${negativePositiveCheck}
    ${evenOddCheck}
    Square :${square} 
     
    `;
  };

  //   console.log(numberAnalyzer(7));
}
{
  // Task 3 --- Array Processing

  const numbersArray = [10, 25, 30, 45, 65, 70];

  const arrayProcessing = (numbers: number[]) => {
    const evenNumber: number[] = numbers.filter((num) => num % 2 === 0);
    const oddNumber: number[] = numbers.filter((num) => num % 2 !== 0);
    const hightNumber = [...numbers].sort((a, b) => b - a)[0];
    const lowestNumber = [...numbers].sort((a, b) => a - b)[0];
    const totalSumOfNumber: number = numbers.reduce(
      (acc, number) => acc + number,
      0,
    );
    return {
      evenNumber,
      oddNumber,
      hightNumber,
      lowestNumber,
      totalSumOfNumber,
    };
  };

  //   console.log(arrayProcessing(numbersArray));
}
{
  // String Analyzer

  const string: string = "JavaScript";

  const analyzerString = (srt: string) => {
    const stringLength = srt.length;
    const upperCase = srt.toUpperCase();
    const lowerCase = srt.toLowerCase();

    const countVowel = (string: string) => {
      let count = 0;
      let arrayString = string.toLowerCase().split("");
      for (const letter of arrayString) {
        if ("aeiou".includes(letter)) {
          count++;
        }
      }
      return count;
    };
    const vowelCount = countVowel(srt);

    const reverse = srt.split("").reverse().join("");

    return { stringLength, upperCase, lowerCase, vowelCount, reverse };
  };

  // console.log(analyzerString(string));
}
{
  // Task 5 -- Student Array of Object

  const studentArray = [
    { id: 2, name: "Rohim Ahmed", age: 22, marks: 60 },
    { id: 3, name: "Korim Ahmed", age: 23, marks: 70 },
    { id: 4, name: "Solim Ahmed", age: 24, marks: 30 },
    { id: 5, name: "Jalim Ahmed", age: 25, marks: 80 },
    { id: 1, name: "Piyas Ahmed", age: 21, marks: 90 },
  ];

  interface Student {
    id: number;
    name: string;
    age: number;
    marks: number;
  }

  interface StudentReturnType {
    topStudent: Student;
    lowestStudent: Student;
    moreThenSixtyMark: Student[];
    averageMark: number;
    searchStudentById: Student | undefined;
  }

  const studentAnalyzer = (
    students: Student[],
  ): StudentReturnType | undefined => {
    if (students.length === 0) {
      return undefined;
    }
    // find top and lowest Student
    let topStudent = students[0]!;
    let lowestStudent = students[0]!;

    for (const student of students) {
      if (topStudent.marks < student.marks) {
        topStudent = student;
      }

      if (lowestStudent.marks > student.marks) {
        lowestStudent = student;
      }
    }

    // calculate total mark from students array
    let totalMark = 0;
    for (const student of students) {
      totalMark += student.marks;
    }

    // More Then Sixty Mark
    const moreThenSixtyMark = students.filter((student) => student.marks > 60);

    // calculate average mark from students array of object
    const averageMark = totalMark / students.length;

    // find a  specific student from students array of object by id

    const searchStudentById = students.find((student) => student.id === 4);

    return {
      topStudent,
      lowestStudent,
      moreThenSixtyMark,
      averageMark,
      searchStudentById,
    };
  };

  // console.log(studentAnalyzer(studentArray));
}
{
  // Task 6

  interface Products {
    name: string;
    price: number;
    quantity: number;
  }

  interface CartResult {
    productTotalPrice: number[];
    cartTotalPrice: number;
    expensiveProduct: Products;
    cheapestProduct: Products;
    totalQuantity: number;
  }

  const products: Products[] = [
    {
      name: "Keyboard",
      price: 1200,
      quantity: 2,
    },
    {
      name: "Mouse",
      price: 800,
      quantity: 3,
    },
    {
      name: "Monitor",
      price: 15000,
      quantity: 1,
    },
    {
      name: "Headphone",
      price: 2500,
      quantity: 2,
    },
    {
      name: "USB Cable",
      price: 500,
      quantity: 4,
    },
    {
      name: "Webcam",
      price: 3500,
      quantity: 1,
    },
  ];

  /////////////////////////
  const shoppingCart = (products: Products[]): CartResult => {
    const productTotalPrice = products.map(
      (product) => product.price * product.quantity,
    );
    // console.log(productTotalPrice);

    const cartTotalPrice = products.reduce((acc, product) => {
      let totalPrice = product.price * product.quantity;
      return acc + totalPrice;
    }, 0);
    // console.log(cartTotalPrice);

    // expensive Product and cheapest Product
    let expensiveProduct = products[0]!;
    let cheapestProduct = products[0]!;

    for (const expensive of products) {
      if (expensiveProduct.price < expensive.price) {
        expensiveProduct = expensive;
      }
      if (cheapestProduct.price > expensive.price) {
        cheapestProduct = expensive;
      }
    }

    // sum  total quantity
    const totalQuantity = products.reduce(
      (acc, product) => acc + product.quantity,
      0,
    );

    return {
      productTotalPrice,
      cartTotalPrice,
      expensiveProduct,
      cheapestProduct,
      totalQuantity,
    };
  };

  // call function
  // console.log(shoppingCart(products));
}

{
  // Task 7

  interface City {
    city: number;
  }

  const cities = [
    "Dhaka",
    "Chittagong",
    "Dhaka",
    "Khulna",
    "Dhaka",
    "Khulna",
    "Rajshahi",
  ];

  const cityCountFunction = (cities: string[]) => {
    let cityCount: { [Key: string]: number } = {};

    for (const city of cities) {
      if (cityCount[city]) {
        cityCount[city]++;
      } else {
        cityCount[city] = 1;
      }
    }
  };
  // console.log(cityCountFunction(cities));
}

{
  // Task 9 — Employee Management 🔥
  interface Employee {
    id: number;
    name: string;
    salary: number;
    department: string;
  }

  const employees: Employee[] = [
    {
      id: 1,
      name: "Piyas",
      salary: 25000,
      department: "IT",
    },
    {
      id: 2,
      name: "Rahim",
      salary: 18000,
      department: "HR",
    },
    {
      id: 3,
      name: "Karim",
      salary: 32000,
      department: "IT",
    },
    {
      id: 4,
      name: "Sakib",
      salary: 22000,
      department: "Finance",
    },
    {
      id: 5,
      name: "Nayeem",
      salary: 28000,
      department: "IT",
    },
    {
      id: 6,
      name: "Hasan",
      salary: 20000,
      department: "HR",
    },
    {
      id: 7,
      name: "Rafi",
      salary: 35000,
      department: "Management",
    },
    {
      id: 8,
      name: "Arman",
      salary: 24000,
      department: "Finance",
    },
    {
      id: 9,
      name: "Tanvir",
      salary: 30000,
      department: "IT",
    },
    {
      id: 10,
      name: "Shuvo",
      salary: 19000,
      department: "Support",
    },
  ];
  ///////////////////////////////////////

  const employeeManagement = (employees: Employee[]) => {
    // console.log(employees);
    const itDepartmentEmployees = employees.filter(
      (employee: Employee) => employee.department === "IT",
    );
    // console.log(itDepartmentEmployees);

    let highestPaidEmployee = employees[0]!;
    let lowestPaidEmployee = employees[0]!;

    for (const employee of employees) {
      if (highestPaidEmployee.salary < employee.salary) {
        highestPaidEmployee = employee;
      }
      if (lowestPaidEmployee.salary > employee.salary) {
        lowestPaidEmployee = employee;
      }
    }

    // console.log(highestPaidEmployee);
    // console.log(lowestPaidEmployee);

    const totalSalary = employees.reduce(
      (acc, employee) => acc + employee.salary,
      0,
    );
    const averageSalary = totalSalary / employees.length;
    // console.log(averageSalary);

    function search(id: number) {
      const searchEmployee = employees.find((employee) => employee.id === id);
      return searchEmployee;
    }
    ``;
    const searchEmployee = search(1);
    // const searchById: number = 2;
    // const searchEmployee = employees.find(
    //   (employee) => employee.id === searchById,
    // );
    // // console.log(searchEmployee);

    const highSalaryEmployees = employees.filter(
      (employee) => employee.salary >= 20000,
    );
    // console.log(highSalaryEmployees);

    return {
      itDepartmentEmployees,
      highestPaidEmployee,
      lowestPaidEmployee,
      averageSalary,
      searchEmployee,
      highSalaryEmployees,
    };
  };
  // console.log(employeeManagement(employees));
}
{
  // 🔴 Task 10 — Final Challenge
  // Student Management System

  interface Student {
    id: number;
    name: string;
    age: number;
    marks: number[];
  }

  const students: Student[] = [
    {
      id: 1,
      name: "Piyas",
      age: 21,
      marks: [80, 75, 90],
    },
    {
      id: 2,
      name: "Rahim",
      age: 22,
      marks: [65, 70, 68],
    },
    {
      id: 3,
      name: "Karim",
      age: 23,
      marks: [88, 92, 85],
    },
    {
      id: 4,
      name: "Sakib",
      age: 20,
      marks: [55, 60, 58],
    },
    {
      id: 5,
      name: "Nayeem",
      age: 22,
      marks: [95, 90, 93],
    },
    {
      id: 6,
      name: "Hasan",
      age: 21,
      marks: [72, 68, 75],
    },
    {
      id: 7,
      name: "Rafi",
      age: 24,
      marks: [45, 52, 48],
    },
    {
      id: 8,
      name: "Arman",
      age: 22,
      marks: [82, 78, 85],
    },
    {
      id: 9,
      name: "Tanvir",
      age: 23,
      marks: [60, 65, 62],
    },
    {
      id: 10,
      name: "Shuvo",
      age: 20,
      marks: [35, 42, 38],
    },
  ];

  const studentManagementSystem = (studentsObject: Student[]) => {
    // console.log(studentsObject);

    //
    const totalMark = studentsObject.map(
      (student) => student.marks.reduce((acc, mark) => acc + mark),
      0,
    );
    // console.log(totalMark);

    // calculate student average marks
    const studentAverageMark = studentsObject.map((student) => {
      let studentMarks =
        student.marks.reduce((acc, mark) => acc + mark) / student.marks.length;
      return Number(studentMarks.toFixed(0));
    });
    // console.log(studentAverageMark);

    // Grade Calculate
    const studentGradeCalculate = studentAverageMark.map((mark) => {
      const gradeCalculate = (mark: number): {} => {
        if (mark >= 80) {
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

        return "F";
      };
      return { [mark]: gradeCalculate(mark) };
    });
    // console.log(studentGradeCalculate);

    ///////////////////////////////////////////
    return {
      totalMark: totalMark,
      studentAverageMark: studentAverageMark,
      studentGradeCalculate: studentGradeCalculate,
    };
  };

  console.log(studentManagementSystem(students));
}
