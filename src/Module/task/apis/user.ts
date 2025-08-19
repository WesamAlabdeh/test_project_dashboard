
import {
  useAddMutation,
  useDeleteMutation,
  useGetQuery,
  useGetQueryPagination,
  useUpdateMutation,
} from '@Module/core/apis/helpers';

const API = {
  GET: '/user',
  GET_ONE: '/user/',
  ADD: '/user',
  DELETE: '/user',
  UPDATE: '/user',
};

const KEY = "user";

export const useGetAllUser = (params:Record<string, any> = {}, options: any = {}) => useGetQueryPagination(KEY, API.GET, params, options);
export const useGetUser = (params:Record<string, any> = {}, options: any = {}) => useGetQuery(KEY, API.GET_ONE + params.id, params, options);
export const useAddUser = () => useAddMutation(KEY, API.ADD);
export const useUpdateUser = () => useUpdateMutation(KEY, API.ADD);
export const useDeleteUser = () => useDeleteMutation(KEY, API.ADD);
