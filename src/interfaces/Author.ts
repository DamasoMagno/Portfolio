export interface IAuthor {
  id: string;
  photo: {
    url: string;
  }
  name: string;
  area: string;
  languages: Array<{
    name: string;
  }>
  courses: Array<{
    id: string;
    name: string;
  }>
  experiencies: Array<{
    id: string;
    name: string;
  }>
}