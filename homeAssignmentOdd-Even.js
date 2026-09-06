// Assignment Details:  
// Write a JavaScript function named `isOddOrEven` that takes an integer as input and returns `Odd` if the 
// number is odd and `"Even"` if the number is even. 
 
function isOddOrEven(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(isOddOrEven(5));
console.log(isOddOrEven(10));
console.log(isOddOrEven(100));