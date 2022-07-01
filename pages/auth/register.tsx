import { NextPage } from 'next';
import React from 'react';
import { useForm } from 'react-hook-form';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  Image,
  Center,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Slider,
  Text,
  HStack,
  RadioGroup,
  Stack,
  Radio,
  VStack,
} from '@chakra-ui/react';

import { API, HEADERS } from '../../utils/useFetch';
import useUser from '../../utils/store/useUser';
import { useRouter } from 'next/router';

interface Props {
  name: string;
  phone: string;
  weight: string;
  man: string;
  woman: string;
  height: string;
  gender: string;

  age: string;
}

const register: NextPage = () => {
  const router = useRouter();
  const { setUser } = useUser();
  const [value, setValue] = React.useState(60);
  const [height, setHeight] = React.useState(150);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<Props>();

  async function onSubmit(values: Props) {
    const { name, phone, man, woman, age } = values;
    const res = await fetch(API, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({
        query: `mutation MyMutation($phone:String,$weight:String,$name:String,$height:String,$age:String,$man:String,$woman:String) {
          insert_user_one(object: {phone: $phone, weight:$weight , name: $name, height: $height,age:$age,man:$man,woman:$woman}) {
            height
            id
            name
            phone
            weight
            man
            woman
            age
          }
        }`,
        variables: {
          phone,
          weight: `${value}`,
          name,
          height: `${height}`,
          age: `${age}`,
          man,
          woman,
        },
      }),
    });
    const data = await res.json();
    console.log(data);
    if (data.data?.insert_user_one) {
      setUser(data.data?.insert_user_one);
      router.push('/dashboard');
    }
  }

  return (
    <Box w="full" h="100vh">
      <Image
        alt=""
        w={['full', '50vw']}
        h="100vh"
        position="absolute"
        top="0"
        zIndex="-1"
        src="https://res.cloudinary.com/dupfwlkgb/image/upload/v1656413520/pexels-anna-nekrashevich-7214321_vozd9r_jlcwzf.jpg"
      />
      <Center h="100vh">
        <Center
          w="80"
          h={['88vh', '85vh']}
          bgGradient="linear(to-t, rgba(34,84,61),rgba(34,84,61,0.7), rgba(34,84,61,0.4))"
          borderRadius="lg"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormLabel htmlFor="name" color="white">
                {' '}
                نام
              </FormLabel>
              <Input
                id="name"
                color="white"
                bgColor="rgba(34,84,61,0.1)"
                {...register('name', {
                  required: 'This is required',
                })}
              />
            </FormControl>
            <FormControl mt="3">
              <FormLabel htmlFor="phone" color="white">
                {' '}
                شماره تماس
              </FormLabel>
              <Input
                id="phone"
                type={'number'}
                color="white"
                bgColor="rgba(34,84,61,0.1)"
                {...register('phone', {
                  required: 'This is required',
                })}
              />
            </FormControl>
            <HStack mt="3">
              <Center>
                <Text color="white">وزن:</Text>
                <Text color="white" mt="1" pr="2">
                  {value}
                </Text>
              </Center>
            </HStack>
            <Slider
              flex="1"
              focusThumbOnChange={false}
              value={value}
              onChange={(value: number) => setValue(value)}
              min={30}
              max={130}
            >
              <SliderTrack>
                <SliderFilledTrack bg="green.800" />
              </SliderTrack>
              <SliderThumb
                fontSize="md"
                height="8"
                boxSize={8}
                children={value}
                color="white"
                bg="green.900"
                {...register('height')}
              />
            </Slider>
            <HStack mt="3">
              <Center>
                <Text color="white">قد:</Text>
                <Text color="white" pr="2">
                  {height}
                </Text>
              </Center>
            </HStack>
            <Slider
              flex="1"
              focusThumbOnChange={false}
              value={height}
              onChange={(height: number) => setHeight(height)}
              min={100}
              max={204}
            >
              <SliderTrack>
                <SliderFilledTrack bg="green.800" />
              </SliderTrack>
              <SliderThumb
                fontSize="md"
                height="8"
                boxSize={8}
                children={height}
                color="white"
                bg="green.900"
                {...register('weight')}
              />
            </Slider>
            <Text mt="5" textAlign="center" color="white">
              جنسیت
            </Text>
            <Center>
              <RadioGroup>
                <Stack direction="row" color="white">
                  <Radio {...register('man')} value="male">
                    مرد
                  </Radio>
                  <Radio {...register('woman')} value="woman">
                    زن
                  </Radio>
                </Stack>
              </RadioGroup>
            </Center>
            <Text textAlign="center" mt="5" color="white">
              سن
            </Text>
            <Center>
              <Input
                width="16"
                color="white"
                borderColor="white"
                type="number"
                {...register('age')}
              />
            </Center>
            <Center>
              <VStack>
                <Button
                  mt={4}
                  colorScheme="white"
                  isLoading={isSubmitting}
                  type="submit"
                  border={'2px solid white'}
                  borderColor="white"
                >
                  ثبت نام
                </Button>
                <Button
                  mt={4}
                  fontWeight="light"
                  colorScheme="white"
                  onClick={() => router.push('/auth/login')}
                >
                  قبلا ثبت نام کرده اید ؟
                </Button>
              </VStack>
            </Center>
          </form>
        </Center>
      </Center>
    </Box>
  );
};

export default register;
