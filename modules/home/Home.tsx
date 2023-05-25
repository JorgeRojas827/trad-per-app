import React, { useState } from 'react';

import { Ionicons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Restaurants from './tabs/Restaurants';
import Account from './tabs/Account';
import { View } from 'react-native';
import { TabBar } from 'react-native-tab-view';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: '#fff',
      }}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopColor: 'transparent',
          height: 62,
          position: 'absolute',
          bottom: 0,
          shadowOffset: {
            width: 0,
            height: 20,
          },
          shadowOpacity: 1,
          shadowRadius: 16.0,
          elevation: 24,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Restaurants}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <View
                style={{
                  borderBottomColor: '#FF5757',
                  borderBottomWidth: focused ? 4 : 0,
                }}
                className="w-full"
              >
                <View
                  className={
                    (focused ? 'border-b-4' : 'border-b-0') +
                    'w-full border-primary flex justify-center items-center h-full'
                  }
                >
                  <Ionicons
                    style={{
                      color: focused ? '#FF5757' : '#4B4B4B',
                    }}
                    name={focused ? 'home' : 'home-outline'}
                    size={24}
                  />
                </View>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Account}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <View
                style={{
                  borderBottomColor: '#FF5757',
                  borderBottomWidth: focused ? 4 : 0,
                }}
                className="w-full"
              >
                <View
                  className={
                    (focused ? 'border-b-4' : 'border-b-0') +
                    'w-full border-primary flex justify-center items-center h-full'
                  }
                >
                  <Ionicons
                    style={{
                      color: focused ? '#FF5757' : '#4B4B4B',
                    }}
                    name={focused ? 'restaurant' : 'restaurant-outline'}
                    size={24}
                  />
                </View>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Account}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <View
                style={{
                  borderBottomColor: '#FF5757',
                  borderBottomWidth: focused ? 4 : 0,
                }}
                className="w-full"
              >
                <View
                  className={
                    (focused ? 'border-b-4' : 'border-b-0') +
                    'w-full border-primary flex justify-center items-center h-full'
                  }
                >
                  <Ionicons
                    style={{
                      color: focused ? '#FF5757' : '#4B4B4B',
                    }}
                    name={focused ? 'notifications' : 'notifications-outline'}
                    size={24}
                  />
                </View>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Account}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <View
                style={{
                  borderBottomColor: '#FF5757',
                  borderBottomWidth: focused ? 4 : 0,
                }}
                className="w-full"
              >
                <View
                  className={
                    (focused ? 'border-b-4' : 'border-b-0') +
                    'w-full border-primary flex justify-center items-center h-full'
                  }
                >
                  <Ionicons
                    style={{
                      color: focused ? '#FF5757' : '#4B4B4B',
                    }}
                    name={focused ? 'person-circle' : 'person-circle-outline'}
                    size={24}
                  />
                </View>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
