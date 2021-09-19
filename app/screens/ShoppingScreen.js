// import React from "react";
import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, View, Text, TextComponent, Button, ScrollView } from "react-native";
import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";
import * as firebase from 'firebase';
import 'firebase/firestore';
import { NavigationContainer } from '@react-navigation/native';




const listings = [
    {
        id: 1,
        title: "Orange",
        price: 100,
        image: require("../../assets/Orange.png"),
    },
    {
        id: 2,
        title: "Coke",
        price: 1000,
        image: require("../../assets/Orange.png"),
    },
];


function ShoppingScreen({ navigation }) {
    //const [cart, setCart] = useState({orange: 0, coke: 0, cup: 0});
    //const [cart, setCart] = useState({ [orange: 1, coke: 1, cup: 0 ] });
    //const [cart, setCart] = useState(['orange', 1]);
    const [cart, setCart] = useState([{ 'name': 'orange', 'count': 1 }])
    useEffect(() => {

        const firebaseConfig = {
            apiKey: 'AIzaSyA4PuT6Sy_nhVvDDuN4lzbaKl2XsXq2nhI',
            authDomain: 'promising-saga-326312.firebaseapp.com',
            //   databaseURL: 'https://project-id.firebaseio.com',
            projectId: 'promising-saga-326312',
            storageBucket: 'promising-saga-326312.appspot.com',
            messagingSenderId: '123483718668',
            appId: '1:123483718668:web:dc7c608a03775fed139a29',
        };
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        const dbh = firebase.firestore();

        const observer = dbh.collection('htn').onSnapshot(querySnapshot => {
            querySnapshot.docChanges().forEach(change => {
                if (change.type === 'modified' || change.type === "added") {
                    console.log(change.doc.data());
                    //setCart(change.doc.data());

                    var temp = []
                    const data = change.doc.data();
                    for (var key in data) {
                        if (data[key] > 0) {

                            temp.push([key, data[key]])
                        }
                    }
                    // setCart(temp)
                }


            });
        }, err => {
            console.log(`Encsountered error: ${err}`);
        });
    }, []);

    const metadata = {
        orange: {
            price: "1.50",
            image: "../assets/Orange.png"
        },
        cup: {
            price: "0.75",
            image: "../assets/cup.png"
        },
        coke: {
            price: "1.00",
            image: "../assets/Coke.png"
        }
    }

    return (
        <ScrollView style={styles.container}>
            <View>
                <FlatList
                    data={cart}
                    keyExtractor={(listing) => listing.toString()}
                    style={styles.list}
                    renderItem={({ item }) => (
                        <Card
                            title={`${item["name"]} x ${item["count"]}`}
                            subTitle={"$" + metadata[item.name].price}
                            image={
                                metadata[item.name].image}
                        />
                    )}
                />
                <Button title={"Go to Checkout"} onPress={() => { navigation.navigate('Checkout', { cart: cart }) }} />
            </View>


        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexDirection: 'column',

        padding: 20,
        backgroundColor: colors.light,
    },
    list: {
        marginHorizontal: 3,
    }
});

export default ShoppingScreen;