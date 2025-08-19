import { FC } from 'react';
import useFormField from '../Hooks/useFormField';
import { ValidationFieldContainer } from '../components/ValidationFieldContainer';
import { ValidationFieldLabel } from '../components/ValidationFieldLabel';
import { ValidationFieldPropsTimePicker } from '../types/types';
import { TimePicker, TimePickerProps } from 'antd';
import dayjs from 'dayjs';

const TimePickerField: FC<ValidationFieldPropsTimePicker> = ({
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

  const Format = format ?? 'H:mm';

  const defaultValue =
    value && dayjs(value, Format).isValid() ? dayjs(value, Format) : null;

  const handleFieldChange: TimePickerProps['onChange'] = (
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
        <TimePicker
          id={name}
          placeholder={t(placeholder ?? label ?? name)}
          allowClear
          value={defaultValue}
          size="large"
          onChange={handleFieldChange}
          onBlur={handleFieldBlur}
          style={{ width: '100%' }}
          format={Format}
          needConfirm={false}
          {...props}
        />
      </ValidationFieldContainer>
    </div>
  );
};
export default TimePickerField;
