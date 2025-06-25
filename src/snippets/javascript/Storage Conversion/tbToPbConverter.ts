export default {
  id: "tb-to-pb",
  title: "TB to PB Converter",
  tags: ["conversion", "tb", "pb", "javascript", "utilities"],
  code: `// Convert Terabytes (TB) to Petabytes (PB)
function tbToPb(terabytes) {
if (typeof terabytes !== "number" || terabytes < 0) {
  throw new Error("Input must be a non-negative number.");
}
return terabytes / 1024;
}

// Usage
const tb = 2048;
const pb = tbToPb(tb); // 2`,
  description:
      "Converts a given number of terabytes (TB) to petabytes (PB) using the standard 1 PB = 1024 TB conversion.",
  shortDescription: "Convert TB to PB.",
  usage:
      "Use `tbToPb(terabytes)` to convert terabytes into petabytes.",
  contributedBy: "PankajBaliyan",
};
