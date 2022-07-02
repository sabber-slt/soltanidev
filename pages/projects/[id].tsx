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
import Footer from '../../components/Footer';
import Loading from '../../components/animation/Loading';

const Home: NextPage = () => {
  const router = useRouter();
  const id = router.query.id;

  const { data, isLoading, error }: UseBaseQueryResult<ProjectProps[]> =
    useQuery<ProjectProps[], Error>(['articleById', id], () =>
      fetchProjectsById(`${id}`)
    );
  if (isLoading) return <Loading />;
  if (error) return <Box>Error!</Box>;
  console.log(data);
  return (
    <Center display="flex " flexDirection="column">
      <Box
        display="flex"
        flexDirection={['column', 'row']}
        w="full"
        bg="#35515E"
      >
        <Image alt="" src={data?.[0].img} w={['100vw', '60vw']} h="96" />
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

      {/* <Code
          bg="gray.700"
          color="white"
          fontWeight="bold"
          p="4"
          borderRadius="lg"
          style={{ direction: 'ltr' }}
          whiteSpace="pre-line"
        >
          {data![0]?.code1}{' '}
        </Code> */}

      <Image
        alt=""
        my="8"
        src={data?.[0].img1}
        w={['80', '50vw']}
        h={['80', '70vh']}
      />

      <Text
        whiteSpace="pre-line"
        fontSize={['lg', '2xl']}
        color="#35515E"
        px={['3', '8']}
        py="10"
      >
        {data?.[0].content2}
      </Text>
      <Image
        alt=""
        my="8"
        src={data?.[0]?.img2 || ''}
        w={['80', '50vw']}
        h={['80', '70vh']}
      />
      <Text
        whiteSpace="pre-line"
        fontSize={['lg', '2xl']}
        color="#35515E"
        px={['3', '8']}
        py="10"
      >
        {data?.[0]?.content3 || ''}
      </Text>
      <Image
        alt=""
        my="8"
        src={data?.[0]?.img3 || ''}
        w={['80', '50vw']}
        h={['80', '70vh']}
      />

      <Footer />
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
  await queryClient.prefetchQuery(['articleById', route], () =>
    fetchProjectsById(`${route}`)
  );
  return {
    props: {
      dehydrateState: dehydrate(queryClient),
      revalidate: 10,
    },
  };
};
