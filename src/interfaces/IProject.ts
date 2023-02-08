export interface IProject {
  id: string;
  image: {
    url: string;
  }
  name: string;
  description: string;
  freelancer: boolean;
  languages: {
    id: string;
    name: string;
  }[];
  repository: string;
  address: string;
}