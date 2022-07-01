import { Box, Center, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

type Props = {};

const items = [
  { title: 'رژیمت رو اونطوری که دوست داری طراحی کن', link: '/register' },
  { title: 'طراحی رژیمت رو به ما بسپر', link: '/dashboard/avocadoDiet' },
];

const DietsType: React.FC = () => {
  return (
    <Flex flexDirection={['column', 'row']}>
      {items.map((item) => (
        <Center key={item.title} w="full" my="4">
          <Link href={item.link}>
            <a>
              <Box
                h="48"
                w="72"
                bgGradient="linear(to-t,green.600,gray.100, green.600)"
                borderRadius="xl"
                boxShadow="xl"
              >
                <Center h="48">
                  <Text
                    textAlign="center"
                    fontSize={['lg', '2xl']}
                    color="green.800"
                  >
                    {item.title}
                  </Text>
                </Center>
              </Box>
            </a>
          </Link>
        </Center>
      ))}
    </Flex>
  );
};

export default DietsType;
