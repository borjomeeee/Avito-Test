import {
  IAction,
  LOAD_MAIN_FROM_LOCAL,
  LOAD_MAIN_FROM_LOCAL_SUCCESS,
  LOAD_MAIN_FROM_LOCAL_FAILED,
  SAVE_MAIN_TO_LOCAL,
  SAVE_MAIN_TO_LOCAL_SUCCESS,
  SAVE_MAIN_TO_LOCAL_FAILED,
  CHANGE_CURR_PAGE,
  CHANGE_SEARCH_STRING,
  CHANGE_MAX_COUNT_REPOS,
} from "../utils/constants";

export interface ISaveMainToLocalProps extends IAction {
  payload: { currPage: number; searchString: string };
}

export const loadMainFromLocalAction = () =>
  ({
    type: LOAD_MAIN_FROM_LOCAL,
  } as const);

export const loadMainFromLocalSuccessAction = (
  currPage: number,
  searchString: string
) =>
  ({
    type: LOAD_MAIN_FROM_LOCAL_SUCCESS,
    payload: { currPage, searchString },
  } as const);

export const loadMainFromLocalFailedAction = (err: string) =>
  ({
    type: LOAD_MAIN_FROM_LOCAL_FAILED,
    paylaod: { err },
  } as const);

export const saveMainToLocalAction = (currPage: number, searchString: string) =>
  ({
    type: SAVE_MAIN_TO_LOCAL,
    payload: { currPage, searchString },
  } as const);

export const saveMainToLocalSuccessAction = () =>
  ({
    type: SAVE_MAIN_TO_LOCAL_SUCCESS,
  } as const);

export const saveMainToLocalFailedAction = (err: string) =>
  ({
    type: SAVE_MAIN_TO_LOCAL_FAILED,
    payload: { err },
  } as const);

export const changeCurrPageAction = (pageNum: number) =>
  ({
    type: CHANGE_CURR_PAGE,
    paylaod: { pageNum },
  } as const);

export const changeSearchStringAction = (searchString: string) =>
  ({
    type: CHANGE_SEARCH_STRING,
    payload: { searchString },
  } as const);

export const changeMaxCountRepos = (count: number) =>
  ({
    type: CHANGE_MAX_COUNT_REPOS,
    payload: { count },
  } as const);
