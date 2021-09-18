import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const storeImage = "/Users/carolinehuang/HTN-2021-frontend/assets/Kims.jpeg"
function StoreWelcomeScreen(props) {
    return (
        <ImageBackground style={styles.background} source={require(storeImage)}></ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1
    }
})

export default StoreWelcomeScreen;