import { ActivityIndicator, Pressable, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import SafeAreaComponent from '../../components/SafeAreaView';

import styles from './styles';
import {
  fetchUserDetails,
  logout,
} from '../../infracstruture/Redux/slice/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import DetailItemComponent from './components/DetailItemComponent';
import { RootState } from '../../infracstruture/Redux/store';

const Profile = () => {
  const dispatch = useDispatch();
  const { loading, userDetails } = useSelector(
    (state: RootState) => state.auth,
  );

  useEffect(() => {
    if (userDetails === null) {
      dispatch(fetchUserDetails());
    }
  }, [dispatch, userDetails]);

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <SafeAreaComponent>
      <View style={styles.container}>
        <View style={styles.headingBox}>
          <Text style={styles.heading}>Profile</Text>
        </View>

        <View style={styles.profileContainer}>
          <Text style={styles.nameField}>
            {userDetails?.firstName} {userDetails?.lastName}
          </Text>
          <Text style={styles.emailField}>{userDetails?.email}</Text>
        </View>

        <View style={styles.versionInfoContainer}>
          <Text style={styles.infoHeader}>Application Info</Text>
          <DetailItemComponent header="App Name" subHeader="News Application" />
          <DetailItemComponent header="version" subHeader="1.0.0" />
          <DetailItemComponent
            header="Created By"
            subHeader="Ibrahim Olalekan"
          />
        </View>
        <Pressable style={styles.logoutBtn} onPress={() => dispatch(logout())}>
          <Text style={styles.logoutBtnText}>Log out</Text>
          <Icon name="log-out-outline" size={25} />
        </Pressable>
      </View>
    </SafeAreaComponent>
  );
};

export default Profile;
