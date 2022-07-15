import * as React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Box, Center, Code, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import {
  dehydrate,
  QueryClient,
  UseBaseQueryResult,
  useQuery,
} from 'react-query';
import { fetchEduById } from '../../utils/useFetch';
import { EduProps } from '../../types/zodPublic';

import Loading from '../../components/animation/Loading';
import Head from 'next/head';

const Home: NextPage = () => {
  const router = useRouter();
  const id = router.query.id;

  const { data, isLoading, error }: UseBaseQueryResult<EduProps> = useQuery<
    EduProps,
    Error
  >(['eduById', id], () => fetchEduById(parseInt(id as string)), {
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Text>error</Text>;
  }
  if (isLoading) return <Loading />;
  if (error) return <Box>Error!</Box>;

  return (
    <Center display="flex " flexDirection="column">
      <Head>
        <title>{data?.attributes.title} </title>
        <meta content={data?.attributes.desc} name="description" />
        <meta
          property="og:url"
          content={`https://www.soltanidev.com/edu/${id}`}
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
        pt="10"
        as="p"
      >
        {data?.attributes.content1}
      </Text>
      {data?.attributes.code1 !== null && (
        <Code
          fontWeight="bold"
          py="5"
          my={['3', '10']}
          px="2"
          w={['full', '80vw']}
          overflowX="visible"
          whiteSpace="pre-wrap"
          fontSize={['xs', 'xl']}
          style={{ direction: 'ltr' }}
          bg="gray.800"
          color="white"
        >
          {data?.attributes.code1}
        </Code>
      )}
      <Text
        whiteSpace="break-spaces"
        fontSize={['lg', '2xl']}
        color="#35515E"
        px={['3', '8']}
        py="7"
        as="p"
      >
        {data?.attributes.content2}
      </Text>
      {data?.attributes.code2 !== null && (
        <Code
          fontWeight="bold"
          py="5"
          my={['3', '10']}
          px="2"
          w={['full', '80vw']}
          overflowX="visible"
          whiteSpace="pre-wrap"
          fontSize={['xs', 'xl']}
          style={{ direction: 'ltr' }}
          bg="gray.800"
          color="white"
        >
          {data?.attributes.code2}
        </Code>
      )}
      <Text
        whiteSpace="break-spaces"
        fontSize={['lg', '2xl']}
        color="#35515E"
        px={['3', '8']}
        py="7"
        as="p"
      >
        {data?.attributes.content3}
      </Text>
      {data?.attributes.code3 !== null && data?.attributes.code3 !== '' && (
        <Code
          fontWeight="bold"
          py="5"
          my={['3', '10']}
          px="2"
          w={['full', '80vw']}
          whiteSpace="pre-wrap"
          fontSize={['xs', 'xl']}
          overflowX="visible"
          style={{ direction: 'ltr' }}
          bg="gray.800"
          color="white"
        >
          {data?.attributes.code3}
        </Code>
      )}
      <div>
        {data?.attributes.content4 !== null && (
          <Text
            whiteSpace="break-spaces"
            fontSize={['lg', '2xl']}
            color="#35515E"
            px={['3', '8']}
            py="5"
          >
            {data?.attributes.content4}
          </Text>
        )}
      </div>
      {data?.attributes.code4 !== null && data?.attributes.code4 !== '' && (
        <Code
          fontWeight="bold"
          py="5"
          my={['3', '10']}
          px="2"
          w={['full', '80vw']}
          whiteSpace="pre-wrap"
          overflowX="auto"
          fontSize={['xs', 'xl']}
          style={{ direction: 'ltr' }}
          bg="gray.800"
          color="white"
        >
          {data?.attributes.code4}
        </Code>
      )}
      <div>
        {data?.attributes.content5 !== null ||
          (data?.attributes.content5 !== '' && (
            <Text
              whiteSpace="break-spaces"
              fontSize={['lg', '2xl']}
              color="#35515E"
              px={['3', '8']}
              py="5"
            >
              {data?.attributes.content5}
            </Text>
          ))}
      </div>
      {data?.attributes.code5 !== null && data?.attributes.code5 !== '' && (
        <Code
          fontWeight="bold"
          py="5"
          my={['3', '10']}
          px="2"
          w={['full', '80vw']}
          whiteSpace="pre-wrap"
          overflowX="auto"
          fontSize={['xs', 'xl']}
          style={{ direction: 'ltr' }}
          bg="gray.800"
          color="white"
        >
          {data?.attributes.code5}
        </Code>
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
  await queryClient.prefetchQuery(['eduById', route], () =>
    fetchEduById(route)
  );
  return {
    props: {
      dehydrateState: dehydrate(queryClient),
      revalidate: 10,
    },
  };
};
