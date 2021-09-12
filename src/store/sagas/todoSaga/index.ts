import { AxiosResponse } from "axios";
import { takeEvery, put, call, StrictEffect } from "redux-saga/effects";
import todoApi from "../../../api";
import { setTodos } from "../../action-creators";
import { ActionTypes } from "../../actions-types";

// workers
function* getTodosWorker() {
  try {
    const res: AxiosResponse = yield call(todoApi.get, "/todo");
    switch (res.status) {
      case 200:
        // const data = {
        //     type: ActionTypes.GET_TODO,
        //     payload: res.data
        // }
        yield put(setTodos(res.data));
    }
    // yield put(setTodos(res.data));
  } catch (error) {
    console.log(error);
  }
}

// watchers
function* todoSaga() {
  yield takeEvery(ActionTypes.GET_TODO, getTodosWorker);
}

export default todoSaga;
