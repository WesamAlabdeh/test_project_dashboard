

import {
  tasksInitialValuesType,
  tasksType,
} from '@Module/task/types/tasks';
import * as Yup from 'yup';

export const getInitialValues = (
  objectToEdit: Partial<tasksType>,
): tasksInitialValuesType => {
  return {
    id: objectToEdit?.id ?? null,
    title: objectToEdit?.title ?? null,
    description: objectToEdit?.description ?? null,
    // Keep original structures (objects with ids and image paths) so we can detect deletions
    images: objectToEdit?.images ?? null,
  };
};

export const getValidationSchema = (): Yup.Schema<tasksInitialValuesType> => {
  return Yup.object().shape({
    title: Yup.string().required(),

  });
};

