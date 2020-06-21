import { put, takeLeading } from "redux-saga/effects";
import { DOWNLAOD_LIST_REPOS } from "../utils/constants";
import {
  downloadListReposFailedAction,
  downloadListReposSuccessAction,
  IDownlaodListReposProps,
} from "../actions/ListRepos.actions";
import Repos from "../models/Repos.model";
import { changeMaxCountRepos } from "../actions/Main.actions";

export function* downlaodListReposSaga({ payload }: IDownlaodListReposProps) {
  try {
    // DOWNLAOD LIST REPOS
    const response = yield fetch(
      `https://api.github.com/search/repositories?q=${
        payload.startWith || ""
      }+language:&sort=stars&page=${payload.numPage}&per_page=10`
    );

    if (response.ok) {
      const data = yield response.json();
      const listRepos = data["items"].map((item: any) =>
        Repos.fromData(
          item.full_name,
          item.stargazers_count,
          new Date(item.updated_at),
          item.html_url,
          item.url
        )
      );
      yield put(downloadListReposSuccessAction(payload.numPage, listRepos));
      yield put(changeMaxCountRepos(data["total_count"]));
    } else {
      yield put(
        downloadListReposFailedAction(`Ошибка загрузки: ${response.status}`)
      );
    }
  } catch (e) {
    yield put(
      downloadListReposFailedAction("Ошибка скачивания списка репозиториев!")
    );
  }
}

export default function* listReposSaga() {
  yield takeLeading(DOWNLAOD_LIST_REPOS, downlaodListReposSaga);
}
