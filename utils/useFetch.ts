export const API = `${process.env.DATABASE_URL}`;

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
export const fetchProjectsById = async (id: number) => {
  const res = await fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-Role': 'public',
    },
    body: JSON.stringify({
      query: `query MyQuery($id:Int) {
        project(where: {id: {_eq: $id}})  {
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

export const fetchArticles = async () => {
  const res = await fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-Role': 'public',
    },
    body: JSON.stringify({
      query: `query MyQuery {
        articles {
          title
          id
          img1          
        }
      }
      `,
    }),
  });
  const data = await res.json();
  return data?.data?.articles;
};

export const fetchArticlesById = async (id: number) => {
  const res = await fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-Role': 'public',
    },
    body: JSON.stringify({
      query: `query MyQuery($id:Int){
        articles(where: {id: {_eq: $id}})  {
          title
          id
          img1 
          img2
          img3
          content1
          content2
          content3
        }
      }
      `,
      variables: {
        id,
      },
    }),
  });
  const data = await res.json();
  return data?.data?.articles;
};

export const fetchEdu = async () => {
  const res = await fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-Role': 'public',
    },
    body: JSON.stringify({
      query: `query MyQuery {
        edu(distinct_on: id) {
          title,
          img,
          id
        }
      }
      `,
    }),
  });
  const data = await res.json();
  return data?.data?.edu;
};
export const fetchEduById = async (id: number) => {
  const res = await fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-Role': 'public',
    },
    body: JSON.stringify({
      query: `query MyQuery($id: Int) {
        edu(where: {id: {_eq: $id}}) {
          title
          img
          id
          des1
          cod1
          des2
          cod2
          des3
          cod3
          des4
          cod4
        }
      }
      `,
      variables: {
        id,
      },
    }),
  });
  const data = await res.json();
  return data?.data?.edu;
};

export const fetchAbout = async () => {
  const res = await fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-Role': 'public',
    },
    body: JSON.stringify({
      query: `query MyQuery($id:String) {
        about {
          title
          content
          img
          img1
          img2
        
        }
      }
      `,
    }),
  });
  const data = await res.json();
  return data?.data?.about;
};
