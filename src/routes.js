import React from 'react';
import {View} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Billet from './pages/BilletDetail';

import AddButton from './components/AddButton';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName="CreditCard" tabBarOptions={{
      showLabel: true,
      inactiveTintColor: '#FFFFFF',
      activeTintColor: '#152238',
      style: {
        backgroundColor: '#3377B6',
      }
    }} style={{height: 64}}>
        <Tab.Screen  name="CreditCard" component={Dashboard } options={{
            tabBarLabel: 'Cartão',
            tabBarIcon: ({color}) => <MaterialCommunityIcons name="credit-card-plus-outline" size={36} color={color} />
          }}/>
        <Tab.Screen  name="Dashboard" component={ AddButton } options={{
            tabBarIcon: ({color}) => <AddButton color={color}/>,
            showLabel: false,
          }}/>

          <Tab.Screen  name="Termos" component={Dashboard} options={{
            tabBarLabel: 'Termos',
            tabBarIcon: ({color}) => <MaterialCommunityIcons name="file-document-edit-outline" size={36} color={color} />
          }}/>
      </Tab.Navigator>
  )
}
export default function Routes(isSigned = false) {
  return !isSigned ? (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Billet" component={Billet} />

    </Stack.Navigator>
  ) : (

  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Tab" component={TabNavigator}/>
    <Stack.Screen name="Billet" component={Billet} />

  </Stack.Navigator>
    
  );
}
