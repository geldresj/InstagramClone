import {View, Text, Image} from 'react-native';
import React from 'react';
import {IPost} from '../../types/models';

const FeedGridItem = ({post}: {post: IPost}) => {
  return (
    <View style={{flex: 1, margin: 1, aspectRatio: 1, maxWidth: '33%'}}>
      <Image source={{uri: post.image || post.images[0]}} style={{flex: 1}} />
    </View>
  );
};

export default FeedGridItem;
