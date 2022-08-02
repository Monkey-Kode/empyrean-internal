import Form from '../components/forms/Form';
import FormTitleArea from '../components/common/FormTitleArea';
import Layout from '../components/common/Layout';
import { NextPageWithLayout } from './_app';
import { QuestionsProvider } from '../framework/context/questions';

const Participate: NextPageWithLayout = () => {
  return (
    <QuestionsProvider>
      <FormTitleArea title="Participate" />
      <main className="wrap">
        <Form />
      </main>
    </QuestionsProvider>
  );
};
Participate.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Participate;
