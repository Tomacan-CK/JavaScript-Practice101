// FULL CORRECT CODE

// Define the function drawTriangleSafely taking 'height' as a parameter
function drawTriangleSafely(height) {
  // Check if height is NOT a number, is NOT an integer, or is outside the range 1 to 20
  if (typeof height !== "number" || !Number.isInteger(height) || height < 1 || height > 20) {
    // Print the defensive error message if validation fails
    console.log("Error: Invalid triangle height.");
    // Return false to indicate the operation failed
    return false;
  }

  // Loop from row 1 up to 'height'
  for (let row = 1; row <= height; row++) {
    // Calculate required spaces for right-alignment: (height - current row)
    let spaces = " ".repeat(height - row);
    // Calculate required hashes for current row: (current row count)
    let hashes = "#".repeat(row);
    // Combine spaces and hashes, then print the row to the console
    console.log(spaces + hashes);
  }

  // Return true to indicate the triangle was drawn successfully
  return true;
}

// --- Test Cases ---
console.log(drawTriangleSafely(4));
// Output:
//    #
//   ##
//  ###
// ####
// → true

console.log(drawTriangleSafely(0));
// Output:
// Error: Invalid triangle height.
// → false

console.log(drawTriangleSafely("5"));
// Output:
// Error: Invalid triangle height.
// → false