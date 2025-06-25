export default {
  id: "gb-to-tb",
  title: "GB to TB Converter",
  tags: ["conversion", "gb", "tb", "javascript", "utilities"],
  code: `// Convert Gigabytes (GB) to Terabytes (TB)
function gbToTb(gigabytes) {
if (typeof gigabytes !== "number" || gigabytes < 0) {
  throw new Error("Input must be a non-negative number.");
}
return gigabytes / 1024;
}

// Usage
const gb = 2048;
const tb = gbToTb(gb); // 2`,
  description:
      "Converts a given number of gigabytes (GB) to terabytes (TB) using the standard 1 TB = 1024 GB conversion.",
  shortDescription: "Convert GB to TB.",
  usage:
      "Use `gbToTb(gigabytes)` to convert gigabytes into terabytes.",
  contributedBy: "PankajBaliyan",
};
