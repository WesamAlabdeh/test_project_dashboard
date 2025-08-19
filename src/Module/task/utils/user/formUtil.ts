

import {
  userInitialValuesType,
  userType,
} from '@Module/task/types/user';
import * as Yup from 'yup';

export const getInitialValues = (
  objectToEdit: Partial<userType>,
): userInitialValuesType => {
  return {
    id: objectToEdit?.id ?? null,
    username: objectToEdit?.username ?? null,
    email: objectToEdit?.email ?? null,
    phone: objectToEdit?.phone ?? null,
  };
};

export const getValidationSchema = (): Yup.Schema<userInitialValuesType> => {
  return Yup.object().shape({
    username: Yup.string().required(),
   
  });
};

