export default {
    id: "validate-pan-number",
    title: "Validate PAN Number",
    tags: ["validation", "pan", "javascript", "utilities"],
    code: `// Validate an Indian PAN number
function validatePanNumber(pan) {
  const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  const upperPan = pan.toUpperCase(); // Normalize to uppercase
  if (!panRegex.test(upperPan)) return false;
  const validFirstChars = ["C", "P", "H", "F", "A", "B", "G", "J", "L", "T"];
  return validFirstChars.includes(upperPan[0]);
}

// Usage
validatePanNumber("ABCDE1234F"); // true - valid PAN
validatePanNumber("abcde1234f"); // true - valid lowercase input normalized
validatePanNumber("ABCD1234F");  // false - only 4 letters at start
validatePanNumber("ABCDE12345"); // false - ends with digit instead of letter
validatePanNumber("ABCDE1234Z"); // false - invalid first character 'A'-'Z' but not in allowed set
validatePanNumber("ABCDE1234");  // false - missing last character
validatePanNumber("ABCDE1234F1"); // false - too many characters
validatePanNumber("");           // false - empty input
validatePanNumber("ABCDE!234F"); // false - invalid special character
validatePanNumber("PQRST6789X"); // true - valid structure and prefix`,
    description:
        "Validates an Indian PAN number by checking its format (5 letters, 4 digits, 1 letter) and ensuring the first letter is valid.",
    shortDescription: "Validate Indian PAN number.",
    usage:
        "Use `validatePanNumber(pan)` to check if a PAN number is valid.",
    contributedBy: "PankajBaliyan",
};