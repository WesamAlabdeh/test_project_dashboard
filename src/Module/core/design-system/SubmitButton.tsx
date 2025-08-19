import React from 'react';
import { Button, ButtonProps } from 'antd';
import { useTranslation } from 'react-i18next';
import { AxiosQueryStatusEnum } from '../enums/Axios';
import { AxiosQueryStatusType } from '../types/axios';

// Define the props interface for SubmitButton
interface SubmitButtonProps extends Omit<ButtonProps, 'loading'> {
  status: AxiosQueryStatusType;
}

// Define SubmitButton component
const SubmitButton: React.FC<SubmitButtonProps> = ({
  status,
  ...buttonProps
}) => {
  const { t } = useTranslation();

  return (
    <Button
      type="primary"
      loading={status === AxiosQueryStatusEnum.PENDING}
      {...buttonProps}
      htmlType="submit"
    >
      {t('submit')}
    </Button>
  );
};

export default SubmitButton;
