import { FC } from 'react';
import useFormField from '../Hooks/useFormField';
import { ValidationFieldContainer } from '../components/ValidationFieldContainer';
import { ValidationFieldLabel } from '../components/ValidationFieldLabel';
import { ValidationFieldPropsDatePicker } from '../types/types';
import { DatePicker, DatePickerProps } from 'antd';
import dayjs from 'dayjs';

const DatePickerField: FC<ValidationFieldPropsDatePicker> = ({
  name,
  label,
  placeholder,
  format,
  ...props
}) => {
  const { errorMsg, isError, t, formik, handleFieldBlur, value } = useFormField(
    name,
    props,
  );

  const Format = format ?? 'YYYY/MM/DD';

  const defaultValue =
    value && dayjs(value, Format).isValid() ? dayjs(value, Format) : null;

  const handleFieldChange: DatePickerProps['onChange'] = (
    _date,
    dateString,
  ) => {
    formik.setFieldValue(name, dateString ? dateString : null);
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
        <DatePicker
          id={name}
          picker={'date'}
          placeholder={t(placeholder ?? label ?? name)}
          allowClear
          value={defaultValue}
          size="large"
          onChange={handleFieldChange}
          onBlur={handleFieldBlur}
          format={Format}
          style={{ width: '100%' }}
          {...props}
        />
      </ValidationFieldContainer>
    </div>
  );
};
export default DatePickerField;
