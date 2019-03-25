import React from 'react';

import { PrimaryButton } from '../../components/button/primary-button';
import { Layout } from '../../containers/layout';

const HomePage: React.FunctionComponent<{}> = () => (
  <Layout>
    <PrimaryButton>Hello World</PrimaryButton>
  </Layout>
);

export default HomePage;
