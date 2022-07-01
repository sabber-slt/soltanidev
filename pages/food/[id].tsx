import * as React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Box, Center, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import {
  dehydrate,
  QueryClient,
  UseBaseQueryResult,
  useQuery,
} from 'react-query';
import { fetchFoodById } from '../../utils/useFetch';
import { ArticleProps } from '../../types/zodPublic';
import Footer from '../../components/Footer';
import Loading from '../../components/animation/Loading';

const Home: NextPage = () => {
  const router = useRouter();
  const id = router.query.id;

  const { data, isLoading, error }: UseBaseQueryResult<ArticleProps[]> =
    useQuery<ArticleProps[], Error>(['foodsleById', id], () =>
      fetchFoodById(`${id}`)
    );
  if (isLoading) return <Loading />;
  if (error) return <Box>Error!</Box>;

  return (
    <Center display="flex " flexDirection="column">
      <Box
        display="flex"
        flexDirection={['column', 'row']}
        w="full"
        bg="green.800"
      >
        <Image src={data![0].img1} w={['100vw', '60vw']} h="96" />
        <Center
          display="flex "
          flexDirection="column"
          h={['28', '96']}
          w="full"
        >
          <Text
            fontSize={['xl', '3xl']}
            textAlign="center"
            px="5"
            color="white"
          >
            {data![0].title}
          </Text>
          <Text
            fontSize={['md', '2xl']}
            textAlign="center"
            px="5"
            color="white"
          >
            Avocado
          </Text>
        </Center>
      </Box>
      <Text
        whiteSpace="pre-line"
        fontSize={['lg', '2xl']}
        color="green.900"
        px={['3', '8']}
        pt="10"
      >
        {data![0].content}
      </Text>
      <Image my="8" src={data![0].img2} w={['80', '50vw']} h={['80', '70vh']} />
      <Text
        whiteSpace="pre-line"
        fontSize={['lg', '2xl']}
        color="green.900"
        px={['3', '8']}
        py="10"
      >
        {data![0].content2}
      </Text>
      <Footer />
    </Center>
  );
};

export default Home;
export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const route = params?.id;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['foodsleById', route], () =>
    fetchFoodById(`${route}`)
  );
  return {
    props: {
      dehydrateState: dehydrate(queryClient),
      revalidate: 10,
    },
  };
};
