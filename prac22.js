// FULL CORRECT CODE

// Strict throwing helper function for min calculation
function throwMin(a, b) {
  // Validate that both arguments are strictly numbers and not NaN
  if (typeof a !== "number" || typeof b !== "number" || Number.isNaN(a) || Number.isNaN(b)) {
    // Throw an Error if validation fails
    throw new Error("Both arguments must be valid numbers.");
  }
  // Return the minimum of the two values
  return a < b ? a : b;
}

// Problem 13: recoverMin - Uses try...catch to safely handle errors and provide a fallback
function recoverMin(a, b) {
  // Enter the try block to attempt risky execution
  try {
    // Call the strict throwing function and return its result if successful
    return throwMin(a, b);
  // If an error is thrown anywhere inside the try block, control jumps straight to catch
  } catch (error) {
    // Log the error message to console.error as required
    console.error("Caught error:", error.message);
    // Gracefully recover by returning 0 as the default fallback value
    return 0;
  }
}

// --- Test Cases ---

// Valid call: Successfully returns the minimum (5)
console.log(recoverMin(10, 5)); 
// Output: 5

// Invalid call: Triggers catch block, logs error, and returns fallback value (0)
console.log(recoverMin("10", 5));
// Output:
// Caught error: Both arguments must be valid numbers.
// → 0

// Invalid call with NaN: Triggers catch block and returns fallback value (0)
console.log(recoverMin(NaN, 5));
// Output:
// Caught error: Both arguments must be valid numbers.
// → 0