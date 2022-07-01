import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import styled from '@emotion/styled';
import '@fontsource/lalezar';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Layout from '../components/Layout';
import Head from 'next/head';

const AppContainer = styled.div`
  font-family: 'Lalezar', sans-serif;
  direction: rtl;
`;

const reactQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 7 * 1000,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
      </Head>
      <QueryClientProvider client={reactQueryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Hydrate state={pageProps.dehydrateState}>
          <ChakraProvider>
            <AppContainer>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </AppContainer>
          </ChakraProvider>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
