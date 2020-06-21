import {
  DOWNLOAD_REPOS_DATA,
  DOWNLOAD_REPOS_DATA_SUCCESS,
  DOWNLOAD_REPOS_DATA_FAILED,
  IAction,
} from "../utils/constants";
import { IReposExpanded } from "../models/ReposExpanded.model";

export interface IDownloadReposDataProps extends IAction {
  payload: { reposUrl: string };
}

export const downloadReposDataAction = (reposUrl: string) =>
  ({
    type: DOWNLOAD_REPOS_DATA,
    payload: { reposUrl },
  } as const);

export const downloadReposDataSuccessAction = (reposExp: IReposExpanded) =>
  ({
    type: DOWNLOAD_REPOS_DATA_SUCCESS,
    payload: { reposExp },
  } as const);

export const downloadReposDataFailedAction = (err: string) =>
  ({
    type: DOWNLOAD_REPOS_DATA_FAILED,
    paylaod: { err },
  } as const);
