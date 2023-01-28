export interface IProject {
  link: string;
  name: string;
  description: string;
  freelancer: boolean;
  languages: {
    name: string;
  }[]
}