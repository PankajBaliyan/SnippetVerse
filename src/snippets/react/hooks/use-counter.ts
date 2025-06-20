
export default {
  id: 'react-use-counter',
  title: 'useCounter Hook',
  language: 'react',
  category: 'hooks',
  description: 'A custom React hook for managing counter state with increment, decrement, and reset functionality.',
  shortDescription: 'Custom hook for counter state management',
  code: `import { useState, useCallback } from 'react';

interface UseCounterReturn {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  set: (value: number) => void;
}

export const useCounter = (initialValue: number = 0): UseCounterReturn => {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount(prev => prev - 1);
  }, []);

  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  const set = useCallback((value: number) => {
    setCount(value);
  }, []);

  return {
    count,
    increment,
    decrement,
    reset,
    set
  };
};

// Usage example:
// const { count, increment, decrement, reset } = useCounter(0);`,
  tags: ['react', 'hooks', 'state', 'counter', 'custom-hook'],
  usage: 'Use this hook in any React component that needs counter functionality.',
  contributedBy: 'React Community'
};
