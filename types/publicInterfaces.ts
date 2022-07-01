export interface Iinfo {
  content: string;
  id: number;
  img: string;
  title: string;
  img1: string | undefined;
  img2?: string;
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
