import React from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import Colors from "../constants/Colors";

const { width, height } = Dimensions.get('screen');
const InfoItem = props => {
    return (
        <View style={styles.container}>
            <View style={props.styleImage}>
                <Image source={props.source} style={{ ...props.styleImageSize, ...styles.image }} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{props.description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {


        paddingRight: width * 0.05,
        marginBottom: height * 0.09,
        width: width,
        height: height * 0.03,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textContainer: {
        // backgroundColor: '#fff',
        position: 'absolute',
        top: width / 20,
        left: width / 3,
        alignItems: 'flex-start',
        width: width / 1.7,
        marginRight: width / 30,
    },
    text: {
        color: Colors.primary,
        fontSize: height * 0.015,
    },
    image: {
        height: height * 0.06,
        width: width * 0.1,
    },

});

export default InfoItem;