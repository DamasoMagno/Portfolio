import { INetwork } from "./INetwork";

export interface IAuthor {
  id: string;
  photo: {
    url: string;
  }
  name: string;
  area: string;
  curriculum: {
    url: string;
  };
  socialNetworks: INetwork[];
  languages: {
    id: string;
    name: string;
  }[];
  courses: {
    id: string;
    name: string;
    startedAt: string;
    finishedAt: string;
  }[];
  experiencies: {
    id: string;
    name: string;
    startedAt: string;
    finishedAt: string;
  }[];
}

