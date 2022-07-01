import { NextPage } from 'next';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  Image,
  Center,
  Text,
  VStack,
} from '@chakra-ui/react';

import useUser from '../../utils/store/useUser';
import { useRouter } from 'next/router';

interface Props {
  phone: string;
}

const register: NextPage = () => {
  const router = useRouter();
  const { setUser } = useUser();
  const [err, setErr] = useState('');
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<Props>();

  async function onSubmit(values: Props) {
    const { phone } = values;
    const res = await fetch('https://avocado.hasura.app/v1/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Hasura-Role': 'public',
      },
      body: JSON.stringify({
        query: `query MyQuery($phone:String) {
          user(where: {phone: {_eq: $phone}}) {
            age
            created_at
            gender
            height
            id
            man
            name
            phone
            weight
            woman
            updated_at
          }
        }
        `,
        variables: {
          phone,
        },
      }),
    });
    const data = await res.json();
    console.log(data);
    if (data.data.user.length !== 0) {
      setUser(data.data.user[0]);
      router.push('/dashboard');
    } else {
      setErr('کاربری با این شماره یافت نشد');
    }
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
        src="https://res.cloudinary.com/dupfwlkgb/image/upload/v1656413446/pexels-photo-4327024_wzpwsl.webp"
      />
      <Center h="100vh">
        <Center
          w="80"
          display="flex"
          flexDirection="column"
          h="40vh"
          bgGradient="linear(to-t, rgba(34,84,61),rgba(34,84,61,0.7), rgba(34,84,61,0.4))"
          borderRadius="lg"
        >
          <Text color="white">{err}</Text>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                    ورود
                  </Button>

                  <Button
                    mt={4}
                    fontWeight="light"
                    colorScheme="white"
                    onClick={() => router.push('/auth/register')}
                  >
                    حساب کاربری ندارید؟
                  </Button>
                </VStack>
              </Center>
            </FormControl>
          </form>
        </Center>
      </Center>
    </Box>
  );
};

export default register;
