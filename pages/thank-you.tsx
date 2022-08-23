import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import Layout from '../components/common/Layout';

const ThankYou: NextPageWithLayout = () => {
  return (
    <div className="wrap my-16">
      <h1>Thank you for your interest!</h1>
      <p>We will send you an email confirmation shortly.</p>
    </div>
  );
};

ThankYou.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ThankYou;
