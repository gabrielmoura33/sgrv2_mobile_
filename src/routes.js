import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { lighten, darken } from 'polished';

/*
 * Pages
 */
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Billet from './pages/BilletDetail';
import HinovaPayments from './pages/HinovaPayments';
import Vehicles from './pages/Vehicles';
import Contracts from './pages/Contracts';
import Maps from './pages/Maps';

/*
 * Components
 */
import AddButton from './components/AddButton';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      tabBarOptions={{
        showLabel: true,
        inactiveTintColor: darken(0.3, '#FFF'),
        activeTintColor: lighten(0.9, '#FFFFFF'),
        style: {
          backgroundColor: '#3377B6',
        },
      }}

      style={{ height: 64 }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" size={36} color={color} />,
        }}
      />
      <Tab.Screen
        name=" "
        component={Dashboard}
        options={{
          tabBarIcon: () => <AddButton color="#FFFF" />,
        }}
        showLabel={false}
        listeners={{
          tabPress: (e) => {
            e.preventDefault(); // — > the main part
          },
        }}
      />
      <Tab.Screen
        name="Termos"
        component={Contracts}
        options={{
          tabBarLabel: 'Termos',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="file-document-edit-outline" size={36} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
export default function Routes(isSigned = false) {
  return !isSigned ? (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Billet" component={Billet} />

    </Stack.Navigator>
  ) : (

    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tab" component={TabNavigator} />

      <Stack.Screen name="Payments" component={HinovaPayments} />

      <Stack.Screen name="Vehicles" component={Vehicles} />

      <Stack.Screen name="Billet" component={Billet} />

      <Stack.Screen name="Maps" component={Maps} />

    </Stack.Navigator>

  );
}
