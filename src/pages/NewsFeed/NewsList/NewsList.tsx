import React from 'react';
import { View, FlatList } from 'react-native';

import styles from './NewsList.styles';
import Loading from '@components/common/Loading';
import { useGetNews } from '@hooks/queries/news';
import { Props } from './Props';
import NewsItem from '@components/NewsFeed/NewsItem';

const NewsList = ({}: Props) => {
  const { data, isLoading } = useGetNews();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data?.results}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        keyExtractor={item => item.title}
        renderItem={({ item }) => <NewsItem news={item} />}
      />
    </View>
  );
};

export default NewsList;
