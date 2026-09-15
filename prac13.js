// FULL CORRECT CODE

// Define the function minSafely taking two parameters 'a' and 'b'
function minSafely(a, b) {
  // Check if 'a' is NOT a number, 'b' is NOT a number, 'a' is NaN, OR 'b' is NaN
  if (typeof a !== "number" || typeof b !== "number" || Number.isNaN(a) || Number.isNaN(b)) {
    // Log a warning message to the console if any check fails
    console.warn("Warning: Both arguments must be valid numbers.");
    // Return undefined to indicate invalid input
    return undefined;
  }

  // If 'a' is strictly smaller than 'b', return 'a'
  if (a < b) return a;
  // Otherwise, return 'b'
  return b;
}

// --- Test Cases ---
console.log(minSafely(10, 5));
// Output: 5

console.log(minSafely(-3, 8));
// Output: -3

console.log(minSafely("10", 5));
// Output: 
// Warning: Both arguments must be valid numbers.
// → undefined

console.log(minSafely(NaN, 5));
// Output: 
// Warning: Both arguments must be valid numbers.
// → undefined