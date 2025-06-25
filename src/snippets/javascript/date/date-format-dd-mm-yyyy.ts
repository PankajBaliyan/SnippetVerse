export default {
    id: "date-format",
    title: "Format Date (DD-MM-YYYY)",
    tags: ["date", "javascript", "utilities"],
    code: `// Format a date to DD-MM-YYYY
function toDDMMYYYY(input, useUTC = false) {
  if (input == null) return null;

  const date = new Date(input);
  if (isNaN(date.getTime())) return null;

  const day = String(useUTC ? date.getUTCDate() : date.getDate()).padStart(2, '0');
  const month = String(useUTC ? date.getUTCMonth() + 1 : date.getMonth() + 1).padStart(2, '0');
  const year = useUTC ? date.getUTCFullYear() : date.getFullYear();

  return \`\${day}-\${month}-\${year}\`;
}

toDDMMYYYY(null); // null ✅
toDDMMYYYY("invalid"); // null ✅
toDDMMYYYY(1750769400000); // IST: "24-06-2025"
toDDMMYYYY(new Date('2024-02-29T12:00:00Z')); // Leap year - "29-02-2024"
toDDMMYYYY(''); // null
toDDMMYYYY({}); // null
toDDMMYYYY(Date.now()); // e.g. "23-06-2025"
toDDMMYYYY(new Date('2025-06-23T23:59:59Z')); // IST: "24-06-2025"
toDDMMYYYY(new Date('2025-06-23T23:59:59Z'), true); // UTC: "23-06-2025"`,
    description:
        "Formats a JavaScript date input into a 'YYYY-MM-DD' string. Handles strings, timestamps, and Date objects. Returns null for invalid inputs.",
    shortDescription: "Format any date to YYYY-MM-DD.",
    usage:
        "Call `toYYYYMMDD(input, useUTC)` with a date, timestamp, or string. Use `useUTC = true` to force UTC format.",
    contributedBy: "PankajBaliyan",
};
