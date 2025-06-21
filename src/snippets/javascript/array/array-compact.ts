export default {
  id: "array-compact",
  title: "Compact Array",
  tags: ["array", "javascript", "utilities"],
  code: `// Remove falsy values from an array
const compact = (arr) => arr.filter(Boolean);

// Usage
const messy = [0, 1, false, 2, '', 3];
const clean = compact(messy); // [1, 2, 3]`,
  description:
    "Filters out falsy values like false, null, 0, '', undefined, and NaN.",
  shortDescription: "Remove falsy values from array.",
  usage: "Use `compact(array)` to clean arrays from unwanted falsy values.",
  contributedBy: "PankajBaliyan",
};
