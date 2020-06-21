import { IMainInitialState, initialState } from "../redux/store";
import {
  LOAD_MAIN_FROM_LOCAL_SUCCESS,
  CHANGE_MAX_COUNT_REPOS,
  DOWNLOAD_LIST_REPOS_SUCCESS,
  SAVE_MAIN_TO_LOCAL,
} from "../utils/constants";
import { MainActionType } from "../utils/types";

export default (
  state: IMainInitialState = initialState.main,
  action: MainActionType
) => {
  switch (action.type) {
    case LOAD_MAIN_FROM_LOCAL_SUCCESS:
      return {
        ...state,
        currPage: action.payload.currPage,
        searchString: action.payload.searchString,
      };
    // case CHANGE_SEARCH_STRING:
    //   return { ...state, searchString: action.payload.searchString };
    // case CHANGE_CURR_PAGE:
    //   return { ...state, currPage: action.paylaod.pageNum };
    case SAVE_MAIN_TO_LOCAL:
      return {
        ...state,
        currPage: action.payload.currPage,
        searchString: action.payload.searchString,
      };
    case CHANGE_MAX_COUNT_REPOS:
      return { ...state, maxCountRepos: action.payload.count };
    case DOWNLOAD_LIST_REPOS_SUCCESS:
      return {
        ...state,
        currPage: action.payload.numPage,
        searchString: action.payload.startWith,
      };
    default:
      return state;
  }
};
