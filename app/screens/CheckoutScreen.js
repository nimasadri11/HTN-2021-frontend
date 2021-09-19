import React, { useRef } from "react";
import { Animated, View, StyleSheet, Text, Button } from "react-native";
import AppButton from "../components/AppButton";
import Card from "../components/Card";
import Screen from "../components/Screen";

const total = "$10"



function CheckoutScreen(total) {
    const fadeAnim = useRef(new Animated.Value(0)).current;

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
            <Animated.View
                style={[
                    styles.fadingContainer,
                    {
                        // Bind opacity to animated value
                        opacity: fadeAnim
                    }
                ]}
            >
                <Card title="Payment Complete!" subtitle="Thank you for shopping Kim's Convinence" />
                <Text style={styles.fadingText}>Payment Complete</Text>
                <Text>Thank you for shopping Kim's Convenience!</Text>
            </Animated.View>
            <View style={styles.buttonRow}>
                <Button title="Pay now" onPress={fadeIn} />
                <Button title="" onPress={fadeOut} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    fadingContainer: {
        padding: 20,
        backgroundColor: "powderblue"
    },
    fadingText: {
        fontSize: 28
    },
    buttonRow: {
        flexBasis: 100,
        justifyContent: "space-evenly",
        marginVertical: 16
    }
});


export default CheckoutScreen;