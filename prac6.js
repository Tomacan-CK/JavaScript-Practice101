// FULL CORRECT CODE

// Define the range function taking three parameters:
// 'start': starting number
// 'end': ending number
// 'step': increment value (defaults to 1 if counting up, or -1 if counting down)
function range(start, end, step = start <= end ? 1 : -1) {
  // Create an empty array to store our list of numbers
  let result = [];

  // Check if we are counting UP (step is positive)
  if (step > 0) {
    // Loop starting at 'start', stopping when 'i' goes past 'end', incrementing by 'step' each time
    for (let i = start; i <= end; i += step) {
      // Add the current number 'i' to the end of our result array
      result.push(i);
    }
  // Otherwise, we are counting DOWN (step is negative)
  } else {
    // Loop starting at 'start', stopping when 'i' goes below 'end', adding the negative 'step' each time
    for (let i = start; i >= end; i += step) {
      // Add the current number 'i' to the end of our result array
      result.push(i);
    }
  }

  // Return the completed array of numbers back to whoever called the function
  return result;
}

// Define the sum function that takes an array of numbers as input
function sum(numbers) {
  // Initialize a variable 'total' to 0 to keep track of the running sum
  let total = 0;

  // Use a for...of loop to visit every single 'number' inside the 'numbers' array one by one
  for (let number of numbers) {
    // Add the current 'number' to our running 'total'
    total += number;
  }

  // Return the final accumulated total
  return total;
}

// --- Professor's Test Cases ---
console.log(range(1, 10));        // Outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));     // Outputs: [5, 4, 3, 2]
console.log(sum(range(1, 10)));   // Outputs: 55