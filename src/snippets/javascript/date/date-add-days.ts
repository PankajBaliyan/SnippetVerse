export default {
    id: "date-add-days",
    title: "Add Days to Date",
    tags: ["date", "javascript", "utilities"],
    code: `// Add days to a date
const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

// Usage
const newDate = addDays(new Date(), 5);`,
    description: "Returns a new date by adding a specified number of days to the input date.",
    shortDescription: "Add days to date.",
    usage: "Use `addDays(date, numberOfDays)` to get a future date.",
    contributedBy: "PankajBaliyan",
};
