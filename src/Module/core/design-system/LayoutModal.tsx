import { Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import { Modal, Divider } from 'antd';
import { useTranslation } from 'react-i18next';
import { useObjectToEdit } from '../states/ObjectToEditState';
import SubmitButton from './SubmitButton';
import { AxiosQueryStatusType } from '../types/axios';
import CancelButtonModal from './CancelButtonModal';
import { AxiosQueryStatusEnum } from '../enums/Axios';
import { useModalState } from '../states/ModalState';

interface LayoutModalProps {
  isAddModal?: boolean;
  headerText: string;
  handleSubmit: (values: any) => void;
  getInitialValues: any;
  getValidationSchema: any;
  children: React.ReactNode;
  status?: AxiosQueryStatusType;
  size?: 'small' | 'middle' | 'large';
  headerComponents?:|React.ReactNode
}

function LayoutModal({
  size = 'middle',
  isAddModal = true,
  headerText,
  handleSubmit = () => { },
  getInitialValues,
  getValidationSchema,
  status,
  headerComponents,
  children
}: LayoutModalProps) {
  const { isOpenAddModel, setIsOpenAddModel, setIsOpenEditModel, isOpenEditModel, CloseAllModal } = useModalState(state => state);
  const { objectToEdit , setObjectToEdit } = useObjectToEdit()
  useEffect(() => {    
    if (status === AxiosQueryStatusEnum.SUCCESS) {
      setObjectToEdit({})
      CloseAllModal();
    }
  }, [status, CloseAllModal]);

  const [t] = useTranslation();

  const handleClose = ()=>{    
    setObjectToEdit({});
      if(isAddModal){
        setIsOpenAddModel()
        return ;
      }
      setIsOpenEditModel()
  }

  return (
    <Modal
      centered
      open={isAddModal ? isOpenAddModel : isOpenEditModel}
      onCancel={handleClose}
      title={t(headerText)}
      
      footer={null}
      width={size === 'small' ? 520 : size === 'middle' ? 720 : 1000}
      key={isOpenAddModel ? 'add' : `edit`}


    >
      {headerComponents }
    <Divider/>
    
      {

        ((objectToEdit != null && isOpenEditModel) || isOpenAddModel) &&
        <Formik
          key={isOpenAddModel ? 'add' : `edit`}
          onSubmit={handleSubmit}
          initialValues={getInitialValues}
          validationSchema={getValidationSchema(!isAddModal)}
          enableReinitialize 
          
        >

          {() => (
            <Form>
              {children}
              <Divider/>
              <div>

                <SubmitButton  status={status as AxiosQueryStatusType}/>
                <CancelButtonModal  />
              </div>
            </Form>
          )}
        </Formik>
      }
    </Modal>
  );
}

export default LayoutModal;