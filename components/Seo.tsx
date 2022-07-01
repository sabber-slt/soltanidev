import * as React from 'react';
import { NextSeo } from 'next-seo';

interface Props {
  title: string;
  desc: string;
  url: string;
  img1: string;

  img2: string;
}

const Seo: React.FC<Props> = ({ title, desc, url, img1, img2 }) => {
  return (
    <>
      <NextSeo
        title={`صابر سلطانی|${title}`}
        description={desc}
        canonical={`https://soltanidev.com${url}`}
        openGraph={{
          url: `https://soltanidev.com${url}`,
          title: `صابر سلطانی|${title}`,
          description: desc,
          locale: 'ir_IR',
          images: [
            {
              url: img1,
              width: 500,
              height: 500,
              alt: `صابر سلطانی|${title}`,
              type: 'image/png',
            },
            {
              url: img2,
              width: 500,
              height: 500,
              alt: `صابر سلطانی|${title}`,
              type: 'image/png',
            },
          ],
          site_name: 'صابر سلطانی | SoltaniDev',
        }}
      />
    </>
  );
};

export default Seo;
