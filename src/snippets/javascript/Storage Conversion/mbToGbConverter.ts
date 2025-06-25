export default {
    id: "mb-to-gb",
    title: "MB to GB Converter",
    tags: ["conversion", "mb", "gb", "javascript", "utilities"],
    code: `// Convert Megabytes (MB) to Gigabytes (GB)
function mbToGb(megabytes) {
if (typeof megabytes !== "number" || megabytes < 0) {
  throw new Error("Input must be a non-negative number.");
}
return megabytes / 1024;
}

// Usage
const mb = 2048;
const gb = mbToGb(mb); // 2`,
    description:
        "Converts a given number of megabytes (MB) to gigabytes (GB) using the standard 1 GB = 1024 MB conversion.",
    shortDescription: "Convert MB to GB.",
    usage:
        "Use `mbToGb(megabytes)` to convert megabytes into gigabytes.",
    contributedBy: "PankajBaliyan",
};
