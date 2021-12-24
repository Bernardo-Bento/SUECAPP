import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

const GamePointButton = props => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={{ ...styles.gamePoint, ...props.style }}>

            </View>
        </TouchableOpacity>
    );


};

const styles = StyleSheet.create({
    gamePoint: {
        borderWidth: 2,
        borderRadius: 100,
        width: 24,
        height: 24,
        alignItems: 'center'
    },
});

export default GamePointButton;