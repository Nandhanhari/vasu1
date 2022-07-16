/*Program to check Identical same or not */
function Identical(arr) {
    var first = arr[0];
    for (var i =1; i <= arr.length-1; i++) {
        if(arr[i] != first) {
        return false;
        }
    }
    return true;
 }
 let result = Identical([10, 20, 30, 40, 50]);
 console.log(result);
 let result2 = Identical([10, 10, 10, 30]);
 console.log(result2)