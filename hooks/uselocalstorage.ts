import { useState, useEffect } from 'react';

const useLocalStorage = (key: string, defaultValue: any) => {
  const [storedValue, setStoredValue] = useState(defaultValue);
  const [hasData, setHasData] = useState(false); // Trạng thái có dữ liệu hay không

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item));
        setHasData(true); // Có dữ liệu
      } else {
        setHasData(false); // Không có dữ liệu
      }
    } catch (error) {
      console.error('Error reading localStorage key', error);
      setHasData(false);
    }
  }, [key]);

  const setValue = (value:any) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
      setHasData(true); // Ghi dữ liệu thành công
    } catch (error) {
      console.error('Error setting localStorage key', error);
    }
  };

  return [storedValue, setValue, hasData];
};

export default useLocalStorage;
