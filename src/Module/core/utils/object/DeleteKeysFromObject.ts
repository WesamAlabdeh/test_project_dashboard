type KeyTypeObject = {
  key: string;
  type:
    | 'string'
    | 'number'
    | 'boolean'
    | 'object'
    | 'array'
    | 'function'
    | 'undefined'
    | 'null';
};

type DeleteKeysFromObjectProps = {
  values: any;
  deleteKeys?: KeyTypeObject[];
};

export const DeleteKeysFromObject = ({
  values,
  deleteKeys,
}: DeleteKeysFromObjectProps): any => {
  const data = { ...values };

  if (deleteKeys && Array.isArray(deleteKeys)) {
    deleteKeys.forEach(({ key, type }) => {
      if (key in data) {
        const actualType = Array.isArray(data[key])
          ? 'array'
          : typeof data[key];
        if (actualType === type || (type === 'null' && data[key] === null)) {
          delete data[key];
        }
      }
    });
  }

  return data;
};
