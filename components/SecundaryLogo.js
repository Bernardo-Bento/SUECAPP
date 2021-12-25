import React from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get('screen');
const SecundaryLogo = props => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/duringGameLogo.png')}
                style={styles.logoImage} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: height * 0.04,
    },
    logoImage: {
        height: height * 0.12,
        width: width * 0.7,
    },
});

export default SecundaryLogo;