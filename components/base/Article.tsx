import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion';
import { IbaseAttributes } from '../../types/publicInterfaces';
import Link from 'next/link';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';

const Article: React.FC<{
  src: IbaseAttributes[];
  page: string;
  txt: string;
}> = ({ src, page, txt }) => {
  const router = useRouter();
  return (
    <Center
      py="12"
      w="full"
      h="full"
      flexDirection={['column', 'column', 'column']}
      justifyItems="center"
    >
      <HStack
        as={motion.div}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition="0.5s linear "
        justifyContent="space-between"
        w="full"
        py="4"
        px="5"
      >
        <Text color="#35515E" fontSize={['xl', '2xl']}>
          {txt}
        </Text>
        <Button
          rightIcon={<ArrowBackIcon boxSize="7" />}
          bg="white"
          color="#35515E"
          fontSize={['lg', 'xl']}
          onClick={() => router.push(`/${page}`)}
        >
          مشاهده همه
        </Button>
      </HStack>
      <Center bg="#35515E">
        <Grid
          templateColumns={['repeat(2, 1fr)', 'repeat(2, 1fr)']}
          gap={[2, 10]}
          bg="#35515E"
          py={['10', '24']}
          px={['5', '24']}
          // w={['full', 'full']}
        >
          {src.map((item, index) => (
            <Flex
              as={motion.div}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              key={index}
              cursor="pointer"
              position="relative"
              w={['40', '40vw']}
              h={['48', '50vh']}
            >
              <Center w="full">
                <Link href={`/${page}/${item.attributes.slug}`}>
                  <a>
                    <Center w="full">
                      <Image
                        alt=""
                        w={['40', '40vw']}
                        h={['48', '50vh']}
                        borderRadius={20}
                        src={item.attributes.img}
                        objectFit="cover"
                        objectPosition="center"
                        boxShadow="dark-lg"
                        bg="green"
                        overflow={['hidden', 'hidden', 'hidden', 'hidden']}
                        _hover={{
                          boxShadow: 'none',
                        }}
                      />
                      <Box
                        position="absolute"
                        h={['20', '36']}
                        bottom={0}
                        bg="rgba(240, 240, 240,0.7)"
                        w={['40', '40vw']}
                        borderBottomRadius={20}
                      >
                        <Center h={['20', '36']}>
                          <Text
                            textAlign="center"
                            as="h3"
                            color="#D81B60"
                            fontSize={['md', 'xl']}
                          >
                            {item.attributes.title}
                          </Text>
                        </Center>
                      </Box>
                    </Center>
                  </a>
                </Link>
              </Center>
            </Flex>
          ))}
        </Grid>
      </Center>
    </Center>
  );
};

export default Article;
