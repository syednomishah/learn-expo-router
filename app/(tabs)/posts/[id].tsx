import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

export default function Page() {
    const {id} = useLocalSearchParams();
  return (
    <View>
        <Stack.Screen options={{
            headerTitle: "Post Details "+id
        }} />
      <Text style={{fontSize: 30}}>Post {id}</Text>
    </View>
  )
}