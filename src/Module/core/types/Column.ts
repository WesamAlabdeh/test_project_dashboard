export interface Column {
  title: string;
  dataIndex: string;
  key: string;
  align: 'left' | 'right' | 'center';
  ellipsis?: boolean;
  render?: any;
}
