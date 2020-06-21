import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { downloadReposDataAction } from "../actions/Repos.actions";
import { connect } from "react-redux";
import { IListReposInitialState, IAppInitialState } from "../redux/store";
import { IRepos } from "../models/Repos.model";
import ReposExpanded, { IReposExpanded } from "../models/ReposExpanded.model";

type IReposScreen = {
  app: IAppInitialState;
  listRepos: IListReposInitialState;
  downloadRepos: (reposUrl: string) => void;
};

const ReposScreen = ({ app, listRepos, downloadRepos }: IReposScreen) => {
  let { state }: any = useLocation();
  let history = useHistory();

  const currRepos: IReposExpanded | IRepos | undefined = listRepos.reduce(
    (acc: IRepos | undefined, item: IRepos | IReposExpanded) => {
      return item.reposUrlApi === state.reposId ? item : acc;
    },
    undefined
  );

  useEffect(() => {
    if (state.reposId) {
      downloadRepos(state.reposId);
    }
  }, [downloadRepos, state.reposId]);

  if (!currRepos) {
    history.push("/");
    return <></>;
  }

  if (app.isLoading || !(currRepos instanceof ReposExpanded)) {
    return <h1 className="error">Загрузка!</h1>;
  }

  console.log(state, currRepos);

  return (
    <div className="repos">
      <h2 className="head repos__title">Репозиторий: {currRepos.title}</h2>
      <div className="repos__stars">Количество звезд: {currRepos.numStars}</div>
      <div className="repos__commit">
        Последнний коммит: {currRepos.dateLastCommit.toLocaleDateString()}
      </div>

      <h2 className="head">Пользователь</h2>
      <a href={currRepos.userUrl}>
        <div className="repos__user">
          <img
            className="user__img"
            src={`${currRepos.userAvatar}`}
            alt="icon"
          />
          <div className="user__name">{currRepos.userName}</div>
        </div>
      </a>

      <h2 className="head">Используемые языки</h2>
      <ul className="repos__languages">
        {currRepos.languageList.map((item: string, indx: number) => (
          <li key={indx}>{item}</li>
        ))}
      </ul>

      <h2 className="head">Описание</h2>
      <div className="repos__descr">{currRepos.descr}</div>

      <h2 className="head">Активные контрибьютеры</h2>
      <ul className="repos__contributors">
        {currRepos.contributors.map((item: string, indx: number) => (
          <li key={indx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  app: state.app,
  listRepos: state.listRepos,
});

const mapDispatchToProps = (dispatch: any) => ({
  downloadRepos: (reposUrl: string) =>
    dispatch(downloadReposDataAction(reposUrl)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReposScreen);
