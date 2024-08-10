import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import App from '../../components/App';
import Loader from '../../components/loader';
import { redirect, useLoaderData, useNavigation } from '@remix-run/react';
import type { LoaderFunctionArgs } from '@remix-run/node';
import Results from '../../features/results/searchResults';
import {
  SWApiResponse,
  SWCharacter,
  SWCharacterWithFilms,
} from '../../interface/interface';

export default function Home() {
  const {
    data,
    dataDetails,
    filmData,
    searchProps,
    pageProps,
    detailProps,
  }: {
    data: SWApiResponse;
    dataDetails: SWCharacter | null;
    filmData: SWCharacterWithFilms;
    searchProps: string;
    pageProps: string;
    detailProps: string;
  } = useLoaderData();
  const { state } = useNavigation();
  return (
    <Provider store={store}>
      {state === 'loading' && <Loader />}
      <App>
        <Results
          result={data}
          filmsResult={filmData}
          detailResult={dataDetails}
          isSuccess={state === 'idle'}
          page={pageProps}
          search={searchProps}
          detail={detailProps}
        />
      </App>
    </Provider>
  );
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const search = url.searchParams.get('search') || '';
  const page = url.searchParams.get('page');
  const detail = url.searchParams.get('detail');
  const searchProps = search.toString() || '';
  const pageProps = page?.toString() || '1';
  const detailProps = detail?.toString() || undefined;

  if (!search && !page) {
    redirect(`/?search=&page=1`);
  }
  const res = await fetch(
    `https://swapi.dev/api/people/?search=${searchProps || ''}&page=${pageProps || '1'}`
  );
  const data = await res.json();
  const filmRes = await fetch(`https://swapi.dev/api/films/`);
  const filmData = await filmRes.json();
  if (detail) {
    const res = await fetch(`https://swapi.dev/api/people/${detail}`);
    const dataDetails = await res.json();
    const props: {
      data: SWApiResponse;
      dataDetails: SWCharacter | null;
      filmData: SWCharacterWithFilms;
      searchProps: string;
      pageProps: string;
      detailProps: string | undefined;
    } = { data, dataDetails, filmData, searchProps, pageProps, detailProps };
    return props;
  }
  const dataDetails = null;
  const props: {
    data: SWApiResponse;
    dataDetails: SWCharacter | null;
    filmData: SWCharacterWithFilms;
    searchProps: string;
    pageProps: string;
    detailProps: string | undefined;
  } = { data, dataDetails, filmData, searchProps, pageProps, detailProps };
  return props;
};
