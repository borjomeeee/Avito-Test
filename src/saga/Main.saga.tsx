import { takeLeading, put } from "redux-saga/effects";
import { SAVE_MAIN_TO_LOCAL, LOAD_MAIN_FROM_LOCAL } from "../utils/constants";
import {
  ISaveMainToLocalProps,
  saveMainToLocalSuccessAction,
  saveMainToLocalFailedAction,
  loadMainFromLocalFailedAction,
  loadMainFromLocalSuccessAction,
} from "../actions/Main.actions";

export function* saveMainToLocalSaga({ payload }: ISaveMainToLocalProps) {
  try {
    yield localStorage.setItem(
      "main",
      JSON.stringify({
        currPage: payload.currPage,
        searchString: payload.searchString,
      })
    );
    yield put(saveMainToLocalSuccessAction());
  } catch (e) {
    yield put(saveMainToLocalFailedAction("Ошибка сохранения Main!"));
  }
}

export function* loadMainFromLocalSaga() {
  try {
    const data = JSON.parse(yield localStorage.getItem("main"));
    console.log(data);

    if (data) {
      yield put(
        loadMainFromLocalSuccessAction(data.currPage, data.searchString)
      );
    } else {
      yield put(loadMainFromLocalFailedAction("В localstorage ничего нет!"));
    }
  } catch (e) {
    yield put(loadMainFromLocalFailedAction("Ошибка загрузки Main!"));
  }
}

export default function* mainSaga() {
  yield takeLeading(SAVE_MAIN_TO_LOCAL, saveMainToLocalSaga);
  yield takeLeading(LOAD_MAIN_FROM_LOCAL, loadMainFromLocalSaga);
}
