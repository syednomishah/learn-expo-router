import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function Page() {
  return (
    <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
        {/* <StatusBar style="light" /> */}
      <Text>Home Page</Text>
      <Link href="/register" asChild>
        <Button title="Open Register Page" />
      </Link>
      <Link href="/one" asChild>
        <Button title="Open tab one" />
      </Link>
    </View>
  )
}