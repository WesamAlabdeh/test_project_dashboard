import { InitialValuesLogin } from '@Module/auth/types/login';
import * as Yup from 'yup';

export const getInitialValues = (): InitialValuesLogin => {
  return {
    username: null,
    password: null,
  };
};

export const getValidationSchema = () => {
  return Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required(),
  });
};
