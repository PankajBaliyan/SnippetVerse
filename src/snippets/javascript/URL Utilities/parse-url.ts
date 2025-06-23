export default {
  id: "parse-url",
  title: "Parse URL",
  tags: ["url", "parsing", "javascript", "utilities"],
  code: `// Parse a URL into its components
function parseUrl(url) {
  try {
    const parsed = new URL(url);
    return {
      protocol: parsed.protocol,
      hostname: parsed.hostname,
      port: parsed.port,
      pathname: parsed.pathname,
      search: parsed.search,
      hash: parsed.hash,
      params: Object.fromEntries(parsed.searchParams)
    };
  } catch {
    return null;
  }
}

// Usage
const url = "https://example.com:8080/path?name=John&age=30#section";
const result = parseUrl(url); 
// { 
//   protocol: "https:", 
//   hostname: "example.com", 
//   port: "8080", 
//   pathname: "/path", 
//   search: "?name=John&age=30", 
//   hash: "#section",
//   params: { name: "John", age: "30" }
// }`,
  description:
      "Parses a URL string into an object containing its components, including protocol, hostname, port, pathname, search, hash, and query parameters.",
  shortDescription: "Parse URL into components.",
  usage: "Use `parseUrl(url)` to break down a URL into its constituent parts.",
  contributedBy: "PankajBaliyan",
};
