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
import { fetchArticlesById } from '../../utils/useFetch';
import { ArticlesProps } from '../../types/zodPublic';

import Loading from '../../components/animation/Loading';
import Head from 'next/head';

const Home: NextPage = () => {
  const router = useRouter();
  const id = router.query.id;

  const { data, isLoading, error }: UseBaseQueryResult<ArticlesProps> =
    useQuery<ArticlesProps, Error>(['article', id], () =>
      fetchArticlesById(parseInt(id as string))
    );
  if (isLoading) return <Loading />;
  if (error) return <Box>Error!</Box>;

  return (
    <Center display="flex " flexDirection="column">
      <Head>
        <title>{data?.attributes.title} </title>
        <meta content={data?.attributes.desc} name="description" />
        <meta
          property="og:url"
          content={`https://www.soltanidev.com/articles/${id}`}
        />
        <meta property="og:site_name" content="صابر سلطانی" />
        <meta property="og:description" content={data?.attributes.desc} />
        <meta name="twitter:image" content={data?.attributes.media} />
      </Head>
      <Box display="flex" flexDirection={['column', 'row']} w="full">
        <Image
          alt=""
          src={data?.attributes.media}
          w={['100vw', '80vw']}
          h={['96', '70vh']}
        />{' '}
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
            {data?.attributes.title}
          </Text>
          <Text
            fontSize={['md', '2xl']}
            textAlign="center"
            px="5"
            color="#D81B60"
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
        py="8"
        mt="5"
        as="p"
      >
        {data?.attributes.content1}
      </Text>
      <Box bg="#D81B60" my="5" px={['7', '20']} py={['7', '20']}>
        <Image
          alt=""
          src={data?.attributes.media1}
          w={['80', '50vw']}
          h={['full', '70vh']}
        />
      </Box>

      <Text
        whiteSpace="pre-line"
        fontSize={['lg', '2xl']}
        color="#35515E"
        px={['3', '8']}
        my="7"
        w="full"
        as="p"
      >
        {data?.attributes.content2}
      </Text>
      {data?.attributes?.media2 !== null && (
        <Box bg="#D81B60" my="5" px={['7', '20']} py={['7', '20']}>
          <Image
            alt={data?.attributes.title}
            src={data?.attributes?.media2}
            w={['80', '50vw']}
            h={['full', '70vh']}
          />
        </Box>
      )}
      {data?.attributes.content3 !== null && (
        <Text
          whiteSpace="pre-line"
          fontSize={['lg', '2xl']}
          color="#35515E"
          px={['3', '8']}
          py="10"
        >
          {data?.attributes.content3 || ''}
        </Text>
      )}
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
  const route = parseInt(params?.id as string);
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['article', route], () =>
    fetchArticlesById(route)
  );
  return {
    props: {
      dehydrateState: dehydrate(queryClient),
      revalidate: 10,
    },
  };
};
