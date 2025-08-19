import { lazy } from 'react';

const InputField = lazy(() => import('./InputField'));
const SelectField = lazy(() => import('./SelectField'));
const NumberField = lazy(() => import('./NumberField'));
const PasswordField = lazy(() => import('./PasswordField'));
const TextAreaField = lazy(() => import('./TextAreaField'));
const SearchField = lazy(() => import('./SearchField'));
const LocalSearchField = lazy(() => import('./LocalSearchField'));
const DatePickerField = lazy(() => import('./DatePickerField'));
const DateRangePickerField = lazy(() => import('./DateRangePickerField'));
const TimePickerField = lazy(() => import('./TimePickerField'));
const FileField = lazy(() => import('./FileField'));
const MaltyFileField = lazy(() => import('./MaltyFileField'));
const CheckboxField = lazy(() => import('./CheckboxField'));

export {
  InputField,
  SelectField,
  PasswordField,
  NumberField,
  TextAreaField,
  SearchField,
  LocalSearchField,
  DatePickerField,
  DateRangePickerField,
  TimePickerField,
  FileField,
  MaltyFileField,
  CheckboxField,
};
