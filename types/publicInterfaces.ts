export interface Iinfo {
  content: string;
  id: number;
  img: string;
  title: string;
  slug: string | undefined;
}

export interface Ibase {
  content: string;
  title: string;
  id: number;
  image: string;
  info: Iinfo[];

  video?: string | undefined;

  page?: string | undefined;
}
export interface IbaseAttributes {
  attributes: Iinfo;
}
