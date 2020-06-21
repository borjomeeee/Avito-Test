import { IMainInitialState, initialState } from "../redux/store";
import {
  LOAD_MAIN_FROM_LOCAL_SUCCESS,
  CHANGE_SEARCH_STRING,
  CHANGE_CURR_PAGE,
  CHANGE_MAX_COUNT_REPOS,
} from "../utils/constants";
import { MainActionType } from "../utils/types";

export default (
  state: IMainInitialState = initialState.main,
  action: MainActionType
) => {
  switch (action.type) {
    case LOAD_MAIN_FROM_LOCAL_SUCCESS:
      return action.payload.main;
    case CHANGE_SEARCH_STRING:
      return { ...state, searchString: action.payload.searchString };
    case CHANGE_CURR_PAGE:
      return { ...state, currPage: action.paylaod.pageNum };
    case CHANGE_MAX_COUNT_REPOS:
      return { ...state, maxCountRepos: action.payload.count}
    default:
      return state;
  }
};
