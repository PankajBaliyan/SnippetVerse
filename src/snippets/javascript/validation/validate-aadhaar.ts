export default {
    id: "validate-aadhaar",
    title: "Validate Aadhaar Number",
    tags: ["validation", "aadhaar", "javascript", "utilities"],
    code: `// Validate an Indian Aadhaar number
function validateAadhaar(aadhaar) {
  const aadhaarRegex = /^[2-9][0-9]{11}$/;
  return aadhaarRegex.test(aadhaar);
}

// Usage
const aadhaar = "234567890123";
const isValid = validateAadhaar(aadhaar); // true`,
    description:
        "Validates an Indian Aadhaar number by checking if it is a 12-digit number starting with 2-9.",
    shortDescription: "Validate Indian Aadhaar number.",
    usage:
        "Use `validateAadhaar(aadhaar)` to check if an Aadhaar number is valid.",
    contributedBy: "PankajBaliyan",
};