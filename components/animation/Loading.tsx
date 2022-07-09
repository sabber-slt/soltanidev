import { Box, Center, Spinner, Text } from '@chakra-ui/react';
import * as React from 'react';

const Loading = () => {
  return (
    <Box bg="#35515E" h="100vh" w="full">
      <Center h="100vh" display="flex" flexDirection="column">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.500"
          color="gray.50"
          size="xl"
        />
        <Text
          pt="5"
          color="gray.50"
          textAlign="center"
          fontSize={['xl', '3xl']}
        >
          soltanidev.com
        </Text>
      </Center>
    </Box>
  );
};

export default Loading;
