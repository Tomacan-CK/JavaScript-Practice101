// FULL CORRECT CODE

// Problem 20: runSafely - Higher-order function to safely execute any function
function runSafely(fn, ...args) {
  // Defensive validation: ensure fn is actually a callable function
  if (typeof fn !== "function") {
    return {
      success: false,
      error: "Invalid argument: First parameter 'fn' must be a valid callable function."
    };
  }

  // Attempt execution inside try...catch block
  try {
    // Spread ...args directly into the target function call
    let value = fn(...args);
    // Return structured success object with the result
    return { success: true, result: value };
  } catch (error) {
    // Catch thrown exceptions and return structured failure object with error message
    return { success: false, error: error.message };
  }
}

// --- Sample Helper Functions for Testing ---

function throwSum(numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError("Input must be an array.");
  }
  let total = 0;
  for (let n of numbers) {
    if (typeof n !== "number" || Number.isNaN(n)) {
      throw new Error(`Invalid element: ${n} is not a valid number.`);
    }
    total += n;
  }
  return total;
}

function range(start, end) {
  let result = [];
  for (let i = start; i <= end; i++) result.push(i);
  return result;
}

// --- Test Cases ---

// 1. Successful execution of range(1, 5)
console.log(runSafely(range, 1, 5));
// Output: { success: true, result: [1, 2, 3, 4, 5] }

// 2. Successful execution of throwSum([10, 20, 30])
console.log(runSafely(throwSum, [10, 20, 30]));
// Output: { success: true, result: 60 }

// 3. Failed execution of throwSum with invalid element inside array
console.log(runSafely(throwSum, [10, "bad", 30]));
// Output: { success: false, error: "Invalid element: bad is not a valid number." }

// 4. Defensive check failure: passing a non-function first argument
console.log(runSafely("notAFunction", 1, 2, 3));
// Output: { success: false, error: "Invalid argument: First parameter 'fn' must be a valid callable function." }