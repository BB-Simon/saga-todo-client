import { combineReducers } from "redux";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
  todos: todoReducer,
});

export default rootReducer;
export type State = ReturnType<typeof rootReducer>;
