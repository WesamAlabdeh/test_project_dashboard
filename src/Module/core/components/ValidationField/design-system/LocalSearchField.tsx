import { FC } from 'react';
import useFormField from '../Hooks/useFormField';
import { ValidationFieldContainer } from '../components/ValidationFieldContainer';
import { ValidationFieldLabel } from '../components/ValidationFieldLabel';
import { ValidationFieldPropsLocalSearch } from '../types/types';
import { Select } from 'antd';

const LocalSearchField: FC<ValidationFieldPropsLocalSearch> = ({
  name,
  label,
  placeholder,
  ...props
}) => {
  const { errorMsg, isError, t, formik, handleFieldBlur, value } = useFormField(
    name,
    props,
  );

  const handleFieldChange = (input: string) => {
    formik?.setFieldValue(name, input);
  };

  return (
    <div className="ValidationField">
      <ValidationFieldLabel
        name={name}
        label={label}
        placeholder={placeholder}
        t={t}
      />
      <ValidationFieldContainer isError={isError} errorMsg={errorMsg}>
        <Select
          id={name}
          placeholder={t(placeholder ?? label ?? name)}
          size="large"
          value={value}
          onBlur={handleFieldBlur}
          onChange={handleFieldChange}
          showSearch
          optionFilterProp="label"
          fieldNames={{ label: 'name', value: 'id' }}
          {...props}
        />
      </ValidationFieldContainer>
    </div>
  );
};
export default LocalSearchField;
