// FULL CORRECT CODE

// Define the function safeFizzBuzz taking 'start' and 'end' as boundary parameters
function safeFizzBuzz(start, end) {
  // Check if either argument is NOT a number, NOT an integer, or if start is greater than end
  if (
    typeof start !== "number" || 
    typeof end !== "number" || 
    !Number.isInteger(start) || 
    !Number.isInteger(end) || 
    start > end
  ) {
    // Print defensive error message if any boundary check fails
    console.log("Error: Invalid FizzBuzz boundaries.");
    // Return null as specified when validation fails
    return null;
  }

  // Initialize a counter to keep track of how many numbers/values were printed
  let countPrinted = 0;

  // Loop from 'start' up to 'end' inclusive
  for (let i = start; i <= end; i++) {
    // Check if current number is divisible by BOTH 3 and 5 (i.e. divisible by 15)
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    // Check if current number is divisible by 3 only
    } else if (i % 3 === 0) {
      console.log("Fizz");
    // Check if current number is divisible by 5 only
    } else if (i % 5 === 0) {
      console.log("Buzz");
    // Otherwise, print the number itself
    } else {
      console.log(i);
    }
    // Increment the count of printed elements
    countPrinted++;
  }

  // Return the total count of elements printed
  return countPrinted;
}

// --- Professor's Test Cases ---
console.log(safeFizzBuzz(1, 5));
// Output:
// 1
// 2
// Fizz
// 4
// Buzz
// → 5

console.log(safeFizzBuzz(10, 5));
// Output:
// Error: Invalid FizzBuzz boundaries.
// → null

console.log(safeFizzBuzz("1", 5));
// Output:
// Error: Invalid FizzBuzz boundaries.
// → null