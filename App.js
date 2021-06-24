import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {HomePage} from './src/screens/homepage';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';



const AuthStack = createStackNavigator();
export default () => (
  <NavigationContainer>
    <AuthStack.Navigator>
    
    <AuthStack.Screen name="Homepage" component={HomeStack} options={{ headerShown:false }}/>
  
   


    </AuthStack.Navigator>
  </NavigationContainer>

)

const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Order') {
          iconName = focused
            ? 'home'
            : 'home-outline';
        } else if (route.name === 'Go Out') {
          iconName = focused ? 'heart' : 'heart-outline';
        } else if (route.name === 'Pro') {
          iconName = focused ? 'happy' : 'happy-outline';
        } 
        else if (route.name === 'Donate') {
          iconName = focused ? 'heart' : 'heart-outline';
        } 

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'gray',
      inactiveTintColor: '#787878',
    }}>
      <Tab.Screen name="Order" component={HomePage} />
      <Tab.Screen name="Go Out" component={HomePage} />
      <Tab.Screen name="Pro" component={HomePage} />
      <Tab.Screen name="Donate" component={HomePage} />
    </Tab.Navigator>
  );
}