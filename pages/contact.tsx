import Layout from '../components/common/Layout';
import { NextPageWithLayout } from './_app';

const Contact: NextPageWithLayout = () => {
  return <div className="wrap">contact form</div>;
};
Contact.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Contact;
