import { ValidationFieldTypeEnum } from '../enum/ValidationFieldType';
import {
  InputProps,
  SelectProps,
  DatePickerProps,
  TimeRangePickerProps,
  TimePickerProps,
  UploadProps,
  CheckboxProps,
} from 'antd';

// Define the ValidationFieldType type
export type ValidationFieldType = keyof typeof ValidationFieldTypeEnum;

// Define the BaseField interface
export interface BaseField {
  name: string;
  label?: string;
  placeholder?: string;
}
export type OmitBaseType = 'placeholder' | 'name' | 'label' | 'type';

export type OmitPicker = OmitBaseType | 'format';

export interface ValidationFieldPropsInput
  extends Omit<InputProps, OmitBaseType>,
    BaseField {
  type: 'text' | 'number' | 'password' | 'email' | 'textArea';
}

export interface ValidationFieldPropsSelect
  extends Omit<SelectProps, OmitBaseType>,
    BaseField {
  type: 'select';
  options: any[];
  isMulti?:boolean
}

export interface ValidationFieldPropsSearch
  extends Omit<SelectProps, OmitBaseType>,
    BaseField {
  type: 'search';
  searchBy: string;
  options: [];
}
export interface ValidationFieldPropsLocalSearch
  extends Omit<SelectProps, OmitBaseType>,
    BaseField {
  type: 'localSearch';
  options: [];
}

export interface ValidationFieldPropsDatePicker
  extends Omit<DatePickerProps, OmitPicker>,
    BaseField {
  type: 'date';
  format?: 'YYYY/MM/DD' | 'MM/DD' | 'YYYY/MM' | 'YYYY-MM-DD HH:mm:ss.SSS';
}

export interface ValidationFieldPropsDateRangePicker
  extends Omit<TimeRangePickerProps, OmitPicker>,
    BaseField {
  type: 'dateRange';
  format?: 'YYYY/MM/DD' | 'MM/DD' | 'YYYY/MM' | 'YYYY-MM-DD HH:mm:ss.SSS';
}
export interface ValidationFieldPropsTimePicker
  extends Omit<TimePickerProps, OmitPicker>,
    BaseField {
  type: 'time';
  format?: 'H:mm' | 'HH:mm:ss.SSS';
}
export interface ValidationFieldPropsFile
  extends Omit<UploadProps, OmitBaseType>,
    BaseField {
  type: 'file';
}
export interface ValidationFieldPropsMaltyFile
  extends Omit<UploadProps, OmitBaseType>,
    BaseField {
  type: 'maltyFile';
  key?: string;
}

export interface ValidationFieldPropsCheckBox
  extends Omit<CheckboxProps, OmitBaseType>,
    BaseField {
  type: 'checkbox';
}
// Define the ValidationFieldProps type
export type ValidationFieldProps =
  | ValidationFieldPropsInput
  | ValidationFieldPropsSelect
  | ValidationFieldPropsSearch
  | ValidationFieldPropsLocalSearch
  | ValidationFieldPropsDatePicker
  | ValidationFieldPropsDateRangePicker
  | ValidationFieldPropsTimePicker
  | ValidationFieldPropsFile
  | ValidationFieldPropsMaltyFile
  | ValidationFieldPropsCheckBox;
