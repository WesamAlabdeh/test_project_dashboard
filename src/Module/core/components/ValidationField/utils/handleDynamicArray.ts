import { useCallback } from 'react';
import { FormikHelpers } from 'formik';

type FormikSetFieldValue = FormikHelpers<any>['setFieldValue'];

const handleDynamicArray = (
  setFieldValue: FormikSetFieldValue,
  fieldName: string,
) => {
  const addToDynamicArray = useCallback(
    (newItem: unknown) => {
      setFieldValue(fieldName, (currentItems: any[] | undefined) => {
        return [...(currentItems ?? []), newItem];
      });
    },
    [setFieldValue, fieldName],
  );

  return addToDynamicArray;
};

export default handleDynamicArray;
