import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';

import styles from './styles';
import HomeStack from './HomeStack';
import Settings from '@pages/Settings/Settings';
import { useAppLanguage } from '@hooks/utils/useAppLanguage';

const Tab = createBottomTabNavigator();

const AppContainer = () => {
  const { t, i18n } = useTranslation();
  const { changeAppLanguage } = useAppLanguage(false);

  const renderRightHeader = () => {
    const selectLang = i18n.language === 'en' ? 'ar' : 'en';

    return (
      <TouchableOpacity onPress={changeAppLanguage}>
        <Text>{t(`langs.${selectLang}`)}</Text>
      </TouchableOpacity>
    );
  };

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
            tabBarLabel: t('bottomTab.home'),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            headerRight: renderRightHeader,
            headerRightContainerStyle: styles.headerRightSpacing,
            tabBarLabel: t('bottomTab.settings'),
            headerTitle: t('bottomTab.settings'),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
