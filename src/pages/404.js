import Head from 'next/head'
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const NotFound = () => {
  return (
    <Layout>
      <Head>
        <title>404 Page</title>
      </Head>
      <Section grid>
      <div>
        <h2>Sorry, The page you are looking for can't be found</h2><br />
      </div>
      </Section>
    </Layout>
  )
}

export default NotFound;