
import { useColumns } from '../../components/user/useTableColumns';
import { useGetAllUser } from '../../apis/user';
import DataTableHeader from '@Module/core/components/DataTable/DataTableHeader';
import DataTable from '@Module/core/components/DataTable/DataTable';
import DashBody from '@Module/core/components/DataTable/DashBody';
import { AxiosQueryStatusEnum } from '@Module/core/enums/Axios';
import { Suspense } from 'react';
import SelectTypeFilter from '@Module/task/components/tasks/SelectTypeFilter';

const AddModal = lazy(() => import('../../components/user/CreateModal'));
const EditModal = lazy(() => import('../../components/user/UpdateModal'));


const Page = () => {
  const response = useGetAllUser();
  const columns = useColumns();

  return (
    <DashBody status={response.status as AxiosQueryStatusEnum }>
      <DataTableHeader title="user page" showAddButton={false} />
      <DataTable response={response} columns={columns} />

         <Suspense fallback={<></>}>
        <AddModal />
      </Suspense>
      <Suspense fallback={<></>}>
        <EditModal />
      </Suspense>

    </DashBody>
  );
};

export default Page;
