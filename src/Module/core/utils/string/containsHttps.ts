export function containsHttps(str: string | undefined | null): boolean {
  console.log(str);
  if (typeof str !== 'string') {
    return false;
  }
  return str?.includes('http') ?? false;
}
