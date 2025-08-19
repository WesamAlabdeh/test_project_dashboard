import { MdRotateLeft, MdRotateRight } from 'react-icons/md';
import { FaExchangeAlt } from 'react-icons/fa';
import { BiZoomIn, BiZoomOut } from 'react-icons/bi';
import { Image, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { Column } from '@Module/core/types/Column';
import { AxiosEnum } from '@Module/core/enums/Axios';

export const ColumnsImage = ({ src }: { src: string }) => {
  const imageUrl = AxiosEnum.IMAGE_BASE_URL + src;

  return (
    <Image
      width={45}
      height={45}
      src={imageUrl}
      className="p-1 mb-1 columnImage"
      preview={{
        toolbarRender: (
          _,
          {
            actions: {
              onFlipY,
              onFlipX,
              onRotateLeft,
              onRotateRight,
              onZoomOut,
              onZoomIn,
            },
          },
        ) => (
          <Space size={12} className="toolbar-wrapper">
            <FaExchangeAlt
              style={{ transform: 'rotate(90deg)' }}
              onClick={onFlipY}
            />
            <FaExchangeAlt onClick={onFlipX} />
            <MdRotateLeft onClick={onRotateLeft} />
            <MdRotateRight onClick={onRotateRight} />
            <BiZoomOut onClick={onZoomOut} />
            <BiZoomIn onClick={onZoomIn} />
          </Space>
        ),
      }}
    />
  );
};

export function ImageColumn(key: string): Column {
  const [t] = useTranslation();

  return {
    title: t(key),
    dataIndex: key,
    key: key,
    align: 'center',
    render: (_text: any, record: any, _index: number) => {
      return <ColumnsImage src={record?.[key]} />;
    },
  };
}
