import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, TextInput } from 'react-native';

import { Props } from './Props';
import styles from './styles';

const Input = (props: Props) => {
  const { i18n } = useTranslation();

  return (
    <View style={styles.inputContainer}>
      <TextInput
        {...props}
        style={{ textAlign: i18n.language === 'en' ? 'left' : 'right' }}
      />
    </View>
  );
};

export default Input;
