import type { NextPage } from 'next';
import Layout from '../components/common/Layout';
import Main from '../components/common/Main/Main';
import type { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
const Home: NextPageWithLayout = () => {
  return <Main />;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Home;
