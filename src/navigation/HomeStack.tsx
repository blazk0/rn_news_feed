import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NewsList from '@pages/NewsFeed/NewsList';
import NewsDetails from '@pages/NewsFeed/NewsDetails';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="NewsList" component={NewsList} />
      <Stack.Screen name="NewsDetails" component={NewsDetails} />
    </Stack.Navigator>
  );
};

export default HomeStack;
