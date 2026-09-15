// FULL CORRECT CODE

// Define the function throwSum taking 'numbers' parameter
function throwSum(numbers) {
  // Guard 1: Verify that the input is actually an array object
  if (!Array.isArray(numbers)) {
    // Throw a TypeError specifying that the input is not an array
    throw new TypeError("Invalid input: Argument must be an array.");
  }

  // Initialize total sum tracker
  let total = 0;

  // Loop through each element in the array using for...of
  for (let number of numbers) {
    // Guard 2: Verify that each element is strictly a primitive number and not NaN
    if (typeof number !== "number" || Number.isNaN(number)) {
      // Throw an Error specifying the invalid array element encountered
      throw new Error(`Invalid element in array: ${number} is not a valid number.`);
    }

    // Add valid number to the running total
    total += number;
  }

  // Return final accumulated total sum
  return total;
}

// --- Test Cases ---

// Valid call: Returns 15
console.log(throwSum([1, 2, 3, 4, 5])); // → 15

// Invalid input type: Throws TypeError("Invalid input: Argument must be an array.")
// throwSum("1, 2, 3");

// Invalid element inside array: Throws Error("Invalid element in array: hello is not a valid number.")
// throwSum([1, 2, "hello", 4]);

// Invalid element inside array: Throws Error("Invalid element in array: NaN is not a valid number.")
// throwSum([1, 2, NaN, 4]);