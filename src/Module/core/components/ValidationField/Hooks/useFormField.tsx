import { useField, useFormikContext } from 'formik';
import { useTranslation } from 'react-i18next';
import { useValidationState } from '../states/ValidationState';
import { getNestedValue } from '../utils/getNestedValue';

const useFormField = (name: string, props?: any) => {
  const [field, meta] = useField({ name, ...props });
  const { t } = useTranslation();
  const formik = useFormikContext<any>();

  const { Validation } = useValidationState((state) => state);

  const isError = !!((meta.touched && meta.error) || Validation[name as any]);

  const handleFieldBlur = () => {
    formik.setFieldTouched(name, true, false);
  };
  const value = getNestedValue(formik.values, name);
  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue(name, e.target.value);
  };

  const errorMsg =
    !!isError && meta.error
      ? t(meta.error.toString())
      : (Validation[name as any] ?? '');

  return {
    field,
    meta,
    formik,
    isError,
    errorMsg,
    t,
    handleFieldBlur,
    value,
    handleFieldChange,
  };
};

export default useFormField;
