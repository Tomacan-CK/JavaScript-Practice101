// FULL CORRECT CODE

// Helper function: Converts an array to a nested list structure
function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
}

// Problem 17: safeNth - Safely retrieves an element from a list using try...catch
function safeNth(list, index) {
  // Enter the try block to validate inputs and perform recursive list traversal
  try {
    // Guard 1: Verify that list is an object and not null
    if (typeof list !== "object" || list === null) {
      throw new Error("Invalid list: Input must be a non-null object.");
    }

    // Guard 2: Verify that index is a valid non-negative integer
    if (typeof index !== "number" || !Number.isInteger(index) || index < 0) {
      throw new Error("Invalid index: Index must be a non-negative integer.");
    }

    // Inner recursive helper to traverse the linked list safely
    function findNth(currentNode, currentIdx) {
      // Base Case 1: If we walked past the end of the list, index doesn't exist
      if (!currentNode) return undefined;
      // Base Case 2: Found target index, return value
      if (currentIdx === 0) return currentNode.value;
      // Recursive step: Move to next node and decrement index counter
      return findNth(currentNode.rest, currentIdx - 1);
    }

    // Execute list traversal
    return findNth(list, index);

  // Catch any thrown validation errors gracefully
  } catch (error) {
    // Log error message to console.error
    console.error("List Access Error:", error.message);
    // Gracefully return undefined as required
    return undefined;
  }
}

// --- Test Cases ---

let myList = arrayToList([10, 20, 30]);

// Valid call: Position 1 is 20
console.log(safeNth(myList, 1)); 
// Output: 20

// Valid call: Position 0 is 10
console.log(safeNth(myList, 0)); 
// Output: 10

// Valid call out of bounds: Returns undefined naturally without error
console.log(safeNth(myList, 5)); 
// Output: undefined

// Invalid call (negative index): Throws error, catches it, logs error, returns undefined
console.log(safeNth(myList, -1));
// Output:
// List Access Error: Invalid index: Index must be a non-negative integer.
// → undefined

// Invalid call (null list): Throws error, catches it, logs error, returns undefined
console.log(safeNth(null, 2));
// Output:
// List Access Error: Invalid list: Input must be a non-null object.
// → undefined