"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    // Task 1 -- Student Result
    const name = "Piyas Ahmed";
    const age = 21;
    const mark = 100;
    const result = (mark) => {
        if (Number.isNaN(mark) || mark < 0 || mark > 100) {
            return "Invalid Mark";
        }
        else if (mark >= 80) {
            return "A+";
        }
        else if (mark >= 70) {
            return "A";
        }
        else if (mark >= 60) {
            return "A-";
        }
        else if (mark >= 50) {
            return "B";
        }
        else if (mark >= 40) {
            return "C";
        }
        else if (mark >= 33) {
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
    const numberAnalyzer = (number) => {
        const negativePositiveCheck = number > 0 ? "Positive" : number <= 0 ? "Negative" : "Zero";
        // console.log(negativePositiveCheck);
        const evenOddCheck = number % 2 === 0 ? "Even Number" : "Odd Number";
        // console.log(evenOddCheck);
        const square = number * number;
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
    // Task 3 - Array Processing
    const numbers = [];
}
//# sourceMappingURL=practice.js.map