export default {
    id: "date-is-today",
    title: "Check If Today",
    tags: ["date", "javascript", "utilities"],
    code: `// Check if a date is today
const isToday = (date) => {
  const d = new Date(date);
  const today = new Date();
  return d.toDateString() === today.toDateString();
};

// Usage
const check = isToday(new Date()); // true`,
    description: "Checks whether the given date is the same as today's date.",
    shortDescription: "Check if date is today.",
    usage: "Use `isToday(date)` to verify if a given date is today.",
    contributedBy: "PankajBaliyan",
};
