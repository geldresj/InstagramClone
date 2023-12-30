import {View, Text, Image} from 'react-native';
import React from 'react';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../styles';
import Comment from '../Comment/Comment';
import {IPost} from '../../types/models';

interface IFeedPost {
  post: IPost;
}

const FeedPost = ({post}: IFeedPost) => {
  return (
    <View style={styles.post}>
      {/*Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: post.user.image,
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>{post.user.username} </Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>
      {/*Content */}
      <Image
        source={{
          uri: post.image,
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
          <Text style={styles.bold}>{post.nofLikes} others </Text>
        </Text>

        {/*Post Description */}
        <Text style={styles.text}>
          <Text style={{fontWeight: fonts.weight.bold}}>
            {post.user.username}{' '}
          </Text>
          {post.description}
        </Text>

        {/*Comments */}
        <Text> View all {post.nofComments} Comments</Text>
        {post.comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}

        {/* Posted date*/}
        <Text>{post.createdAt}</Text>
      </View>
    </View>
  );
};

export default FeedPost;
