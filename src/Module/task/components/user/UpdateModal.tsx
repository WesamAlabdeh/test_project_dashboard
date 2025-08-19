
import LayoutModal from '@Module/core/design-system/LayoutModal'
import Form from './Form'
import { getInitialValues, getValidationSchema } from '@Module/task/utils/user/formUtil'
import { useObjectToEdit } from '@Module/core/states/ObjectToEditState';
import { userInitialValuesType } from '@Module/task/types/user';
import { useUpdateUser } from '@Module/task/apis/user';
import { DeleteKeysFromObject } from '@Module/core/utils/object/DeleteKeysFromObject';

function UpdateModal() {
     const {objectToEdit} = useObjectToEdit()
    const { status,mutate } = useUpdateUser();
   
    const handleSubmit = (values: userInitialValuesType) => {
      // Start from form values and remove fields that should never be sent in payload
      const mutateData: Record<string, any> = DeleteKeysFromObject({
        values,
        deleteKeys: [{ key: 'id', type: 'number' }],
      });

      // Omit unchanged fields
      if (mutateData?.email === objectToEdit?.email) {
        delete mutateData.email;
      }
      if (mutateData?.username === objectToEdit?.username) {
        delete mutateData.username;
      }

      mutate({
        id: Number(values?.id),
        newData: mutateData,
      });
    };
  return (
    <LayoutModal 
    getInitialValues={getInitialValues(objectToEdit)}
    getValidationSchema={getValidationSchema}
    handleSubmit={handleSubmit}
    headerText='Update user'
    status={status}
    isAddModal={false}
    >
        <Form/>
    </LayoutModal>
  )
}

export default UpdateModal
