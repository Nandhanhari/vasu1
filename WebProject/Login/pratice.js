let a = 20;
let b = 30;
console.log(a + b);
b = "30";
console.log(a + b)
/* Javascript can typed dynamically and it can change from one form to another */
let sal = 3000;
let sal2 = 40000;
if (sal > sal2){
console.log("Sal2 is greater " + sal2)
}else {
    console.log("Sal1 is greater" + sal)
}



/* Functions code */
function sayGM(){
 console.log("Good Morning babes")
}
sayGM()

function add(a,b){
    let c = a+b;
console.log(c)
}
add(30,50)

let d = 245;
if (d % 7 == 0){
    console.log(d)
}
else {
    console.log("not divisible by")
}
/* to check whether number is having 4 at unit place*/
let e = 45554;
if (e % 10 == 4){
    console.log("number is having 4 in unit place")
}
else {
console.log("number is not having 4")
}
let num = [22, 33, 44, 55, 66]
num.sort
console.log(num);

/* to print 1 to 10 numbers using while loop*/
function numpower(num, power) {
    var res = 1;
    for(var i = 0; i < power; i++){
        res = res*num;
    }
    return i
}
console.log(numpower(12, 12))
console.log(numpower(12, 5))
