export default {
  id: "array-chunk",
  title: "Chunk an Array",
  tags: ["array", "chunk", "javascript", "utilities"],
  code: `// Split an array into chunks of a specific size
const chunk = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

// Usage
const values = [1, 2, 3, 4, 5];
const chunked = chunk(values, 2); // [[1, 2], [3, 4], [5]]`,
  description:
    "Splits an array into smaller arrays (chunks) of a specified size.",
  shortDescription: "Break array into smaller parts.",
  usage:
    "Use `chunk(array, size)` to divide arrays into chunks of the given size.",
  contributedBy: "PankajBaliyan",
};
