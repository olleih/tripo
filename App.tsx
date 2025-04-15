import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  RootStackParamList,
  HomeStackParamList,
  TripStackParamList,
  AuthStackParamList,
} from './src/types';

import Login from './src/Screens/Onboarding/Login';
import Home from './src/Screens/Main/Home/Home';
import Trip from './src/Screens/Main/Trips/Trip';
import Trips from './src/Screens/Main/Trips/Trips';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const HomeStackNav = createNativeStackNavigator<HomeStackParamList>();
const TripStackNav = createNativeStackNavigator<TripStackParamList>();

const OnboardingStack = () => (
  <AuthStack.Navigator initialRouteName="LoginScreen">
    <AuthStack.Screen name="LoginScreen" component={Login} options={{ title: "Login to Tripo" }} />
  </AuthStack.Navigator>
);

const HomeStack = () => (
  <HomeStackNav.Navigator initialRouteName="HomeScreen">
    <HomeStackNav.Screen name="HomeScreen" component={Home} options={{ headerShown: false }} />
  </HomeStackNav.Navigator>
);

const TripStack = () => (
  <TripStackNav.Navigator initialRouteName="Trip">
    <TripStackNav.Screen name="Trips" component={Trips} />
  </TripStackNav.Navigator>
);



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
      <RootStack.Navigator initialRouteName="AuthStack" screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="AuthStack" component={OnboardingStack} />
        <RootStack.Screen name="MainTabs" component={Tabs} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;