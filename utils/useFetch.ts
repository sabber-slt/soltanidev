export const API = 'https://soltanidev.hasura.app/v1/graphql';
export const DB = process.env.DB_URL;

export const HEADERS = {
  'Content-Type': 'application/json',
  'X-Hasura-Role': 'public',
};
export const fetchPublic = async () => {
  const res = await fetch(`https://sabbersoltani.chabk.ir/api/bases`);
  const data = await res.json();
  return data?.data;
};
export const fetchProjects = async () => {
  const res = await fetch(`https://sabbersoltani.chabk.ir/api/projects`);
  const data = await res.json();
  return data?.data;
};
export const fetchProjectsById = async (id: number) => {
  const res = await fetch(`https://sabbersoltani.chabk.ir/api/projects/${id}`);
  const data = await res.json();
  return data?.data;
};

export const fetchArticles = async () => {
  const res = await fetch(`https://sabbersoltani.chabk.ir/api/articles`);
  const data = await res.json();
  return data?.data;
};

export const fetchArticlesById = async (id: number) => {
  const res = await fetch(`https://sabbersoltani.chabk.ir/api/articles/${id}`);
  const data = await res.json();
  return data?.data;
};

export const fetchEdu = async () => {
  const res = await fetch(`https://sabbersoltani.chabk.ir/api/edus`);
  const data = await res.json();
  return data?.data;
};
export const fetchEduById = async (id: number) => {
  const res = await fetch(`https://sabbersoltani.chabk.ir/api/edus/${id}`);
  const data = await res.json();
  return data?.data;
};

export const fetchAbout = async () => {
  const res = await fetch(`https://sabbersoltani.chabk.ir/api/abouts/1`);
  const data = await res.json();
  return data?.data;
};
