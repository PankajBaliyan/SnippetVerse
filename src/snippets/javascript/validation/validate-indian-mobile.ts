export default {
    id: "validate-indian-mobile",
    title: "Validate Indian Mobile Number",
    tags: ["validation", "mobile", "javascript", "utilities"],
    code: `// Validate an Indian mobile number
function validateIndianMobile(mobile) {
  const mobileRegex = /^[6-9][0-9]{9}$/;
  return mobileRegex.test(mobile);
}

// Usage
validateIndianMobile("9876543210"); // true - valid number
validateIndianMobile("6123456789"); // true - starts with 6
validateIndianMobile("5123456789"); // false - starts with 5
validateIndianMobile("9988776655"); // true - valid
validateIndianMobile("09876543210"); // false - 11 digits with leading 0
validateIndianMobile("+919876543210"); // false - includes country code
validateIndianMobile("98765");        // false - too short
validateIndianMobile("98765432101");  // false - too long
validateIndianMobile("98765abcd1");   // false - contains letters
validateIndianMobile("987654321O");   // false - letter 'O' instead of zero`,
    description:
        "Validates an Indian mobile number by checking if it starts with 6, 7, 8, or 9 and is followed by 9 digits.",
    shortDescription: "Validate Indian mobile number.",
    usage:
        "Use `validateIndianMobile(mobile)` to check if an Indian mobile number is valid.",
    contributedBy: "PankajBaliyan",
};