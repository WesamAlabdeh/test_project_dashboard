import { useLoginAdmin } from '@Module/auth/apis/auth';
import { ILogin, InitialValuesLogin } from '@Module/auth/types/login';
import {
  getInitialValues,
  getValidationSchema,
} from '@Module/auth/utils/login/formUtil';
import TranslateMenu from '@Module/core/components/menu/TranslateMenu';
import useAuthState from '@Module/core/states/AuthState';
import { Formik } from 'formik';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import FormField from './FormField';

const LoginForm = () => {
  const [t] = useTranslation();

  const { mutate, status, isSuccess, data } = useLoginAdmin<ILogin>();
  console.log(data ,"data");
  const { login } = useAuthState();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      login({
        token: data?.data?.token,
        user: data?.data?.admin,
      });
      navigate('/');
    }
  }, [isSuccess, login, navigate, data]);
  const handelSubmit = (values: InitialValuesLogin) => {
    console.log(values);
    mutate(values);
  };

  return (
    <div className="LoginForm">
      <nav className="LoginNav">
        <h5> {t('Login')} </h5>
    
      </nav>
      <Formik
        initialValues={getInitialValues()}
        validationSchema={getValidationSchema()}
        onSubmit={handelSubmit}
      >
        <FormField status={status} />
      </Formik>
    </div>
  );
};

export default LoginForm;
