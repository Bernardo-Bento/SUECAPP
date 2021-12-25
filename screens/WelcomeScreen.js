import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, Modal, Dimensions, SafeAreaView } from "react-native";
import MainLogo from "../components/MainLogo";
import RoundedButton from "../components/RoundedButton";
import InfoButton from "../components/InfoButton";
import Colors from "../constants/Colors";
import InfoScreen from "./InfoScreen";

const { width, height } = Dimensions.get('screen');
const WelcomeScreen = props => {

    const [showInfoScreen, setShowInfoScreen] = useState(false);
    let language = props.language;
    const [startText, setStartText] = useState('Start');
    let infoScreen;

    infoScreen = (
        <Modal visible={showInfoScreen} animationType="slide">
            <InfoScreen onReturnPress={() => setShowInfoScreen(false)} language={language} />
        </Modal>
    );

    useEffect(() => {
        if (language === 'PT') {
            setStartText('Começar')
        }
        else {
            setStartText('Start')
        }
    }, [language, setStartText])

    return (
        <SafeAreaView>
            <Modal visible={props.visible} animationType="slide">
                <View style={styles.mainScreen}>
                    <View style={styles.top}>
                        <InfoButton onInfoPress={() => setShowInfoScreen(true)} style={styles.infoBtn} />
                        <RoundedButton title={language} style={styles.languageBtn} styleText={styles.languageStyle} onPress={props.onLanguagePress} />
                    </View>
                    <View style={styles.screen}>

                        <MainLogo />
                        <RoundedButton title={startText} onPress={props.startGame} style={styles.startButton} />
                    </View>
                    {infoScreen}
                </View>
            </Modal>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    top: {
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    screen: {
        backgroundColor: '#123A04',
        flex: 2,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    infoBtn: {
        borderRadius: 100,
        marginLeft: 20,
        marginTop: height / 20,
    },
    startButton: {
        backgroundColor: '#C4C4C4',
        borderColor: '#C4C4C4',
        width: 259,
        height: height * 0.08,
        marginTop: 20,

    },
    languageBtn: {
        borderColor: Colors.primary,
        marginTop: height / 20,
        marginRight: 20,
    },
    languageStyle: {
        color: Colors.primary,
        fontSize: height * 0.03,
    },
});

export default WelcomeScreen;