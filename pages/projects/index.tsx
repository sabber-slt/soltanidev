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
import { fetchProjects } from '../../utils/useFetch';
import Footer from '../../components/Footer';
import Loading from '../../components/animation/Loading';

const Home: NextPage = () => {
  const router = useRouter();
  const { data, isLoading, error }: UseBaseQueryResult<ProjectProps[]> =
    useQuery<ProjectProps[], Error>('projects', fetchProjects);
  if (isLoading) return <Loading />;
  if (error) return <Box>Error!</Box>;
  console.log(data);
  return (
    <Center display="flex" flexDirection="column">
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
              h={['20', '40']}
              src="/soltanidev.png"
            />
            <Text
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
              magazine
            </Text>
          </VStack>
          <Image
            alt=""
            w={['72', '50vw']}
            bg="green.500"
            boxShadow="xl"
            borderRadius="12"
            h={['56', '70vh']}
            src="https://res.cloudinary.com/dupfwlkgb/image/upload/v1656405067/pexels-photo-4473622_a4ljw7.jpg"
          />
        </Center>
      </HStack>
      <Center py="10" display="flex" flexDirection="column" mt="5">
        <Text py="10" fontSize={['xl', '3xl']} color="#35515E">
          مجموعه مقالات سلامت و تناسب اندام
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
              <Image alt="" w="96" h="72" src={item.img} />
              <Box position="absolute">
                <Box h="72" bg="rgba(53,81,94,0.4)">
                  <Center h="72">
                    <Text
                      px="5"
                      fontSize="xl"
                      w="96"
                      color="white"
                      textAlign="center"
                    >
                      {item.title}
                    </Text>
                    <Button
                      zIndex={100}
                      position="absolute"
                      colorScheme="white"
                      variant="outline"
                      mt="32"
                      onClick={() => router.push(`/projects/${item.id}`)}
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
      <Footer />
    </Center>
  );
};

export default Home;
export const getStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('article', fetchProjects);
  return {
    props: {
      dehydrateState: dehydrate(queryClient),
      revalidate: 10,
    },
  };
};