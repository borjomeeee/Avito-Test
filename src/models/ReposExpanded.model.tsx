import { v4 as uuidv4 } from "uuid";
import { IRepos } from "./Repos.model";

export interface IReposExpanded extends IRepos {
  descr: string;

  userUrl: string;
  userName: string;
  userAvatar: string;

  languageList: string[];
  contributors: string[];
}

export default class ReposExpanded implements IReposExpanded {
  id: string;
  title: string;
  descr: string;
  numStars: number;
  dateLastCommit: Date;

  reposUrlHtml: string;
  reposUrlApi: string;

  userUrl: string;
  userName: string;
  userAvatar: string;

  languageList: string[];
  contributors: string[];

  static fromData(
    title: string,
    descr: string,
    numStars: number,
    dateLastCommit: Date,
    reposUrlHtml: string,
    reposUrlApi: string,
    userUrl: string,
    userName: string,
    userAvatar: string,
    languageList: string[],
    contributors: string[]
  ) {
    return new this({
      id: uuidv4(),
      title,
      descr,
      numStars,
      dateLastCommit,
      reposUrlHtml,
      reposUrlApi,
      userUrl,
      userName,
      userAvatar,
      languageList,
      contributors,
    });
  }

  constructor(reposExp: IReposExpanded) {
    this.id = reposExp.id;
    this.title = reposExp.title;
    this.descr = reposExp.descr;
    this.numStars = reposExp.numStars;
    this.dateLastCommit = reposExp.dateLastCommit;

    this.reposUrlHtml = reposExp.reposUrlHtml;
    this.reposUrlApi = reposExp.reposUrlApi;
    this.userUrl = reposExp.userUrl;
    this.userName = reposExp.userName;
    this.userAvatar = reposExp.userAvatar;
    this.languageList = reposExp.languageList;
    this.contributors = reposExp.contributors;
  }
}
