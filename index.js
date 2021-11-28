import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import './src/locales/i18n';

import { setAxiosDefaults } from '@utils/axiosConfig';

setAxiosDefaults();

AppRegistry.registerComponent(appName, () => App);
