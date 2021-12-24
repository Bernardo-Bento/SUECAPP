import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const MainLogo = props => {
    return (
        <View style={styles.mainLogo}>
            <Image source={require('../assets/mainLogoSeucapp.png')} />
        </View>
    );
};

const styles = StyleSheet.create({
    mainLogo: {
        marginTop: -100,
    },
});

export default MainLogo;