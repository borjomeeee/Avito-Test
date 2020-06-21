import { v4 as uuidv4 } from "uuid";

export interface IRepos {
  id: string;
  title: string;
  numStars: number;
  dateLastCommit: Date;
  reposUrlHtml: string;
  reposUrlApi: string;
}

export default class Repos implements IRepos {
  id: string;
  title: string;
  numStars: number;
  dateLastCommit: Date;
  reposUrlHtml: string;
  reposUrlApi: string;

  static fromData(
    title: string,
    numStars: number,
    dateLastCommit: Date,
    reposUrlHtml: string,
    reposUrlApi: string
  ) {
    return new this({
      id: uuidv4(),
      title,
      numStars,
      dateLastCommit,
      reposUrlHtml,
      reposUrlApi,
    });
  }

  constructor(repos: IRepos) {
    this.id = repos.id;
    this.title = repos.title;
    this.numStars = repos.numStars;
    this.dateLastCommit = repos.dateLastCommit;
    this.reposUrlHtml = repos.reposUrlHtml;
    this.reposUrlApi = repos.reposUrlApi;
  }
}
