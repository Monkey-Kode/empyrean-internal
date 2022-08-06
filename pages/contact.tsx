import { useEffect } from 'react';
import Contact from '../components/common/Contact';
import Layout from '../components/common/Layout';
import { useTheme } from '../framework/context/theme';
import { NextPageWithLayout } from './_app';

const ContactPage: NextPageWithLayout = () => {
  const { state: theme, dispatch: themeDispatch } = useTheme();
  useEffect(() => {
    themeDispatch({ type: 'UPDATE_THEME_COLOR', payload: 'blue' });
  }, [themeDispatch]);

  return <Contact />;
};
ContactPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ContactPage;
