import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import DietsType from '../../components/dashboard/DietsType';
import Header from '../../components/dashboard/Header';

const Home: NextPage = () => {
  return (
    <Box>
      <Header />
      <DietsType />
    </Box>
  );
};

export default Home;
