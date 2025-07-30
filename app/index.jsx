import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Home from './Screen/Home'
import { SafeAreaView } from 'react-native-safe-area-context'
import HomeNavigator from './Navigations/HomeNavigator'

export default function index() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeNavigator />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    padding: 20
  }
})