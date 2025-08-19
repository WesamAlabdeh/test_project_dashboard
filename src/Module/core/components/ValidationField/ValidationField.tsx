import React, { lazy, Suspense } from 'react';
import './style/ValidationField.scss';
import { ValidationFieldProps, ValidationFieldPropsInput } from './types/types';
import { ValidationFieldTypeEnum } from './enum/ValidationFieldType';

// Lazy load the components
const InputField = lazy(() => import('./design-system/InputField'));
const PasswordField = lazy(() => import('./design-system/PasswordField'));
const NumberField = lazy(() => import('./design-system/NumberField'));
const SelectField = lazy(() => import('./design-system/SelectField'));
const TextAreaField = lazy(() => import('./design-system/TextAreaField'));
const SearchField = lazy(() => import('./design-system/SearchField'));
const LocalSearchField = lazy(() => import('./design-system/LocalSearchField'));
const DatePickerField = lazy(() => import('./design-system/DatePickerField'));
const DateRangePickerField = lazy(
  () => import('./design-system/DateRangePickerField'),
);
const TimePickerField = lazy(() => import('./design-system/TimePickerField'));
const FileField = lazy(() => import('./design-system/FileField'));
const MaltyFileField = lazy(() => import('./design-system/MaltyFileField'));
const CheckboxField = lazy(() => import('./design-system/CheckboxField'));

const components: { [key: string]: React.LazyExoticComponent<React.FC<any>> } =
  {
    [ValidationFieldTypeEnum.number]: NumberField,
    [ValidationFieldTypeEnum.password]: PasswordField,
    [ValidationFieldTypeEnum.select]: SelectField,
    [ValidationFieldTypeEnum.textArea]: TextAreaField,
    [ValidationFieldTypeEnum.search]: SearchField,
    [ValidationFieldTypeEnum.localSearch]: LocalSearchField,
    [ValidationFieldTypeEnum.date]: DatePickerField,
    [ValidationFieldTypeEnum.dataRange]: DateRangePickerField,
    [ValidationFieldTypeEnum.time]: TimePickerField,
    [ValidationFieldTypeEnum.file]: FileField,
    [ValidationFieldTypeEnum.maltyFile]: MaltyFileField,
    [ValidationFieldTypeEnum.checkbox]: CheckboxField,
  };

const ValidationField: React.FC<ValidationFieldProps> = React.memo(
  ({ type, ...otherProps }) => {
    const Component = components[type as keyof typeof components];

    // Fallback component while loading
    const fallback = <></>;

    return (
      <Suspense fallback={fallback}>
        {Component ? (
          <Component {...(otherProps as ValidationFieldProps)} />
        ) : (
          <InputField {...(otherProps as ValidationFieldPropsInput)} />
        )}
      </Suspense>
    );
  },
);

export default ValidationField;
