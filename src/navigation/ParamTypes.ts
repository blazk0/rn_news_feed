import { NewsResult } from '@interfaces/api/news';

export type ParamTypes = {
  Home: undefined;
  Settings: undefined;
  NewsList: undefined;
  NewsDetails: { news: NewsResult };
};
