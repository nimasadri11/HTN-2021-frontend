// import React from "react";
import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, View, Text, TextComponent, Button } from "react-native";
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


function ShoppingScreen({navigation}) {
    //const [cart, setCart] = useState({orange: 0, coke: 0, cup: 0});
    const [cart, setCart] = useState(['orange', 1]);
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

                            temp.push([ key, data[key] ])
                        }
                    }
                    // setCart(temp)
                }


            });
        }, err => {
            console.log(`Encsountered error: ${err}`);
        });
    }, []);


    return (
        <Screen style={styles.screen}>
            <FlatList
                data={cart}
                keyExtractor={(listing) => listing.toString()}
                renderItem={({ item }) => (
                    <Card
                        title={`${item[0]} x ${item[1]}`}
                        subTitle={"$" + item.price}
                        image={item.image}
                    />
                )}
            />
            <Button title={"checkout"} onPress={() => {navigation.navigate('Checkout', {cart: cart})}}/>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light,
    },
});

export default ShoppingScreen;