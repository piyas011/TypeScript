const students = [
  {
    id: 1,
    name: "Piyas",
    age: 22,
    marks: [80, 75, 90],
  },
  {
    id: 2,
    name: "Rahim",
    age: 21,
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

// Student Management System //

interface Student {
  id: number;
  name: string;
  age: number;
  marks: number[];
}

// Calculate Total Marks
const totalMarkCalculate = (studentsObject: Student[]): number[] => {
  const totalMark = studentsObject.map((student) =>
    student.marks.reduce((acc, mark) => acc + mark, 0),
  );
  return totalMark;
};

// Average Marks
const calculateAverageMark = (studentsObject: Student[]) => {
  const averageMark = studentsObject.map((student) => {
    let average =
      student.marks.reduce((acc, mark) => acc + mark, 0) / student.marks.length;
    average = Number(average.toFixed(2));
    return average;
  });

  return averageMark;
};

// calculate grade
type Grade = "A+" | "A" | "A-" | "B" | "C" | "D" | "F";
const calculateGrade = (averageMark: number[]): Grade[] => {
  const grade = averageMark.map((mark: number): Grade => {
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
  });
  return grade;
};

// Top Student

const averageMark = (students: Student) => {
  const total = students.marks.reduce((acc, mark) => acc + mark);
  const average = total / students.marks.length;
  return average;
};

const findTopStudent = (students: Student[]) => {
  const topStudent = students.reduce((top, student) => {
    const currentAverage = averageMark(student);

    const topAverage = averageMark(top);

    if (currentAverage > topAverage) {
      return student;
    }
    return top;
  });
  return topStudent;
};
// console.log(totalMarkCalculate(students));
// console.log(calculateAverageMark(students));
// console.log(calculateGrade(calculateAverageMark(students)));

console.log(findTopStudent(students));
