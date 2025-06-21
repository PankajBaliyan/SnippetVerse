// scripts/validateSnippets.cjs
const fs = require("fs");
const path = require("path");

const walkDir = (dir, callback) => {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath, callback);
    } else if (file.endsWith(".tsx")) {
      callback(fullPath);
    }
  });
};

let hasErrors = false;

const validateSnippet = (filePath) => {
  const content = fs.readFileSync(filePath, "utf-8");
  const requiredFields = [
    "id",
    "title",
    "code",
    "description",
    "contributedBy",
  ];
  const missing = requiredFields.filter((field) => !content.includes(field));
  if (missing.length > 0) {
    console.error(`❌ ${filePath} is missing: ${missing.join(", ")}`);
    hasErrors = true;
  }
};

const snippetsPath = path.join(__dirname, "../src/snippets");
walkDir(snippetsPath, validateSnippet);

if (hasErrors) {
  console.log("\n❌ Some snippets failed validation.\n");
  process.exit(1);
} else {
  console.log("✅ All snippets validated successfully.\n");
  process.exit(0);
}
