export const API = 'https://soltanidev.hasura.app/v1/graphql';
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
export const fetchProjects = async () => {
  const res = await fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-Role': 'public',
    },
    body: JSON.stringify({
      query: `query MyQuery {
        project(distinct_on: id) {
          code1
          code2
          content1
          content2
          desc
          id
          img
          img1
          img2
          title
        }
      }
      `,
    }),
  });
  const data = await res.json();
  return data?.data?.project;
};
export const fetchProjectsById = async (id: string) => {
  const res = await fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-Role': 'public',
    },
    body: JSON.stringify({
      query: `query MyQuery($id:String) {
        project(where: {id: {_cast: {String: {_eq: $id}}}}) {
          code1
          code2
          content1
          content2
          content3
          desc
          id
          img
          img1
          img2
          img3
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
  return data?.data?.project;
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
