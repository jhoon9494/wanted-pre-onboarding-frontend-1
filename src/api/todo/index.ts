import apiClient from '@/api/apiClient';
import { ITodo } from '@/pages/TodoPage/types';

export const getTodo = async () => {
  return await apiClient({
    method: 'get',
    url: '/todos',
  });
};

export const createTodo = async (todo: string) => {
  return await apiClient({
    method: 'post',
    url: '/todos',
    data: {
      todo,
    },
  });
};

export const updateCheck = async (todo: ITodo) => {
  return await apiClient({
    method: 'put',
    url: `/todos/${todo.id}`,
    data: {
      todo: todo.todo,
      isCompleted: !todo.isCompleted,
    },
  });
};

export const updateTodo = async (todoInput: string, todo: ITodo) => {
  return await apiClient({
    method: 'put',
    url: `/todos/${todo.id}`,
    data: {
      todo: todoInput,
      isCompleted: todo.isCompleted,
    },
  });
};

export const deleteTodo = async (id: number) => {
  return await apiClient({
    method: 'delete',
    url: `/todos/${id}`,
  });
};
