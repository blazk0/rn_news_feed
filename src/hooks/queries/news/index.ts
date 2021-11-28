import { useQuery } from 'react-query';
import { Alert } from 'react-native';
import { useTranslation } from 'react-i18next';

import { getNews } from '@services/news';

export const useGetNews = () => {
  const { t } = useTranslation();

  return useQuery('news', getNews, {
    onError: () => {
      Alert.alert(t('common.apiError'));
    },
  });
};
