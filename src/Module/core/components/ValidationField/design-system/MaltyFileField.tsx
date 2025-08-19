import { FC, useMemo } from 'react';
import useFormField from '../Hooks/useFormField';
import { ValidationFieldContainer } from '../components/ValidationFieldContainer';
import { ValidationFieldLabel } from '../components/ValidationFieldLabel';
import { ValidationFieldPropsMaltyFile } from '../types/types';
import { Button, Upload, UploadFile } from 'antd';
import { UploadChangeParam } from 'antd/es/upload';
import { AxiosEnum } from '@Module/core/enums/Axios';
import { containsHttps } from '@Module/core/utils/string/containsHttps';

const MaltyFileField: FC<ValidationFieldPropsMaltyFile> = ({
  name,
  label,
  placeholder,
  type = 'maltyFile',
  key = 'image',
  ...props
}) => {
  const { errorMsg, isError, t, formik, value } = useFormField(name, props);
  const imageUrl = value ?? null;

  const fileList: UploadFile[] = useMemo(() => {
    if (!imageUrl) return [];

    return imageUrl.map((file: any, index: number) => {
      if (file instanceof File) {
        return {
          uid: String(index),
          name: file.name,
          status: 'done',
          originFileObj: file,
        };
      } else {
        const imageKey = file?.[key];
        const haveBaseUrl = containsHttps(imageKey);
        const baseImageUrl = haveBaseUrl
          ? imageKey
          : AxiosEnum.IMAGE_BASE_URL + imageKey;

        return {
          uid: String(index),
          id: file?.id,
          name: file?.name ?? '',
          status: 'done',
          url: baseImageUrl,
          thumbUrl: baseImageUrl,
        };
      }
    });
  }, [imageUrl]);

  const handleFieldChange = ({ fileList }: UploadChangeParam<UploadFile>) => {
    if (fileList.length === 0) {
      formik.setFieldValue(name, null);
      return;
    }

    const updatedFiles = fileList.map((file: UploadFile) => {
      if (typeof file.url === 'string') {
        return { ...file, [key]: file.url };
      }
      return file.originFileObj ?? file;
    });

    formik.setFieldValue(name, updatedFiles);
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
          key={`${type}${name}`}
          listType="picture"
          fileList={fileList}
          onChange={handleFieldChange}
          customRequest={customRequest}
          multiple
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
export default MaltyFileField;
