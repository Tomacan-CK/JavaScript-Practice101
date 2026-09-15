// 1. Define the array (note: this contains a single string element "apple, banana")
let fruits = ["apple, banana"]; 

// 2. This will log: true
console.log(Array.isArray(fruits)); 

// 3. This will throw a ReferenceError because 'apple' is not defined as a variable
try {
    console.log(Array.isArray(apple)); 
} catch (error) {
    console.log(`Error: ${error.message}`); // Logs: "Error: apple is not defined"
}

// 4. This will log: false
console.log(Array.isArray(null)); 
