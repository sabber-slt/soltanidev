import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <link rel="mask-icon" href="/soltanidev.png" color="#35515E" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/soltanidev.png" />
          <link rel="shortcut icon" href="/soltanidev.png" />
          <meta name="theme-color" content="#35515E" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="msapplication-tap-highlight" content="no" />

          <link rel="apple-touch-startup-image" href="/soltanidev.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
