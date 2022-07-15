import { Box, Center, Image, Stack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import { IbaseAttributes } from '../../types/publicInterfaces';

const Intro: React.FC<{ src: IbaseAttributes[] }> = ({ src }) => {
  return (
    <Box w="100%" h="full" my="10">
      <Center display="flex" flexDirection="column" color="gray.700">
        <Stack direction={['column', 'row']}>
          {src.map((item, index) => (
            <Center
              display="flex"
              bg={
                item.attributes.title === 'طراحی وبسایت' ? '#35515E' : 'white'
              }
              flexDirection="column"
              py="5"
              key={index}
            >
              <Image alt="" w="24" h="24" src={item.attributes?.img} />

              <Text
                as={motion.h1}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition="0.5s linear "
                color={
                  item.attributes.title === 'طراحی وبسایت'
                    ? 'gray.50'
                    : '#35515E'
                }
                textAlign="center"
                fontSize="2xl"
                my="4"
                zIndex={100}
                px="7"
              >
                {item.attributes.title}
              </Text>

              <Text
                as={motion.h3}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition="0.5s linear "
                textAlign="center"
                color={
                  item.attributes.title === 'طراحی وبسایت'
                    ? 'gray.50'
                    : '#35515E'
                }
                fontSize={['lg', 'xl']}
                my="5"
                zIndex={100}
                px="5"
              >
                {item.attributes.content}
              </Text>
            </Center>
          ))}
        </Stack>
      </Center>
    </Box>
  );
};

export default Intro;
