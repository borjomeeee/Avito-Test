import { IAppInitialState, initialState } from "../redux/store";
import { AppActionType } from "../utils/types";
import {
  DOWNLAOD_LIST_REPOS,
  DOWNLOAD_REPOS_DATA,
  DOWNLOAD_LIST_REPOS_SUCCESS,
  DOWNLOAD_LIST_REPOS_FAILED,
  DOWNLOAD_REPOS_DATA_SUCCESS,
  DOWNLOAD_REPOS_DATA_FAILED,
} from "../utils/constants";

export default (
  state: IAppInitialState = initialState.app,
  action: AppActionType
): IAppInitialState => {
  switch (action.type) {
    case DOWNLAOD_LIST_REPOS:
    case DOWNLOAD_REPOS_DATA:
      return { ...state, isLoading: true };

    case DOWNLOAD_LIST_REPOS_SUCCESS:
    case DOWNLOAD_LIST_REPOS_FAILED:
    case DOWNLOAD_REPOS_DATA_SUCCESS:
    case DOWNLOAD_REPOS_DATA_FAILED:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
