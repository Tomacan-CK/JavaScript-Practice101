// FULL CORRECT CODE

// Problem 8: reverseArray - Creates and returns a brand-new reversed array
function reverseArray(array) {
  // Declare a new empty array to store the reversed elements
  let output = [];
  // Loop backward starting from the last index (array.length - 1) down to index 0
  for (let i = array.length - 1; i >= 0; i--) {
    // Push each element into the new output array
    output.push(array[i]);
  }
  // Return the newly built reversed array (leaves original array untouched)
  return output;
}

// Problem 9: reverseArrayInPlace - Modifies the original array directly without creating a new one
function reverseArrayInPlace(array) {
  // Loop only through the first half of the array (Math.floor(array.length / 2))
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    // Store the left-side element temporarily so it doesn't get overwritten
    let temp = array[i];
    // Copy the corresponding right-side element into the left position
    array[i] = array[array.length - 1 - i];
    // Copy the saved left-side element into the corresponding right position
    array[array.length - 1 - i] = temp;
  }
  // Return value is optional, but returning array allows chained calls
  return array;
}

// --- Professor's Test Cases ---
let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
// → ["C", "B", "A"]
console.log(myArray);
// → ["A", "B", "C"]

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]