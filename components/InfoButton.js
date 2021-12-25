import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import Colors from "../constants/Colors";

const { width, height } = Dimensions.get('screen');
const InfoButton = props => {

    return (
        <TouchableOpacity onPress={props.onInfoPress}>
            < View style={{ ...styles.infoBtn, ...props.style }} >
                <Text style={styles.infoText}>i</Text>
            </View >
        </TouchableOpacity >

    );
};

const styles = StyleSheet.create({
    infoBtn: {
        height: height * 0.05,
        width: height * 0.05,
        borderWidth: 2,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: Colors.primary,

    },
    infoText: {
        color: Colors.primary,
        fontSize: height * 0.02,
        fontWeight: 'bold',

    },
});

export default InfoButton;