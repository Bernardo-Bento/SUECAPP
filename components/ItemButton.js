import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

const ItemButton = props => {

    return (
        <TouchableOpacity onPress={props.onPress}>
            <View>
                <Image source={props.source} style={props.style} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({

});

export default ItemButton;