import React from 'react';
import Layout from '../components/layout';
import ProviderApp from '../components/provider';
import App from '../components/App';
export default function Home() {
  return (
    <Layout>
      <ProviderApp>
        <App />
      </ProviderApp>
    </Layout>
  );
}
