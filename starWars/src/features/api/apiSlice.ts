import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  SWApiResponse,
  SWCharacter,
  SWCharacterWithFilms,
} from '../../interface/interface';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (builder) => ({
    getDetails: builder.query<SWCharacter, string>({
      query: (id: string) => `people/${id}`,
    }),
    getFilms: builder.query<SWCharacterWithFilms, void>({
      query: () => `films`,
    }),
    getSearchAndPage: builder.query<
      SWApiResponse,
      { page: string; search: string }
    >({
      query: ({ page, search }: { page: string; search: string }) =>
        `people/?search=${search}&page=${page}`,
    }),
  }),
});

export const {
  useGetDetailsQuery,
  useGetFilmsQuery,
  useGetSearchAndPageQuery,
} = apiSlice;
