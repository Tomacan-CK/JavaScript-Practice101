// FULL CORRECT CODE

// Strict throwing helper function for evenness calculation
function throwIsEven(n) {
  // Validate input: must be a number primitive, a whole integer, and non-negative
  if (typeof n !== "number" || !Number.isInteger(n) || n < 0) {
    // Throw RangeError for bad input values
    throw new RangeError("isEven only accepts non-negative integers.");
  }

  // Base case 1: 0 is even
  if (n === 0) return true;
  // Base case 2: 1 is odd (not even)
  if (n === 1) return false;

  // Recursive step: subtract 2 repeatedly
  return throwIsEven(n - 2);
}

// Problem 15: batchIsEven - Processes an array and catches errors INSIDE the loop
function batchIsEven(array) {
  // Guard check: verify input is an array
  if (!Array.isArray(array)) {
    console.error("Input must be a valid array.");
    return;
  }

  // Iterate through each element in the array
  for (let item of array) {
    // Place try...catch INSIDE the loop so one bad element doesn't stop iteration
    try {
      // Attempt to check evenness using throwIsEven
      let isEven = throwIsEven(item);
      // Log the result if throwIsEven succeeds
      console.log(`${item} is ${isEven ? "even" : "odd"}`);
    } catch (error) {
      // Catch error for invalid element, print warning, and continue to next item
      console.warn(`Warning: Could not process '${item}': ${error.message}`);
    }
  }
}

// --- Test Cases ---

let testData = [4, 7, -2, 10, "hello", 15, 4.5, 0];
batchIsEven(testData);

// Output:
// 4 is even
// 7 is odd
// Warning: Could not process '-2': isEven only accepts non-negative integers.
// 10 is even
// Warning: Could not process 'hello': isEven only accepts non-negative integers.
// 15 is odd
// Warning: Could not process '4.5': isEven only accepts non-negative integers.
// 0 is even