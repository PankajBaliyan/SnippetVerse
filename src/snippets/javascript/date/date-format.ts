export default {
    id: "date-format",
    title: "Format Date",
    tags: ["date", "javascript", "utilities"],
    code: `// Format a date to YYYY-MM-DD
const formatDate = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return \`\${year}-\${month}-\${day}\`;
};

// Usage
const today = new Date();
const formatted = formatDate(today); // "2025-06-22" (example)
console.log(formatted);`,
    description: "Formats a JavaScript Date object into a 'YYYY-MM-DD' string.",
    shortDescription: "Format date to YYYY-MM-DD.",
    usage: "Call `formatDate(date)` to format any date to a readable string.",
    contributedBy: "PankajBaliyan",
};