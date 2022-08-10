import Form from '../components/forms/Form';
import FormTitleArea from '../components/common/FormTitleArea';
import Layout from '../components/common/Layout';
import { NextPageWithLayout } from './_app';
import { SectionIndexProvider } from '../framework/context/section';
import { QuestionsIndexProvider } from '../framework/context/question';
import { FormStateProvider } from '../framework/context/form';
import { TitleProvider } from '../framework/context/title';
import { useTheme } from '../framework/context/theme';
import { useEffect } from 'react';

const Participate: NextPageWithLayout = () => {
  const { state: theme, dispatch: themeDispatch } = useTheme();
  useEffect(() => {
    themeDispatch({ type: 'UPDATE_THEME_COLOR', payload: 'blue' });
  }, [themeDispatch, theme]);

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
