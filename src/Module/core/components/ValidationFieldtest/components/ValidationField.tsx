import React, { lazy, Suspense } from 'react';
import { ValidationFieldProps } from '../types/ValidationFieldType';
import { ValidationFieldTypeEnum } from '../enums/ValidationFieldTypeEnum';
import { Field } from 'formik';

// Lazy load components for each field type
const InputField = lazy(() => import('../design-system/InputField'));
const DateField = lazy(() => import('../design-system/DateField'));

// Define components mapping
const components: { 
  [key in ValidationFieldTypeEnum]: React.LazyExoticComponent<React.FC<any>> 
} = {
  [ValidationFieldTypeEnum.text]: InputField,
  [ValidationFieldTypeEnum.number]: InputField,
  [ValidationFieldTypeEnum.date]: DateField,
};

const ValidationField: React.FC<ValidationFieldProps> = React.memo(
  ({ type, ...otherProps }) => {
    const Component = components[type] as React.LazyExoticComponent<React.FC<any>>;
    const fallback = <></>;
    const [t] = useTranslation()
    return (
      <Suspense fallback={fallback}>
        <Field component={Component} {...(otherProps as any)} t={t} />
      </Suspense>
    );
  }
);

export default ValidationField;
