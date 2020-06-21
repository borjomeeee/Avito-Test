import {
  downloadListReposAction,
  downloadListReposSuccessAction,
  downloadListReposFailedAction,
} from "../actions/ListRepos.actions";
import {
  downloadReposDataAction,
  downloadReposDataSuccessAction,
  downloadReposDataFailedAction,
} from "../actions/Repos.actions";
import {
  saveMainToLocalAction,
  saveMainToLocalSuccessAction,
  saveMainToLocalFailedAction,
  loadMainFromLocalAction,
  loadMainFromLocalSuccessAction,
  loadMainFromLocalFailedAction,
  changeCurrPageAction,
  changeSearchStringAction,
  changeMaxCountRepos,
} from "../actions/Main.actions";

export type ListReposActionType =
  | ReturnType<typeof downloadListReposAction>
  | ReturnType<typeof downloadListReposSuccessAction>
  | ReturnType<typeof downloadListReposFailedAction>
  | ReturnType<typeof downloadReposDataAction>
  | ReturnType<typeof downloadReposDataSuccessAction>
  | ReturnType<typeof downloadReposDataFailedAction>;

export type AppActionType =
  | ReturnType<typeof downloadListReposAction>
  | ReturnType<typeof downloadListReposSuccessAction>
  | ReturnType<typeof downloadListReposFailedAction>
  | ReturnType<typeof downloadReposDataAction>
  | ReturnType<typeof downloadReposDataSuccessAction>
  | ReturnType<typeof downloadReposDataFailedAction>;

export type MainActionType =
  | ReturnType<typeof saveMainToLocalAction>
  | ReturnType<typeof saveMainToLocalSuccessAction>
  | ReturnType<typeof saveMainToLocalFailedAction>
  | ReturnType<typeof loadMainFromLocalAction>
  | ReturnType<typeof loadMainFromLocalSuccessAction>
  | ReturnType<typeof loadMainFromLocalFailedAction>
  | ReturnType<typeof changeCurrPageAction>
  | ReturnType<typeof changeSearchStringAction>
  | ReturnType<typeof changeMaxCountRepos>;
