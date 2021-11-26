import React from 'react';
import { View, Button } from 'react-native';

import styles from './NewsList.styles';
import { Props } from './Props';

const NewsList = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Button
        title="News Details"
        onPress={() => navigation.navigate('NewsDetails')}
      />
    </View>
  );
};

export default NewsList;
