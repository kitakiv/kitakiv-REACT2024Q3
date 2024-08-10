import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { apiSlice } from '../features/api/apiSlice';

export default function ProviderApp({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ApiProvider api={apiSlice}>
      <Provider store={store}>{children}</Provider>
    </ApiProvider>
  );
}
