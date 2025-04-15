import React, { useState, useEffect } from 'react';
import { ScrollView} from 'react-native';

import { 
        createUserWithEmailAndPassword, 
        signInWithEmailAndPassword, 
        onAuthStateChanged, User } 
        from '@firebase/auth';
import { auth } from '../../../firebaseConfig.js';

import LoginForm from './LoginForm';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

import { AuthStackParamList, RootStackParamList } from '../../types'; 
import { useNavigation } from '@react-navigation/native';

type Props = NativeStackScreenProps<AuthStackParamList, 'LoginScreen'>;

const Login: React.FC<Props> = ({ navigation: authNav }) => {
    const rootNav = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleAuthentication = async () => {
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("User signed in successfully");
        rootNav.navigate('MainTabs');
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log("User created successfully");
        rootNav.navigate('MainTabs');
      }
    } catch (error) {
      // @ts-ignore
      console.error('Authentication error:', error.code, error.message);
    }
  };

  const toggleLoginMode = () => setIsLogin(prevState => !prevState);

  return (
    <ScrollView>
        <LoginForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          isLogin={isLogin}
          handleAuthentication={handleAuthentication}
          toggleLoginMode={toggleLoginMode}
        />
    </ScrollView>
  );
};

export default Login;

