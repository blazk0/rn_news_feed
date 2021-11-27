import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';
import { Props } from './Props';

const NewsItem = ({ news }: Props) => {
  return (
    <View style={styles.container}>
      {!!news.image_url && news.image_url.startsWith('https') && (
        <Image style={styles.img} source={{ uri: news.image_url }} />
      )}

      <TouchableOpacity style={styles.titleContainer}>
        <Text style={styles.title}>{news.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewsItem;
