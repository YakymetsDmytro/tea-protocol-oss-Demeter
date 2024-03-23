// Helper function: Check if a number is even
function isEven(number) {
    return number % 2 === 0;
  }
  
  // Helper function: Generate a random integer within a specified range
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Helper function: Capitalize the first letter of a string
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  // Helper function: Calculate the factorial of a number
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  // Helper function: Reverse a string
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // Example usage of helper functions
  console.log("Is 5 even?", isEven(5)); // Output: false
  console.log("Random number between 1 and 10:", getRandomInt(1, 10)); // Output: Random number between 1 and 10
  console.log("Capitalized word:", capitalizeFirstLetter("hello")); // Output: Hello
  console.log("Factorial of 5:", factorial(5)); // Output: 120
  console.log("Reversed string:", reverseString("hello")); // Output: olleh  