import { useState, useEffect } from "react";

export function useLocalStorage(key) {
  const [storedValue, setStoredValue] = useState(null);

  useEffect(() => {
    if (key) {
      const item = window.localStorage.getItem(key);
      item && setStoredValue(JSON.parse(item));
    }
  }, []);

  const setValue = (key, value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}
