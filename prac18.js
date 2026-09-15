// FULL CORRECT CODE

// Define the recursive function throwIsEven taking parameter 'n'
function throwIsEven(n) {
  // Check if 'n' is NOT a number primitive, NOT a whole integer, or IS negative
  if (typeof n !== "number" || !Number.isInteger(n) || n < 0) {
    // Throw a RangeError with the exact requested error message
    throw new RangeError("isEven only accepts non-negative integers.");
  }

  // Base Case 1: 0 is even
  if (n === 0) return true;
  // Base Case 2: 1 is odd (not even)
  if (n === 1) return false;

  // Recursive Step: Subtract 2 and make a recursive call
  return throwIsEven(n - 2);
}

// --- Test Cases ---

// Valid test cases
console.log(throwIsEven(50)); // → true
console.log(throwIsEven(75)); // → false

// Invalid call: Throws RangeError("isEven only accepts non-negative integers.")
// throwIsEven(-1);

// Invalid call: Throws RangeError("isEven only accepts non-negative integers.")
// throwIsEven(4.5);