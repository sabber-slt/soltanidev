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
import { fetchProjectsById } from '../../utils/useFetch';
import { ProjectProps } from '../../types/zodPublic';

import Loading from '../../components/animation/Loading';
import Seo from '../../components/Seo';

const Home: NextPage = () => {
  const router = useRouter();
  const id = router.query.id;

  const { data, isLoading, error }: UseBaseQueryResult<ProjectProps[]> =
    useQuery<ProjectProps[], Error>(['project', id], () =>
      fetchProjectsById(`${id}`)
    );
  if (isLoading) return <Loading />;
  if (error) return <Box>Error!</Box>;

  return (
    <Center display="flex " flexDirection="column">
      <Seo
        title={`${data?.[0].title}`}
        desc={`${data?.[0].content1}`}
        img1={`${data?.[0].img}`}
        img2={`${data?.[0].img1}`}
        url={`/projects/${data?.[0].id}`}
      />
      <Box display="flex" flexDirection={['column', 'row']} w="full">
        <Image
          alt=""
          src={data?.[0].img}
          w={['100vw', '80vw']}
          h={['96', '70vh']}
        />
        <Center
          display="flex "
          flexDirection="column"
          h={['28', '70vh']}
          w="full"
          bg={['white', '#D81B60']}
        >
          <Text
            fontSize={['xl', '3xl']}
            textAlign="center"
            px="5"
            color={['#D81B60', 'white']}
            as="h1"
          >
            {data?.[0].title}
          </Text>
          <Text
            fontSize={['md', '2xl']}
            textAlign="center"
            px="5"
            color="white"
          >
            SoltaniDev
          </Text>
        </Center>
      </Box>
      <Text
        whiteSpace="break-spaces"
        fontSize={['lg', '2xl']}
        color="#35515E"
        px={['3', '8']}
        pt="10"
      >
        {data?.[0].content1}
      </Text>
      <Box my="8" bg="#D81B60" px="20">
        <Image
          alt=""
          my="8"
          src={data?.[0].img1}
          w={['80', '64']}
          h={['full', '70vh']}
        />
      </Box>

      <Text
        whiteSpace="pre-line"
        fontSize={['lg', '2xl']}
        color="#35515E"
        px={['3', '8']}
        pb="10"
      >
        {data?.[0].content2}
      </Text>
      <Box bg="#D81B60" px="20">
        <Image
          alt=""
          my="8"
          src={data?.[0].img2}
          w={['80', '64']}
          h={['full', '70vh']}
        />
      </Box>
      <Text
        whiteSpace="pre-line"
        fontSize={['lg', '2xl']}
        color="#35515E"
        px={['3', '8']}
        py="8"
      >
        {data?.[0]?.content3 || ''}
      </Text>
      <Box bg="#D81B60" px="20" my="5">
        <Image
          alt=""
          my="8"
          src={data?.[0].img3}
          w={['80', '64']}
          h={['full', '70vh']}
        />
      </Box>
    </Center>
  );
};

export default Home;
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const route = params?.id;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['project', route], () =>
    fetchProjectsById(`${route}`)
  );
  return {
    props: {
      dehydrateState: dehydrate(queryClient),
      revalidate: 10,
    },
  };
};
