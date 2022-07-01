import {
  AspectRatio,
  Box,
  Button,
  Center,
  Img,
  Text,
  Image,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import React from 'react';
import { Ibase } from '../../types/publicInterfaces';

const LandScreen: React.FC<{ src: Ibase }> = ({ src }) => {
  return (
    <Box
      w="100%"
      h={['2xl', '100vh']}
      position="relative"
      bgGradient="linear(to-t,green.900, green.400)"
    >
      <Img
        position="absolute"
        objectFit="cover"
        w="full"
        h={['2xl', '100vh']}
        src={src.video}
        opacity={0.7}
      />
      {/* <AspectRatio
        position="absolute"
        w="full"
        // objectFit="cover"
        maxH={['3xl', '100vh']}
        zIndex={0}
        opacity={0.7}
        ratio={[1 / 4, 1, 1 / 2, 1 / 2]}
      >
        <video autoPlay loop muted playsInline>
          <source src={src.video} type="video/mp4" />
        </video>
      </AspectRatio> */}
      <Center
        display="flex"
        flexDirection="column"
        h="2xl"
        zIndex={100}
        color="white"
      >
        <Text
          as={motion.div}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          zIndex={100}
          fontSize={['3xl', '5xl']}
        >
          {src.title}
        </Text>
        <Text
          as={motion.div}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition="0.5s linear "
          textAlign="center"
          fontSize={['xl', '3xl']}
          w={['full', '50vw']}
          my="10"
          zIndex={100}
          px="16"
        >
          {src.content}
        </Text>
        <Link href="/auth/login" passHref>
          <Button
            as={motion.button}
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition="0.5s linear "
            fontSize="2xl"
            borderWidth={['2px', '4px']}
            zIndex={100}
            fontWeight={300}
            w="40"
            h="16"
            colorScheme="gray.50"
            variant="outline"
          >
            ورود به آووکادو
          </Button>
        </Link>
      </Center>
    </Box>
  );
};

export default LandScreen;
