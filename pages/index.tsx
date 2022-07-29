import type { NextPage } from 'next';
import Layout from '../components/common/Header/Layout';
import Main from '../components/common/Header/Main/Main';

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Main />
      </Layout>
    </>
  );
};

export default Home;
