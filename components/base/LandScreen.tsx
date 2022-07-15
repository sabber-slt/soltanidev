import { ArrowDownIcon } from '@chakra-ui/icons';
import {
  AspectRatio,
  Box,
  Center,
  keyframes,
  Text,
  Image,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

import React from 'react';
import { Iinfo } from '../../types/publicInterfaces';

const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0)}
  25% { transform: scale(1.5) rotate(0)}
  50% { transform: scale(1.5) rotate(180deg)}
  75% { transform: scale(1) rotate(180deg)}
  100% { transform: scale(1) rotate(0)}
`;
const animation = `${animationKeyframes} 3s ease-in-out infinite`;

const LandScreen: React.FC<{ src: Iinfo }> = ({ src }) => {
  return (
    <Box w="100%" h={['90vh', '100vh']} position="relative" bg="rgb(53,81,94)">
      <AspectRatio
        position="absolute"
        w="full"
        objectFit="cover"
        maxH={['90vh', '2xl']}
        zIndex={0}
        opacity={0.7}
        ratio={[1 / 4, 1, 1, 1]}
      >
        <video autoPlay loop muted playsInline>
          <source src={'/video.webm'} type="video/webm; codecs=vp9" />
        </video>
      </AspectRatio>
      <Center
        display="flex"
        flexDirection="column"
        h="90vh"
        zIndex={100}
        color="white"
      >
        <Image
          as={motion.img}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition="2.5s linear "
          zIndex={100}
          alt="صابر سلطانی"
          src="/soltanidev.png"
          w="32"
          h="32"
          borderRadius={100}
          boxShadow="0 7px 10px rgba(255,255,255,0.6)"
        />
        <Text
          as={motion.h1}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          zIndex={100}
          my="4"
          fontSize={['2xl', '5xl']}
          whiteSpace="pre-line"
          textAlign="center"
        >
          {src.title}
        </Text>
        <Text
          as={motion.h2}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition="0.5s linear "
          textAlign="center"
          fontSize={['xl', '3xl']}
          w={['full', '50vw']}
          mt="2"
          zIndex={100}
          px="16"
        >
          {src.content}
        </Text>
        <Box as={motion.div} pt="7" animation={animation} zIndex={100}>
          <ArrowDownIcon color="#D81B60" boxSize="12" />
        </Box>
      </Center>
    </Box>
  );
};

export default LandScreen;
