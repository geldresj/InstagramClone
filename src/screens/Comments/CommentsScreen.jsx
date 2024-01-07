import {View, Text, FlatList} from 'react-native';
import React from 'react';
import comments from '../../assets/data/comments.json';
import Comment from '../../components/Comment/Comment';
import Input from '../../components/Comment/input';

const CommentScreen = () => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={comments}
        renderItem={({item}) => <Comment comment={item} />}
        style={{padding: 10}}
      />
      <Input />
    </View>
  );
};

export default CommentScreen;
