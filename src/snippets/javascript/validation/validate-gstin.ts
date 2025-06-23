export default {
    id: "validate-gstin",
    title: "Validate GSTIN",
    tags: ["validation", "gstin", "javascript", "utilities"],
    code: `// Validate an Indian GSTIN number
function validateGSTIN(gstin) {
  // Regex for GSTIN: 2 digits, 5 letters, 4 digits, 1 letter, 1 digit/alphabet, 'Z', and 1 alphanumeric
  const gstinRegex = /^[0-3][0-9][A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;

  if (!gstinRegex.test(gstin)) return false;

  const validStateCodes = [
    "01", "02", "03", "04", "05", "06", "07", "08", "09", "10",
    "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
    "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
    "31", "32", "33", "34", "35", "36", "37"
  ];

  const stateCode = gstin.slice(0, 2);
  if (!validStateCodes.includes(stateCode)) return false;

  const pan = gstin.slice(2, 12);
  const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  const validFirstChars = ['C', 'P', 'H', 'F', 'A', 'B', 'G', 'J', 'L', 'T'];

  if (!panRegex.test(pan) || !validFirstChars.includes(pan[0])) return false;

  if (gstin[13] !== 'Z') return false;

  return true;
}

// Usage examples
validateGSTIN("27AABCU9603R1ZF"); // true - valid GSTIN
validateGSTIN("07ABCDE1234F1Z5"); // true - valid GSTIN for Delhi
validateGSTIN("29ABCDE1234F1Z5"); // true - Karnataka
validateGSTIN("00ABCDE1234F1Z5"); // false - invalid state code
validateGSTIN("27ABCDE1234F1Z");  // false - too short
validateGSTIN("27ABCDE1234F1Z@"); // false - last char invalid
validateGSTIN("27ABCDE1234F1ZA"); // true - "A" which stands for AOP (Association of Persons)
validateGSTIN("27ABCDE1234F1ZX"); // true - valid
validateGSTIN("27abcde1234f1z5"); // false - lowercase characters
validateGSTIN("27AABCU9603R1ZZ"); // true - valid GSTIN
validateGSTIN("36ABCDE1234F0Z9"); // false - GSTIN’s 13th character (entity code)`,
    description:
        "Validates an Indian GSTIN number by checking its format, state code, embedded PAN number, and fixed character 'Z'.",
    shortDescription: "Validate Indian GSTIN.",
    usage:
        "Use `validateGSTIN(gstin)` to check if a GSTIN number is valid.",
    contributedBy: "PankajBaliyan",
};