import Head from 'next/head'
import Theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
            <title>Bohdan Tokmach - Web Developer Portfolio</title>
            <meta property="og:title" content="Bohdan Tokmach - Web Developer Portfolio " key="title" />
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 