export default {
    id: "bit-to-byte",
    title: "Bit to Byte Converter",
    tags: ["conversion", "bit", "byte", "javascript", "utilities"],
    code: `// Convert Bits to Bytes
function bitToByte(bits) {
if (typeof bits !== "number" || bits < 0) {
  throw new Error("Input must be a non-negative number.");
}
return bits / 8;
}

// Usage
const bits = 64;
const bytes = bitToByte(bits); // 8`,
    description:
        "Converts a given number of bits to bytes. Since 1 byte = 8 bits, the function divides the input by 8.",
    shortDescription: "Convert bits to bytes.",
    usage:
        "Use `bitToByte(bits)` to convert bits into bytes.",
    contributedBy: "PankajBaliyan",
};
