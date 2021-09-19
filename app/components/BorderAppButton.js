import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function BorderAppButton({ title, onPress, color = "primary" }) {
    return (
        <TouchableOpacity
            style={[styles.button]}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#fff',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: 100,
        width: "80%",
        marginVertical: 10,
        borderWidth: 3,
        borderColor: colors.blue,


    },
    text: {
        color: colors.blue,
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold",
    },
});

export default BorderAppButton;