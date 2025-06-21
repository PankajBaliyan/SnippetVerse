export default {
  id: "array-shuffle",
  title: "Shuffle Array",
  tags: ["array", "javascript", "utilities"],
  code: `// Shuffle array using Fisher-Yates algorithm
const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

// Usage
const ordered = [1, 2, 3, 4, 5];
const randomized = shuffle([...ordered]);`,
  description: "Shuffles the array in place using the Fisher-Yates algorithm.",
  shortDescription: "Randomize array order.",
  usage: "Use `shuffle(array)` to get a randomly ordered version of the array.",
  contributedBy: "PankajBaliyan",
};
