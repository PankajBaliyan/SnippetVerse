export default {
  id: "array-intersection",
  title: "Array Intersection",
  tags: ["array", "javascript", "utilities"],
  code: `// Get common elements of two arrays
const intersection = (a, b) => a.filter(item => b.includes(item));

// Usage
const a = [1, 2, 3];
const b = [2, 3, 4];
const common = intersection(a, b); // [2, 3]`,
  description: "Finds common elements shared between two arrays.",
  shortDescription: "Get common elements from arrays.",
  usage: "Call `intersection(array1, array2)` to get shared values.",
  contributedBy: "PankajBaliyan",
};
