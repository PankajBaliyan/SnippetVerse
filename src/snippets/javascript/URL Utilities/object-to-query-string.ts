export default {
    id: "object-to-query-string",
    title: "Object to Query String",
    tags: ["url", "query-string", "javascript", "utilities"],
    code: `// Convert an object to a URL query string
function objectToQueryString(obj) {
  const params = new URLSearchParams();

  for (const key in obj) {
    const value = obj[key];
    if (typeof value === 'object') {
      params.append(key, JSON.stringify(value));
    } else {
      params.append(key, String(value));
    }
  }

  return params.toString();
}

// Usage
const obj = { name: "John", age: 30, data: { id: 1 } };
const queryString = objectToQueryString(obj); // name=John&age=30&data=%7B%22id%22%3A1%7D`,
    description:
        "Converts a JavaScript object into a URL query string, handling both primitive and object values.",
    shortDescription: "Turn object into query string.",
    usage:
        "Use `objectToQueryString(obj)` to convert an object into a URL-encoded query string.",
    contributedBy: "PankajBaliyan",
};