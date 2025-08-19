function objectToFormData(
  obj: any,
  formData: FormData = new FormData(),
  parentKey: string = '',
): FormData {
  if (obj === null || obj === undefined) {
    return formData;
  }

  if (
    typeof obj === 'object' &&
    !(obj instanceof Date) &&
    !(obj instanceof File)
  ) {
    Object.keys(obj).forEach((key) => {
      const value = obj[key];
      const newKey = parentKey ? `${parentKey}[${key}]` : key;

      if (Array.isArray(value)) {
        value.forEach((item, index) => {
          objectToFormData(item, formData, `${newKey}[${index}]`);
        });
      } else {
        objectToFormData(value, formData, newKey);
      }
    });
  } else {
    const value = obj === null ? '' : obj;
    formData.append(parentKey, value);
  }

  return formData;
}
