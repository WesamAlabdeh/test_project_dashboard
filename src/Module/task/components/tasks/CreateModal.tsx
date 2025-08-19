
import LayoutModal from '@Module/core/design-system/LayoutModal'
import React from 'react'
import Form from './Form'
import { getInitialValues, getValidationSchema } from '@Module/task/utils/tasks/formUtil'
import { useObjectToEdit } from '@Module/core/states/ObjectToEditState';
import { tasksInitialValuesType } from '@Module/task/types/tasks';
import { useAddTasks } from '@Module/task/apis/tasks';

function CreateModal() {
     const {objectToEdit} = useObjectToEdit()
    const { status,mutate } = useAddTasks();
  const handleSubmit = (values: tasksInitialValuesType) => {
      console.log(values, 'values');
      mutate(values);
    };
  return (
    <LayoutModal 
    getInitialValues={getInitialValues(objectToEdit)}
    getValidationSchema={getValidationSchema}
    handleSubmit={handleSubmit}
    headerText='Add tasks'
    status={status}
    >
        <Form/>
    </LayoutModal>
  )
}

export default CreateModal
