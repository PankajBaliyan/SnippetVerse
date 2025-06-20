export default {
  id: "js-function-utils",
  title: "Function Utility Helpers",
  code: `// Useful function utilities
  
  const functionUtils = {
    // Debounce function - delays execution until after wait time has passed
    debounce: (fn, delay) => {
      let timeout;
      return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), delay);
      };
    },
  
    // Throttle function - ensures fn is called at most once in every wait period
    throttle: (fn, limit) => {
      let inThrottle;
      return (...args) => {
        if (!inThrottle) {
          fn(...args);
          inThrottle = true;
          setTimeout(() => (inThrottle = false), limit);
        }
      };
    },
  
    // Once function - ensures fn runs only once
    once: (fn) => {
      let called = false;
      let result;
      return (...args) => {
        if (!called) {
          result = fn(...args);
          called = true;
        }
        return result;
      };
    }
  };
  
  // Usage examples
  const sayHello = () => console.log("Hello!");
  const sayHelloOnce = functionUtils.once(sayHello);
  sayHelloOnce(); // "Hello!"
  sayHelloOnce(); // No output (runs only once)
  
  window.addEventListener("resize", functionUtils.debounce(() => {
    console.log("Resized!");
  }, 300));`,
  description:
    "A set of handy utilities for function control, including debounce, throttle, and once to improve performance and prevent redundant calls.",
  shortDescription: "Debounce, throttle, and once helpers for JavaScript functions",
  tags: ["functions", "utilities", "debounce", "throttle", "once"],
  usage: "Import and use these helpers to manage how often your functions are invoked.",
  contributedBy: "JavaScript Community",
};
