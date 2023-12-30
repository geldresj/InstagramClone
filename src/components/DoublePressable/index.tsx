import {ReactNode} from 'react';
import {View, Text, Pressable} from 'react-native';
interface IDoublePressable {
  onDoublePress?: () => void;
  children: ReactNode;
}
const DoublePressable = ({
  onDoublePress = () => {},
  children,
}: IDoublePressable) => {
  let lasTap = 0;
  const handleDoblePress = () => {
    const now = Date.now();
    if (now - lasTap < 300) {
      onDoublePress();
    }
    lasTap = now;
  };

  return <Pressable onPress={handleDoblePress}>{children}</Pressable>;
};
export default DoublePressable;
