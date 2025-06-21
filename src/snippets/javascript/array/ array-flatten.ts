export default {
    id: "array-flatten",
    title: "Flatten Nested Arrays",
    tags: ["array", "flatten", "javascript", "utilities"],
    code: `// Recursively flatten nested arrays
const flatten = (arr) => arr.reduce((flat, toFlatten) =>
  flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten), []);

// Usage
const nested = [1, [2, [3, 4]], 5];
const flatArray = flatten(nested); // [1, 2, 3, 4, 5]`,
    description:
        "Flattens a deeply nested array into a single-level array using recursion and reduce.",
    shortDescription: "Flatten nested arrays into a single level.",
    usage:
        "Use `flatten(nestedArray)` to remove all nesting from arrays.",
    contributedBy: "PankajBaliyan",
};