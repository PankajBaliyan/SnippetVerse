export default {
  id: "array-difference",
  title: "Array Difference",
  tags: ["array", "javascript", "utilities"],
  code: `// Get difference between two arrays
const difference = (a, b) => a.filter(item => !b.includes(item));

// Usage
const a = [1, 2, 3, 4];
const b = [2, 4];
const diff = difference(a, b); // [1, 3]`,
  description: "Returns elements in the first array not present in the second.",
  shortDescription: "Find the difference between two arrays.",
  usage:
    "Call `difference(array1, array2)` to get unique items from the first array.",
  contributedBy: "PankajBaliyan",
};
