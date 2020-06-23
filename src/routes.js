import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import SignIn from './pages/SignIn';
// import Dashboard from './pages/Dashboard';
// import Profile from './pages/Profile';

// const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();
export default function Routes(isSigned = false) {
  return !isSigned ? (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  ) : (
    <View />
  );
}
