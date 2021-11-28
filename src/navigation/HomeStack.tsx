import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';

import NewsList from '@pages/NewsFeed/NewsList';
import NewsDetails from '@pages/NewsFeed/NewsDetails';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NewsList"
        component={NewsList}
        options={{
          headerTitle: t('newsList.headerTitle'),
        }}
      />

      <Stack.Screen
        name="NewsDetails"
        component={NewsDetails}
        options={{
          headerTitle: t('newsDetails.headerTitle'),
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
