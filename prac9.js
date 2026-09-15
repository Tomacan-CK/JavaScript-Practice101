/*
try {
 throw new TypeError("This is a type mistake!");
} catch (error) {
 
console.log(error.name);    // → "TypeError"
console.log(error.message); // → "This is a type mistake!"
}*/

try {
  // 1. You are doing your normal task here...
  // 2. You suddenly realize you made a huge mistake! 
  // 3. You manually "sound the alarm" and stop everything.
  throw new TypeError("This is a type mistake!");

  // ❌ Anything down here is completely ignored because you stopped!
  console.log("Buying the item..."); 

} catch (error) {
  // 4. The safety team rushes in to handle the situation.
  // 5. They look at your alarm to see what kind of mistake it was:
  console.log(error.name);    // → "TypeError" (The official category of the mistake)
  
  // 6. They read the specific note you wrote about what went wrong:
  console.log(error.message); // → "This is a type mistake!" (Your custom note)
}
