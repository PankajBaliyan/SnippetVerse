export default {
  id: "byte-to-kb",
  title: "Byte to KB Converter",
  tags: ["conversion", "byte", "kb", "javascript", "utilities"],
  code: `// Convert Bytes to Kilobytes (KB)
function byteToKb(bytes) {
if (typeof bytes !== "number" || bytes < 0) {
  throw new Error("Input must be a non-negative number.");
}
return bytes / 1024;
}

// Usage
const bytes = 2048;
const kb = byteToKb(bytes); // 2`,
  description:
      "Converts a given number of bytes to kilobytes (KB) using the standard 1 KB = 1024 bytes conversion.",
  shortDescription: "Convert bytes to KB.",
  usage:
      "Use `byteToKb(bytes)` to convert bytes into kilobytes.",
  contributedBy: "PankajBaliyan",
};
