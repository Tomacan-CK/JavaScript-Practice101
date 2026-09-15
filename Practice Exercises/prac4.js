// --- Problem 1: min() ---
function min(a, b) {
  if (a < b) return a;
  return b;
}

// --- Problem 2: Recursive isEven() ---
function isEven(n) {
  if (n === 0) return true;
  if (n === 1) return false;
  if (n < 0) return isEven(-n); // Convert negative numbers to positive
  return isEven(n - 2);
}

// --- Test Cases ---
console.log(min(0, 10));   // → 0
console.log(min(0, -10));  // → -10

console.log(isEven(50));   // → true
console.log(isEven(75));   // → false
console.log(isEven(-1));   // → false
