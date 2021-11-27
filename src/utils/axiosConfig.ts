import axios from 'axios';
import Config from 'react-native-config';

export const setAxiosDefaults = () => {
  axios.defaults.baseURL = 'https://newsdata.io/api/1';
  axios.defaults.headers.common['X-ACCESS-KEY'] = Config.NEWS_API_KEY;
};
