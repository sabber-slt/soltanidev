import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion';
import { Ibase } from '../../types/publicInterfaces';
import Link from 'next/link';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';

const Propject: React.FC<{ src: Ibase[] }> = ({ src }) => {
  const router = useRouter();
  return (
    <>
      <HStack
        as={motion.div}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition="0.5s linear "
        justifyContent="space-between"
      >
        <Text color="#35515E" fontSize={['xl', '2xl']} mr="7">
          پروژه های در حال اجرا
        </Text>
        <Button
          rightIcon={<ArrowBackIcon boxSize="7" />}
          bg="white"
          color="rgb(53,81,94)"
          fontSize={['xl', 'xl']}
          pl="7"
          onClick={() => router.push('/projects')}
        >
          مشاهده همه
        </Button>
      </HStack>
      <Center w="full" flexDirection={['column', 'row']} justifyItems="center">
        {src.map((item, index) => (
          <Flex
            as={motion.div}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            key={index}
            cursor="pointer"
            position="relative"
            borderRadius={20}
            w="80"
            h="96"
            mx="5"
            my="10"
          >
            <Link href={`/projects/${item.image}`}>
              <a>
                <Image
                  alt=""
                  w={['80']}
                  h={['96']}
                  borderRadius={20}
                  overflow="hidden"
                  src={item.info[0].img1}
                  boxShadow="dark-lg"
                  objectFit="cover"
                  bg="green"
                  _hover={{
                    boxShadow: 'none',
                  }}
                />
                <Box
                  position="absolute"
                  overflow="hidden"
                  borderRadius={20}
                  h="96"
                  bottom={0}
                  bg="rgb(53,81,94,0.4)"
                  w="80"
                  borderBottomRadius={20}
                >
                  <Center h="96">
                    <Text
                      as="h3"
                      px="2"
                      textAlign="center"
                      color="white"
                      fontSize="2xl"
                    >
                      {item.title}
                    </Text>
                  </Center>
                </Box>
              </a>
            </Link>
          </Flex>
        ))}
      </Center>
    </>
  );
};

export default Propject;
