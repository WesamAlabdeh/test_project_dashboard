

import {
  ActionButton,
  ActionWrapper,
} from '@Module/core/imports/useColumns';
import { useObjectToEdit } from '@Module/core/states/ObjectToEditState';
import { tasksType } from '@Module/task/types/tasks';
import { TableColumnsType } from 'antd';
import { createColumnsValues } from '@Module/core/utils/fn/createColumnsValues';
import ActionDeleteButton from '@Module/core/components/DataTable/ActionDeleteButton';
import { useDeleteTasks } from '@Module/task/apis/tasks';
import { useNavigate } from 'react-router-dom';

export const useColumns = () => { 
  const navigate = useNavigate();
  const { setObjectToEdit } = useObjectToEdit();
  const { mutate } = useDeleteTasks();
  const handleDelete = (record: tasksType) => {
    setObjectToEdit(record);
    mutate({ id: record?.id });
  };
  const handleShow = (record: tasksType) => {
    setObjectToEdit(record);
    navigate(`/tasks/show/${record.id}`);
  };
  const columnKeys: (keyof tasksType)[] = ['id', 'status','title','user'];
  const columnsValues = createColumnsValues<tasksType>(columnKeys);

  const columns: TableColumnsType<tasksType> = [
    ...columnsValues,
    {
      title: 'Action',
      key: 'action',
      width: 100,
      render: (_text, record, index) => {
        return (
          <ActionWrapper index={index}>
            <ActionDeleteButton action={() => handleDelete(record)} />
            <ActionButton type='show' record={record} action={() => handleShow(record)} />
            <ActionButton  record={record} />
          </ActionWrapper>
        );
      },
    },
  ];

  return columns;
};



