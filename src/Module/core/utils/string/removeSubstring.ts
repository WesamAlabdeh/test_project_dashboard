export function removeSubstring(mainString: string, substringToRemove: string) {
  // Use a regular expression to match all occurrences of the substring
  const regex = new RegExp(substringToRemove, 'g');

  // Replace all occurrences with an empty string
  return mainString.replace(regex, '');
}
