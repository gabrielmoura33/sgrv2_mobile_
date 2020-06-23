import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SignIn from './pages/SignIn';
<<<<<<< HEAD
import Dashboard from './pages/Dashboard';
=======
// import Dashboard from './pages/Dashboard';
// import Profile from './pages/Profile';
>>>>>>> 7c280fe6aa42f66a0d60781eb2a31fd1d581940a

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
