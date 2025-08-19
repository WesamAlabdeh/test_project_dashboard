
import ValidationField from '@Module/core/components/ValidationField/ValidationField';
import ValidationFieldRow from '@Module/core/components/ValidationField/components/ValidationFieldRow';

const Form = () => {
  return (
    <ValidationFieldRow>
    
        <ValidationField name="username" type="text" />
        <ValidationField name="email" type="text" />
        <ValidationField name="phone" type="text" />

    </ValidationFieldRow>
  );
}

export default Form
