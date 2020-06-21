import { combineReducers, applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import rootSaga from "../saga/Root.saga";
import ListReposReducer from "../reducers/ListRepos.reducer";
import { IRepos } from "../models/Repos.model";
import AppReducer from "../reducers/App.reducer";
import MainReducer from "../reducers/Main.reducer";

export const initialState = {
  app: {
    isLoading: false,
    mainIsLoaded: false,
  },
  main: {
    currPage: 1,
    searchString: "",
    maxCountRepos: 0,
  },
  listRepos: new Array<IRepos>(),
};

export type IInitialState = typeof initialState;
export type IAppInitialState = typeof initialState.app;
export type IMainInitialState = typeof initialState.main;
export type IListReposInitialState = typeof initialState.listRepos;

const reducers = combineReducers({
  app: AppReducer,
  main: MainReducer,
  listRepos: ListReposReducer,
});

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
