import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Tabs/Home';
import Search from '../screens/Tabs/Search';
import Notifications from '../screens/Tabs/Notifications';
import Profile from '../screens/Tabs/Profile';
import MessagesLink from '../components/MessagesLink';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// HOC(High order component)
const stackFactory = (initialRoute, name, customConfig) => (
  <Stack.Navigator>
    <Stack.Screen
      name={name}
      component={initialRoute}
      options={{ ...customConfig }}
    />
  </Stack.Navigator>
);

export default () => (
  <Tab.Navigator>
    <Tab.Screen name='Home'>
      {() =>
        stackFactory(Home, 'Home', {
          title: 'Home',
          headerRight: () => <MessagesLink />,
        })
      }
    </Tab.Screen>

    <Tab.Screen name='Search'>
      {() =>
        stackFactory(Search, 'Search', {
          title: 'Search',
        })
      }
    </Tab.Screen>

    <Tab.Screen
      name='Add'
      component={View}
      listeners={({ navigation }) => ({
        tabPress: (e) => {
          e.preventDefault();
          navigation.navigate('PhotoNavigation');
        },
      })}
    />

    <Tab.Screen name='Notifications'>
      {() =>
        stackFactory(Notifications, 'Notifications', {
          title: 'Notifications',
        })
      }
    </Tab.Screen>

    <Tab.Screen name='Profile'>
      {() =>
        stackFactory(Profile, 'Profile', {
          title: 'Profile',
        })
      }
    </Tab.Screen>
  </Tab.Navigator>
);
