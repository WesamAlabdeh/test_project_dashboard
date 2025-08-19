import ValidationField from '@Module/core/components/ValidationField/ValidationField';

import SubmitButton from '@Module/core/design-system/SubmitButton';

import { AxiosQueryStatusType } from '@Module/core/types/axios';
import { Form } from 'formik';

const FormField = ({ status }: { status: AxiosQueryStatusType }) => {
  const [t] = useTranslation();
  return (
    <Form>
      <div className="mb-4">
        <h4 className="LoginH4">
          {t('Welcome back, please login to your account.')}
        </h4>

        <ValidationField placeholder={t('username')} type="text" name="username" />
      </div>

      <div>
        <ValidationField
          placeholder={t('password')}
          type="password"
          name="password"
        />
      </div>

      <SubmitButton block status={status}>
        {t('Sign in')}
      </SubmitButton>
     
    </Form>
  );
};

export default FormField;
