
// Problem 14: recoverRangeSum - Safely builds range, sums it, and catches invalid step errors
function recoverRangeSum(start, end, step) {
  // Enter the try block to attempt building and summing the range
  try {
    // Attempt to generate the array using throwRange
    let rangeArray = throwRange(start, end, step);

    // Calculate sum of the generated array
    let total = 0;
    for (let num of rangeArray) {
      total += num;
    }

    // Return the calculated total sum on success
    return total;
  // If throwRange throws an error (e.g. step === 0), jump directly to catch
  } catch (error) {
    // Log the caught error message to console.error
    console.error("Range Error Caught:", error.message);
    // Return 0 as the fallback recovery value
    return 0;
  }
}

// --- Test Cases ---

// Valid call: Range is [1, 3, 5, 7, 9], sum is 25
console.log(recoverRangeSum(1, 10, 2)); 
// Output: 25

// Valid downward call: Range is [5, 4, 3, 2], sum is 14
console.log(recoverRangeSum(5, 2, -1)); 
// Output: 14

// Invalid call (step === 0): Catches error, logs it, and returns fallback 0
console.log(recoverRangeSum(1, 10, 0));
// Output:
// Range Error Caught: Step cannot be zero as it causes an infinite loop.
// → 0

// Invalid call (impossible direction): Catches error, logs it, and returns fallback 0
console.log(recoverRangeSum(1, 10, -1));
// Output:
// Range Error Caught: Impossible step direction: step must be positive when start is less than end.
// → 0