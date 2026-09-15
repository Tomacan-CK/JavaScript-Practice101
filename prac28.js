// FULL CORRECT CODE

// Problem 19: safeDeepEqual - Recursively checks if two values or objects are deeply equal
function safeDeepEqual(objA, objB) {
  // Case 1: Strict primitive equality check (handles numbers, strings, booleans, same references)
  if (objA === objB) {
    return true;
  }

  // Case 2: Defensive check for null values or non-object types
  // In JS, typeof null === "object", so we explicitly verify objA !== null and objB !== null
  if (
    typeof objA !== "object" || 
    objA === null || 
    typeof objB !== "object" || 
    objB === null
  ) {
    // If one is primitive/null and they weren't strictly equal above, return false
    return false;
  }

  // Retrieve keys for both objects safely after passing defensive checks
  let keysA = Object.keys(objA);
  let keysB = Object.keys(objB);

  // Check if both objects have the exact same number of properties
  if (keysA.length !== keysB.length) {
    return false;
  }

  // Iterate over every property key in objA
  for (let key of keysA) {
    // Defensive check: Ensure key exists in objB and recursive values are deeply equal
    if (!keysB.includes(key) || !safeDeepEqual(objA[key], objB[key])) {
      return false;
    }
  }

  // All keys and nested values matched successfully
  return true;
}

// --- Test Cases ---

let obj1 = { val: 10, rest: { val: 20, rest: null } };
let obj2 = { val: 10, rest: { val: 20, rest: null } };
let obj3 = { val: 10, rest: { val: 20, rest: 30 } };

// Valid deep equal comparison
console.log(safeDeepEqual(obj1, obj2)); 
// Output: true

// Valid deep inequal comparison
console.log(safeDeepEqual(obj1, obj3)); 
// Output: false

// Defensive checks against null
console.log(safeDeepEqual(null, obj1)); 
// Output: false

console.log(safeDeepEqual(null, null)); 
// Output: true (Caught by strict equality objA === objB on line 1!)

// Defensive checks against primitives vs objects
console.log(safeDeepEqual("hello", { key: "hello" })); 
// Output: false