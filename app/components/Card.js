import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import colors from "../config/colors";
import BoldAppText from "./BoldAppText";

function Card({ title, subTitle, image }) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
                <BoldAppText style={styles.title} numberOfLines={1}>
                    {title}
                </BoldAppText>
                <Text style={styles.subTitle} numberOfLines={2}>
                    {subTitle}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden",
        flexDirection: 'row'
    },
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: 100,
        height: 100,
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold",
    },
    title: {
        marginBottom: 7,
    },
});

export default Card;