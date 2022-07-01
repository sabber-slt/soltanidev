import { Box, Center, Text, Grid } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { UseBaseQueryResult, useQuery } from 'react-query';
import Loading from '../../components/animation/Loading';
import DietsType from '../../components/dashboard/DietsType';
import Header from '../../components/dashboard/Header';
import { BreakfastType } from '../../types/zodDashboard';
import useCalorie from '../../utils/store/useCalorie';
import { fetchBreakfast } from '../../utils/useDashboardFetch';

const Home: NextPage = () => {
  const { calorie } = useCalorie();
  const { data, isLoading, error }: UseBaseQueryResult<BreakfastType[]> =
    useQuery<BreakfastType[], Error>('calcute', fetchBreakfast);
  if (isLoading) return <Loading />;
  if (error) return <Box>Error!</Box>;
  console.log(data);
  const b1 = data && data[Math.floor(Math.random() * data!.length)];
  const b2 = data && data[Math.floor(Math.random() * data!.length)];
  return (
    <Box>
      <Center w={['96', '80vw']} h={['full', 'full']}>
        <Grid
          templateColumns={['repeat(4, 1fr)', 'repeat(4, 1fr)']}
          gap={[3, 10]}
        >
          <Text h="20">روز</Text>
          <Text h="20">وعده</Text>
          <Text h="20">کالری</Text>
          <Text h="20"> مواد غذایی </Text>
          <Text h="20">شنبه</Text>
          <Text h="20">صبحانه</Text>
          <Text h="20">{b1?.cal}</Text>
          <Text h="20" fontSize="sm">
            {b1?.desc}
          </Text>
          <Text h="20">یک شنبه</Text>
          <Text h="20">صبحانه</Text>
          <Text h="20">{b2?.cal}</Text>
          <Text h="20" fontSize="sm">
            {b2?.desc}
          </Text>
        </Grid>
      </Center>
    </Box>
  );
};

export default Home;
