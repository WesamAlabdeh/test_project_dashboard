import { Form, Formik } from 'formik';
import ValidationField from './components/ValidationField';
import * as Yup from 'yup'

const Body = () => {

  return (
    <Form>
      {Array.from({ length: 4 }).map((_, index: number) => (
        <ValidationField key={index} name={`name${index + 1}`} type="text" />
      ))}
        <button type='submit'>
          submit
        </button>
    </Form>
  )
}
const Page = () => {

  

  return (
    <div className="d-flex w-50 p-4">
    <Formik
  initialValues={{ name1: '', name2: '', name3: '', name4: '' }}
  onSubmit={(values: any) => { 
    console.log(values, "values22"); 
  }}
  validationSchema={Yup.object().shape({
    name1: Yup.string().test(
      'name1-or-name2',
      'You must fill either name1 or name2',
      function (value) {
        const { name2 } = this.parent;
        return value || name2;
      }
    ),
    name2: Yup.string(),
  })}
  validateOnMount={true}
>

        <Body />
      </Formik>
    </div>
  );
};

export default Page;
