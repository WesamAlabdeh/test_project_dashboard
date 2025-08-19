export function convertToFormData<T extends object>(
  obj: T,
  parentKey: string = '',
): FormData {
  const formData = new FormData();

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      const formKey = parentKey ? `${parentKey}[${key}]` : key;

      if (value instanceof Array) {
        for (let i = 0; i < value.length; i++) {
          const item = value[i];
          if (item instanceof File) {
            formData.append(`${formKey}[${i}]`, item);
          } else {
            formData.append(`${formKey}[${i}]`, item);
          }
        }
      } else if (value instanceof File) {
        formData.append(formKey, value);
      } else if (typeof value === 'object' && !(value instanceof File)) {
        formData.append(formKey, JSON.stringify(value));
      } else {
        formData.append(formKey, value as string);
      }
      formData.append('_method', 'PUT');
    }
  }

  return formData;
}
