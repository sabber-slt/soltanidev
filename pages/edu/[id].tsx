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
import Seo from '../../components/Seo';

const Home: NextPage = () => {
  const router = useRouter();
  const id = router.query.id;

  const { data, isLoading, error }: UseBaseQueryResult<EduProps[]> = useQuery<
    EduProps[],
    Error
  >(['eduById', id], () => fetchEduById(`${id}`));
  if (isLoading) return <Loading />;
  if (error) return <Box>Error!</Box>;

  return (
    <Center display="flex " flexDirection="column">
      <Seo
        title={`${data?.[0].title}`}
        desc={`${data?.[0].des1}`}
        img1={`${data?.[0].img}`}
        img2="https://res.cloudinary.com/dupfwlkgb/image/upload/v1656669395/soltanidev_s0vc6l.png"
        url={`/edu/${data?.[0].id}`}
      />
      <Box display="flex" flexDirection={['column', 'row']} w="full">
        <Image
          alt=""
          src={data?.[0].img}
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
          >
            {data?.[0].title}
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
        {data?.[0].des1}
      </Text>
      {data?.[0].cod1 !== null && (
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
          {data?.[0].cod1}
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
        {data?.[0].des2}
      </Text>
      {data?.[0].cod2 !== null && (
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
          {data?.[0].cod2}
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
        {data?.[0].des3}
      </Text>
      {data?.[0].cod3 !== null && (
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
          {data?.[0].cod3}
        </Code>
      )}
      <div>
        {data?.[0].des4 !== null && (
          <Text
            whiteSpace="break-spaces"
            fontSize={['lg', '2xl']}
            color="#35515E"
            px={['3', '8']}
            py="5"
          >
            {data?.[0].des4}
          </Text>
        )}
      </div>
      {data?.[0].cod4 !== null && (
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
          {data?.[0].cod4}
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
  const route = params?.id;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['eduById', route], () =>
    fetchEduById(`${route}`)
  );
  return {
    props: {
      dehydrateState: dehydrate(queryClient),
      revalidate: 10,
    },
  };
};
