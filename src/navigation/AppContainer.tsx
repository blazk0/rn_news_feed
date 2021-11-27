import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from './HomeStack';
import Settings from '@pages/Settings/Settings';

const Tab = createBottomTabNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarIconStyle: { display: 'none' },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
