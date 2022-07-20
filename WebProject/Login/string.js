let students = "Hari Vasu";
let students2 = "Sudhakar";
let len = students.length;
console.log(len);
console.log(students2.length - 1);
let rep = students.replace("Hari Vasu", "Vasunandhan");/* Replace parameter*/
console.log(rep);
console.log(rep.toUpperCase());
console.log(rep.toLowerCase());
console.log(students.padStart(1,"M"));
let pad = students.padStart(4, "R");
console.log(pad);
let text = "4";
let padded = text.padStart(4, "z");
console.log(padded)
console.log(students.split(" ", 1));