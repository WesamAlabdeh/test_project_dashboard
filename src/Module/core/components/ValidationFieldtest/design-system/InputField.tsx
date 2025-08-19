import { Input } from 'antd';
import React from 'react';
import { ValidationFieldLabel } from '../components/ValidationFieldLabel';
import { ValidationFieldContainer } from '../components/ValidationFieldContainer';
import { IBaseFormik, ValidationFieldPropsInput } from '../types/ValidationFieldType';
import { areFieldPropsEqual } from '../utils/areFieldPropsEqual';


interface IInputField extends IBaseFormik , ValidationFieldPropsInput {

}

const InputField: React.FC<IInputField> = React.memo(
  ({ field,type,t, form,...props }) => {
    const { name } = field;
    const { errors, touched } = form;
    const isError = !!touched?.[name] && !!errors?.[name];
    const errorMessage = errors?.[name] as string ?? "";
    console.log(name);
    
    return (
      <>
        <ValidationFieldLabel
        name={name}
        label={props?.label}
        t={t}
      />
        <ValidationFieldContainer isError={isError} errorMsg={errorMessage}>
        <Input {...field} id={name} {...props} />
        </ValidationFieldContainer>
       
      </>
    );
  },
  (prevProps, nextProps) => {
  return areFieldPropsEqual(prevProps, nextProps)
  }
);

export default InputField;
