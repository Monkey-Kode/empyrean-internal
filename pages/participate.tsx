import Form from '../components/forms/Form';
import FormTitleArea from '../components/common/FormTitleArea';
import Layout from '../components/common/Layout';
import { NextPageWithLayout } from './_app';
import { QuestionsProvider } from '../framework/context/questions';
import { SectionIndexProvider } from '../framework/context/section';
import { QuestionsIndexProvider } from '../framework/context/question';

const Participate: NextPageWithLayout = () => {
  return (
    <QuestionsProvider>
      <SectionIndexProvider>
        <QuestionsIndexProvider>
          <FormTitleArea title="Participate" />
          <main>
            <Form />
          </main>
        </QuestionsIndexProvider>
      </SectionIndexProvider>
    </QuestionsProvider>
  );
};
Participate.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Participate;
