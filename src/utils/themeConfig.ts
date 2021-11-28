import { DefaultTheme, DarkTheme } from '@react-navigation/native';

const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
  },
};

export { lightTheme, darkTheme };
