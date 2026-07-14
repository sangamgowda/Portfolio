import { useEffect, useState } from 'react';

const STORAGE_KEY = 'theme';

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem(STORAGE_KEY) || 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('light', theme === 'light');
  }, [theme]);

  const toggle = () => {
    setTheme((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  };

  return { theme, toggle };
}
