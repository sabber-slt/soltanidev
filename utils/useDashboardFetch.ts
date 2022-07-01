import { API } from './useFetch';

export const fetchDietType = async () => {
  const res = await fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-Role': 'public',
    },
    body: JSON.stringify({
      query: `query MyQuery {
        diettype {
          Text
          Value
        }
      }
      
      `,
    }),
  });
  const data = await res.json();
  return data?.data?.diettype;
};
export const fetchBreakfast = async () => {
  const res = await fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-Role': 'public',
    },
    body: JSON.stringify({
      query: `query MyQuery {
        sobhane(where: {}) {
          br
        }
      }
      
      `,
    }),
  });
  const data = await res.json();
  return data?.data?.sobhane[0]?.br;
};
