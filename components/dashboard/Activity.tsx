import { Box, Center, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

type Props = {};

const items = [
  { title: ' خیلی سبک', link: '/dashboard/calcute' },
  { title: ' سبک', link: '/dashboard/calcute' },
  { title: 'متوسط ', link: '/dashboard/calcute' },
  { title: ' سنگین', link: '/dashboard/calcute' },
];

const Activity: React.FC = () => {
  return (
    <>
      <Center display="flex " flexDirection="column" h={['full', '100vh']}>
        <Text fontSize={['xl', '3xl']}>سطح فعالیت خود را مشخص نمایید</Text>
        <Flex flexDirection={['column', 'row']}>
          {items.map((item) => (
            <Center key={item.title} w="full" m="4">
              <Link href={item.link}>
                <a>
                  <Box
                    h="40"
                    w="40"
                    bgGradient="linear(to-t,green.600,gray.100, green.600)"
                    borderRadius="xl"
                    boxShadow="xl"
                  >
                    <Center h="40">
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
      </Center>
    </>
  );
};

export default Activity;
