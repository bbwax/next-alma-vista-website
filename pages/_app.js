import '../styles/index.css';
import '../styles/styles.css';
import Layout from '../components/Layout';
import { Analytics } from '@vercel/analytics/react';




function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </>
  );
}

export default MyApp;