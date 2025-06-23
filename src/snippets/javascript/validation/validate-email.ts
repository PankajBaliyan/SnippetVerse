export default {
    id: "validate-email",
    title: "Validate Email",
    tags: ["validation", "email", "javascript", "utilities"],
    code: `// Validate an email address
const validateEmail = (email) => {
  // Regular expression to match general email format
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;

  // Check for basic format match
  if (!regex.test(email)) {
    return false;
  }

  // Split the email into local part and domain
  const parts = email.split('@');
  if (parts.length !== 2) {
    return false;
  }
  const [localPart, domain] = parts;

  // Ensure the local part and domain don't start or end with a dot
  if (localPart.startsWith('.') || localPart.endsWith('.') || domain.startsWith('.') || domain.endsWith('.')) {
    return false;
  }

  // Ensure there are no consecutive dots in the local part or domain
  if (localPart.includes('..') || domain.includes('..')) {
    return false;
  }

  // Split the domain to check each part
  const domainParts = domain.split('.');

  // Check each domain part (label) does not start or end with a hyphen
  for (const part of domainParts) {
    if (part.startsWith('-') || part.endsWith('-')) {
      return false;
    }
  }

  // Ensure the domain has at least two parts and the TLD is valid
  if (domainParts.length < 2 || domainParts[domainParts.length - 1].length < 2) {
    return false;
  }

  return true;
}

validateEmail("example@domain.com");         // true
validateEmail("user.name+tag@sub.domain.org"); // true
validateEmail("user@localhost");             // false - no TLD
validateEmail("user@.com");                  // false - invalid domain
validateEmail("user@domain");                // false - no dot
validateEmail("user@domain.c");              // false (technically not valid, TLD can't be 1 char)
validateEmail("user@domain.toolongtld");     // true (no strict limit)
validateEmail("@domain.com");                // false - missing local part
validateEmail("user@domain..com");           // false - double dot
validateEmail("first.last@domain.co.uk");    // true`,
    description:
        "Validates an email address using a regular expression to ensure it follows a standard email format.",
    shortDescription: "Validate email address.",
    usage:
        "Use `validateEmail(email)` to check if an email address is valid.",
    contributedBy: "PankajBaliyan",
};