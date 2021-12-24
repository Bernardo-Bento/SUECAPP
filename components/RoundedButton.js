import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

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
        padding: 10,
        borderRadius: 30,
        width: 100,
        alignItems: 'center'

    },

    text: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default RoundedButton;
