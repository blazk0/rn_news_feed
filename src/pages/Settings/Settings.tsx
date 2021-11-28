import React from 'react';
import { useAtom } from 'jotai';
import { StatusBar } from 'react-native';

import Container from '@components/common/Container';
import Switch from '@components/common/Switch';
import { themeAtom } from '@store/theme';

const Settings = () => {
  const [theme, setTheme] = useAtom(themeAtom);

  const changeTheme = () => {
    const themeToChange = theme === 'light' ? 'dark' : 'light';
    const statusBar =
      themeToChange === 'dark' ? 'light-content' : 'dark-content';

    StatusBar.setBarStyle(statusBar);
    StatusBar.setBackgroundColor(themeToChange === 'light' ? 'white' : 'black');
    setTheme(themeToChange);
  };

  return (
    <Container>
      <Switch
        label="settings.darkMode"
        value={theme !== 'light'}
        onChange={changeTheme}
      />
    </Container>
  );
};

export default Settings;
