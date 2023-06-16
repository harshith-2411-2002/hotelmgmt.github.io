








let arr = [2,3,3,5,3]
function sum(arr){
    let sum = 0;
    for (let i = 0; i<arr.length; i++){
        sum = sum + arr[i]
    }
    return sum;
}
function largestNumber(arr){
    let largest = arr[i]
    for (let i = 0; i<arr.length; i++){
        if (arr[i] > largest){
            largest = arr[i];
        }
    }
    console.log("largest",largest);
    return largest;
}
largest