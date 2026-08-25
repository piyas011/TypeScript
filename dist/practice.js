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
    // Task 3 --- Array Processing
    const numbersArray = [10, 25, 30, 45, 65, 70];
    const arrayProcessing = (numbers) => {
        const evenNumber = numbers.filter((num) => num % 2 === 0);
        const oddNumber = numbers.filter((num) => num % 2 !== 0);
        const hightNumber = [...numbers].sort((a, b) => b - a)[0];
        const lowestNumber = [...numbers].sort((a, b) => a - b)[0];
        const totalSumOfNumber = numbers.reduce((acc, number) => acc + number, 0);
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
    const string = "JavaScript";
    const analyzerString = (srt) => {
        const stringLength = srt.length;
        const upperCase = srt.toUpperCase();
        const lowerCase = srt.toLowerCase();
        const countVowel = (string) => {
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
    const studentAnalyzer = (students) => {
        let topStudent = students[0];
        let lowestStudent = students[0];
    };
    console.log(studentAnalyzer(studentArray));
}
//# sourceMappingURL=practice.js.map