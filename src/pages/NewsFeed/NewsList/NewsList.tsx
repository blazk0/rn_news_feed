import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import Fuse from 'fuse.js';

import styles from './NewsList.styles';
import Loading from '@components/common/Loading';
import { useGetNews } from '@hooks/queries/news';
import { Props } from './Props';
import NewsItem from '@components/NewsFeed/NewsItem';
import Input from '@components/common/Input';

const NewsList = ({}: Props) => {
  const [text, setText] = useState('');
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
    <View style={styles.container}>
      <FlatList
        data={getFilteredNews()}
        onRefresh={refetch}
        refreshing={isRefetching}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        keyExtractor={item => item.title}
        renderItem={({ item }) => <NewsItem news={item} />}
        ListHeaderComponent={
          <Input placeholder="Search News ..." onChangeText={setText} />
        }
      />
    </View>
  );
};

export default NewsList;
