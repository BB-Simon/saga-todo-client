import { ActionTypes, TodoStateTypes } from "../actions-types"


export const getTodos = () => {
  return {
    type: ActionTypes.GET_TODO,
  };
};
export const createTodo = (todos: TodoStateTypes[]) => {
  return {
    type: ActionTypes.CREATE_TODO,
    payload: todos,
  };
};
export const updateTodo = (todos: TodoStateTypes[]) => {
  return {
    type: ActionTypes.UPDATE_TODO,
    payload: todos,
  };
};
export const deleteTodos = (id: string) => {
  return {
    type: ActionTypes.DELETE_TODO,
    payload: id,
  };
};