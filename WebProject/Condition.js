let x = 4567;
if (x % 3 == 0) {
    console.log("Number is divisible by Three")
}
else {
    console.log("Number is not divisible by Three")
}


let y = 122;
if ( y > 0) {
    console.log("NUmber is positive number")
}
else  {
    console.log("Number is not positive number ")
}
/* check whether number is having 4 in unit place*/
if (x % 10 == 4) {
    console.log ("Number is having 4 in unit place")
}
else {
    console.log(" Number is not having 4 in unit place")
}

/* check whether number is having 3- digit number or not*/
if (y > 99) {
    console.log("Number is 3 digit number")
}
else {
    console.log(" Number is not a 3 digit number")
}
/* Write a program to print even or odd */
if (y % 2 == 0) {
    console.log(" Number is even number")
}
else {
    console.log ("Number is odd number")
}
/* 3 numbers in ascending number */
let z = [99, 88, 77, 66, 55]
let T = z.sort()
console.log(T);

/* 3 numbers in descending number*/
console.log(T.reverse());
