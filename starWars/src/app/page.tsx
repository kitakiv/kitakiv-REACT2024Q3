import React from 'react';
import ProviderApp from '../components/provider';
import App from '../components/App';
import Results from '../features/results/searchResults';
import {
  SWApiResponse,
  SWCharacter,
  SWCharacterWithFilms,
} from '../interface/interface';

async function getServerSideProps({
  searchParams: { search, page, detail },
}: {
  searchParams: {
    search: string | undefined;
    page: string | undefined;
    detail: string | undefined;
  };
}) {
  const res = await fetch(
    `https://swapi.dev/api/people/?search=${search || ''}&page=${page || '1'}`
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
    } = { data, dataDetails, filmData };
    return props;
  }
  const dataDetails = null;
  const props: {
    data: SWApiResponse;
    dataDetails: SWCharacter | null;
    filmData: SWCharacterWithFilms;
  } = { data, dataDetails, filmData };
  return props;
}

export default async function Post({
  searchParams,
}: {
  searchParams: {
    search: string | undefined;
    page: string | undefined;
    detail: string | undefined;
  };
}) {
  const {
    data,
    dataDetails,
    filmData,
  }: {
    data: SWApiResponse;
    dataDetails: SWCharacter | null;
    filmData: SWCharacterWithFilms;
  } = await getServerSideProps({
    searchParams,
  });
  return (
    <ProviderApp>
      <App>
        {' '}
        <Results
          result={data}
          filmsResult={filmData}
          detailResult={dataDetails}
          isSuccess={true}
        />
      </App>
    </ProviderApp>
  );
}
