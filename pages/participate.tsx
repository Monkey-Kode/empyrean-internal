import Form from '../components/forms/Form';
import FormTitleArea from '../components/common/FormTitleArea';
import Layout from '../components/common/Layout';
import { NextPageWithLayout } from './_app';
import { SectionIndexProvider } from '../framework/context/section';
import { QuestionsIndexProvider } from '../framework/context/question';
import { FormStateProvider } from '../framework/context/form';
import { TitleProvider } from '../framework/context/title';

const Participate: NextPageWithLayout = () => {
  return (
    <SectionIndexProvider>
      <QuestionsIndexProvider>
        <TitleProvider>
          <FormTitleArea />
          <main>
            <FormStateProvider>
              <Form />
            </FormStateProvider>
          </main>
        </TitleProvider>
      </QuestionsIndexProvider>
    </SectionIndexProvider>
  );
};
Participate.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Participate;
