import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import {IComment} from '../../types/models';

interface ICommentProps {
  comment: IComment;
}

const Comment = ({comment}: ICommentProps) => {
  return (
    <View>
      <View style={styles.comment}>
        <Text style={styles.text}>
          <Text style={{fontWeight: fonts.weight.bold}}>
            {comment.user.username}{' '}
          </Text>
          {comment.comment}
        </Text>
        <AntDesign name={'hearto'} style={styles.icon} color={colors.black} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bold: {fontWeight: fonts.weight.bold},
  comment: {flexDirection: 'row', alignItems: 'center'},
  commentText: {
    color: colors.black,
    backgroundColor: 'blue',
  },
  iconContainer: {flexDirection: 'row', padding: 10},
  icon: {marginHorizontal: 5},
  text: {
    color: colors.black,
  },
});

export default Comment;
