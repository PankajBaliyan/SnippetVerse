export default {
  id: "array-remove",
  title: "Remove Element",
  tags: ["array", "javascript", "utilities"],
  code: `// Remove specific value from array
const remove = (arr, value) => arr.filter(item => item !== value);

// Usage
const items = [1, 2, 3, 2];
const filtered = remove(items, 2); // [1, 3]`,
  description: "Removes all instances of a value from an array.",
  shortDescription: "Remove value from array.",
  usage: "Use `remove(array, value)` to filter out a specific value.",
  contributedBy: "PankajBaliyan",
};
