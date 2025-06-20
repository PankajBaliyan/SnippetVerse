
export interface Snippet {
  id: string;
  title: string;
  language: string;
  category: string;
  code: string;
  tags: string[];
  description: string;
  shortDescription: string;
  usage?: string;
  contributedBy?: string;
}

export const snippets: Snippet[] = [
  {
    id: '1',
    title: 'Array Map Transformation',
    language: 'javascript',
    category: 'array',
    code: `// Transform array elements with map()
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Map with objects
const users = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 }
];
const names = users.map(user => user.name);
console.log(names); // ['John', 'Jane']`,
    tags: ['array', 'es6', 'functional'],
    description: 'Learn how to transform arrays using the map() method. The map() method creates a new array with the results of calling a provided function on every element in the calling array.',
    shortDescription: 'Transform arrays using the map() method',
    usage: 'Use map() when you need to transform each element in an array into something else while maintaining the same array length.',
    contributedBy: 'johndev'
  },
  {
    id: '2',
    title: 'Array Filter Method',
    language: 'javascript',
    category: 'array',
    code: `// Filter array elements
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8, 10]

// Filter objects
const users = [
  { name: 'John', age: 25, active: true },
  { name: 'Jane', age: 30, active: false },
  { name: 'Bob', age: 35, active: true }
];
const activeUsers = users.filter(user => user.active);
console.log(activeUsers);`,
    tags: ['array', 'filter', 'es6'],
    description: 'Filter array elements based on a condition using the filter() method.',
    shortDescription: 'Filter arrays based on conditions',
    usage: 'Use filter() to create a new array with only elements that pass a test.',
    contributedBy: 'arraymaster'
  },
  {
    id: '3',
    title: 'String Interpolation',
    language: 'javascript',
    category: 'string',
    code: `// Template literals for string interpolation
const name = 'John';
const age = 25;
const message = \`Hello, my name is \${name} and I am \${age} years old.\`;
console.log(message);

// Multi-line strings
const multiLine = \`
  This is a
  multi-line
  string
\`;

// Expression evaluation
const a = 5;
const b = 10;
const result = \`The sum of \${a} and \${b} is \${a + b}\`;`,
    tags: ['string', 'template-literals', 'es6'],
    description: 'Use template literals for string interpolation and multi-line strings in JavaScript.',
    shortDescription: 'String interpolation with template literals',
    usage: 'Use template literals when you need to embed expressions or create multi-line strings.',
    contributedBy: 'stringwizard'
  },
  {
    id: '4',
    title: 'Async/Await Pattern',
    language: 'javascript',
    category: 'async',
    code: `// Modern way to handle API calls
async function fetchUserData(userId) {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }
    
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// Usage
async function main() {
  try {
    const user = await fetchUserData(123);
    console.log(user);
  } catch (error) {
    console.error('Failed to load user:', error);
  }
}`,
    tags: ['async', 'fetch', 'api', 'promises'],
    description: 'Handle asynchronous operations with async/await syntax for cleaner, more readable code.',
    shortDescription: 'Handle async operations with async/await',
    usage: 'Use async/await for cleaner asynchronous code instead of promise chains.',
    contributedBy: 'asyncdev'
  },
  {
    id: '5',
    title: 'Object Destructuring',
    language: 'javascript',
    category: 'object',
    code: `// Basic object destructuring
const user = { name: 'John', age: 25, email: 'john@example.com' };
const { name, age, email } = user;
console.log(name, age, email);

// Destructuring with renaming
const { name: userName, age: userAge } = user;
console.log(userName, userAge);

// Nested destructuring
const person = {
  info: { name: 'Jane', age: 30 },
  address: { city: 'New York', country: 'USA' }
};
const { info: { name: personName }, address: { city } } = person;
console.log(personName, city);`,
    tags: ['object', 'destructuring', 'es6'],
    description: 'Extract properties from objects using destructuring assignment for cleaner code.',
    shortDescription: 'Extract object properties with destructuring',
    usage: 'Use destructuring to extract multiple properties from objects in a single statement.',
    contributedBy: 'jsexpert'
  },
  {
    id: '6',
    title: 'Python List Comprehension',
    language: 'python',
    category: 'array',
    code: `# Basic list comprehension
numbers = [1, 2, 3, 4, 5]
squares = [x**2 for x in numbers]
print(squares)  # [1, 4, 9, 16, 25]

# With condition
even_squares = [x**2 for x in numbers if x % 2 == 0]
print(even_squares)  # [4, 16]

# Nested list comprehension
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flattened = [item for row in matrix for item in row]
print(flattened)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]`,
    tags: ['list-comprehension', 'python', 'functional'],
    description: 'Create lists efficiently using Python list comprehensions.',
    shortDescription: 'Concise way to create lists in Python',
    usage: 'Use list comprehensions for creating lists based on existing iterables.',
    contributedBy: 'pythonista'
  },
  {
    id: '7',
    title: 'React useState Hook',
    language: 'react',
    category: 'hooks',
    code: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Hello, {name}!</p>
    </div>
  );
}

export default Counter;`,
    tags: ['react', 'hooks', 'state', 'component'],
    description: 'Manage component state using the useState hook in React functional components.',
    shortDescription: 'Managing state with React useState hook',
    usage: 'Use useState when you need to add state to functional components.',
    contributedBy: 'reactdev'
  },
  {
    id: '8',
    title: 'CSS Flexbox Layout',
    language: 'css',
    category: 'layout',
    code: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.flex-row {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.flex-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.flex-responsive {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}`,
    tags: ['flexbox', 'layout', 'css', 'responsive'],
    description: 'Create flexible layouts using CSS Flexbox properties.',
    shortDescription: 'Flexible layouts with CSS Flexbox',
    usage: 'Use Flexbox for one-dimensional layouts and alignment.',
    contributedBy: 'cssmaster'
  }
];

export const getLanguages = (): string[] => {
  return [...new Set(snippets.map(snippet => snippet.language))];
};

export const getCategories = (language?: string): string[] => {
  const filteredSnippets = language ? snippets.filter(s => s.language === language) : snippets;
  return [...new Set(filteredSnippets.map(snippet => snippet.category))];
};

export const getSnippetsByLanguageAndCategory = (language: string, category: string): Snippet[] => {
  return snippets.filter(snippet => 
    snippet.language === language && snippet.category === category
  );
};

export const searchSnippets = (snippets: Snippet[], query: string): Snippet[] => {
  if (!query.trim()) return snippets;
  
  const lowercaseQuery = query.toLowerCase();
  return snippets.filter(snippet =>
    snippet.title.toLowerCase().includes(lowercaseQuery) ||
    snippet.language.toLowerCase().includes(lowercaseQuery) ||
    snippet.category.toLowerCase().includes(lowercaseQuery) ||
    snippet.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    snippet.code.toLowerCase().includes(lowercaseQuery)
  );
};
