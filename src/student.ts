class Students {
  id: number;
  name: string;
  age: number;
  marks: number[];

  constructor(id: number, name: string, age: number, marks: number[]) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.marks = marks;
  }
}

const piyas = new Students(1, "Piyas Ahmed", 21, [80, 75, 90]);
const rahim = new Students(2, "Rahim", 22, [65, 70, 68]);
const krim = new Students(3, "Karim", 23, [88, 92, 85]);
const sakib = new Students(2, "Sakib", 20, [55, 60, 58]);
const nayeem = new Students(5, "Nayeem", 22, [95, 90, 93]);
const hasan = new Students(6, "Hasan", 22, [72, 68, 75]);
const rafi = new Students(7, "Rafi", 24, [45, 52, 48]);
const arman = new Students(8, "Arman", 22, [82, 78, 85]);
const tanvir = new Students(9, "Tanvir", 23, [606562]);
const shuvo = new Students(10, "Shuvo", 20, [35, 42, 39]);
