export default {
    id: "sort-array-by-key",
    title: "Sort Array by Key",
    tags: ["array", "sorting", "javascript", "utilities"],
    code: `// Sort an array of objects alphabetically based on a given key and order
function sortArrayByKey(arr, key, order = "asc") {
  return [...arr].sort((a, b) => {
    const valueA = String(a[key] ?? "").toLowerCase();
    const valueB = String(b[key] ?? "").toLowerCase();
    const comparison = valueA.localeCompare(valueB);
    return order === "desc" ? -comparison : comparison;
  });
}

const data = [
  { name: "Charlie", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 }
];

const sortedAsc = sortArrayByKey(data, "name", "asc");
console.log(sortedAsc);
// ✅ Expected:
// [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 35 },
//   { name: "Charlie", age: 30 }
// ]

const sortedDesc = sortArrayByKey(data, "name", "desc");
console.log(sortedDesc);
// ✅ Expected:
// [
//   { name: "Charlie", age: 30 },
//   { name: "Bob", age: 35 },
//   { name: "Alice", age: 25 }
// ]`,
    description:
        "Sorts an array of objects alphabetically based on the values of a specified key, ignoring case.",
    shortDescription: "Sort array by key alphabetically.",
    usage:
        "Use `sortArrayByKey(array, key)` to sort an array of objects by a specific key.",
    contributedBy: "PankajBaliyan",
};