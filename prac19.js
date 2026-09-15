// FULL CORRECT CODE

// Define the function throwCountChar taking 'str' and 'char' parameters
function throwCountChar(str, char) {
  // Validate first argument: must be a primitive string
  if (typeof str !== "string") {
    // Throw an Error specifying that the first argument is invalid
    throw new Error("Invalid argument: 'str' must be a string.");
  }

  // Validate second argument: must be a string AND exactly 1 character long
  if (typeof char !== "string" || char.length !== 1) {
    // Throw an Error specifying that the second argument is invalid
    throw new Error("Invalid argument: 'char' must be a single-character string.");
  }

  // Initialize match counter
  let count = 0;

  // Loop through every character in the string
  for (let i = 0; i < str.length; i++) {
    // Check if current character matches the target character
    if (str[i] === char) {
      // Increment count on match
      count++;
    }
  }

  // Return final count of matching characters
  return count;
}

// --- Test Cases ---

// Valid calls:
console.log(throwCountChar("kakkerlak", "k")); // → 4
console.log(throwCountChar("BOB", "B"));        // → 2

// Invalid first argument: Throws Error("Invalid argument: 'str' must be a string.")
// throwCountChar(12345, "1");

// Invalid second argument: Throws Error("Invalid argument: 'char' must be a single-character string.")
// throwCountChar("hello", "ll");