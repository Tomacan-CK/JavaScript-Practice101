// FULL CORRECT CODE

// Define the function throwFizzBuzz taking 'start' and 'end' as parameters
function throwFizzBuzz(start, end) {
  // Check if start or end are NOT numbers, NOT whole integers, or if start is greater than end
  if (
    typeof start !== "number" || 
    typeof end !== "number" || 
    !Number.isInteger(start) || 
    !Number.isInteger(end) || 
    start > end
  ) {
    // Proactively halt execution and throw a custom Error with a descriptive message
    throw new Error("Start value must be less than or equal to end value.");
  }

  // Loop through numbers from 'start' to 'end' inclusive
  for (let i = start; i <= end; i++) {
    // Check if the current number is divisible by BOTH 3 and 5 (i.e., divisible by 15)
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    // Check if the current number is divisible by 3 only
    } else if (i % 3 === 0) {
      console.log("Fizz");
    // Check if the current number is divisible by 5 only
    } else if (i % 5 === 0) {
      console.log("Buzz");
    // Otherwise, print the number itself
    } else {
      console.log(i);
    }
  }
}

// --- Test Cases ---

// Valid call: Prints 1, 2, Fizz, 4, Buzz
throwFizzBuzz(1, 5);

// Invalid call: Throws Error("Start value must be less than or equal to end value.")
// throwFizzBuzz(10, 5);