import { FC, useMemo } from 'react';
import useFormField from '../Hooks/useFormField';
import { ValidationFieldContainer } from '../components/ValidationFieldContainer';
import { ValidationFieldLabel } from '../components/ValidationFieldLabel';
import { ValidationFieldPropsFile } from '../types/types';
import { Button, Upload, UploadFile } from 'antd';
import { AxiosEnum } from '@Module/core/enums/Axios';

const FileField: FC<ValidationFieldPropsFile> = ({
  name,
  label,
  placeholder,
  type,
  ...props
}) => {
  const { errorMsg, isError, t, formik, value } = useFormField(name, props);
  let imageUrl = value ?? null;
  const fileList: UploadFile[] = useMemo(() => {
    if (!imageUrl) return [];

    const BaseimageUrl = AxiosEnum.IMAGE_BASE_URL + imageUrl;
    console.log(BaseimageUrl);

    return [
      typeof imageUrl === 'string'
        ? {
            uid: '-1',
            name: 'uploaded-image',
            status: 'done',
            url: BaseimageUrl,
            thumbUrl: BaseimageUrl,
          }
        : {
            uid: imageUrl.uid || '-1',
            name: imageUrl.name || 'uploaded-image',
            status: 'done',
            originFileObj: imageUrl,
          },
    ];
  }, [imageUrl]);

  const handleFieldChange = (value: any) => {
    if (value.fileList.length === 0) {
      formik.setFieldValue(name, null);
    } else {
      formik.setFieldValue(name, value?.file?.originFileObj);
    }
  };

  const customRequest = async ({ onSuccess }: any) => {
    onSuccess();
  };

  return (
    <div className="ValidationField">
      <ValidationFieldLabel
        name={name}
        label={label}
        placeholder={placeholder}
        t={t}
      />
      <ValidationFieldContainer isError={isError} errorMsg={errorMsg}>
        <Upload
          id={name}
          listType="picture"
          maxCount={1}
          fileList={[...fileList]}
          onChange={handleFieldChange}
          customRequest={customRequest}
          {...props}
        >
          <Button
            size="large"
            style={isError ? { color: 'red', borderColor: 'red' } : {}}
            block
          >
            {placeholder ?? t('click_to_upload_the_image')}
          </Button>
        </Upload>
      </ValidationFieldContainer>
    </div>
  );
};
export default FileField;
