import React, { FC } from 'react';
import { ScrollView, View } from 'react-native';

import { Props } from './Props';
import styles from './styles';

const Container: FC<Props> = ({ children, scrollEnabled, noPadding }) => {
  if (scrollEnabled) {
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={[!noPadding && styles.spacing]}
          showsVerticalScrollIndicator={false}>
          {children}
        </ScrollView>
      </View>
    );
  }

  return (
    <View style={[styles.container, !noPadding && styles.spacing]}>
      {children}
    </View>
  );
};

export default Container;
