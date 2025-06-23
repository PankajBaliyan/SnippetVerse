export default {
  id: "validate-driving-license",
  title: "Validate Driving License",
  tags: ["validation", "driving-license", "javascript", "utilities"],
  code: `// Validate an Indian Driving License number
function validateDrivingLicense(dl) {
  const dlRegex = /^[A-Z]{2}[0-9]{2}(19|20)[0-9]{2}[0-9]{7}$/;
  return dlRegex.test(dl.toUpperCase());
}

validateDrivingLicense("DL1020197654321"); // true - Delhi
validateDrivingLicense("UP9920160000001"); // true - UP, valid format
validateDrivingLicense("mh1420221234567"); // true - lowercase input normalized
validateDrivingLicense("MH14202212345");   // false - only 5 digits at end
validateDrivingLicense("MH1421221234567"); // false - invalid year (2122 not allowed)
validateDrivingLicense("M1420221234567");  // false - missing one letter
validateDrivingLicense("MHAB20221234567"); // false - non-numeric RTO code
validateDrivingLicense("MH14202212345678"); // false - too long`,
  description:
      "Validates an Indian Driving License number by checking if it consists of 2 uppercase letters, 2 digits for state code, a 4-digit year (19xx or 20xx), and 7 digits.",
  shortDescription: "Validate Indian Driving License.",
  usage:
      "Use `validateDrivingLicense(dl)` to check if an Indian Driving License number is valid.",
  contributedBy: "PankajBaliyan",
};