export default {
    id: "format-duration",
    title: "Format Duration from Minutes",
    tags: ["time", "duration", "javascript", "utilities"],
    code: `// Format duration from minutes into a readable string
export const formatDurationFromMinutes = (timeInMinutes) => {
  if (!timeInMinutes || isNaN(timeInMinutes) || timeInMinutes < 1) return "0 minutes";

  const MINUTES_IN = {
    year: 525600,     // 365 days
    month: 43200,     // 30 days (approx.)
    day: 1440,
    hour: 60,
    minute: 1,
  };

  const result = [];

  let remainingMinutes = timeInMinutes;

  for (const [unit, value] of Object.entries(MINUTES_IN)) {
    const count = Math.floor(remainingMinutes / value);
    if (count > 0) {
      result.push(\`\${count} \${unit}\${count > 1 ? "s" : ""}\`);
      remainingMinutes %= value;
    }
  }

  return result.join(", ");
};

// Usage
const duration = formatDurationFromMinutes(1500); // "1 day, 1 hour"
const duration = formatDurationFromMinutes(150000); // "3 months, 14 days, 4 hours"
const duration = formatDurationFromMinutes(1500000); // "2 years, 10 months, 11 days, 16 hours"`,
    description:
        "Converts a duration in minutes into a human-readable string, breaking it down into years, months, days, hours, and minutes.",
    shortDescription: "Format minutes into duration.",
    usage:
        "Use `formatDurationFromMinutes(minutes)` to convert minutes into a readable duration string.",
    contributedBy: "PankajBaliyan",
};