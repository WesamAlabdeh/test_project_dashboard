import React, { FC } from 'react';
import useFormField from '../Hooks/useFormField';
import { ValidationFieldContainer } from '../components/ValidationFieldContainer';
import { ValidationFieldLabel } from '../components/ValidationFieldLabel';
import { ValidationFieldPropsSearch } from '../types/types';
import { Select } from 'antd';
import { useNavigate } from 'react-router-dom';

const SearchField: FC<ValidationFieldPropsSearch> = ({
  name,
  label,
  placeholder,
  searchBy,
  ...props
}) => {
  const { errorMsg, isError, t, formik, handleFieldBlur, value } = useFormField(
    name,
    props,
  );

  const navigate = useNavigate();

  const handleFieldChange = (value: {
    value: string;
    label: React.ReactNode;
  }) => {
    formik?.setFieldValue(name, value);
  };
  const handleFieldSearchChange = (value: any) => {
    navigate(`?${searchBy}=${value}`);
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
          onSearch={handleFieldSearchChange}
          fieldNames={{ label: 'name', value: 'id' }}
          {...props}
        />
      </ValidationFieldContainer>
    </div>
  );
};
export default SearchField;
