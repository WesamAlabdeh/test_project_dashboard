import React, { FC } from 'react';
import useFormField from '../Hooks/useFormField';
import { ValidationFieldContainer } from '../components/ValidationFieldContainer';
import { ValidationFieldLabel } from '../components/ValidationFieldLabel';
import { ValidationFieldPropsSelect } from '../types/types';
import { Select } from 'antd';

const SelectField: FC<ValidationFieldPropsSelect> = ({
  name,
  label,
  placeholder,
  isMulti = false,
  ...props
}) => {
  const { errorMsg, isError, t, formik, handleFieldBlur, value } = useFormField(
    name,
    props,
  );

  const handleFieldChange = (value: {
    value: string;
    label: React.ReactNode;
  }) => {
    formik.setFieldValue(name, value);
  };
  const selectedIds = isMulti ? value?.map((item : any)  => {
    if(item.id){
      return item.id
    }
    return item
  }) : [];
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
          value={isMulti ? selectedIds : value}
          onChange={handleFieldChange}
          {...(isMulti && { mode: "multiple" })}
          onBlur={handleFieldBlur}
          fieldNames={{ label: 'name', value: 'id' }}
          {...props}
        />
      </ValidationFieldContainer>
    </div>
  );
};
export default SelectField;
