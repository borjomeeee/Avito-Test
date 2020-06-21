import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { downloadListReposAction } from "../actions/ListRepos.actions";
import {
  IListReposInitialState,
  IAppInitialState,
  IMainInitialState,
} from "../redux/store";
import { IRepos } from "../models/Repos.model";
import { Link } from "react-router-dom";
import {
  changeSearchStringAction,
  changeCurrPageAction,
  saveMainToLocalAction,
} from "../actions/Main.actions";
import PaginatorComponent from "../components/Paginator.component";

type IListReposScreen = {
  app: IAppInitialState;
  main: IMainInitialState;
  listRepos: IListReposInitialState;
  downloadListRepos: (numPage: number, startWith: string) => void;
  changeSearchString: (searchString: string) => void;
  changeCurrPage: (currPage: number) => void;
  saveMain: (main: IMainInitialState) => void;
};

const ListReposScreen = ({
  app,
  main,
  listRepos,
  downloadListRepos,
  changeSearchString,
  changeCurrPage,
  saveMain,
}: IListReposScreen) => {
  const [searchStr, setSearchStr] = useState(main.searchString);
  useEffect(() => {
    downloadListRepos(main.currPage, main.searchString);
  }, [main.currPage, main.searchString, downloadListRepos]);

  const handleChangeSearchString = () => {
    changeSearchString(searchStr);
    saveMain({ ...main, searchString: searchStr });
  };

  const handleSetCurrPage = (value: number) => {
    changeCurrPage(value);
    saveMain({ ...main, currPage: value });
  };

  return (
    <>
      <div className="search-label">Поиск репозиториев</div>
      <div className="top__line">
        <input
          className="search"
          type="text"
          onChange={(event: any) => setSearchStr(event.target.value)}
          value={searchStr}
        />

        <button onClick={handleChangeSearchString} className="submit">
          Найти
        </button>
      </div>

      <PaginatorComponent
        selectedPage={main.currPage}
        itemsCount={main.maxCountRepos}
        onSelect={handleSetCurrPage}
      />
      {!app.isLoading ? listRepos.map((repos: IRepos) => (
        <div className="repos__container" key={repos.id}>
          <Link
            className="repos__title"
            to={{
              pathname: `/repos/${repos.id}`,
              state: { reposId: repos.reposUrlApi },
            }}
          >
            <h1>{repos.title}</h1>
          </Link>
          <div className="repos__start">Stars: {repos.numStars}</div>
          <div className="repos__commit">
            Last commit: {repos.dateLastCommit.toLocaleDateString()}
          </div>
          <div className="repos__ref">
            <a href={repos.reposUrlHtml}>{repos.reposUrlHtml}</a>
          </div>
        </div>
      )) : <h1 className="error">Загрузка!</h1>}
    </>
  );
};

const mapStateToProps = (state: any) => ({
  app: state.app,
  main: state.main,
  listRepos: state.listRepos,
});

const mapDispatchToProps = (dispatch: any) => ({
  downloadListRepos: (numPage: number, startWith: string) =>
    dispatch(downloadListReposAction(numPage, startWith)),
  changeSearchString: (searchString: string) =>
    dispatch(changeSearchStringAction(searchString)),
  changeCurrPage: (currPage: number) =>
    dispatch(changeCurrPageAction(currPage)),
  saveMain: (main: IMainInitialState) => dispatch(saveMainToLocalAction(main)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListReposScreen);
