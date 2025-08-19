import { Column } from '@Module/core/types/Column';
import { useTranslation } from 'react-i18next';

export const createColumn = (key: string): Column => {
  const [t] = useTranslation();
  return {
    title: t(key),
    dataIndex: key,
    key,
    ellipsis: true,
    align: 'center',
  };
};
