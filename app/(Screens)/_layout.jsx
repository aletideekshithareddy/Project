import { View, Text } from 'react-native'
import { Tabs } from 'expo-router'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function TabLayout() {
  return  (
    <Tabs screenOptions={{
        headerShown:false
    }}>
        <Tabs.Screen
        name="mainPage"
        options={{
          tabBarLabel: 'Home',
          tabBarActiveBackgroundColor:"#6366FF",
         
          tabBarInactiveTintColor: 'gray',
          tabBarInactiveBackgroundColor: 'white',
          tabBarIcon: ({ color, size }) => (
            < FontAwesome name="home" size={28} color="gray" />
          ),
        }}
      />
       <Tabs.Screen
        name="attendance"
        options={{
          tabBarLabel: 'Attendance',
          tabBarInactiveTintColor: 'gray',
          tabBarInactiveBackgroundColor: 'white',
          tabBarIcon: ({ color, size }) => (
           <FontAwesome name="calendar" size={24} color="gray" /> 
          ),
        }}
      />
      <Tabs.Screen
        name="pays"
        options={{
          tabBarLabel: 'Salary',
          tabBarInactiveTintColor: 'gray',
          tabBarInactiveBackgroundColor: 'white',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="credit-card" size={24} color="gray" />
          ),
        }}

      />
          <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: 'Profile',
          tabBarInactiveTintColor: 'gray',
          tabBarInactiveBackgroundColor: 'white',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={24} color="gray" />
          ),
        }}
        
      />
        </Tabs>
    
  )
}