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
import { EduProps } from '../../types/zodPublic';
import { fetchEdu } from '../../utils/useFetch';
import Loading from '../../components/animation/Loading';
import Seo from '../../components/Seo';

const Home: NextPage = () => {
  const router = useRouter();
  const { data, isLoading, error }: UseBaseQueryResult<EduProps[]> = useQuery<
    EduProps[],
    Error
  >('edu', fetchEdu);
  if (isLoading) return <Loading />;
  if (error) return <Box>Error!</Box>;

  return (
    <Center display="flex" flexDirection="column">
      <Seo
        title="برنامه نویسی نوین را با صابر سلطانی یاد بگیر"
        desc="آموزش تخصصی اپلیکیشن های react js با صابر سلطانی"
        img1="https://res.cloudinary.com/dupfwlkgb/image/upload/v1656669395/soltanidev_s0vc6l.png"
        img2="https://res.cloudinary.com/dupfwlkgb/image/upload/v1656913721/pexels-christina-morillo-1181359_zado2e.jpg"
        url="/edu"
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
              alt="soltaniDev"
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
              Education
            </Text>
          </VStack>
          <Image
            alt="soltaniDev Projects"
            w={['72', '50vw']}
            bg="#35515E"
            boxShadow="xl"
            borderRadius="12"
            objectFit="cover"
            h={['56', '70vh']}
            src="https://res.cloudinary.com/dupfwlkgb/image/upload/v1656913721/pexels-christina-morillo-1181359_zado2e.jpg"
          />
        </Center>
      </HStack>
      <Center py="10" display="flex" flexDirection="column" mt="5">
        <Text as="h1" py="10" fontSize={['xl', '3xl']} color="#35515E">
          آموزش های تخصصی برنامه نویسان Node Js
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
                alt={item.attributes.title}
                w="80"
                h="72"
                objectFit="cover"
                objectPosition="center"
                src={item.attributes.media}
              />
              <Box position="absolute">
                <Box h="72" bg="rgba(53,81,94,0.5)">
                  <Center h="72" display="flex" flexDirection="column">
                    <Text
                      px="10"
                      fontSize="2xl"
                      w="80"
                      color="white"
                      textAlign="center"
                      as="h1"
                    >
                      {item.attributes.title}
                    </Text>
                    <Button
                      zIndex={100}
                      colorScheme="white"
                      variant="outline"
                      my="5"
                      onClick={() => router.push(`/edu/${item.id}`)}
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
  await queryClient.prefetchQuery('edu', fetchEdu);
  return {
    props: {
      dehydrateState: dehydrate(queryClient),
      revalidate: 10,
    },
  };
};
