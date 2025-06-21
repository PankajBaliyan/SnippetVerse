export default {
  id: "array-unique",
  title: "Remove Duplicate Values",
  tags: ["array", "unique", "javascript", "utilities"],
  code: `// Remove duplicate values from an array
const unique = (arr) => [...new Set(arr)];

// Usage
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = unique(numbers); // [1, 2, 3, 4, 5]`,
  description:
    "A simple utility function that removes duplicate values from an array using Set.",
  shortDescription: "Remove duplicates from arrays.",
  usage: "Call `unique(array)` to get a new array with only unique values.",
  contributedBy: "PankajBaliyan",
};
