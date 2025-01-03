import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parseItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parseItem = initialValue;
        } else {
          parseItem = JSON.parse(localStorageItem);
        }
        setItem(parseItem);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }, 2000);
  }, [initialValue, itemName]);

  const persistItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return { item, persistItem, loading, error };
}

export { useLocalStorage };