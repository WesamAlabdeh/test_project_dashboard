
import ValidationField from '@Module/core/components/ValidationField/ValidationField';
import ValidationFieldRow from '@Module/core/components/ValidationField/components/ValidationFieldRow';

const Form = () => {
  
  return (
    <ValidationFieldRow>
   
        <ValidationField name="title" type="text" />
        <ValidationField name="description" type="text" />
        <ValidationField name="images" type="maltyFile" multiple />


      
    </ValidationFieldRow>
  );
}

export default Form
