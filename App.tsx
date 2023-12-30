import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import colors from './src/theme/colors';
import fonts from './src/theme/fonts';
import FeedPost from './src/components/FeedPost/FeedPost';

const post = {
  id: '1',
  createdAt: '19 December 2021',
  image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus unde blanditiis. Eos fugiat dolorem ea fugit aut sapiente corrupti autem dolores deleniti architecto, omnis, amet unde dignissimos quam minima?',
  user: {
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
    username: 'vadimnotjustdev',
  },
  nofComments: 11,
  nofLikes: 33,
  comments: [
    {
      id: '1',
      comment: 'Hello there',
      user: {
        username: 'vadimnotjustdev',
      },
    },
    {
      id: '2',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. H',
      user: {
        username: 'vadimnotjustdev',
      },
    },
  ],
};

const App = () => {
  return <FeedPost post={post} />;
};

const styles = StyleSheet.create({
  bold: {fontWeight: fonts.weight.bold},
});
export default App;
