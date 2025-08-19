export const getLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);

  if (data === null) {
    return {};
  }
  try {
    return JSON.parse(data);
  } catch (error) {
    console.log(`Error parsing JSON from localStorage for key "${key}":`);
    return {};
  }
};

export const setLocalStorage = (key: string, data: unknown) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Error setting localStorage for key "${key}":`, error);
  }
};

export const removeItemLocalStorage = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error remove localStorage for key "${key}":`, error);
  }
};

export const clearLocalStorage = (): void => {
  localStorage.clear();
};
