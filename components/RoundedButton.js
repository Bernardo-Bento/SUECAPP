import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

const { width, height } = Dimensions.get('screen');
const RoundedButton = props => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={{ ...styles.roundedButton, ...props.style }}>
                <Text style={{ ...styles.text, ...props.styleText }}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );


};

const styles = StyleSheet.create({
    roundedButton: {
        borderWidth: 2,
        justifyContent: 'center',
        borderRadius: 30,
        width: 100,
        alignItems: 'center'

    },

    text: {
        fontSize: height * 0.03,
        fontWeight: 'bold',
    }
});

export default RoundedButton;
