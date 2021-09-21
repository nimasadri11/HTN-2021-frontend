import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import AppButton from '../components/AppButton';
import API from '../services/api';
import colors from '../config/colors';
import BoldAppText from '../components/BoldAppText';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import BorderAppButton from '../components/BorderAppButton';

function CodeScanner({ route, navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState('Scan store QR code')

    const askForCameraPermission = () => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })()
    }

    // Request Camera Permission
    useEffect(() => {
        askForCameraPermission();
    }, []);

    // What happens when we scan the bar code
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setText(data)
        console.log('Type: ' + type + '\nData: ' + data)
    };

    // Check permissions and return the screens
    if (hasPermission === null) {
        return (
            <View style={styles.container}>
                <Text>Requesting for camera permission</Text>
            </View>)
    }
    if (hasPermission === false) {
        return (
            <View style={styles.container}>
                <Text style={{ margin: 10 }}>No access to camera</Text>
                <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
            </View>)
    }
    //if (scanned) {
    //    navigation.navigate('Welcome');
    //}

    // Return the View
    return (
        <View style={styles.container}>
            <Button title="" onPress={() => {
                API.postStart().then(res => console.log(res));
                navigation.navigate('Welcome');
            }} />
            <View style={styles.barcodebox}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={{ height: 400, width: 400 }} />
            </View>
            <BoldAppText style={styles.maintext}>{"Scan the store QR"}</BoldAppText>

            {scanned && <AppButton title={'Continue to ' + text} onPress={() => {
                API.postStart().then(res => {console.log(res);
                    navigation.navigate('Store');
                });
                
            }
                } />}
            {scanned && <BorderAppButton title={'Scan again?'} onPress={() => setScanned(false)} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.light,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    maintext: {
        fontSize: 16,
        margin: 20,
    },
    barcodebox: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        width: 300,
        overflow: 'hidden',
        borderRadius: 30,
        backgroundColor: 'tomato'
    }
});

export default CodeScanner;