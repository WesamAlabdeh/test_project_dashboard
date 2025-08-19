export const ResponseCode = {
  '600': 'Invalid Email',
  '404': 'Not Found',
} as Record<string, string>;

export const handleStatus = (
  status: number | string | undefined,
): string | null => {
  if (!status) return null;
  if (status in ResponseCode) {
    return ResponseCode[status];
  }

  return null;
};
