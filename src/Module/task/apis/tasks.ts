
import {
  useAddMutation,
  useDeleteMutation,
  useGetQuery,
  useGetQueryPagination,
  useUpdateMutation,
} from '@Module/core/apis/helpers';

const API = {
  GET: '/task',
  GET_ONE: '/task/',
  GET_USER_TASKS: '/task?user_id=',
  ADD: '/task',
  DELETE: '/task',
  UPDATE: '/task',
};

const KEY = "tasks";

export const useGetAllTasks = (params:Record<string, any> = {}, options: any = {}) => useGetQueryPagination(KEY, API.GET, params, options);
export const useGetTasks = (params:Record<string, any> = {}, options: any = {}) => useGetQuery(KEY, API.GET_ONE + params.id, params, options);
export const useGetUserTasks = (params:Record<string, any> = {}, options: any = {}) => useGetQuery(KEY, API.GET_USER_TASKS + params.user_id, params, options);

export const useAddTasks = () => useAddMutation(KEY, API.ADD);
export const useUpdateTasks = () => useUpdateMutation(KEY, API.UPDATE);
export const useDeleteTasks = () => useDeleteMutation(KEY, API.DELETE);
