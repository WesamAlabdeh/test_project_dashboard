import { InputNumber } from 'antd';
import React from 'react';
import { ValidationFieldLabel } from '../components/ValidationFieldLabel';
import { ValidationFieldContainer } from '../components/ValidationFieldContainer';
import { IBaseFormik, ValidationFieldPropsNumber } from '../types/ValidationFieldType';
import { areFieldPropsEqual } from '../utils/areFieldPropsEqual';

interface INumberField extends IBaseFormik , ValidationFieldPropsNumber {

}

const NumberField: React.FC<INumberField> = React.memo(
  ({ field,type,t, form,...props }) => {
    const { name } = field;
    const { errors, touched } = form;
    const isError = !!touched?.[name] && !!errors?.[name];
    const errorMessage = errors?.[name] as string ?? "";
    
    return (
      <>
        <ValidationFieldLabel
        name={name}
        label={props?.label}
        t={t}
      />
        <ValidationFieldContainer isError={isError} errorMsg={errorMessage}>
        <InputNumber {...field} id={name} {...props} />
        </ValidationFieldContainer>
       
      </>
    );
  },
  (prevProps, nextProps) => {
  return areFieldPropsEqual(prevProps, nextProps)
  }
);

export default NumberField;
