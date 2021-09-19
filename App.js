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
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from "./app/config/colors";

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
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Scanner') {
              return <Ionicons name={"ios-scan"} size={size} color={color} />;
            } else if (route.name === 'Store') {
              return <MaterialCommunityIcons name={"storefront"} size={size} color={color} />;
            } else if (route.name === 'Cart') {
              return <FontAwesome name={"shopping-cart"} size={size} color={color} />;
            } else if (route.name === 'Checkout') {
              return <FontAwesome name={"shopping-basket"} size={size} color={color} />;
            }

          },
          tabBarActiveTintColor: colors.blue,
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Scanner" component={CodeScanner} />
        <Tab.Screen name="Store" component={StoreWelcomeScreen} />
        <Tab.Screen name="Cart" component={ShoppingScreen} />
        <Tab.Screen name="Checkout" component={CheckoutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
