import { FC } from 'react';
import useFormField from '../Hooks/useFormField';
import { ValidationFieldContainer } from '../components/ValidationFieldContainer';
import { ValidationFieldLabel } from '../components/ValidationFieldLabel';
import { ValidationFieldPropsCheckBox } from '../types/types';
import { Checkbox } from 'antd';

const CheckboxField: FC<ValidationFieldPropsCheckBox> = ({
  name,
  label,
  placeholder,
  ...props
}) => {
  const { errorMsg, isError, t, formik, value } = useFormField(name, props);
  const handleFieldChange = (event: any) => {
    formik.setFieldValue(name, event.target.checked ? 1 : 0);
  };

  return (
    <div className="ValidationField flex_row">
      <ValidationFieldLabel
        name={name}
        label={label}
        placeholder={placeholder}
        t={t}
      />
      <ValidationFieldContainer isError={isError} errorMsg={errorMsg}>
        <Checkbox
          id={name}
          onChange={handleFieldChange}
          checked={value === 1}
        ></Checkbox>
      </ValidationFieldContainer>
    </div>
  );
};
export default CheckboxField;
