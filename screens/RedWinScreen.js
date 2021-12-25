import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Modal, Image, ScrollView, Dimensions, StatusBar, Alert } from "react-native";
import RoundedButton from "../components/RoundedButton";
import Colors from "../constants/Colors";

const { width, height } = Dimensions.get('screen');
const RedWinScreen = props => {
    const language = props.language;
    const [btnText, setBtnText] = useState(undefined);
    const [text, setText] = useState(undefined);
    const [cancelText, setCancelText] = useState(undefined);

    useEffect(() => {
        if (language === 'ENG') {
            setBtnText('Main screen');
            setText('Red Team Won');
            setCancelText('Cancel');
        }
        if (language === 'PT') {
            setBtnText('Ecrã inicial');
            setText('A Equipa Vermelha Ganhou');
            setCancelText('Cancelar');
        }
    }, []);
    return (

        <View style={styles.blackWinnerScreen}>
            <Text style={styles.blackWinText}>{text}</Text>
            <Image source={require('../assets/winContainer.png')} style={styles.winObjectStyle} />

            <Image source={require('../assets/mainLogoSeucapp.png')} style={styles.logoStyle} />
            <View style={styles.btnContainer}>
                <RoundedButton title={btnText} style={styles.returnBtn} styleText={styles.btnText} onPress={props.onReturnPress} />

            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    redWinnerScreen: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'red',
    },
    blackWinnerScreen: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        height: height,
        backgroundColor: 'red',
    },
    blackWinText: {
        position: 'absolute',
        top: height * 0.08,
        color: Colors.primary,
        fontSize: width * 0.055,
        fontWeight: 'bold',
        alignItems: 'center',
    },
    winObjectStyle: {
        position: 'absolute',

    },
    logoStyle: {
        marginBottom: 30,
        height: 150,
        width: 150,
    },
    returnBtn: {
        borderColor: Colors.primary,
        backgroundColor: Colors.primary,
        width: width * 0.7,
        height: height * 0.08,

    },
    btnContainer: {
        width: width,
        alignItems: 'center',
        position: 'absolute',
        bottom: 40,
        paddingHorizontal: width * 0.07,
    },
    btnText: {
        fontSize: width * 0.034,
        fontWeight: 'bold',
    },

});

export default RedWinScreen;