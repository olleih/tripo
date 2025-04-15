import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

interface LoginFormProps {
    email: string;
    setEmail: (email: string) => void;
    password: string;
    setPassword: (password: string) => void;
    isLogin: boolean;
    handleAuthentication: () => void;
    toggleLoginMode: () => void;
  }

  const LoginForm = ({
    email,
    setEmail,
    password,
    setPassword,
    isLogin,
    handleAuthentication,
    toggleLoginMode,
  }: LoginFormProps) => {
  
  return (
    <View >
      <Text>Shake and Serve</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        autoCapitalize="none"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <Button 
        title={isLogin ? 'Sign In' : 'Sign Up'} 
        onPress={handleAuthentication}  />
      <Text onPress={toggleLoginMode}>
        {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Sign In'}
      </Text>
    </View>
  );
};

export default LoginForm;

