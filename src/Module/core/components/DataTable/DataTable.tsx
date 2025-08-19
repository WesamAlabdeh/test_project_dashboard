import React from 'react';
import { DataTableProps } from '../../types/DataTable';
import usePagination from '@Module/core/hooks/usePagination';
import { Empty, Table } from 'antd';
import { QueryStatusEnum } from '@Module/core/enums/TankStackQueryEnum';
import SpinContainer from '../layout/SpinContainer';

const DataTable: React.FC<DataTableProps> = ({ response, ...props }) => {
  const data: any[] = Array.isArray(response?.data)
    ? response.data
    : Array.isArray(response?.data?.data)
      ? response.data.data
      : Array.isArray(response?.data?.data?.data)
      ? response.data.data?.data
      : [];

      
  const { pagination, handlePageChange } = usePagination(response?.data?.data as any);

  
  
  const isRefetching = response?.isRefetching;
  return (
    <Table
      dataSource={data}
      className="DataTable"
      rowKey={'id'}
      loading={{
        spinning: response?.status === QueryStatusEnum.PENDING || isRefetching,
        indicator: <SpinContainer />,
        size: 'large',
      }}
      locale={{
        emptyText: <Empty />,
      }}
      pagination={{
        ...pagination,
        onChange: handlePageChange,
      }}
      {...props}
    />
  );
};

export default DataTable;
