import Link from 'next/link';

import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const NotFound = () => {
  return (
    <Layout>
      <Section grid>
      <div>
        <h2>Sorry, The page you are looking for can't be found</h2><br />
        <p>Go back to the <Link href='/'><a>Home</a></Link></p>
      </div>
      </Section>
    </Layout>
  )
}

export default NotFound;