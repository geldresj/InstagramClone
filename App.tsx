import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import colors from './src/theme/colors';
import fonts from './src/theme/fonts';
import FeedPost from './src/components/FeedPost/FeedPost';
const App = () => {
  return <FeedPost />;
};

const styles = StyleSheet.create({
  bold: {fontWeight: fonts.weight.bold},
});
export default App;
