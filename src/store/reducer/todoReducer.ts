import { Reducer } from "redux";
import { ActionTypes, TodoAction, TodoStateTypes } from "../actions-types";

const initialState = {
  todos: [],
};
interface State {
  todos: TodoStateTypes[];
}

const todoReducer: Reducer<State, TodoAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionTypes.GET_TODO:
      return {
        ...state,
        todos: action.payload,
      };
    case ActionTypes.CREATE_TODO:
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
      };
    case ActionTypes.UPDATE_TODO:
      return {
        ...state,
        todos: action.payload,
        // todos: ():TodoStateTypes[] => {
        //    const tempTodos =  state.todos.map((todo) => {
        //         if (todo.id === action.payload[0].id) {
        //         todo.id = action.payload[0].id;
        //         todo.todo = action.payload[0].todo;
        //         todo.date = action.payload[0].date;
        //         }

        //     })
        //   return tempTodos;
        // },
      };
    case ActionTypes.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};
export default todoReducer;
