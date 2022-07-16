
function max_Value(arr){
    var max = arr[0];
    for (var i =1; i<= arr.length-1; i ++) {
    if(arr[i] >= max){
        console.log(max = arr[i]);
    }
    }
return max;
}
let result = max_Value([10, 20, 35, 5, 85]);
console.log(result);
let result1 = max_Value([10, 20, 30, 40]);
console.log(result1);

/* Program to find sum of elements in given array*/
  function Sum_vaues(arr) {
     var sum = 0;
     for (num of arr) {
        sum += num;
     }
     return sum;
}
let result2 = Sum_vaues([10, 20, 30, 40,5,85]);
console.log(result2);

 