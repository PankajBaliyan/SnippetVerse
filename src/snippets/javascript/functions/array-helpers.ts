export default {
  id: "js-array-helpers",
  title: "Array Helper Functions",
  code: `// Useful array manipulation functions
const arrayHelpers = {
  // Remove duplicates from array
  unique: (arr) => [...new Set(arr)],
  
  // Chunk array into smaller arrays
  chunk: (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  },
  
  // Flatten nested arrays
  flatten: (arr) => arr.flat(Infinity),
  
  // Get random element from array
  random: (arr) => arr[Math.floor(Math.random() * arr.length)]
};

// Usage examples
const numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(arrayHelpers.unique(numbers)); // [1, 2, 3, 4, 5]
console.log(arrayHelpers.chunk(numbers, 3)); // [[1, 2, 2], [3, 4, 4], [5]]`,
  description:
    "A collection of utility functions for common array operations including removing duplicates, chunking, flattening, and getting random elements.",
  shortDescription: "Utility functions for array manipulation",
  tags: ["array", "utilities", "helpers", "functional"],
  usage:
    "Import and use these helper functions in your JavaScript projects for common array operations.",
  contributedBy: "JavaScript Community",
};
