import {
  Box,
  Center,
  Flex,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import * as React from 'react';
import {
  dehydrate,
  QueryClient,
  UseBaseQueryResult,
  useQuery,
} from 'react-query';
import Loading from '../components/animation/Loading';
import Footer from '../components/Footer';
import { CalorieeProps } from '../types/zodPublic';
import { fetchCalories } from '../utils/useFetch';

const Home: NextPage = () => {
  const { data, isLoading, error }: UseBaseQueryResult<CalorieeProps[]> =
    useQuery<CalorieeProps[], Error>('calories', fetchCalories);
  if (isLoading) return <Loading />;
  if (error) return <Box>Error!</Box>;

  return (
    <Center display="flex " flexDirection="column">
      <Flex
        py={['0', '10']}
        bg={['white', 'green.800']}
        flexDirection={['column', 'row']}
        w="full"
        justifyContent="space-around"
      >
        <Image
          alt=""
          w={['full', '50vw']}
          h={['96']}
          borderRadius={['0', '15']}
          boxShadow="2xl"
          bg="white"
          src="https://images.pexels.com/photos/5945615/pexels-photo-5945615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Center>
          <Text
            textAlign="center"
            w="full"
            color={['green.800', 'white']}
            fontSize={['xl']}
            py="8"
          >
            جدول کالری مواد غذایی به ترتیب حروف الفبا
          </Text>
        </Center>
      </Flex>
      <TableContainer w={['full']} my="8">
        <Table variant="striped" colorScheme="green">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th textAlign="center">نام خوراکی</Th>
              <Th textAlign="center">واحد</Th>
              <Th textAlign="center">کالری</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((item, index) => (
              <>
                <Tr key={index}>
                  <Td textAlign="center" w="1/3" color="green.800">
                    {item?.food}{' '}
                  </Td>
                  <Td textAlign="center" w="1/3" color="green.800">
                    {item?.amount}{' '}
                  </Td>
                  <Td textAlign="center" w="1/3" color="green.800">
                    {item?.calorie}{' '}
                  </Td>
                </Tr>
              </>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Footer />
    </Center>
  );
};

export default Home;
export const getStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('calories', fetchCalories);
  return {
    props: {
      dehydrateState: dehydrate(queryClient),
      revalidate: 10,
    },
  };
};
