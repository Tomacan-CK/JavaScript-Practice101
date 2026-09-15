// FULL CORRECT CODE

// Problem 4: countChar() - Counts any specified character in a string
function countChar(string, charToCount) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === charToCount) {
      count++;
    }
  }
  return count;
}

// Problem 3: countBs() - Rewritten to make use of countChar()
function countBs(string) {
  return countChar(string, "B");
}

// --- Professor's Test Cases ---
console.log(countBs("BOB"));                 // → 2
console.log(countChar("kakkerlak", "k"));    // → 4
