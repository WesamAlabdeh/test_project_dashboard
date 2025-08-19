import { ReactNode, memo } from 'react';
import { Formik, Form, FormikConfig, FormikValues } from 'formik';

interface FormikFormProps<Values extends FormikValues = FormikValues>
  extends Omit<FormikConfig<Values>, 'children'> {
  children: ReactNode;
  formClassName?: string;
}

function FormikForm<Values extends FormikValues = FormikValues>({
  children,
  formClassName = 'FormikForm',
  ...formikProps
}: FormikFormProps<Values>): JSX.Element {
  return (
    <Formik<Values> enableReinitialize {...formikProps}>
      <Form className={formClassName}>{children}</Form>
    </Formik>
  );
}

export default memo(FormikForm) as typeof FormikForm;
