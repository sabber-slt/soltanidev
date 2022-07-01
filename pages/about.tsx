import {
  Box,
  Button,
  Center,
  Grid,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';

import { useRouter } from 'next/router';

import Footer from '../components/Footer';

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <Box color="green.800">
      <Box p="7">
        <Center py="10">
          <Image
            borderRadius={['0', '20']}
            boxShadow="xl"
            alt=""
            w={['full', '50vw']}
            h={['96', '70vh']}
            src="https://res.cloudinary.com/dupfwlkgb/image/upload/v1656317578/pexels-cadeau-maestro-1170412_rb0jis.png"
          />
        </Center>
        <Text fontSize={['xl', '2xl']}>معرفی آووکادو</Text>
        <Text fontSize={['lg', '2xl']}>
          مجموعه سلامتی آووکادو با همکاری بسیاری از پزشکان حوزه سلامت در کنار
          مشاورین تغدیه و روانشناسی فعالان حوزه‌ی روانشناسی ، با هدف ارائه
          بهترین تجربه‌ی سلامتی برای ایرانیان و ارائه تجربه منحصر به فرد از یک
          کلینیک تغذیه‌ درمانی بر بستر اینترنت آغاز به کار کرده است.
        </Text>
        <Text pt="5" fontSize={['lg', '2xl']}>
          کلینیک تخصصی رژیم درمانی آنلاین آووکادو، حاصل تعامل و همکاری این شرک
          با بسیاری از پزشکان ، متخصصان ، برنامه نویسان و میباشد. همچنین آووکادو
          با آرمان بهره‌مندی تمام ایرانیان از علوم پزشکی و مدرن تصمیم دارد
          تجربه‌ای جدید از سلامتی و پیشگیری از بیماری های مختلف را برای ایرانیان
          به ارمغان آورد. از این رو با ارائه بهترین رژیم‌های مبتنی بر متابولیسم
          و بهترین سیستم پیشرفته تاب‌آوری جمعی (افزایش انگیزه در طول رژیم) و
          آموزش تغذیه‌ در فضای مجازی در نظر دارد که این علوم را به صورت عملی بار
          دیگر بر سفره‌ی ایرانیان احیا کند.
        </Text>
        <Text pt="5" fontSize={['lg', '2xl']}>
          فراموش نکنیم که ماموریت من و رژیم، فروش آنلاین رژیم چاقی و لاغری نیست،
          بلکه بهبود و اصلاح تغذیه و سلامتی خاطره‌انگیز، مطمئن و مناسب برای یک
          خانواده‌ی ایرانی است؛ که تا رسیدن به چنین روزی، هیچ‌کدام از ما دست از
          تلاش برنخواهیم داشت.
        </Text>
      </Box>
      <Grid
        py="8"
        templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
        gap={[2, 10]}
      >
        <VStack>
          <Image
            borderRadius={['100', '20']}
            boxShadow="xl"
            alt=""
            w={['40', '64']}
            h={['40', '64']}
            objectFit="cover"
            src="https://res.cloudinary.com/dupfwlkgb/image/upload/v1655037885/pexels-pixabay-39671_cjqmcb.jpg"
          />
          <Text p={['5']} textAlign="center" fontSize={['lg', 'xl']}>
            پشتیبانی تا تحقق رؤیا : ما در راستای ارائه بهترین نوع خدمات پشتیبانی
            و ارتباط مؤثر با مراجعین تمام تلاش خود را نموده و جزو اصول بنیادی
            خود می دانیم.
          </Text>
        </VStack>
        <VStack>
          <Image
            borderRadius={['100', '20']}
            boxShadow="xl"
            alt=""
            w={['40', '64']}
            h={['40', '64']}
            objectFit="cover"
            src="https://res.cloudinary.com/dupfwlkgb/image/upload/v1655038151/pexels-ella-olsson-1640777_n07ojw.jpg"
          />
          <Text p={['5']} textAlign="center" fontSize={['lg', 'xl']}>
            ارائه برنامه رژیم با بالاترین دقت و متناسب با علایق و بیماری های
            شما،احترام به حقوق مراجعین و پذیرش هرگونه انتقاد و اصلاح اصول
          </Text>
        </VStack>
        <VStack>
          <Image
            borderRadius={['100', '20']}
            boxShadow="xl"
            alt=""
            w={['40', '64']}
            h={['40', '64']}
            objectFit="cover"
            src="https://res.cloudinary.com/dupfwlkgb/image/upload/v1656229661/High-urea-1_uhehtk.jpg"
          />
          <Text p={['5']} textAlign="center" fontSize={['lg', 'xl']}>
            نوآوری و بروز رسانی وبسایت جمع آوری و ارائه مقالات در زمینه های
            مختلف سلامت و ورزش
          </Text>
        </VStack>
      </Grid>
      <Footer />
    </Box>
  );
};

export default Home;
