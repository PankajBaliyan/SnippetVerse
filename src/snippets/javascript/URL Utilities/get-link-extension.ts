export default {
    id: "get-link-extension",
    title: "Get Link Extension",
    tags: ["url", "extension", "javascript", "utilities"],
    code: `// Extract the file extension from a URL
function getLinkExtension(url) {
  try {
    const path = new URL(url).pathname;
    const lastSegment = path.split("/").pop();
    return lastSegment.includes(".")
      ? lastSegment.split(".").pop().toLowerCase()
      : null;
  } catch {
    return null;
  }
}

// Usage
getLinkExtension("https://example.com/files/document.pdf"); // "pdf"
getLinkExtension("https://example.com/image.JPG"); // "jpg"
getLinkExtension("https://example.com/archive.tar.gz"); // "gz"
getLinkExtension("https://example.com/folder/"); // null
getLinkExtension("https://example.com"); // null
getLinkExtension("/relative/path/to/file.txt"); // null (not a valid absolute URL)
getLinkExtension("https://example.com/download?id=1234"); // null
getLinkExtension("invalid-url"); // null`,
    description:
        "Extracts the file extension from a URL's pathname, returning it in lowercase or null if not found.",
    shortDescription: "Get file extension from URL.",
    usage:
        "Use `getLinkExtension(url)` to retrieve the file extension from a URL.",
    contributedBy: "PankajBaliyan",
};