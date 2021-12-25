import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Modal, Image, ScrollView, Dimensions, StatusBar, Alert } from "react-native";
import RoundedButton from "../components/RoundedButton";
import Colors from "../constants/Colors";

const { width, height } = Dimensions.get('screen');
const BlackWinScreen = props => {
    const language = props.language;
    const [btnText, setBtnText] = useState(undefined);
    const [text, setText] = useState(undefined);



    useEffect(() => {
        if (language === 'ENG') {
            setBtnText('Return to main screen');
            setText('Black Team Won');
        }
        if (language === 'PT') {
            setBtnText('Voltar ao ecrã inicial');
            setText('A Equipa Preta Ganhou');
        }

    }, [language]);
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
        backgroundColor: 'black',
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
        width: width * 0.8,
        height: height * 0.08,
    },
    btnContainer: {
        width: width,
        alignItems: 'center',
        position: 'absolute',
        bottom: 40,

    },
    btnText: {
        fontSize: width * 0.05,
        fontWeight: 'bold',
    },

});

export default BlackWinScreen;