import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import {
  dehydrate,
  QueryClient,
  UseBaseQueryResult,
  useQuery,
} from 'react-query';
import { useRouter } from 'next/router';
import { ProjectProps } from '../../types/zodPublic';
import { fetchArticles } from '../../utils/useFetch';
import Loading from '../../components/animation/Loading';
import Seo from '../../components/Seo';

const Home: NextPage = () => {
  const router = useRouter();
  const { data, isLoading, error }: UseBaseQueryResult<ProjectProps[]> =
    useQuery<ProjectProps[], Error>('articles', fetchArticles);
  if (isLoading) return <Loading />;
  if (error) return <Box>Error!</Box>;
  console.log(data);
  return (
    <Center display="flex" flexDirection="column">
      <Seo
        title="مقالات تخصصی برنامه نویسی"
        desc="انواع مقالات تخصصی برنامه نویسی مخصوص برنامه نویسان جاوا اسکریپت "
        img1="https://res.cloudinary.com/dupfwlkgb/image/upload/v1656669395/soltanidev_s0vc6l.png"
        img2="https://res.cloudinary.com/dupfwlkgb/image/upload/v1656913721/pexels-christina-morillo-1181359_zado2e.jpg"
        url="/articles"
      />
      <HStack py="5" bg="#35515E" w="full">
        <Center w="full">
          <VStack
            as={motion.div}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition="0.5s linear "
            pl={['5', '0']}
          >
            <Image
              mr="5"
              alt=""
              w={['16', '32']}
              ml={['0', '40']}
              h={['16', '40']}
              objectFit="cover"
              src="/soltanidev.png"
            />
            <Text
              as="h1"
              fontSize={['sm', '4xl']}
              pl={['0', '40']}
              pr="5"
              color="gray.50"
              textAlign="center"
            >
              SoltaniDev
            </Text>
            <Text
              fontSize={['sm', 'xl']}
              pl={['0', '40']}
              pr="5"
              color="gray.50"
              textAlign="center"
            >
              Projects
            </Text>
          </VStack>
          <Image
            alt=""
            w={['72', '50vw']}
            bg="#35515E"
            boxShadow="xl"
            borderRadius="12"
            objectFit="cover"
            h={['56', '70vh']}
            src="https://res.cloudinary.com/dupfwlkgb/image/upload/v1656855492/pexels-ketut-subiyanto-4559592_yzchwi.jpg"
          />
        </Center>
      </HStack>
      <Center py="10" display="flex" flexDirection="column" mt="5">
        <Text as="h1" py="10" fontSize={['xl', '3xl']} color="#35515E">
          مجموعه مقالات تخصصی برنامه نویسی
        </Text>
        <Grid
          templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
          gap={[5, 10]}
        >
          {data?.map((item) => (
            <Flex
              as={motion.div}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition="0.5s linear "
              key={item.id}
              boxShadow="xl"
            >
              <Image
                alt=""
                w="80"
                h="72"
                objectFit="cover"
                objectPosition="center"
                src={item.img1}
              />
              <Box position="absolute">
                <Box h="72" bg="rgba(53,81,94,0.5)">
                  <Center h="72" display="flex" flexDirection="column">
                    <Text
                      px="5"
                      fontSize="2xl"
                      w="80"
                      color="white"
                      textAlign="center"
                      as="h1"
                    >
                      {item.title}
                    </Text>
                    <Button
                      zIndex={100}
                      colorScheme="white"
                      variant="outline"
                      my="5"
                      onClick={() => router.push(`/articles/${item.id}`)}
                      color="white"
                    >
                      مشاهده مقاله
                    </Button>
                  </Center>
                </Box>
              </Box>
            </Flex>
          ))}
        </Grid>
      </Center>
    </Center>
  );
};

export default Home;
export const getStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('articles', fetchArticles);
  return {
    props: {
      dehydrateState: dehydrate(queryClient),
      revalidate: 10,
    },
  };
};
