import React from 'react';
import ProviderApp from '../components/provider';
import App from '../components/App';
import Results from '../features/results/searchResults';
import {
  SWApiResponse,
  SWCharacter,
  SWCharacterWithFilms,
} from '../interface/interface';
export default function Home({
  data,
  dataDetails,
  filmData,
}: {
  data: SWApiResponse;
  dataDetails: SWCharacter | null;
  filmData: SWCharacterWithFilms;
}) {
  return (
    <ProviderApp>
      <App>
        <Results
          result={data}
          filmsResult={filmData}
          detailResult={dataDetails}
          isSuccess={true}
          isFetching={false}
        />
      </App>
    </ProviderApp>
  );
}

export async function getServerSideProps({
  query: { search, page, detail },
}: {
  query: {
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
    return {
      props: {
        data,
        dataDetails,
        filmData,
      },
    };
  }
  const dataDetails = null;
  return {
    props: {
      data,
      dataDetails,
      filmData,
    },
  };
}
