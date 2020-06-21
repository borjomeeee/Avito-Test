import { all } from "redux-saga/effects";
import listReposSaga from "./ListRepos.saga";
import reposSaga from "./Repos.saga";
import mainSaga from "./Main.saga";

export default function* rootSaga() {
  yield all([listReposSaga(), reposSaga(), mainSaga()]);
}
