import {API_URL} from '@env';
import useSWR from 'swr';

const useHotels = () => {
  const fetcher = (url: string) => fetch(url).then(res => res.json());

  return useSWR(API_URL, fetcher);
};

export default useHotels;
