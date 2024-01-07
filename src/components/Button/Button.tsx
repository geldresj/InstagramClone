import { Pressable, Text,StyleSheet } from 'react-native'
import React from 'react';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

interface IButton {
    text?:String,
    onPress? : () => void 
}

const Button = ({text = "", onPress = () => {}}:IButton) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
          <Text style={styles.text}>{ text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 5,

    padding: 5,

    alignItems: 'center',

        margin: 5,
    flex:1,
  },
  text: {
    color: colors.black,
    fontWeight: fonts.weight.semi,
  },
});
export default Button