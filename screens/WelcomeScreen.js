import React from "react";
import { Text, View, StyleSheet, Image, Modal } from "react-native";
import MainLogo from "../components/MainLogo";
import RoundedButton from "../components/RoundedButton";

const WelcomeScreen = props => {

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.screen}>
                <MainLogo />
                <RoundedButton title={'Start'} onPress={props.startGame} style={styles.startButton} />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#123A04',
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },


    startButton: {
        backgroundColor: '#C4C4C4',
        borderColor: '#C4C4C4',
        width: 259,
        marginTop: -40,
    },
});

export default WelcomeScreen;