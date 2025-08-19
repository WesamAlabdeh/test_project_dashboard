import React from 'react';
import { Button, Result } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleRefetch = () => {};

  const handleGoToLogin = () => {
    navigate('/');
  };

  return (
    <Result
      status="error"
      title={t('errorPage.networkError')}
      subTitle={t('errorPage.checkAndModify')}
      extra={[
        <Button type="primary" key="refetch" onClick={handleRefetch}>
          {t('errorPage.refetch')} {/* Translate button text */}
        </Button>,
        <Button key="goToLogin" onClick={handleGoToLogin}>
          {t('errorPage.goToHome')} {/* Translate button text */}
        </Button>,
      ]}
    ></Result>
  );
};

export default ErrorPage;
