import { Button, ButtonProps } from 'antd';
import { useTranslation } from 'react-i18next';
import { CgAdd } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
import { useModalState } from '../states/ModalState';

interface AddButtonProps extends ButtonProps {
  PageType?:"Modal" | "Page";
}

const AddButton: React.FC<AddButtonProps> = ({PageType="Modal" , ...buttonProps }) => {
  const [t] = useTranslation();
  const navigate = useNavigate();
  const { setIsOpenAddModel } = useModalState((state) => state);
  const handleNavigate = () => {
    if(PageType == "Modal"){
      setIsOpenAddModel()
    }else{
      navigate('add');
    }
  };
  return (
    <Button
      type="primary"
      onClick={handleNavigate}
      icon={<CgAdd />}
      iconPosition="end"
      {...buttonProps}
    >
      {t('add')}
    </Button>
  );
};

export default AddButton;
