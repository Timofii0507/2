function sumOfMultiplesOfThree(arr) {
    return arr
        .filter(num => num > 0 && num % 3 === 0)
        .reduce((sum, num) => sum + num, 0);
}

let arr3 = [3, 5, -9, 7, 12, 8, 10, -6];
console.log(sumOfMultiplesOfThree(arr3)); // Виведе: 15

let arr4 = [6, 14, -12, 9, 4];
console.log(sumOfMultiplesOfThree(arr4)); // Виведе: 15
