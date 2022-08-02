import Form from '../components/forms/Form';
import FormTitleArea from '../components/common/FormTitleArea';
import Layout from '../components/common/Layout';
import { NextPageWithLayout } from './_app';

const Participate: NextPageWithLayout = () => {
  return (
    <>
      <FormTitleArea title="Participate" />
      <main className="wrap">
        <Form />
      </main>
    </>
  );
};
Participate.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Participate;
