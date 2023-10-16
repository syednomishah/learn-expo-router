import { View, Text, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

export default function Page() {
    const router = useRouter();
  return (
    <View>
      <Text style={{fontSize: 20}}>This is tab one</Text>
      <Button title="Go back" onPress={()=> router.back()} />
    </View>
  )
}