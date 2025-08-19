import { DatePicker, DatePickerProps } from 'antd';
import React from 'react';
import { ValidationFieldLabel } from '../components/ValidationFieldLabel';
import { ValidationFieldContainer } from '../components/ValidationFieldContainer';
import { IBaseFormik, ValidationFieldPropsDate } from '../types/ValidationFieldType';
import { areFieldPropsEqual } from '../utils/areFieldPropsEqual';
import dayjs from 'dayjs';
import { DateEnum } from '../enums/ValidationFieldDateEnum';


interface IDateField extends IBaseFormik , ValidationFieldPropsDate {}

const DateField: React.FC<IDateField> = React.memo(

  ({ field,t, form,...props }) => {
    const { name } = field;
    const { errors, touched , setFieldValue,setFieldTouched,getFieldProps } = form;
    const isError = !!touched?.[name] && !!errors?.[name];
    const errorMessage = errors?.[name] as string ?? "";
    console.log(name);

    const handleFieldChange: DatePickerProps['onChange'] = (
      _date,
      dateString,
    ) => {
      setFieldValue(name, dateString ? dateString : null);
    };
  
    const Format = DateEnum.FORMATE ;
    const value = getFieldProps(name)?.value ;
    const defaultValue = value && dayjs(value, Format).isValid() ? dayjs(value, Format) : null;

    const handleFieldBlur = () => {
      setFieldTouched(name, true, false);
    };

    return (
      <>
        <ValidationFieldLabel
        name={name}
        label={props?.label}
        t={t}
      />
        <ValidationFieldContainer isError={isError} errorMsg={errorMessage}>
        <DatePicker
         {...field}
         onChange={handleFieldChange} 
         picker={'date'}
         allowClear
         value={defaultValue}
         format={Format}
         onBlur={handleFieldBlur}
         {...props}         
         />
        </ValidationFieldContainer>
       
      </>
    );
  },
  (prevProps, nextProps) => {
  return areFieldPropsEqual(prevProps, nextProps)
  }
);

export default DateField;
