// FULL CORRECT CODE

// Problem 16: safeReverseArray - Reverses an array safely using try...catch
function safeReverseArray(arr) {
  // Enter the try block to attempt array reversal operations
  try {
    // Check if the argument is not an array; throw a TypeError if validation fails
    if (!Array.isArray(arr)) {
      throw new TypeError("Argument must be a valid array.");
    }

    // Create a new empty array to hold the reversed elements
    let reversed = [];

    // Loop backward starting from the last index down to index 0
    for (let i = arr.length - 1; i >= 0; i--) {
      // Push each element into the new reversed array
      reversed.push(arr[i]);
    }

    // Return the successfully reversed array
    return reversed;

  // If any error occurs inside the try block, catch it here
  } catch (error) {
    // Log the specified failure message to console.error
    console.error("Reversal failed. Returning empty array.");
    // Return an empty array as the safe default recovery value
    return [];
  }
}

// --- Test Cases ---

// Valid call: Returns reversed array ["C", "B", "A"]
console.log(safeReverseArray(["A", "B", "C"])); 
// Output: ["C", "B", "A"]

// Valid call: Returns reversed array [3, 2, 1]
console.log(safeReverseArray([1, 2, 3])); 
// Output: [3, 2, 1]

// Invalid call (null input): Triggers catch block and returns []
console.log(safeReverseArray(null));
// Output:
// Reversal failed. Returning empty array.
// → []

// Invalid call (string primitive input): Triggers catch block and returns []
console.log(safeReverseArray("Hello"));
// Output:
// Reversal failed. Returning empty array.
// → []