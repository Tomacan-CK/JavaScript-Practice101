// FULL CORRECT CODE

// Define the function isEvenSafely taking 'n' as a parameter
function isEvenSafely(n) {
  // Defensive validation: verify if n is NOT a number, NOT an integer, or IS negative
  if (typeof n !== "number" || !Number.isInteger(n) || n < 0) {
    // Return false immediately to prevent invalid inputs or infinite recursion
    return false;
  }

  // Define the inner recursive helper function that assumes positive whole numbers
  function checkEven(val) {
    // Base Case 1: 0 is even
    if (val === 0) return true;
    // Base Case 2: 1 is odd (not even)
    if (val === 1) return false;
    // Recursive Step: Subtract 2 and pass the smaller number back into checkEven
    return checkEven(val - 2);
  }

  // Call the recursive helper with the validated non-negative integer 'n'
  return checkEven(n);
}

// --- Test Cases ---
console.log(isEvenSafely(50));
// Output: true

console.log(isEvenSafely(75));
// Output: false

console.log(isEvenSafely(-1));
// Output: false (Safely returned false without crashing!)

console.log(isEvenSafely(-10));
// Output: false

console.log(isEvenSafely(4.5));
// Output: false