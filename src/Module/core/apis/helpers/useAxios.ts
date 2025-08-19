import AxiosBuilder from './AxiosBuilder';
import { AxiosEnum } from '../../enums/Axios';
import useAuthState from '../../states/AuthState';
import { useHandleErrorResponse } from '../../hooks/useHandleErrorResponse';
import { useHandleSuccessResponse } from '../../hooks/handleSuccessResponse';

function useAxios() {
  const { isAuthenticated, token } = useAuthState();
  const handleSuccessResponse = useHandleSuccessResponse();
  const handleErrorResponse = useHandleErrorResponse();

  const buildAxios = new AxiosBuilder()
    .withBaseURL(AxiosEnum?.BASEURL as string)
    .withResponseType(AxiosEnum.RESPONSE_TYPE)
    .withTimeout(AxiosEnum.TIMEOUT)
    .withHeaders({ Accept: 'application/json' });

  if (isAuthenticated) {
    buildAxios.withHeaders({
      Authorization: AxiosEnum.BEARER + token,
    });
  }

  const axios = buildAxios.build();

  axios.interceptors.response.use(handleSuccessResponse, handleErrorResponse);

  return axios;
}

export default useAxios;
