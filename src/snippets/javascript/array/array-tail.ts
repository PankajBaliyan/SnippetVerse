export default {
  id: "array-tail",
  title: "Get Array Tail",
  tags: ["array", "javascript", "utilities"],
  code: `// Get all elements of array except the first
const tail = (arr) => arr.slice(1);

// Usage
const items = [10, 20, 30];
const rest = tail(items); // [20, 30]`,
  description: "Returns a new array excluding the first element.",
  shortDescription: "Get all items except first.",
  usage: "Use `tail(array)` to get the rest of the elements.",
  contributedBy: "PankajBaliyan",
};
