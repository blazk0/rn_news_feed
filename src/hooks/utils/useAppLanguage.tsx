import { useEffect } from 'react';
import { I18nManager } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RnRestart from 'react-native-restart';
import { useTranslation } from 'react-i18next';

export const useAppLanguage = (detectLang = true) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (detectLang) {
      detectAppLanguage();
    }
  }, []);

  const detectAppLanguage = async () => {
    const selectedLang = await AsyncStorage.getItem('lang');

    if (selectedLang) {
      i18n.changeLanguage(selectedLang);
    }
  };

  const changeAppLanguage = async () => {
    const selectedLang = i18n.language === 'en' ? 'ar' : 'en';

    await AsyncStorage.setItem('lang', selectedLang);
    I18nManager.forceRTL(selectedLang === 'ar');
    RnRestart.Restart();
  };

  return {
    changeAppLanguage,
  };
};
