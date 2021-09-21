import React, { useState, useEffect, useRef } from "react";
import { Animated, View, StyleSheet, Image, Text, Button } from "react-native";
import API from '../services/api';
import AppButton from "../components/AppButton";
import BorderAppButton from "../components/BorderAppButton";
import Card from "../components/Card";
import Screen from "../components/Screen";
import BoldAppText from "../components/BoldAppText";
import colors from "../config/colors";
import {
    useFonts,
    Inter_900Black,
} from '@expo-google-fonts/inter';

function CheckoutScreen(route) {
    let [fontsLoaded] = useFonts({
        Inter_900Black,
    });

    const [price, setPrice] = useState(0);
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        console.log("INside use effect");
        API.postCheckout().then((res) => {setPrice(res['price']);
        console.log("TOTAL IS HERE");
        console.log(res);
    })
    }, [])

    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 50
        }).start();
    };

    const fadeOut = () => {
        // Will change fadeAnim value to 0 in 3 seconds
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 30
        }).start();
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.text}>Total Price</Text>
                <BoldAppText>${price}</BoldAppText>
            </View>
            <AppButton title="Pay now" onPress={fadeIn} style={styles.payButton} />
            <BorderAppButton title="Exit" onPress={fadeOut} />
            <Image style={styles.image} source={require("/Users/nima/Desktop/HTN/HTN-2021-frontend/assets/logo.png")} />
            <Animated.View
                style={[
                    styles.fadingContainer,
                    {
                        // Bind opacity to animated value
                        opacity: fadeAnim
                    }
                ]}
            >
                <Text style={styles.fadingText}>Payment Complete</Text>
                <Text style={styles.fadingMiniText}>Thank you for shopping at Kim's Convenience!</Text>
                <Image style={{width: 200, height: 200, marginTop: 20}} source={{ uri: "https://media.giphy.com/media/SKzycJ9FOiQCWMV3gx/giphy.gif" }} />
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        marginTop: 30
    },
    image: {
        marginTop: 300,
        width: 200,
        height: 200,
        position: 'absolute'
    },
    text: {
        fontSize: 20
    },

    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden",
        height: 100,
        width: 300,
        alignItems: "center",
        justifyContent: "center",
    },
    fadingContainer: {
        padding: 20,
        borderRadius: 15,
        width: 300,
        height: 350,
        backgroundColor: colors.secondary,
        alignItems: "center",
        marginTop: 10

    },
    fadingText: {
        fontSize: 24,
        color: colors.white,
        fontFamily: 'Inter_900Black',
    },
    fadingMiniText: {
        fontSize: 18,
        color: colors.white,
        alignSelf: 'center',
    },
    buttons: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
});


export default CheckoutScreen;