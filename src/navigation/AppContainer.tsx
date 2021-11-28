import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';
import { useAtom } from 'jotai';

import styles from './styles';
import HomeStack from './HomeStack';
import Settings from '@pages/Settings';
import { useAppLanguage } from '@hooks/utils/useAppLanguage';
import { darkTheme, lightTheme } from '@utils/themeConfig';
import { themeAtom } from '@store/theme';
import Text from '@components/common/Text';

const Tab = createBottomTabNavigator();

const AppContainer = () => {
  const { t, i18n } = useTranslation();
  const [theme] = useAtom(themeAtom);
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
    <NavigationContainer theme={theme === 'light' ? lightTheme : darkTheme}>
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
