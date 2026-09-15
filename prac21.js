// FULL CORRECT CODE

// Define the function throwRange taking 'start', 'end', and 'step' parameters
function throwRange(start, end, step) {
  // Check if step is 0 (which would cause an infinite loop)
  if (step === 0) {
    throw new Error("Step cannot be zero as it causes an infinite loop.");
  }

  // Check for impossible direction: trying to count UP with a negative step
  if (start < end && step < 0) {
    throw new Error("Impossible step direction: step must be positive when start is less than end.");
  }

  // Check for impossible direction: trying to count DOWN with a positive step
  if (start > end && step > 0) {
    throw new Error("Impossible step direction: step must be negative when start is greater than end.");
  }

  // Initialize an empty array to store the generated sequence
  let result = [];

  // Branch A: Counting UP (positive step)
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
  // Branch B: Counting DOWN (negative step)
  } else {
    for (let i = start; i >= end; i += step) {
      result.push(i);
    }
  }

  // Return the completed array of numbers
  return result;
}

// --- Test Cases ---

// Valid call (Counting UP):
console.log(throwRange(1, 10, 2));   // → [1, 3, 5, 7, 9]

// Valid call (Counting DOWN):
console.log(throwRange(5, 2, -1));   // → [5, 4, 3, 2]

// Invalid call: Throws Error("Step cannot be zero as it causes an infinite loop.")
// throwRange(1, 10, 0);

// Invalid call: Throws Error("Impossible step direction: step must be positive when start is less than end.")
// throwRange(1, 10, -1);

// Invalid call: Throws Error("Impossible step direction: step must be negative when start is greater than end.")
// throwRange(10, 1, 2);