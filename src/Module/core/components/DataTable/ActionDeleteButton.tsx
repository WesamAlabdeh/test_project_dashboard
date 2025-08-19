import { useObjectToEdit } from '@Module/core/states/ObjectToEditState';
import { Popconfirm } from 'antd';
import { FaTrash } from 'react-icons/fa';

function ActionDeleteButton({ action }: { action: () => void }) {
  const { setObjectToEdit } = useObjectToEdit();
  const handleAction = ()=>{
    action()
    setObjectToEdit({})
  }
  return (
    <Popconfirm
      title="Delete the task"
      description="Are you sure to delete this task?"
      okText="Yes"
      cancelText="No"
      onCancel={() => {setObjectToEdit({})}}
      onConfirm={handleAction}
    >
      <button
        style={{
          border: 'none',
          background: 'none',
        }}
      >
        <FaTrash  size={16} style={{ color: 'red' }} />
      </button>
    </Popconfirm>
  );
}

export default ActionDeleteButton;
