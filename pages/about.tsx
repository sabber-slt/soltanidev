import { Box, Center, Image, Text } from '@chakra-ui/react';

import type { NextPage } from 'next';
import {
  dehydrate,
  QueryClient,
  UseBaseQueryResult,
  useQuery,
} from 'react-query';
import Loading from '../components/animation/Loading';

import { AboutProps } from '../types/zodPublic';
import { fetchAbout } from '../utils/useFetch';
import { NextSeo } from 'next-seo';

const Home: NextPage = () => {
  const { data, isLoading, error }: UseBaseQueryResult<AboutProps[]> = useQuery<
    AboutProps[],
    Error
  >('edu', fetchAbout);
  if (isLoading) return <Loading />;
  if (error) return <Box>Error!</Box>;

  return (
    <Box color="#35515E">
      <NextSeo
        title="درباره صابر سلطانی بیشتر بدانید"
        description="صابر سلطانی برنامه نویس ارشد جاوااسکریپت با انجام چندیدن پروژه بین المللی تئانسته اسم خود را در میان برنامه نویسان جهانی بگنجاند"
        canonical="https://www.soltanidev.com/about"
      />
      <Box p="7">
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
            bg={['#D81B60', '#D81B60']}
          >
            <Image
              alt="صابر سلطانی"
              w={['36', '40']}
              h={['40', '56']}
              src="https://res.cloudinary.com/dupfwlkgb/image/upload/v1648663004/3_txhflv.png"
            />
            <Text
              fontSize={['xl', '3xl']}
              textAlign="center"
              px="5"
              color={['#D81B60', 'white']}
            >
              {data?.[0].title}
            </Text>
          </Center>
        </Box>
        <Text my={['8']} py="5" whiteSpace="pre-line" fontSize={['lg', '2xl']}>
          {data?.[0].content}
        </Text>
      </Box>
    </Box>
  );
};

export default Home;

export const getStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('about', fetchAbout);
  return {
    props: {
      dehydrateState: dehydrate(queryClient),
      revalidate: 10,
    },
  };
};
