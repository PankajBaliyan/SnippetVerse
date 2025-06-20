
export default {
  id: "py-list-operations",
  title: "Python List Operations",
  code: `# Common list operations and manipulations

# List comprehensions
numbers = [1, 2, 3, 4, 5]
squares = [x**2 for x in numbers]
evens = [x for x in numbers if x % 2 == 0]

# List methods
my_list = [1, 2, 3]
my_list.append(4)          # Add to end
my_list.insert(1, 'new')   # Insert at index
my_list.extend([5, 6])     # Add multiple items

# Slicing
original = [0, 1, 2, 3, 4, 5]
first_three = original[:3]     # [0, 1, 2]
last_three = original[-3:]     # [3, 4, 5]
every_second = original[::2]   # [0, 2, 4]
reversed_list = original[::-1] # [5, 4, 3, 2, 1, 0]

# Combining lists
list1 = [1, 2, 3]
list2 = [4, 5, 6]
combined = list1 + list2       # [1, 2, 3, 4, 5, 6]
zipped = list(zip(list1, list2)) # [(1, 4), (2, 5), (3, 6)]`,
  description: "Comprehensive guide to Python list operations including comprehensions, methods, slicing, and combining lists.",
  shortDescription: "Python list manipulation techniques",
  tags: ["python", "lists", "data-structures", "comprehensions"],
  usage: "Use these patterns for efficient list manipulation in Python projects."
};
