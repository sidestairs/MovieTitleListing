import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface IFunFacts {
  text: String;
  number: Number;
  found: Boolean;
  type: String;
}

export const funFactsApi = createApi({
  reducerPath: 'funFactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://numbersapi.com/' }),
  keepUnusedDataFor: 30,
  endpoints: (builder) => ({
    getFunFactsById: builder.query<IFunFacts, String>({
      query: (id) => `${id}?json`,
    }),
  }),
});

export const { useGetFunFactsByIdQuery } = funFactsApi;
