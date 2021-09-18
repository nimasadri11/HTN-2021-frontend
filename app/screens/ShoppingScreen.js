// import React from "react";
import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, View, Text } from "react-native";
import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";
import * as firebase from 'firebase';
import 'firebase/firestore';




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


function ShoppingScreen(props) {
    const [cart, setCart] = useState({orange: 0, coke: 0, cup: 0});
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
                  setCart(change.doc.data());
                }
                // if (change.type === 'modified') {
                //   console.log('Modified city: ', change.doc.data());
                // }
                // if (change.type === 'removed') {
                //   console.log('Removed city: ', change.doc.data());
                // }
    
              });
        }, err => {
        console.log(`Encountered error: ${err}`);
        });
      }, []);
    
    return (
        <Screen style={styles.screen}>
            <View>
                <Text>Orange: {cart.orange}</Text>
                <Text>Cup: {cart.cup}</Text>
                <Text>Coke: {cart.coke}</Text>
            </View>
            <FlatList
                data={listings}
                keyExtractor={(listing) => listing.id.toString()}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        subTitle={"$" + item.price}
                        image={item.image}
                    />
                )}
            />
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