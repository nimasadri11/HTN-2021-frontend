import React from "react";
import HomeScreen from "./app/screens/HomeScreen";
import CodeScanner from "./app/screens/CodeScanner";
import { createStackNavigator } from 'react-navigation-stack';
import { NavigationContainer } from "@react-navigation/native";
import Screen from "./app/components/Screen";
import StoreWelcomeScreen from "./app/screens/StoreWelcomeScreen";


export default function App() {
  return <StoreWelcomeScreen />;
}
