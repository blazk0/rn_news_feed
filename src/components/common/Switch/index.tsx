import React from 'react';
import { View, Switch as RnSwitch } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Props } from './Props';
import styles from './styles';
import Text from '../Text';

const Switch = ({ value, onChange, label }: Props) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{t(label)}</Text>
      <RnSwitch value={value} onChange={onChange} />
    </View>
  );
};

export default Switch;
