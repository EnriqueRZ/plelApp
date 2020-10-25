import React from 'react';

// importing screens
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from './app/screens/Home';
import About from "./app/screens/About";
import Splash from './app/screens/Splash';
import Books from './app/screens/Books';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Books"
        component={Books}
        options={{
          tabBarLabel: 'Libros',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="library-books" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: 'Acerca de',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="comment-question" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBarOptions={{
          activeTintColor: '#e91e63',
        }}
      >
        <Tab.Screen name="Splash" component={Splash} headerMode="none" />
        <Tab.Screen name="Home" component={HomeStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
