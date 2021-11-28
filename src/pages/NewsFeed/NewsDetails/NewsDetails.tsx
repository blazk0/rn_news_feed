import React from 'react';
import { View, Image, TouchableOpacity, Linking, Button } from 'react-native';
import dayjs from 'dayjs';

import Container from '@components/common/Container';
import styles from './NewsDetails.styles';
import { Props } from './Props';
import Text from '@components/common/Text';
import { useTranslation } from 'react-i18next';

const NewsDetails = ({ route, navigation }: Props) => {
  // news api doesn't offer any way of getting news by id unfortuntely
  // will be empty screen when navigating by deep linking
  const { t } = useTranslation();
  const news = route.params.news;

  const openUrl = () => {
    Linking.openURL(news.link);
  };

  if (news === 'news') {
    return (
      <View style={styles.center}>
        <Button
          title={t('newsDetails.goBack')}
          onPress={() => navigation.navigate('NewsList')}
        />
      </View>
    );
  }

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
          <Text style={styles.text}>
            {dayjs(news.pubDate).format('DD/MM/YYYY')}
          </Text>
        )}
      </View>
    </Container>
  );
};

export default NewsDetails;
