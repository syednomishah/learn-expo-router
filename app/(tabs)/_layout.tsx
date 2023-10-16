import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

export default function _layout() {
  return (
    <Tabs>
        <Tabs.Screen name="one" options={{
            headerTitle: "One",
            tabBarLabel: 'One'
        }} />
        <Tabs.Screen name="two" options={{
            headerTitle: "Two",
            tabBarLabel: 'Two'
        }} />
        <Tabs.Screen name="posts" options={{
            headerTitle: "Posts",
            tabBarLabel: 'Posts',
            headerShown: false
        }} />
    </Tabs>
  )
}