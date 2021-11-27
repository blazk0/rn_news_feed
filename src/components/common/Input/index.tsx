import React from 'react';
import { View, TextInput } from 'react-native';

import { Props } from './Props';
import styles from './styles';

const Input = (props: Props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput {...props} />
    </View>
  );
};

export default Input;
