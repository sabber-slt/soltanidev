export const API = 'https://avocado.hasura.app/v1/graphql';
export const HEADERS = {
  'Content-Type': 'application/json',
  'X-Hasura-Role': 'public',
};
export const fetchPublic = async () => {
  const res = await fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-Role': 'public',
    },
    body: JSON.stringify({
      query: `query MyQuery {
          base {
            content
            id
            image
            info
            title
            video
          }
        }`,
    }),
  });
  const data = await res.json();
  return data?.data?.base;
};
export const fetchArticls = async () => {
  const res = await fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-Role': 'public',
    },
    body: JSON.stringify({
      query: `query MyQuery {
        magazine {
          cat
          content
          content2
          id
          img1
          img2
          title
        }
      }
      `,
    }),
  });
  const data = await res.json();
  return data?.data?.magazine;
};
export const fetchArticlsByID = async (id: string) => {
  const res = await fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-Role': 'public',
    },
    body: JSON.stringify({
      query: `query MyQuery($id:String){
        magazine(where: {id: {_cast: {String: {_eq: $id}}}}) {
          cat
          content
          content2
          id
          img1
          img2
          title
        }
      }
      `,
      variables: {
        id,
      },
    }),
  });
  const data = await res.json();
  return data?.data?.magazine;
};

export const fetchFoods = async () => {
  const res = await fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-Role': 'public',
    },
    body: JSON.stringify({
      query: `query MyQuery {
        cook {
          cat
          content
          content2
          id
          img1
          img2
          title
        }
      }
      `,
    }),
  });
  const data = await res.json();
  return data?.data?.cook;
};

export const fetchFoodById = async (id: string) => {
  const res = await fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-Role': 'public',
    },
    body: JSON.stringify({
      query: `query MyQuery($id:String){
        cook(where: {id: {_cast: {String: {_eq: $id}}}}) {
          cat
          content
          content2
          id
          img1
          img2
          title
        }
      }
      `,
      variables: {
        id,
      },
    }),
  });
  const data = await res.json();
  return data?.data?.cook;
};

export const fetchCalories = async () => {
  const res = await fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-Role': 'public',
    },
    body: JSON.stringify({
      query: `query MyQuery {
        calorie(distinct_on: id) {
          amount
          calorie
          cat
          food
          id
        }
      }
      `,
    }),
  });
  const data = await res.json();
  return data?.data?.calorie;
};

export const fetchExersice = async () => {
  const res = await fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-Role': 'public',
    },
    body: JSON.stringify({
      query: `query MyQuery {
        varzesh {
          cat
          content
          content2
          id
          img1
          img2
          title
        }
      }
      `,
    }),
  });
  const data = await res.json();
  return data?.data?.varzesh;
};

export const fetchExerciseById = async (id: string) => {
  const res = await fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-Role': 'public',
    },
    body: JSON.stringify({
      query: `query MyQuery($id:String) {
        varzesh(where: {id: {_cast: {String: {_eq: $id}}}}) {
          cat
          content
          content2
          id
          img1
          img2
          title
        }
      }
      `,
      variables: {
        id,
      },
    }),
  });
  const data = await res.json();
  return data?.data?.varzesh;
};
