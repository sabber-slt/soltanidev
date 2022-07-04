import { Box, Center, Grid, HStack, Image, Text } from '@chakra-ui/react';
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
            <Link href="https://github.com/sabber-slt">
              <a>
                <Image
                  alt=""
                  w={['14', '20']}
                  h={['14', '20']}
                  src="https://res.cloudinary.com/dupfwlkgb/image/upload/v1652763913/github_ds1hmh.png"
                />
              </a>
            </Link>
            <Link href="https://instagram.com/sabber.slt">
              <a>
                <Image
                  alt=""
                  w={['14', '20']}
                  h={['14', '20']}
                  src="https://res.cloudinary.com/dupfwlkgb/image/upload/v1656308312/2609558_instagram_social_media_social_icon_dsa3ai.png"
                />
              </a>
            </Link>
            <Link href="tel:00989122863901">
              <a href="tel:00989122863901">
                <Image
                  alt=""
                  w={['14', '20']}
                  h={['14', '20']}
                  src="https://res.cloudinary.com/dupfwlkgb/image/upload/v1656308397/1055012_phone_communication_telephone_icon_qw6bd7.png"
                />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/sabber-soltani-a71397236">
              <a>
                <Image
                  alt=""
                  w={['14', '20']}
                  h={['14', '20']}
                  src="https://res.cloudinary.com/dupfwlkgb/image/upload/v1652763913/in_vqyfhw.png"
                />
              </a>
            </Link>
          </Grid>
        </Center>
        <Center h={['70vh']} w="60vw">
          <Box h={['70vh']} color="white" textAlign="center">
            <Text py="5" fontSize="2xl" color="#D81B60">
              SoltaniDev
            </Text>
            <Link href="/">
              <a>
                <Text as="u" fontSize={['lg', '2xl']}>
                  برنامه نویسی یه سبک نوین
                </Text>
              </a>
            </Link>
            <Grid
              templateColumns={['repeat(2, 1fr)', 'repeat(4, 1fr)']}
              gap={[10, 10]}
              color="white"
              py="16"
            >
              <Link href="/edu">
                <a>
                  <Text borderBottom="2px" fontSize={['sm', '2xl']}>
                    آموزش ها
                  </Text>
                </a>
              </Link>
              <Link href="/articles">
                <a>
                  <Text borderBottom="2px" fontSize={['sm', '2xl']}>
                    مقالات
                  </Text>
                </a>
              </Link>
              <Link href="/projects">
                <a>
                  <Text borderBottom="2px" fontSize={['sm', '2xl']}>
                    پروژه ها
                  </Text>
                </a>
              </Link>
              <Link href="/about">
                <a>
                  <Text borderBottom="2px" fontSize={['sm', '2xl']}>
                    درباره من
                  </Text>
                </a>
              </Link>
            </Grid>

            <Link href="/contact">
              <a>
                <Text my="4" fontSize={['lg', '2xl']}>
                  {' '}
                  تماس با من
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
        09122863901© تمامی حقوق این وب سایت متعلق به صابر سلطانی میباشد می‌باشد.
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
