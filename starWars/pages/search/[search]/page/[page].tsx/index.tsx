import { useRouter } from 'next/router';
import React from 'react';
import { SWApiResponse } from '../../../../../interface/interface';

export default function Page({
  search,
  page,
  data,
}: {
  search: string;
  page: string;
  data: SWApiResponse;
}) {
  console.log(data);
  return (
    <div>
      Search {search} Page {page}{' '}
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          search: 'luke',
          page: '1',
        },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context: {
  params: { search: string; page: string };
}) {
  const { params } = context;
  const { search, page } = params;
  const res = await fetch(`https://swapi.dev/api/people/`);
  const data = await res.json();
  console.log(data);
  return {
    props: {
      search,
      page,
      data,
    },
  };
}
