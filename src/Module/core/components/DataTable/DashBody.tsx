import ErrorPage from '../layout/ErrorPage';
import SpinContainer from '../layout/SpinContainer';
import { AxiosQueryStatusEnum } from '@Module/core/enums/Axios';

const DashBody = ({
  children,
  status,
}: {
  children: React.ReactNode;
  status: AxiosQueryStatusEnum;
}) => {
  if (status === AxiosQueryStatusEnum.PENDING) {
    return <SpinContainer />;
  }

  if (status === AxiosQueryStatusEnum.ERROR) {
    return <ErrorPage />;
  }

  return <div className="Page">{children}</div>;
};

export default DashBody;
