import {
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  Image,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { useRouter } from 'next/router';
import { HamburgerIcon } from '@chakra-ui/icons';

const DrawerMenu: React.FC = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        position="fixed"
        top="7"
        right="3"
        zIndex={110}
        tabIndex={-1}
        bg="rgba(53,81,94,0.5)"
        onClick={onOpen}
      >
        <HamburgerIcon w="6" h="8" color="white" />
      </Button>
      <Drawer
        isOpen={isOpen}
        colorScheme="white"
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent bg="rgba(53,81,94,0.7)">
          <DrawerCloseButton color="white" />
          <DrawerHeader color="white">
            <Center>
              <Image
                alt="صابر سلطانی"
                src="/soltanidev.png"
                borderRadius="xl"
                w="20"
                h="20"
              />
              <Text as="h2" fontSize="lg" px="2">
                SoltaniDev.com
              </Text>
            </Center>
          </DrawerHeader>

          <DrawerBody>
            <Center display="flex " flexDirection="column">
              <Button
                onClick={() => router.push('/')}
                w="40"
                h="14"
                mt="5"
                colorScheme="white"
                border="2px"
              >
                خانه
              </Button>
              <Button
                onClick={() => router.push('/projects')}
                w="40"
                h="14"
                mt="5"
                colorScheme="white"
                border="2px"
              >
                پروژه های برتر
              </Button>
              <Button
                onClick={() => router.push('/articles')}
                w="40"
                h="14"
                mt="5"
                colorScheme="white"
                border="2px"
              >
                مقالات تخصصی
              </Button>
              <Button
                onClick={() => router.push('/edu')}
                w="40"
                h="14"
                mt="5"
                colorScheme="white"
                border="2px"
              >
                آموزش های تخصصی
              </Button>

              <Button
                onClick={() => router.push('/about')}
                w="40"
                h="14"
                mt="5"
                colorScheme="white"
                border="2px"
              >
                درباره من
              </Button>
              <Button
                onClick={() => router.push('/contact')}
                w="40"
                h="14"
                mt="5"
                colorScheme="white"
                border="2px"
              >
                تماس با من
              </Button>
            </Center>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerMenu;
