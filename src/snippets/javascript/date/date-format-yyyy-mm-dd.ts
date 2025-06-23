export default {
  id: "date-format",
  title: "Format Date (YYYY-MM-DD)",
  tags: ["date", "javascript", "utilities"],
  code: `// Format a date to YYYY-MM-DD
function toYYYYMMDD(input, useUTC = false) {
  if (input == null) return null;

  const date = new Date(input);
  if (isNaN(date.getTime())) return null;

  const year = useUTC ? date.getUTCFullYear() : date.getFullYear();
  const month = String(useUTC ? date.getUTCMonth() + 1 : date.getMonth() + 1).padStart(2, '0');
  const day = String(useUTC ? date.getUTCDate() : date.getDate()).padStart(2, '0');

  return \`\${year}-\${month}-\${day}\`;
}

// Usage
toYYYYMMDD(null); // null ✅
toYYYYMMDD("invalid"); // null ✅
toYYYYMMDD(1750769400000); // IST: "2025-06-24"
toYYYYMMDD(new Date('2024-02-29T12:00:00Z')); // Leap year date - "2024-02-29"
toYYYYMMDD(''); // Empty string input - null
toYYYYMMDD({}); // Object input (not a date) - null
toYYYYMMDD(Date.now()); // Current timestamp input - e.g. "2025-06-23" (based on today's date)
toYYYYMMDD(new Date('2025-06-23T23:59:59Z')); // Late night UTC input shifted to next day in IST - "2025-06-24"
toYYYYMMDD(new Date('2025-06-23T23:59:59Z'), true); // Late night UTC input, UTC mode - "2025-06-23"`,
  description:
      "Formats a JavaScript date input into a 'YYYY-MM-DD' string. Handles strings, timestamps, and Date objects. Returns null for invalid inputs.",
  shortDescription: "Format any date to YYYY-MM-DD.",
  usage:
      "Call `toYYYYMMDD(input, useUTC)` with a date, timestamp, or string. Use `useUTC = true` to force UTC format.",
  contributedBy: "PankajBaliyan",
};
