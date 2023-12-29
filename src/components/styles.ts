import {StyleSheet} from 'react-native';
import fonts from '../theme/fonts';
import colors from '../theme/colors';

export default StyleSheet.create({
  bold: {fontWeight: fonts.weight.bold},
  comment: {flexDirection: 'row', alignItems: 'center'},
  commentText: {
    color: colors.black,
    backgroundColor: 'blue',
  },
  footer: {padding: 10},
  header: {flexDirection: 'row', alignItems: 'center'},
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  iconContainer: {flexDirection: 'row', padding: 10},
  icon: {marginHorizontal: 5},
  post: {},
  text: {
    color: colors.black,
  },
  threeDots: {marginLeft: 'auto'},
  userAvatar: {width: 50, height: 50, borderRadius: 25, marginRight: 10},
  userName: {
    fontWeight: fonts.weight.bold,
    fontSize: fonts.size.lg,
    color: colors.black,
  },
});
