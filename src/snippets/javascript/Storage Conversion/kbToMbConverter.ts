export default {
    id: "kb-to-mb",
    title: "KB to MB Converter",
    tags: ["conversion", "kb", "mb", "javascript", "utilities"],
    code: `// Convert Kilobytes (KB) to Megabytes (MB)
function kbToMb(kilobytes) {
if (typeof kilobytes !== "number" || kilobytes < 0) {
  throw new Error("Input must be a non-negative number.");
}
return kilobytes / 1024;
}

// Usage
const kb = 2048;
const mb = kbToMb(kb); // 2`,
    description:
        "Converts a given number of kilobytes (KB) to megabytes (MB) using the standard 1 MB = 1024 KB conversion.",
    shortDescription: "Convert KB to MB.",
    usage: "Use `kbToMb(kilobytes)` to convert kilobytes into megabytes.",
    contributedBy: "PankajBaliyan",
};
