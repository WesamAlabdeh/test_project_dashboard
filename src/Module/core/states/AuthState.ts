import { create } from 'zustand';
import {
  removeItemLocalStorage,
  getLocalStorage,
  setLocalStorage,
} from '../utils/document/localStorage';
import { LocalStorageEnum } from '../enums/LocalStorage';
import { AuthStore, LoginData } from '../types/auth';

const useAuthState = create<AuthStore>((set) => {
  const token = getLocalStorage(LocalStorageEnum.TOKEN_KEY);
  return {
    token: token,
    user: getLocalStorage(LocalStorageEnum.USER_KEY),
    isAuthenticated: true,

    login: async (data: LoginData) => {
      setLocalStorage(LocalStorageEnum.TOKEN_KEY, data?.token);
      setLocalStorage(LocalStorageEnum.USER_KEY, data?.user);

      set(() => ({
        isAuthenticated: true,
        token: data.token,
        user: data.user,
      }));
    },
    logout: async () => {
      removeItemLocalStorage(LocalStorageEnum.TOKEN_KEY);
      removeItemLocalStorage(LocalStorageEnum.USER_KEY);

      set(() => ({
        isAuthenticated: false,
        token: null,
        user: null,
      }));
    },
  };
});

export default useAuthState;
