import { useQuery } from 'react-query';

import { getNews } from '@services/news';

export const useGetNews = () => {
  return useQuery('news', getNews);
};
