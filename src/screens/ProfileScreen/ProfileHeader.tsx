import user from '../../assets/data/user.json';
import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
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

        {/* */}
      </View>
    </View>
  );
};

export default ProfileHeader;
