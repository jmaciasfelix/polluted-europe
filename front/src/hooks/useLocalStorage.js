import { useState } from "react";

export function useLocalStorage(intialValue) {
  const [storedValue, setStoredValue] = useState((key) => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : intialValue;
    } catch (error) {
      return intialValue;
    }
  });

  const setValue = (key, value) => {
    try {
      setStoredValue(key);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}
