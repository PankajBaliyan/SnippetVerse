export default {
  id: "js-dom-helpers",
  title: "DOM Element Helpers",
  tags: ["dom", "elements", "utilities", "web"],
  code: `// DOM manipulation utility functions
const domHelpers = {
  // Create element with attributes and content
  createElement: (tag, attributes = {}, content = '') => {
    const element = document.createElement(tag);
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
    if (content) element.textContent = content;
    return element;
  },
  
  // Add multiple event listeners
  addEvents: (element, events) => {
    Object.entries(events).forEach(([event, handler]) => {
      element.addEventListener(event, handler);
    });
  },
  
  // Toggle multiple classes
  toggleClasses: (element, classes) => {
    classes.forEach(className => element.classList.toggle(className));
  }
};

// Usage
const button = domHelpers.createElement('button', 
  { class: 'btn', 'data-id': '123' }, 
  'Click me'
);`,
  description:
    "Helper functions for common DOM manipulation tasks including creating elements, adding event listeners, and managing classes.",
  shortDescription: "DOM manipulation utilities",
  usage:
    "Use these functions to simplify DOM operations in vanilla JavaScript projects.",
  contributedBy: "pankajbaliyan",
};
