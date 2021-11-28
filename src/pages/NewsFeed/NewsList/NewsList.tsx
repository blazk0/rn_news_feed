import React, { useState } from 'react';
import { FlatList } from 'react-native';
import Fuse from 'fuse.js';
import { useTranslation } from 'react-i18next';

import styles from './NewsList.styles';
import Loading from '@components/common/Loading';
import { useGetNews } from '@hooks/queries/news';
import { Props } from './Props';
import NewsItem from '@components/NewsFeed/NewsItem';
import Input from '@components/common/Input';
import Container from '@components/common/Container';
import RefreshControl from '@components/common/RefreshControl';

const NewsList = ({}: Props) => {
  const [text, setText] = useState('');
  const { t } = useTranslation();
  const { data, isLoading, isRefetching, refetch } = useGetNews();

  if (isLoading) {
    return <Loading />;
  }

  const getFilteredNews = () => {
    if (text && data?.results) {
      const options = {
        threshold: 0.3,
        keys: ['content', 'creator', 'description', 'keywords', 'title'],
      };

      const fuse = new Fuse(data?.results, options);

      return fuse.search(text).map(item => item.item);
    }

    return data?.results;
  };

  return (
    <Container noPadding>
      <FlatList
        data={getFilteredNews()}
        onRefresh={refetch}
        refreshing={isRefetching}
        refreshControl={<RefreshControl refreshing={isRefetching} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        keyExtractor={(item, idx) => idx.toString()}
        renderItem={({ item }) => <NewsItem news={item} />}
        ListHeaderComponent={
          <Input
            placeholder={t('newsList.searchNews')}
            onChangeText={setText}
          />
        }
      />
    </Container>
  );
};

export default NewsList;
