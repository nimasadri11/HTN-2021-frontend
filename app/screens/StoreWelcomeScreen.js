import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, View, ScrollView, Text } from "react-native";
import AppButton from "../components/AppButton";

const storeImage = "/Users/nima/Desktop/HTN/HTN-2021-frontend/assets/KimStore.jpg"
function StoreWelcomeScreen({ navigation }) {
    return (
        <ImageBackground style={styles.background} source={require(storeImage)}>
            <View style={styles.container}>
                <AppButton onPress={() => {
                    navigation.navigate('Cart');
                }} title="Begin Shopping"></AppButton></View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end"
    },
    container: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    }
})

export default StoreWelcomeScreen;