import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/core';

import styles from './styles';
import { Props } from './Props';
import { ParamTypes } from '@navigation/ParamTypes';

const NewsItem = ({ news }: Props) => {
  const navigation = useNavigation<NavigationProp<ParamTypes>>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('NewsDetails', { news })}>
      {!!news.image_url && news.image_url.startsWith('https') && (
        <Image style={styles.img} source={{ uri: news.image_url }} />
      )}

      <View style={styles.titleContainer}>
        <Text style={styles.title}>{news.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NewsItem;
