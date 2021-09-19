import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import {
    useFonts,
    Inter_900Black,
} from '@expo-google-fonts/inter';
import colors from "../config/colors";

function BoldAppText({ children, style }) {
    let [fontsLoaded] = useFonts({
        Inter_900Black,
    });

    return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        color: colors.blue,
        fontFamily: 'Inter_900Black',
    },
});

export default BoldAppText;