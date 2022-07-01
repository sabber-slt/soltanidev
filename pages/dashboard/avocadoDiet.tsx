import { Box, Center, Grid, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { UseBaseQueryResult, useQuery } from 'react-query';
import Loading from '../../components/animation/Loading';
import { useState } from 'react';
import { DietTypeProps } from '../../types/zodDashboard';
import { fetchDietType } from '../../utils/useDashboardFetch';
import Activity from '../../components/dashboard/Activity';

const Home: NextPage = () => {
  const router = useRouter();
  const [show, setShow] = useState(true);
  const { data, isLoading, error }: UseBaseQueryResult<DietTypeProps[]> =
    useQuery<DietTypeProps[], Error>('foods', fetchDietType);
  if (isLoading) return <Loading />;
  if (error) return <Box>Error!</Box>;
  console.log(data);
  return (
    <Box>
      <Center display="flex" flexDirection="column" py="10">
        {show ? (
          <>
            <Text
              px="7"
              fontSize={['xl', '3xl']}
              color="green.800"
              textAlign="center"
              py="10"
            >
              در صورتی که شامل یکی از شرایط زیر می شوید ، لطفا آن گزینه را
              انتخاب نمایید
            </Text>
            <Box
              borderRadius="xl"
              my="8"
              bg="green.800"
              boxShadow="xl"
              _hover={{
                boxShadow: 'none',
                scale: 0.8,
              }}
              w={['40', 'fit-content']}
              h="24"
              overflow="hidden"
            >
              <Center
                borderRadius="xl"
                overflow="hidden"
                h="24"
                bgGradient="linear(to-t,green.500,purple.50, green.500)"
              >
                <Text px="8" py="2" color="green.800" textAlign="center">
                  هیچ کدام را شامل نمی شوم، ادامه میدهم
                </Text>
              </Center>
            </Box>
            <Grid
              templateColumns={['repeat(3, 1fr)', 'repeat(8, 1fr)']}
              gap={[5, 10]}
            >
              {data?.map((item) => (
                <Box
                  key={item.Text}
                  borderRadius="xl"
                  bg="green.800"
                  onClick={() => setShow(false)}
                  boxShadow="xl"
                  _hover={{
                    boxShadow: 'none',
                    scale: 0.8,
                  }}
                  w="24"
                  h="24"
                  overflow="hidden"
                >
                  <Center
                    borderRadius="xl"
                    overflow="hidden"
                    h="24"
                    bgGradient="linear(to-t,green.500,purple.50, green.500)"
                  >
                    <Text px="1" color="green.800" textAlign="center">
                      {item.Text}
                    </Text>
                  </Center>
                </Box>
              ))}
            </Grid>
          </>
        ) : (
          <Activity />
        )}
      </Center>
    </Box>
  );
};

export default Home;
