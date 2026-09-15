// FULL CORRECT CODE

// Define the function countCharSafely taking 'str' and 'char' as parameters
function countCharSafely(str, char) {
  // Check if 'str' is NOT a string OR 'char' is NOT a string OR 'char' length is NOT exactly 1
  if (typeof str !== "string" || typeof char !== "string" || char.length !== 1) {
    // Print defensive warning message if validation fails
    console.warn("Error: Invalid inputs. First argument must be a string and second must be a single character.");
    // Return -1 to indicate error/invalid input
    return -1;
  }

  // Initialize a counter to keep track of character matches
  let count = 0;

  // Loop through each character of the string from index 0 to str.length - 1
  for (let i = 0; i < str.length; i++) {
    // Check if the character at the current position matches the target character
    if (str[i] === char) {
      // Increment the match counter by 1
      count++;
    }
  }

  // Return the final count of matching characters found
  return count;
}

// --- Test Cases ---
console.log(countCharSafely("kakkerlak", "k"));
// Output: 4

console.log(countCharSafely("BOB", "B"));
// Output: 2

console.log(countCharSafely("hello", "ll"));
// Output: 
// Error: Invalid inputs. First argument must be a string and second must be a single character.
// → -1

console.log(countCharSafely(12345, "1"));
// Output: 
// Error: Invalid inputs. First argument must be a string and second must be a single character.
// → -1