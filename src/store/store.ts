import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import sagaMiddleWare from "redux-saga";

import rootReducer from "./reducer";

const saga = sagaMiddleWare();
export const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(saga))
);
