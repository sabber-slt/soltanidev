import { Box, Center, Image, Text } from '@chakra-ui/react';

import type { NextPage } from 'next';
import {
  dehydrate,
  QueryClient,
  UseBaseQueryResult,
  useQuery,
} from 'react-query';
import Loading from '../components/animation/Loading';
import Seo from '../components/Seo';

import { AboutProps } from '../types/zodPublic';
import { fetchAbout } from '../utils/useFetch';

const Home: NextPage = () => {
  const { data, isLoading, error }: UseBaseQueryResult<AboutProps[]> = useQuery<
    AboutProps[],
    Error
  >('edu', fetchAbout);
  if (isLoading) return <Loading />;
  if (error) return <Box>Error!</Box>;
  console.log(data);
  return (
    <Box color="#35515E">
      <Seo
        title="درباره صابر سلطانی بیشتر بدانید"
        desc="صابر سلطانی برنامه نویس ارشد جاوااسکریپت با انجام چندیدن پروژه بین المللی تئانسته اسم خود را در میان برنامه نویسان جهانی بگنجاند"
        img1="https://res.cloudinary.com/dupfwlkgb/image/upload/v1656669395/soltanidev_s0vc6l.png"
        img2="https://res.cloudinary.com/dupfwlkgb/image/upload/v1656913721/pexels-christina-morillo-1181359_zado2e.jpg"
        url="/about"
      />
      <Box p="7">
        <Center py="10" display="flex" flexDirection="column">
          <Image
            borderRadius={['0', '20']}
            boxShadow="xl"
            alt="درباره صابر سلطانی بیشتر بدانید"
            w={['full', '50vw']}
            h={['96', '70vh']}
            src={data?.[0].img}
          />
          <Image
            alt="صابر سلطانی"
            w={['36', '50vw']}
            h={['40', '70vh']}
            src="https://res.cloudinary.com/dupfwlkgb/image/upload/v1648663004/3_txhflv.png"
          />
        </Center>
        <Text fontSize={['xl', '2xl']}>{data?.[0].title} </Text>
        <Text py="5" whiteSpace="pre-line" fontSize={['lg', '2xl']}>
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
