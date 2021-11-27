import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/core';

import styles from './styles';
import { Props } from './Props';
import { ParamTypes } from '@navigation/ParamTypes';

const NewsItem = ({ news }: Props) => {
  const navigation = useNavigation<NavigationProp<ParamTypes>>();

  return (
    <View style={styles.container}>
      {!!news.image_url && news.image_url.startsWith('https') && (
        <Image style={styles.img} source={{ uri: news.image_url }} />
      )}

      <TouchableOpacity
        style={styles.titleContainer}
        onPress={() => navigation.navigate('NewsDetails', { news })}>
        <Text style={styles.title}>{news.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewsItem;
