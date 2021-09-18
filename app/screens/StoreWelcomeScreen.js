import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";

const storeImage = "/Users/carolinehuang/HTN-2021-frontend/assets/KimStore.jpg"
function StoreWelcomeScreen(navigation) {
    return (
        <ImageBackground style={styles.background} source={require(storeImage)}>
            <AppButton onPress={() => {
                navigation.navigate('QR');
            }} title="Begin Shopping"></AppButton>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end"
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#fc5c65"
    }
})

export default StoreWelcomeScreen;