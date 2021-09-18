import React from "react";
// // import HomeScreen from "./app/screens/HomeScreen";
import CodeScanner from "./app/screens/CodeScanner";
import WelconeScreen from "./app/screens/StoreWelcomeScreen";
import ShoppingScreen from "./app/screens/ShoppingScreen";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
// // import Screen from "./app/components/Screen";
import { StyleSheet, Text, View } from 'react-native';

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Button, FlatList, RefreshControl } from 'react-native';
// import React, { useEffect, useState, useRef } from 'react';

// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';




const Stack = createStackNavigator();
export default function App() {

  return (
    // <View>
    //   <Text>Hi</Text>
    // </View>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='QR'>
        <Stack.Screen name="QR" component={CodeScanner} />
        <Stack.Screen name="Welcome" component={WelconeScreen} />
        <Stack.Screen name="Shopping" component={ShoppingScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  )

}