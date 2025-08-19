import {DatePickerProps, InputNumberProps, InputProps} from 'antd';
import { ValidationFieldTypeEnum } from '../enums/ValidationFieldTypeEnum';
import { FieldProps } from 'formik';

// Define the ValidationFieldType type
export type ValidationFieldType = keyof typeof ValidationFieldTypeEnum;

// Define the BaseField interface
export interface BaseField {
  name: string;
  label?: string;
  placeholder?: string;
 
 
}

export interface IBaseFormik {
  field: FieldProps['field'];
  form: FieldProps['form'];
  meta: FieldProps['meta'];
  t:any
 
}
export type OmitBaseType = 'placeholder' | 'name' | 'label' | 'type' | "form";

export type OmitPicker = OmitBaseType | 'format';

export interface ValidationFieldPropsInput
  extends Omit<InputProps, OmitBaseType>,
    BaseField {
  type: 'text' ;
}
export interface ValidationFieldPropsNumber
  extends Omit<InputNumberProps, OmitBaseType>,
    BaseField {
  type:  'number'  ;
}

export interface ValidationFieldPropsDate
  extends Omit<DatePickerProps, OmitPicker>,
    BaseField {
  type: 'date';
  format?: 'YYYY/MM/DD' | 'MM/DD' | 'YYYY/MM' | 'YYYY-MM-DD HH:mm:ss.SSS';
}




// Define the ValidationFieldProps type
export type ValidationFieldProps =  ValidationFieldPropsInput | ValidationFieldPropsNumber | ValidationFieldPropsDate;
