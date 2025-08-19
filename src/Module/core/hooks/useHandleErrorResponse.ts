import { AxiosQueryEnum, AxiosStatusEnum } from '../enums/Axios';
import { ErrorResponse } from '../types/axios';
import { useNavigate } from 'react-router-dom';
import useAuthState from '../states/AuthState';
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { handleStatus } from '../Responses/ResponseCode';
import { toast } from 'react-toastify';

export const useHandleErrorResponse = () => {
  const { logout } = useAuthState();
  const [t] = useTranslation();
  const navigate = useNavigate();

  const handleErrorResponse = useCallback(
    async (error: ErrorResponse) => {
      const status = error?.request?.status;
      const CodeFromResponse = error?.response.data.code;

      // const errorMsg = error?.response?.data?.message;
      const method = error.config.method;

      const message = handleStatus(CodeFromResponse);

      if (message) {
        toast.error(message);
      }

      if (status === AxiosStatusEnum.VALIDATION) {
        // setValidation(errorMsg ?? errorField);
        // const errorMessage = errorMsg || t("validation.some_thing_went_wrong");
        // toast.error(errorMessage);
      } else if (status === AxiosStatusEnum.AUTHENTICATED) {
        logout();
        navigate('/auth');
      }
      if (method !== AxiosQueryEnum?.GET) {
        // const errorMessage = errorMsg || t("validation.some_thing_went_wrong");
        // toast.error(errorMessage);
      }

      return Promise.reject(error);
    },
    [logout, t, navigate],
  );

  return handleErrorResponse;
};
