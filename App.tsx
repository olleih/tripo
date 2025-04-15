import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { RootStackParamList } from './src/types';

import Login from './src/Screens/Onboarding/Login';
import Home from './src/Screens/Main/Home/Home';

const Stack = createNativeStackNavigator<RootStackParamList>();

const OnboardingStack = () => {
  return (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen 
      name="Login" 
      component={Login} 
      options={{ headerShown: true, title: "Login to Tripo" }} />
  </Stack.Navigator>
  );
}

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ headerShown: false }} 
        />
  </Stack.Navigator>
  );
}

const TripStack = () => {
  return(
    <></>
  );
}



const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator
      screenOptions={{ headerShown: false }}
  >
    <Tab.Screen name="Home" component={HomeStack} />
    <Tab.Screen name="Trip" component={TripStack} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login"
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={OnboardingStack} />
          <Stack.Screen name="Main" component={Tabs} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;