import { TableColumnsType } from 'antd';
import { createColumn } from '../../imports/useColumns';

export function createColumnsValues<T>(
  columnKeys: string[],
): TableColumnsType<T> {
  return columnKeys.map((key) => createColumn(key));
}
