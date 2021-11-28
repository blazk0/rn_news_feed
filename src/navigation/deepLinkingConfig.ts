import { LinkingOptions } from '@react-navigation/native';
import { ParamTypes } from './ParamTypes';

const linking: LinkingOptions<ParamTypes> = {
  prefixes: ['newsfeed://'],
  config: {
    screens: {
      Home: {
        screens: {
          initialRouteName: 'NewsList',
          // ideal case scenario would be passing id as a param and using that id to fetch particular news by that id
          NewsDetails: 'newsdetails/:news',
        },
      },
    },
  },
};

export default linking;

// npx uri-scheme open newsfeed://newsdetails/news --ios
// npx uri-scheme open newsfeed://newsdetails/news --android
