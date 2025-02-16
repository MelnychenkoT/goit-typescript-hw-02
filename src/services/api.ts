import axios, { AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios';

// const BASE_URL = 'https://api.unsplash.com/search/photos';
const ACCESS_KEY = 'LlTo8I73Xblj1Lm6nOrfb5evGyVFNPm0rMbqM8MCuFQ';

// const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

const client = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    'Accept-Version': 'v1',
    Authorization: `Client-ID ${ACCESS_KEY}`,
  } as RawAxiosRequestHeaders,
});

const config: AxiosRequestConfig = {};

export const fetchPhotos = async <T>(params: object): Promise<T> => {
  const { data } = await client.get<T>(`/search/photos`, {
    params,
  });
  return data;
};