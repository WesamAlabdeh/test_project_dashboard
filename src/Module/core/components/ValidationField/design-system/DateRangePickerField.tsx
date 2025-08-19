import { FC } from 'react';
import useFormField from '../Hooks/useFormField';
import { ValidationFieldContainer } from '../components/ValidationFieldContainer';
import { ValidationFieldLabel } from '../components/ValidationFieldLabel';
import { ValidationFieldPropsDateRangePicker } from '../types/types';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

const { RangePicker } = DatePicker;

const DateRangePickerField: FC<ValidationFieldPropsDateRangePicker> = ({
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
    value &&
    dayjs(value[0], Format).isValid() &&
    dayjs(value[1], Format).isValid()
      ? [dayjs(value[0], Format), dayjs(value[1], Format)]
      : null;

  const handleFieldChange = (
    dates: null | (Dayjs | null)[],
    dateStrings: string[],
  ) => {
    if (dates) {
      formik.setFieldValue(
        name,
        dateStrings ? [dateStrings[0], dateStrings[1]] : null,
      );
    } else {
      formik.setFieldValue(name, null);
    }
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
        <RangePicker
          id={name}
          picker={'date'}
          allowClear
          size="large"
          value={defaultValue as any}
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
export default DateRangePickerField;
