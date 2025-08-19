import React, { ReactNode } from 'react';
import FormikForm from '@Module/core/components/page/Forms/FormikForm';
import BackButton from '@Module/core/design-system/BackButton';
import SubmitButton from '@Module/core/design-system/SubmitButton';
import { useTranslation } from 'react-i18next';
import { FormikConfig } from 'formik';
import { AxiosQueryStatusType } from '@Module/core/types/axios';
import useNavigateRoute from '@Module/core/hooks/useNavigateRoute';

// Define a type for your form values
interface FormValues {
  [key: string]: any;
}

interface PageBodyProps extends Omit<FormikConfig<FormValues>, 'children'> {
  children: ReactNode;
  status: AxiosQueryStatusType;
  header?: string;
  path?: string | null | number;
  readonly?:boolean
}

const PageBody: React.FC<PageBodyProps> = ({
  children,
  header,
  status,
  path = -1,
  readonly=false,
  ...formikProps
}) => {
  const [t] = useTranslation();

  useNavigateRoute({ path, status });
  return (
    <div className="CreatePage">
      <header>
        <h1>{header ? header : t('item info')}</h1>
        <BackButton />
      </header>
      <main>
        <FormikForm {...formikProps}>
          {children}
          {readonly ? <></> : <SubmitButton status={status} />}
          
        </FormikForm>
      </main>
    </div>
  );
};

export default PageBody;
