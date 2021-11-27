import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import dayjs from 'dayjs';

import Container from '@components/common/Container';
import styles from './NewsDetails.styles';
import { Props } from './Props';

const NewsDetails = ({ route }: Props) => {
  const { news } = route.params;

  const openUrl = () => {
    Linking.openURL(news.link);
  };

  return (
    <Container scrollEnabled noPadding>
      {!!news.image_url && news.image_url.startsWith('https') && (
        <Image source={{ uri: news.image_url }} style={styles.newsImg} />
      )}

      <View style={styles.container}>
        <Text style={styles.title}>{news.title}</Text>
        {!!news.content && <Text style={styles.text}>{news.content}</Text>}
        {!!news.description && (
          <Text style={styles.text}>{news.description}</Text>
        )}

        {!!news.link && (
          <TouchableOpacity onPress={openUrl}>
            <Text style={styles.link}>{news.link}</Text>
          </TouchableOpacity>
        )}

        {!!news.pubDate && (
          <Text>{dayjs(news.pubDate).format('DD/MM/YYYY')}</Text>
        )}
      </View>
    </Container>
  );
};

export default NewsDetails;
