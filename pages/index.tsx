import { Box, Center } from '@chakra-ui/react';
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
import { IbaseAttributes } from '../types/publicInterfaces';
import { fetchPublic } from '../utils/useFetch';
import Article from '../components/base/Article';
import Loading from '../components/animation/Loading';
import DrawerMenu from '../components/base/DrawerMenu';

const Home: NextPage = () => {
  const { data, isLoading, error }: UseBaseQueryResult<IbaseAttributes[]> =
    useQuery<IbaseAttributes[], Error>('public', fetchPublic);
  if (isLoading) return <Loading />;
  if (error) return <Box>Error!</Box>;

  const item = data?.sort((a, b) => a.attributes.id - b.attributes.id) ?? [];

  return (
    <Box overflowX="hidden">
      <>
        <DrawerMenu />
        <LandScreen src={item?.[0]?.attributes} />
        <Intro src={item?.slice(1, 4)} />

        <Propject src={item?.slice(4, 7)} />
        <Article txt="مقالات عمومی" page="articles" src={item?.slice(7, 11)} />
        <Article txt="آموزش های تخصصی" page="edu" src={item?.slice(11, 15)} />
        <Center w="100%">
          <Comments src={item?.slice(15, 19)} />
        </Center>
      </>
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
