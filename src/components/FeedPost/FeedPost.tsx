import {View, Text, Image} from 'react-native';
import React from 'react';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../styles';
interface IFeedPost {
  post: Post;
  isVisible?: boolean;
}

const FeedPost = () => {
  return (
    <View style={styles.post}>
      {/*Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>jgeldres </Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>
      {/*Content */}
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
        style={styles.image}
      />
      {/*footer  */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name={'heart'}
            size={24}
            style={styles.icon}
            color={colors.accent}
          />
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={{marginLeft: 'auto'}}
            color={colors.black}
          />
        </View>

        {/*Likes */}
        <Text style={styles.text}>
          Liked by <Text style={styles.bold}>andrea </Text> and {'  '}
          <Text style={styles.bold}>88 others </Text>
        </Text>

        {/*Post Description */}
        <Text style={styles.text}>
          <Text style={{fontWeight: fonts.weight.bold}}>jgeldres </Text>
          QQQQhis is a Post Description, it could be a large text!!! , This text
          is for test purpose
        </Text>

        {/*Comments */}
        <Text> View all 16 Comments</Text>
        <View style={styles.comment}>
          <Text style={styles.text}>
            <Text style={{fontWeight: fonts.weight.bold}}>jgeldres </Text>
            This is a Comment of Post
          </Text>
          <AntDesign name={'hearto'} style={styles.icon} color={colors.black} />
        </View>

        {/* Posted date*/}
        <Text>19 December 2023</Text>
      </View>
    </View>
  );
};

export default FeedPost;
