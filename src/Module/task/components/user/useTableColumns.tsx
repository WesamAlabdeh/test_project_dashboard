

import {
  ActionButton,
  ActionWrapper,
} from '@Module/core/imports/useColumns';
import { useObjectToEdit } from '@Module/core/states/ObjectToEditState';
import { userType } from '@Module/task/types/user';
import { TableColumnsType } from 'antd';
import { createColumnsValues } from '@Module/core/utils/fn/createColumnsValues';
import ActionDeleteButton from '@Module/core/components/DataTable/ActionDeleteButton';
import { useDeleteUser } from '@Module/task/apis/user';
import { useNavigate } from 'react-router-dom';

export const useColumns = () => { 
  const navigate = useNavigate();
  const { setObjectToEdit } = useObjectToEdit();
  const { mutate } = useDeleteUser();
  const handleDelete = (record: userType) => {
    setObjectToEdit(record);
    mutate({ id: record?.id });
  };

  const columnKeys: (keyof userType)[] = ['id', 'username' ,'email' ,'phone'  ];
  const columnsValues = createColumnsValues<userType>(columnKeys);

  const columns: TableColumnsType<userType> = [
    ...columnsValues,
    {
      title: 'Actions',
      key: 'actions',
      align: 'center',
      render: (_text, record, index) => {
        return (
          <ActionWrapper index={index}>
            <ActionButton type='show' record={record} action={() => navigate(`/user/show/${record?.id}`)} />
            <ActionDeleteButton action={() => handleDelete(record)} />
            <ActionButton  record={record} />
          </ActionWrapper>
        );
      },
    },
  ];

  return columns;
};



