export default {
  id: "array-is-empty",
  title: "Check Empty Array",
  tags: ["array", "javascript", "utilities"],
  code: `// Check if an array is empty
const isEmpty = (arr) => arr.length === 0;

// Usage
const a = [];
const b = [1];
const checkA = isEmpty(a); // true
const checkB = isEmpty(b); // false`,
  description: "Checks whether the provided array has any elements.",
  shortDescription: "Check if array is empty.",
  usage: "Call `isEmpty(array)` to verify if it's empty.",
  contributedBy: "PankajBaliyan",
};
