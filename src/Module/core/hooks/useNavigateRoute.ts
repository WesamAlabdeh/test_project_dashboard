import { useEffect } from 'react';
import { AxiosQueryStatusType } from '../types/axios';
import { useNavigate } from 'react-router-dom';

function useNavigateRoute({
  path,
  status,
}: {
  path: undefined | string | null | number;
  status: AxiosQueryStatusType;
}) {
  const navigate = useNavigate();
  useEffect(() => {
    if (path && status === 'success') {
      navigate(path as string);
    }
  }, [status]);
}

export default useNavigateRoute;
