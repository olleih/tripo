import React from 'react';
import { Button } from 'react-native';
import { auth } from '../../../firebaseConfig.js';
import { signOut } from '@firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types.js';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LogOut: React.FC<Props> = ({ navigation })  => {

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully!");
      navigation.navigate('Login');
    } catch (error) {
      // @ts-ignore
      console.error("Logout error:", error.message);
    }
  };

  return (
      <Button title="Logout" onPress={handleLogout} />
  );
};

export default LogOut;

