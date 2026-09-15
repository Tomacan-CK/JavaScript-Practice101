// FULL CORRECT CODE

// Define the function createChessboardSafely taking 'size' as a parameter
function createChessboardSafely(size) {
  // Check if size is NOT a number, is NOT an integer, is <= 0, or is > 30
  if (typeof size !== "number" || !Number.isInteger(size) || size <= 0 || size > 30) {
    // Print a warning message to the console if validation fails
    console.warn("Warning: Invalid chessboard size. Must be an integer between 1 and 30.");
    // Return an empty string as specified
    return "";
  }

  // Initialize an empty string to build the complete grid layout
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
    // Add a newline character at the end of every row to move to the next line
    board += "\n";
  }

  // Return the completed chessboard string
  return board;
}

// --- Professor's Test Cases ---
console.log(createChessboardSafely(8));
// Output:
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 

console.log(createChessboardSafely(0));
// Output:
// Warning: Invalid chessboard size. Must be an integer between 1 and 30.
// → ""

console.log(createChessboardSafely(35));
// Output:
// Warning: Invalid chessboard size. Must be an integer between 1 and 30.
// → ""