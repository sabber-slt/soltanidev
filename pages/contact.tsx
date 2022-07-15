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
  Textarea,
} from '@chakra-ui/react';

import { useRouter } from 'next/router';

interface Props {
  phone: string;
  name: string;
  content: string;
}

const Contact: NextPage = () => {
  const router = useRouter();

  const [err] = useState('');
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
    formState: { errors },
  } = useForm<Props>();

  async function onSubmit(values: Props) {
    const { phone, name, content } = values;
    const res = await fetch('https://avocado.hasura.app/v1/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Hasura-Role': 'public',
      },
      body: JSON.stringify({
        query: `mutation MyMutation($content: String, $name: String,$phone:String) {
          insert_contact(objects: {content: $content, name: $name , phone:$phone}) {
            affected_rows
            returning {
              id
            }
          }
        }
        
        `,
        variables: {
          phone,
          name,
          content,
        },
      }),
    });
    const data = await res.json();
    console.log(data);
    if (data?.data?.insert_contact) {
      router.push('/');
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
        src="https://res.cloudinary.com/dupfwlkgb/image/upload/v1653764272/pexels-cottonbro-6686455_zglpnz.jpg"
      />
      <Center h="100vh">
        <Center
          w="96"
          display="flex"
          flexDirection="column"
          h="70vh"
          bgGradient="linear(to-t, rgb(53,81,94),rgba(53,81,94,0.7), rgba(53,81,94,0.4))"
          borderRadius="lg"
        >
          <Text color="white">{err}</Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl mt="3" px="5">
              <FormLabel htmlFor="name" color="white">
                {' '}
                نام و نامه خانوادگی
              </FormLabel>
              <Input
                id="name"
                data-testid="name"
                type="text"
                color="white"
                bgColor="rgba(34,84,61,0.1)"
                {...register('name', {
                  required: 'This is required',
                })}
              />
              <FormLabel mt="3" htmlFor="phone" color="white">
                شماره تماس
              </FormLabel>
              <Input
                id="phone"
                type={'number'}
                data-testid="phone"
                color="white"
                bgColor="rgba(34,84,61,0.1)"
                {...register('phone', {
                  required: 'This is required',
                })}
              />
              {errors.phone && (
                <Text color="white" data-testid="message">
                  This field is required
                </Text>
              )}

              <FormLabel mt="3" htmlFor="phone" color="white">
                توضیحات
              </FormLabel>
              <Textarea
                data-testid="text"
                {...register('content', {
                  required: 'This is required',
                })}
                w="80"
                color="white"
              />
              <Center>
                <VStack>
                  <Button
                    mt={4}
                    data-testid="submit"
                    colorScheme="white"
                    isLoading={isSubmitting}
                    type="submit"
                    border={'2px solid white'}
                    borderColor="white"
                  >
                    ارسال
                  </Button>
                </VStack>
              </Center>
            </FormControl>
            <Text textAlign="center" color="white" py="3">
              شماره تماس : 09122863901
            </Text>
          </form>
        </Center>
      </Center>
    </Box>
  );
};

export default Contact;
