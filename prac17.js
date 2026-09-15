// FULL CORRECT CODE

// Define the function throwChessboard taking 'size' as a parameter
function throwChessboard(size) {
  // Check if size is NOT a number, NOT an integer, <= 0, or > 50
  if (typeof size !== "number" || !Number.isInteger(size) || size <= 0 || size > 50) {
    // Throw a custom Error with the exact required error message
    throw new Error("Chessboard size must be a positive integer up to 50.");
  }

  // Initialize an empty string to store the complete grid
  let board = "";

  // Outer loop controls each row from 0 up to (size - 1)
  for (let row = 0; row < size; row++) {
    // Inner loop controls each column from 0 up to (size - 1)
    for (let col = 0; col < size; col++) {
      // If the sum of row and col indices is even, place a space; otherwise, place a hash
      if ((row + col) % 2 === 0) {
        board += " ";
      } else {
        board += "#";
      }
    }
    // Add a newline character at the end of every row
    board += "\n";
  }

  // Return the complete chessboard string
  return board;
}

// --- Test Cases ---

// Valid call: Prints a 4x4 chessboard grid
console.log(throwChessboard(4));

// Invalid call: Throws Error("Chessboard size must be a positive integer up to 50.")
// throwChessboard(0);

// Invalid call: Throws Error("Chessboard size must be a positive integer up to 50.")
// throwChessboard(55);