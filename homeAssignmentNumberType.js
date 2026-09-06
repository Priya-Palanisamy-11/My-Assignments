// Create a JavaScript function that determines if a number is positive, negative, or zero and returns a 
// corresponding string indicating the type.

function getNumberType(num) {
	if (num > 0) {
	return "It is a positive number";
	}
	else if (num < 0) {
	return "It is a negative number";
	}
	else {
	return "The number is neutral";
    }
}

console.log(getNumberType(-1))
console.log(getNumberType(1))
console.log(getNumberType(0)) 