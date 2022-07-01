import { ArrowBackIcon } from '@chakra-ui/icons';
import { Box, Button, HStack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import {
  dehydrate,
  QueryClient,
  UseBaseQueryResult,
  useQuery,
} from 'react-query';
import Article from '../components/base/Article';
import Comments from '../components/base/Comments';
import Intro from '../components/base/Intro';
import LandScreen from '../components/base/LandScreen';
import { Ibase } from '../types/publicInterfaces';
import { fetchPublic } from '../utils/useFetch';
import { useRouter } from 'next/router';
import Foods from '../components/base/Foods';
import Footer from '../components/Footer';
import Loading from '../components/animation/Loading';

const Home: NextPage = () => {
  const router = useRouter();
  const { data, isLoading, error }: UseBaseQueryResult<Ibase[]> = useQuery<
    Ibase[],
    Error
  >('public', fetchPublic);
  if (isLoading) return <Loading />;
  if (error) return <Box>Error!</Box>;
  const item = data?.sort((a, b) => a.id - b.id);

  return (
    <Box overflowX="hidden">
      <LandScreen src={item![0]} />
      <Intro src={item![1]?.info} />
      <HStack
        as={motion.div}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition="0.5s linear "
        justifyContent="space-between"
      >
        <Text color="green.800" fontSize={['xl', '2xl']} mr="7">
          مقالات سلامت
        </Text>
        <Button
          rightIcon={<ArrowBackIcon boxSize="7" />}
          bg="white"
          color="green.800"
          fontSize={['xl', 'xl']}
          pl="7"
          onClick={() => router.push('/article')}
        >
          مشاهده همه
        </Button>
      </HStack>
      <Article src={item!.slice(2, 6)} />
      <Foods txt="آشپزی سالم" page="food" src={item!.slice(11, 15)} />
      <Foods txt="مقالات ورزشی" page="exercise" src={item!.slice(15, 19)} />
      <Comments src={item![6]?.info} />
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
      revalidate: 10,
    },
  };
};
