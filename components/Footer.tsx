import {
  Box,
  Button,
  Center,
  Grid,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <Box h={['70vh']} bg="#35515E">
      <HStack justifyContent="space-around">
        <Center h={['60vh']} w="40vw">
          <Grid
            templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
            gap={[10, 10]}
            color="white"
            py="16"
          >
            <Link href="/">
              <a>
                <Image
                  alt=""
                  w={['14', '20']}
                  h={['14', '20']}
                  src="https://res.cloudinary.com/dupfwlkgb/image/upload/v1656308312/2609558_instagram_social_media_social_icon_dsa3ai.png"
                />
              </a>
            </Link>
            <Link href="/">
              <a>
                <Image
                  alt=""
                  w={['14', '20']}
                  h={['14', '20']}
                  src="https://res.cloudinary.com/dupfwlkgb/image/upload/v1656308311/4202002_apps_google_googleplay_play_logo_icon_x3jix4.png"
                />
              </a>
            </Link>
            <Link href="/">
              <a>
                <Image
                  alt=""
                  w={['14', '20']}
                  h={['14', '20']}
                  src="https://res.cloudinary.com/dupfwlkgb/image/upload/v1656308397/1055012_phone_communication_telephone_icon_qw6bd7.png"
                />
              </a>
            </Link>
            <Link href="/">
              <a>
                <Image
                  alt=""
                  w={['14', '20']}
                  h={['14', '20']}
                  src="https://res.cloudinary.com/dupfwlkgb/image/upload/v1656308311/2243991_instagram_login_mobile_phone_communication_icon_eec5yf.png"
                />
              </a>
            </Link>
          </Grid>
        </Center>
        <Center h={['60vh']} w="60vw">
          <Box h={['60vhh']} color="white" textAlign="center">
            <Text py="5" fontSize="2xl" color="#D81B60">
              SoltaniDev
            </Text>
            <Link href="/auth/register">
              <a>
                <Text as="u" fontSize={['lg', '2xl']}>
                  آووکادویی شو!
                </Text>
              </a>
            </Link>
            <Grid
              templateColumns={['repeat(2, 1fr)', 'repeat(4, 1fr)']}
              gap={[10, 10]}
              color="white"
              py="16"
            >
              <Link href="/article">
                <a>
                  <Text borderBottom="2px" fontSize={['lg', '2xl']}>
                    مقالات
                  </Text>
                </a>
              </Link>
              <Link href="/exercise">
                <a>
                  <Text borderBottom="2px" fontSize={['lg', '2xl']}>
                    ورزش
                  </Text>
                </a>
              </Link>
              <Link href="/food">
                <a>
                  <Text borderBottom="2px" fontSize={['lg', '2xl']}>
                    آشپزی سالم
                  </Text>
                </a>
              </Link>
              <Link href="/calorie">
                <a>
                  <Text borderBottom="2px" fontSize={['lg', '2xl']}>
                    کالری ها
                  </Text>
                </a>
              </Link>
            </Grid>
            <Link href="/about">
              <a>
                <Text fontSize={['lg', '2xl']}> درباره تیم آووکادو</Text>
              </a>
            </Link>
            <Link href="/contact">
              <a>
                <Text my="4" fontSize={['lg', '2xl']}>
                  {' '}
                  تماس با ما
                </Text>
              </a>
            </Link>
          </Box>
        </Center>
      </HStack>
      <Text
        fontSize={['lg', 'lg']}
        bg="#35515E"
        color="white"
        pb="4"
        textAlign="center"
        fontWeight="light"
        px="5"
      >
        © تمامی حقوق این وب سایت متعلق به تیم سلامتی آووکادو میباشد می‌باشد.
      </Text>
      {/* <Text
        fontSize={['xs', 'sm']}
        bg="green.800"
        color="white"
        pb="4"
        textAlign="center"
        fontWeight="light"
      >
        سرپرست برنامه نویسی : صابر سلطانی
      </Text> */}
    </Box>
  );
};
export default Footer;
