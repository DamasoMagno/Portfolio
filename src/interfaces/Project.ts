export interface IProject {
  link: string;
  id: string;
  name: string;
  description: string;
  freelancer: boolean;
  languages: {
    name: string;
  }[]
}