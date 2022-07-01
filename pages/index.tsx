import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import {
  dehydrate,
  QueryClient,
  UseBaseQueryResult,
  useQuery,
} from 'react-query';
import Propject from '../components/base/Project';
import Comments from '../components/base/Comments';
import Intro from '../components/base/Intro';
import LandScreen from '../components/base/LandScreen';
import { Ibase } from '../types/publicInterfaces';
import { fetchPublic } from '../utils/useFetch';
import Article from '../components/base/Article';
import Footer from '../components/Footer';
import Loading from '../components/animation/Loading';

const Home: NextPage = () => {
  const { data, isLoading, error }: UseBaseQueryResult<Ibase[]> = useQuery<
    Ibase[],
    Error
  >('public', fetchPublic);
  if (isLoading) return <Loading />;
  if (error) return <Box>Error!</Box>;
  const item = data?.sort((a, b) => a.id - b.id) ?? [];

  return (
    <Box overflowX="hidden">
      <LandScreen src={item?.[0]} />
      <Intro src={item?.[1]?.info} />

      <Propject src={item?.slice(2, 5)} />
      <Article
        txt="مقالات یرنامه نویسی"
        page="food"
        src={item?.slice(11, 15)}
      />
      <Article txt="مقالات عمومی" page="exercise" src={item?.slice(15, 19)} />
      <Comments src={item?.[6]?.info} />
      <Footer />
    </Box>
  );
};

export default Home;
export const getStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('public', fetchPublic);
  return {
    props: {
      dehydrateState: dehydrate(queryClient),
      revalidate: 30,
    },
  };
};
