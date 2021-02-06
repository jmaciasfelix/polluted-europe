import { useState, useEffect } from "react";
/**
 * useLocalStorage allow get or set a value in localstorage
 * @return { Object || null } storedValue
 * @return { function } setValue
 */
export function useLocalStorage(key) {
  const [storedValue, setStoredValue] = useState(null);
  const [notExist, setNotExit] = useState(false);

  useEffect(() => {
    if (key) {
      const item = window.localStorage.getItem(key);
      item ? setStoredValue(JSON.parse(item)) : setNotExit(true);
    }
  }, [key]);

  const setValue = (key, value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue, notExist];
}
