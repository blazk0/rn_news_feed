import React from 'react';
import { View, Text } from 'react-native';

import styles from './NewsDetails.styles';
import { Props } from './Props';

const NewsDetails = ({}: Props) => {
  return (
    <View style={styles.container}>
      <Text>News Details</Text>
    </View>
  );
};

export default NewsDetails;
