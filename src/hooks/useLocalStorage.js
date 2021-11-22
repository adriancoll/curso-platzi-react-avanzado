import { useState } from "react";

/**
 * Stores the data in the localStorage with a key and a default value given
 * @param {String} key 
 * @param {*} value 
 * @returns storedValue and the setter of itself
 */
export const useLocalStorage = (key, value) => {
    const [storedValue, setValue] = useState(() => {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : value
      } catch (err) {
        return value
      }
    })
  
    const setLocalStorage = value => {
      try {
        window.localStorage.setItem(key, JSON.stringify(value))
        setValue(value)
      } catch (err) {
        return err
      }
    }
  
    return [storedValue, setLocalStorage]
}