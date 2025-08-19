import { Button, ButtonProps } from 'antd';
import { useTranslation } from 'react-i18next';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { useModalState } from '../states/ModalState';

interface backButtonProps extends ButtonProps {}

const BackButton: React.FC<backButtonProps> = ({ ...buttonProps }) => {
  const [t] = useTranslation();
  const navigate = useNavigate();
  const { CloseAllModal } = useModalState((state) => state);

  const handleNavigate = () => {
    navigate(-1);
    CloseAllModal()
  };
  return (
    <Button
      type="primary"
      onClick={handleNavigate}
      icon={<IoIosArrowDropleftCircle />}
      iconPosition="start"
      {...buttonProps}
    >
      {t('back')}
    </Button>
  );
};

export default BackButton;
