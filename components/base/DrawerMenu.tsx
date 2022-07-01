import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
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
        bg="rgba(34,84,61,0.5)"
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
        <DrawerContent bg="rgba(34,84,61,0.8)">
          <DrawerCloseButton color="white" />
          <DrawerHeader color="white">Avocado</DrawerHeader>

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
                onClick={() => router.push('/auth/register')}
                w="40"
                h="14"
                mt="5"
                colorScheme="white"
                border="2px"
              >
                ورود/ثبت نام
              </Button>
              <Button
                onClick={() => router.push('/article')}
                w="40"
                h="14"
                mt="5"
                colorScheme="white"
                border="2px"
              >
                مقالات تندرستی
              </Button>
              <Button
                onClick={() => router.push('/food')}
                w="40"
                h="14"
                mt="5"
                colorScheme="white"
                border="2px"
              >
                آشپزی سالم
              </Button>
              <Button
                onClick={() => router.push('/calorie')}
                w="40"
                h="14"
                mt="5"
                colorScheme="white"
                border="2px"
              >
                جدول کالری ها
              </Button>
              <Button
                onClick={() => router.push('/exercise')}
                w="40"
                h="14"
                mt="5"
                colorScheme="white"
                border="2px"
              >
                ورزش
              </Button>
              <Button
                onClick={() => router.push('/about')}
                w="40"
                h="14"
                mt="5"
                colorScheme="white"
                border="2px"
              >
                درباره ما
              </Button>
              <Button
                onClick={() => router.push('/contact')}
                w="40"
                h="14"
                mt="5"
                colorScheme="white"
                border="2px"
              >
                تماس با ما
              </Button>
            </Center>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerMenu;
