import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';

// const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();
export default function Routes(isSigned = false) {
  return !isSigned ? (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
}
