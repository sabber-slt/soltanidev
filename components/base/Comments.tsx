import { Box, Center, Flex, Grid, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion';
import { IbaseAttributes } from '../../types/publicInterfaces';

const Comments: React.FC<{ src: IbaseAttributes[] }> = ({ src }) => {
  return (
    <Flex
      w="full"
      h="full"
      pt="12"
      my="8"
      overflowY="hidden"
      alignItems="center"
      flexWrap="nowrap"
      flexDirection="row-reverse"
      style={{ direction: 'rtl' }}
      sx={{
        scrollbarWidth: 'none',
        '::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      <Grid
        ml={['5', '10vw']}
        templateColumns={['repeat(4,  1fr)', 'repeat(4,  1fr)']}
        gap={4}
      >
        {src.map((item, index) => (
          <Box key={index} display="flex">
            <VStack
              justifyContent="flex-end"
              borderRadius="lg"
              bg="gray.200"
              overflow="hidden"
              h="96"
              w="72"
            >
              <Box
                bg={
                  item.attributes.title === 'برنامه نویسی با زبان typescript' ||
                  item.attributes.title === 'برنامه نویس Front-End'
                    ? '#D81B60'
                    : '#35515E'
                }
                position="relative"
                w="72"
                h="96"
                py="5"
              >
                <Center>
                  <Image
                    alt=""
                    w="28"
                    h="28"
                    objectFit="cover"
                    src={item.attributes.img}
                  />
                </Center>
                <Text
                  as={motion.div}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  color={'white'}
                  textAlign="center"
                  fontSize="xl"
                  my="2"
                  zIndex={100}
                  px="7"
                >
                  {item.attributes.title}
                </Text>
                <Text
                  as={motion.div}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition="0.5s linear "
                  color={'white'}
                  textAlign="center"
                  fontSize="sm"
                  zIndex={100}
                  px="4"
                >
                  {item.attributes.content}
                </Text>
              </Box>
            </VStack>
          </Box>
        ))}
      </Grid>
    </Flex>
  );
};

export default Comments;
