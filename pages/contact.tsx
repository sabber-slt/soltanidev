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
        src="https://images.pexels.com/photos/9241897/pexels-photo-9241897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <Center h="100vh">
        <Center
          w="96"
          display="flex"
          flexDirection="column"
          h="60vh"
          bgGradient="linear(to-t, rgba(34,84,61),rgba(34,84,61,0.7), rgba(34,84,61,0.4))"
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
                type={'number'}
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
                color="white"
                bgColor="rgba(34,84,61,0.1)"
                {...register('phone', {
                  required: 'This is required',
                })}
              />
              <FormLabel mt="3" htmlFor="phone" color="white">
                توضیحات
              </FormLabel>
              <Textarea
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
          </form>
        </Center>
      </Center>
    </Box>
  );
};

export default Contact;
