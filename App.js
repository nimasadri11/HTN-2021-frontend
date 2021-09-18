import React from "react";
// // import HomeScreen from "./app/screens/HomeScreen";
import CodeScanner from "./app/screens/CodeScanner";
import WelconeScreen from "./app/screens/StoreWelcomeScreen";
import ShoppingScreen from "./app/screens/ShoppingScreen";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
// // import Screen from "./app/components/Screen";
import { StyleSheet, Text, View } from 'react-native';

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Button, FlatList, RefreshControl } from 'react-native';
// import React, { useEffect, useState, useRef } from 'react';

// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';




const Tab = createBottomTabNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='QR'>
        <Tab.Screen name="QR" component={CodeScanner} />
        <Tab.Screen name="Welcome" component={WelconeScreen} />
        <Tab.Screen name="Shopping" component={ShoppingScreen} />
      </Tab.Navigator>

    </NavigationContainer>
  )

}
