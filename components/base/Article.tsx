import { Box, Center, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion';
import { Ibase } from '../../types/publicInterfaces';
import Link from 'next/link';

const Article: React.FC<{ src: Ibase[] }> = ({ src }) => {
  return (
    <Center w="full" flexDirection={['column', 'row']} justifyItems="center">
      {src.map((item, index) => (
        <Flex
          as={motion.div}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          key={index}
          cursor="pointer"
          position="relative"
          w="80"
          h="96"
          mx="5"
          my="10"
        >
          <Link href={`/article/${item.image}`}>
            <a>
              <Image
                alt=""
                w={['80']}
                h={['96']}
                borderRadius={20}
                src={item.info[0].img1}
                boxShadow="dark-lg"
                objectFit="cover"
                bg="green"
                overflow={['hidden', 'hidden', 'hidden', 'hidden']}
                _hover={{
                  boxShadow: 'none',
                }}
              />
              <Box
                position="absolute"
                h="32"
                bottom={0}
                bg="rgba(240, 240, 240,0.6)"
                w="80"
                borderBottomRadius={20}
              >
                <Center h="32">
                  <Text color="green.800" fontSize="xl">
                    {item.title}
                  </Text>
                </Center>
              </Box>
            </a>
          </Link>
        </Flex>
      ))}
    </Center>
  );
};

export default Article;
