import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const SecundaryLogo = props => {
    return (
        <View>
            <Image
                source={require('../assets/duringGameLogo.png')}
                style={styles.logoImage} />
        </View>
    );
};

const styles = StyleSheet.create({
    logoImage: {
        marginTop: 20,
        height: 102,
        width: 284,
    },
});

export default SecundaryLogo;