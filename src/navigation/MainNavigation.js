import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './TabNavigation';
import PhotoNavigation from './PhotoNavigation';
import MessageNavigation from './MessageNavigation';

const Stack = createStackNavigator();

// Navitation kind => Draw, Tab, Stack
const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode='none'
        mode='modal'
        initialRouteName='TabNavigation'
      >
        <Stack.Screen name='TabNavigation' component={TabNavigation} />
        <Stack.Screen name='PhotoNavigation' component={PhotoNavigation} />
        <Stack.Screen name='MessageNavigation' component={MessageNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
