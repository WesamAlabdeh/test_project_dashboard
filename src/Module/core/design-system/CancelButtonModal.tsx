import { Button, ButtonProps } from 'antd';
import { useTranslation } from 'react-i18next';
import { useModalState } from '../states/ModalState';
import { useObjectToEdit } from '../states/ObjectToEditState';

interface CancelButtonModalProps extends ButtonProps {}

const CancelButtonModal: React.FC<CancelButtonModalProps> = ({
  ...buttonProps
}) => {
  const [t] = useTranslation();
  const { CloseAllModal } = useModalState();
  const { setObjectToEdit } = useObjectToEdit()
  const handleNavigate = () => {
    CloseAllModal();
    setObjectToEdit({})
  };
  return (
    <Button
      type="primary"
      onClick={handleNavigate}
      style={{
        background: 'red',
        marginInline: '10px',
      }}
      {...buttonProps}
    >
      {t('cancel')}
    </Button>
  );
};

export default CancelButtonModal;
