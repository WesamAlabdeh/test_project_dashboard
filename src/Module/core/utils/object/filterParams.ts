export function filterParams(params: Record<string, any> = {}) {
  return Object.fromEntries(
    Object.entries(params ?? {}).filter(([_, value]) => value !== ''),
  );
}
