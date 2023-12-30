import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import fonts from './src/theme/fonts';
import FeedPost from './src/components/FeedPost/FeedPost';
import posts from './src/assets/data/posts.json';
const App = () => {
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({item}) => <FeedPost post={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bold: {fontWeight: fonts.weight.bold},
});
export default App;
