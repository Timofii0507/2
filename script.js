function makeAllPositive(arr) {
    let hasNegative = arr.some(num => num < 0);
    
    if (hasNegative) {
        return arr.map(num => Math.abs(num));
    } else {
        return "No negative numbers found";
    }
}

let arr1 = [7, -3, 8, 12, -15, 5];
console.log(makeAllPositive(arr1));

let arr2 = [2, 9, 14, 21];
console.log(makeAllPositive(arr2));
