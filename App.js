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
import StoreWelcomeScreen from "./app/screens/StoreWelcomeScreen";
import CheckoutScreen from "./app/screens/CheckoutScreen";

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Button, FlatList, RefreshControl } from 'react-native';
// import React, { useEffect, useState, useRef } from 'react';

// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';


///////////////////////

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="QR" component={CodeScanner} />
        <Tab.Screen name="Welcome" component={StoreWelcomeScreen} />
        <Tab.Screen name="Shopping" component={ShoppingScreen} />
        <Tab.Screen name="Checkout" component={CheckoutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
