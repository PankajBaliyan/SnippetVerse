export default {
    id: "date-days-diff",
    title: "Days Difference",
    tags: ["date", "javascript", "utilities"],
    code: `// Get difference in days between two dates
const daysDiff = (date1, date2) => {
  const diff = Math.abs(new Date(date1) - new Date(date2));
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
};

// Usage
const diff = daysDiff('2025-06-01', '2025-06-22'); // 21`,
    description: "Calculates the number of days between two dates.",
    shortDescription: "Get number of days between dates.",
    usage: "Call `daysDiff(date1, date2)` to get the absolute day difference.",
    contributedBy: "PankajBaliyan",
};
