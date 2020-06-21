import { initialState, IListReposInitialState } from "../redux/store";
import { ListReposActionType } from "../utils/types";
import {
  DOWNLOAD_LIST_REPOS_SUCCESS,
  DOWNLOAD_REPOS_DATA_SUCCESS,
} from "../utils/constants";
import { IRepos } from "../models/Repos.model";
import ReposExpanded from "../models/ReposExpanded.model";

export default (
  state: IListReposInitialState = initialState.listRepos,
  action: ListReposActionType
): IListReposInitialState => {
  switch (action.type) {
    case DOWNLOAD_LIST_REPOS_SUCCESS:
      return [...action.payload.reposList];
    case DOWNLOAD_REPOS_DATA_SUCCESS:
      return state.map((item: IRepos) =>
        item.title === action.payload.reposExp.title
          ? new ReposExpanded({ ...action.payload.reposExp, id: item.id })
          : item
      );
    default:
      return state;
  }
};
