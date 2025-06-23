export default {
  id: "validate-voter-id",
  title: "Validate Voter ID (EPIC No.)",
  tags: ["validation", "voter-id", "epic", "javascript", "utilities"],
  code: `// Validate an Indian Voter ID (EPIC No.)
function validateVoterId(voterId) {
  const voterIdRegex = /^[A-Z]{3}[0-9]{7}$/;
  return voterIdRegex.test(voterId.toUpperCase());
}

// Usage
validateVoterId("ABC1234567"); // true
validateVoterId("abc1234567"); // true - lowercased input
validateVoterId("AB12345678"); // false - only 2 letters at start
validateVoterId("ABCDE1234");  // false - 5 letters, 4 digits
validateVoterId("A1B2C3D4E5");  // false - mixed format
validateVoterId("XYZ0000000"); // true
validateVoterId("XYZ00000");   // false - only 5 digits`,
  description:
      "Validates an Indian Voter ID (EPIC No.) by checking if it consists of 3 uppercase letters followed by 7 digits.",
  shortDescription: "Validate Indian Voter ID.",
  usage:
      "Use `validateVoterId(voterId)` to check if an Indian Voter ID (EPIC No.) is valid.",
  contributedBy: "PankajBaliyan",
};
