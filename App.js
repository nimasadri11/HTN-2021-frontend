import React from "react";
import HomeScreen from "./app/screens/HomeScreen";
import CodeScanner from "./app/screens/CodeScanner";
import { createStackNavigator } from 'react-navigation-stack';
import { NavigationContainer } from "@react-navigation/native";
import Screen from "./app/components/Screen";

const QR = () => (
  <Screen>
    <Text>QR</Text>
  </Screen>
)

const Welcome = () => (
  <Screen>
    <Text>Welcome</Text>
  </Screen>
)


const Stack = createStackNavigator();

const StackNavigator = () => {
  <Stack.Navigator>
    <Stack.Screen name="QR" component={QR} />
    <Stack.Screen name="Welcome" component={Welcome} />
  </Stack.Navigator>
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="QR" component={Tweets} />
        <Stack.Screen name="Welcome" component={Dweets} />
      </Stack.Navigator>

    </NavigationContainer>
  )

}
