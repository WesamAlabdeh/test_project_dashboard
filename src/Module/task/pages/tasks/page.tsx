
import { useColumns } from '../../components/tasks/useTableColumns';
import { useGetAllTasks } from '../../apis/tasks';
import DataTableHeader from '@Module/core/components/DataTable/DataTableHeader';
import DataTable from '@Module/core/components/DataTable/DataTable';
import { Suspense, lazy, useState } from 'react';
import SelectTypeFilter from '@Module/task/components/tasks/SelectTypeFilter';
import { Input } from 'antd';

const AddModal = lazy(() => import('../../components/tasks/CreateModal'));
const EditModal = lazy(() => import('../../components/tasks/UpdateModal'));


const Page = () => {
  const [type, setType] = useState<"title" | "status">("title");
  const [status, setStatus] = useState<"pending" | "in_progress" | "completed">("pending");
  const [title, setTitle] = useState<string>("");
  const options = [
    { name: "title", id: "title" },
    { name: "status", id: "status" },
  ]
  const options2 = [
    { name: "pending", id: "pending" },
    { name: "in_progress", id: "in_progress" },
    { name: "completed", id: "completed" },
   
  ]
  const params = type === "title" ? { title: title || undefined } : { status: status || undefined };
  const response = useGetAllTasks(params);
  const columns = useColumns();
  
  return (
    <div>
      <DataTableHeader title="tasks page"  />
      <div style={{ display: 'flex', gap: '10px' }}>
      <SelectTypeFilter options={options} setType={setType} type={type} />
      {type === "title" && <Input placeholder='input' style={{ width: '140px' ,height:"30px"}} onChange={(e) => setTitle(e.target.value)} />
      }
      {type === "status" &&      
       <SelectTypeFilter options={options2} setType={setStatus} type={status} />

      }
      </div>

      <DataTable response={response} columns={columns} />

         <Suspense fallback={<></>}>
        <AddModal />
      </Suspense>
      <Suspense fallback={<></>}>
        <EditModal />
      </Suspense>

    </div>
  );
};

export default Page;
