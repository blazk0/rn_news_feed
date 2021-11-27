import { NewsResult } from '@interfaces/api/news';

export type ParamTypes = {
  NewsList: undefined;
  NewsDetails: { news: NewsResult };
};
