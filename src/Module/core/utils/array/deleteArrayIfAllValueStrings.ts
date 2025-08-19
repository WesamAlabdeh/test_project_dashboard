export function deleteArrayIfAllValueStrings(arr: any[]) {
  // Check if all elements are strings
  const allStrings = arr.every((item) => typeof item === 'string');

  // If all elements are strings, return null (effectively deleting the array)
  // Otherwise, return the original array
  return allStrings ? null : arr;
}
