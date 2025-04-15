import React from 'react';
import { Button } from 'react-native';
import { auth } from '../../../firebaseConfig.js';
import { signOut } from '@firebase/auth';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../types.js';

type Props = NativeStackScreenProps<AuthStackParamList, 'LoginScreen'>;

const LogOut: React.FC<Props> = ({ navigation })  => {

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully!");
      navigation.navigate('LoginScreen');
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

