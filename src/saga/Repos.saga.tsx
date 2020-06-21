import { takeLeading, put } from "redux-saga/effects";
import { DOWNLOAD_REPOS_DATA } from "../utils/constants";
import {
  IDownloadReposDataProps,
  downloadReposDataFailedAction,
  downloadReposDataSuccessAction,
} from "../actions/Repos.actions";
import ReposExpanded from "../models/ReposExpanded.model";

export function* downlaodReposDataSaga({ payload }: IDownloadReposDataProps) {
  try {
    // DOWNLOAD REPOS DATA
    let response = yield fetch(payload.reposUrl);

    if (response.ok) {
      const data = yield response.json();

      const languages = yield fetch(data["languages_url"]);
      const contributors = yield fetch(data["contributors_url"]+'?per_page=10');

      const reposExp = ReposExpanded.fromData(
        data["full_name"],
        data["description"],
        data["stargazers_count"],
        new Date(data["updated_at"]),
        data["html_url"],
        data["url"],
        data["owner"]["html_url"],
        data["owner"]["login"],
        data["owner"]["avatar_url"],
        Object.keys(yield languages.json()),
        (yield contributors.json()).map((item: any) => item.login)
      );

      yield put(downloadReposDataSuccessAction(reposExp));
    }
  } catch (e) {
    yield put(
      downloadReposDataFailedAction("Ошибка при загрузке данных о репозитории!")
    );
  }
}

export default function* reposSaga() {
  yield takeLeading(DOWNLOAD_REPOS_DATA, downlaodReposDataSaga);
}
