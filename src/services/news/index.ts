import { NewsResponse } from '@interfaces/api/news';
import axios from 'axios';

export const getNews = async () => {
  try {
    const res = await axios.get<NewsResponse>('/news?country=us&language=en');

    return res.data;
  } catch (err) {
    throw err;
  }
};
