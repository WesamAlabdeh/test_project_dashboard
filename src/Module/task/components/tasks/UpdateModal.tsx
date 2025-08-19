
import LayoutModal from '@Module/core/design-system/LayoutModal'
import Form from './Form'
import { getInitialValues, getValidationSchema } from '@Module/task/utils/tasks/formUtil'
import { useObjectToEdit } from '@Module/core/states/ObjectToEditState';
import { tasksInitialValuesType } from '@Module/task/types/tasks';
import { useUpdateTasks } from '@Module/task/apis/tasks';
import { DeleteKeysFromObject } from '@Module/core/utils/object/DeleteKeysFromObject';

function UpdateModal() {
     const {objectToEdit} = useObjectToEdit()
    const { status,mutate } = useUpdateTasks();
    console.log(objectToEdit, 'objectToEdit');
  const handleSubmit = (values: tasksInitialValuesType) => {
      const existingImages = Array.isArray((objectToEdit as any)?.images)
        ? (objectToEdit as any)?.images
        : [];

      const currentImages = Array.isArray(values?.images) ? (values as any)?.images : [];

      // Determine which existing images were removed by user (based on id or path)
      const currentKeys = currentImages.map((img: any) => {
        if (img instanceof File) return undefined; // new uploads have no id/path match
        return img?.id ?? img?.image ?? img?.url;
      }).filter(Boolean);

      const delete_image_ids = existingImages
        .filter((img: any) => {
          const key = img?.id ?? img?.image;
          return !currentKeys.includes(key);
        })
        .map((img: any) => img?.id ?? img?.image);

      // Build payload: keep only new files in images, keep other fields, and send delete_image_ids
      const mutateData = DeleteKeysFromObject({
        values,
        deleteKeys: [{ key: 'id', type: 'number' }],
      });

      const imagesPayload = currentImages.filter((img: any) => img instanceof File);
      if (imagesPayload.length > 0) {
        mutateData.images = imagesPayload;
      } else {
        delete (mutateData as any).images;
      }

      if (delete_image_ids.length > 0) {
        (mutateData as any).delete_image_ids = delete_image_ids;
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
    headerText='Update tasks'
    status={status}
    isAddModal={false}
    >
            <Form  />
    </LayoutModal>
  )
}

export default UpdateModal
