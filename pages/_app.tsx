import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import styled from '@emotion/styled';
import '@fontsource/lalezar';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Layout from '../components/Layout';
import Script from 'next/script';
import * as gtag from '../utils/gtag';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';

// import Head from 'next/head';

const AppContainer = styled.div`
  font-family: 'Lalezar', sans-serif;
  direction: rtl;
`;

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <NextSeo
        title="صابر سلطانی | برنامه نویس ارشاد جاوااسکریپت"
        description="طراحی و ساخت انواع وبسایت ها و اپلیکیشن های موبایل "
        defaultTitle="صابر سلطانی"
        canonical="https://www.soltanidev.com/"
        openGraph={{
          url: 'https://www.soltanidev.com/',
          title: 'صابر سلطانی | برنامه نویس ارشاد جاوااسکریپت',
          description: 'طراحی و ساخت انواع وبسایت ها و اپلیکیشن های موبایل ',

          locale: 'ir_IR',
          images: [
            {
              url: 'https://res.cloudinary.com/dupfwlkgb/image/upload/v1656669395/soltanidev_s0vc6l.png',
              width: 500,
              height: 500,
              alt: 'صابر سلطانی',
              type: 'image/png',
            },
            {
              url: 'https://res.cloudinary.com/dupfwlkgb/image/upload/v1656669245/screen_z0ktaf.png',
              width: 500,
              height: 500,
              alt: 'صابر سلطانی',
              type: 'image/png',
            },
          ],
          site_name: 'صابر سلطانی | SoltaniDev',
        }}
        robotsProps={{
          nosnippet: true,
          notranslate: true,
          noimageindex: true,
          noarchive: true,
          maxSnippet: -1,
          maxImagePreview: 'none',
          maxVideoPreview: -1,
        }}
      />
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Hydrate state={pageProps.dehydrateState}>
          <ChakraProvider>
            <CSSReset />
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
