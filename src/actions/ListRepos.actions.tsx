import {
  DOWNLAOD_LIST_REPOS,
  DOWNLOAD_LIST_REPOS_SUCCESS,
  DOWNLOAD_LIST_REPOS_FAILED,
  IAction,
} from "../utils/constants";
import { IRepos } from "../models/Repos.model";

export interface IDownlaodListReposProps extends IAction {
  payload: { numPage: number; startWith: string };
}

export const downloadListReposAction = (numPage: number, startWith: string) =>
  ({
    type: DOWNLAOD_LIST_REPOS,
    payload: { numPage, startWith },
  } as const);

export const downloadListReposSuccessAction = (
  numPage: number,
  reposList: IRepos[]
) =>
  ({
    type: DOWNLOAD_LIST_REPOS_SUCCESS,
    payload: { numPage, reposList },
  } as const);

export const downloadListReposFailedAction = (err: string) =>
  ({
    type: DOWNLOAD_LIST_REPOS_FAILED,
    paylaod: { err },
  } as const);
