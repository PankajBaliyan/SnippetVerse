export default {
    id: "query-string-to-object",
    title: "Query String to Object",
    tags: ["url", "query-string", "javascript", "utilities"],
    code: `// Convert a URL query string to a JavaScript object
function queryStringToObject(queryString) {
  const params = new URLSearchParams(queryString);
  const obj = {};

  for (const [key, val] of params) {
    const decoded = decodeURIComponent(val);
    try {
      obj[key] = JSON.parse(decoded);
    } catch {
      obj[key] = decoded;
    }
  }

  return obj;
}

// Usage
const query = "name=John&age=30&data=%7B%22id%22%3A1%7D";
const result = queryStringToObject(query); // { name: "John", age: "30", data: { id: 1 } }`,
    description:
        "Converts a URL query string into a JavaScript object, parsing JSON values when possible and decoding URL-encoded strings.",
    shortDescription: "Turn query string into object.",
    usage:
        "Use `queryStringToObject(queryString)` to convert a URL query string into a JavaScript object.",
    contributedBy: "PankajBaliyan",
};