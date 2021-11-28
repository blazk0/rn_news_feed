import { useTheme } from '@react-navigation/native';
import React, { FC } from 'react';
import { Text as RNText, StyleProp, TextStyle } from 'react-native';

interface Props {
  style?: StyleProp<TextStyle>;
}

const Text: FC<Props> = ({ style, children }) => {
  const { colors } = useTheme();

  return <RNText style={[{ color: colors.text }, style]}>{children}</RNText>;
};

export default Text;
