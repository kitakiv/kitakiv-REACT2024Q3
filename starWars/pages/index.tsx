import React from 'react';
import ProviderApp from '../components/provider';
import App from '../components/App';
import Results from '../features/results/searchResults';
import {
  SWApiResponse,
  SWCharacter,
  SWCharacterWithFilms,
} from '../interface/interface';
import { NextApiRequest, NextApiResponse } from 'next';
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
  res,
  req,
}: {
  query: {
    search: string | undefined;
    page: string | undefined;
    detail: string | undefined;
  };
  res: NextApiResponse;
  req: NextApiRequest;
}) {
  if (!page && !search) {
    const newSearch = req.cookies['search'] || '';
    return {
      redirect: {
        destination: `/?search=${newSearch}&page=1`,
        permanent: false,
      },
    };
  } else {
    res.setHeader('Set-Cookie', `search=${search || ''}; path=/; expires=Fri`);
  }
  const result = await fetch(
    `https://swapi.dev/api/people/?search=${search || ''}&page=${page || '1'}`
  );
  const data = await result.json();
  const filmRes = await fetch(`https://swapi.dev/api/films/`);
  const filmData = await filmRes.json();
  if (detail) {
    const result = await fetch(`https://swapi.dev/api/people/${detail}`);
    const dataDetails = await result.json();
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
