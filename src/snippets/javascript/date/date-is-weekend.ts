export default {
    id: "date-is-weekend",
    title: "Check Weekend",
    tags: ["date", "javascript", "utilities"],
    code: `// Check if a given date falls on a weekend
const isWeekend = (date) => {
  const day = new Date(date).getDay();
  return day === 0 || day === 6;
};

// Usage
const result = isWeekend("2025-06-22"); // true (Sunday)`,
    description: "Returns true if the date is Saturday or Sunday.",
    shortDescription: "Check if date is weekend.",
    usage: "Use `isWeekend(date)` to check if the date falls on a weekend.",
    contributedBy: "PankajBaliyan",
};
