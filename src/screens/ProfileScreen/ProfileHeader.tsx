import {View, Text, Image} from 'react-native';
import styles from './styles';

import user from '../../assets/data/user.json';
import Button from '../../components/Button/Button';

const ProfileHeader = () => {
  return (
    <View>
      <View style={styles.headerRow}>
       
        {/*Profile Image */}
        <Image source={{uri: user.image}} style={styles.avatar} />
       
        {/*Post Followers Following numbers*/}
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>21</Text>
          <Text>Posts</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>3</Text>
          <Text>Followers</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>5</Text>
          <Text>Following</Text>
        </View>
      </View>
      <Text style={styles.name}> {user.username}</Text>
      <Text> {user.bio}</Text>

      {/* Button */}
      <View style={{flexDirection: 'row'}}>
        <Button
          text="Edit Profile"
          onPress={() => console.warn('On Edit Profile')}
        />
        <Button
          text="Another"
          onPress={() => console.warn('On another button')}
        />
      </View>
    </View>
  );
};

export default ProfileHeader;
