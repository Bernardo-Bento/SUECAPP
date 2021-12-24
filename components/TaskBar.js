import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ItemButton from "./ItemButton";

const TaskBar = props => {
    return (
        <View style={{ ...styles.taskBar, ...props.style }}>
            <ItemButton source={require('../assets/clearAllBtn.png')} style={styles.clearAllBtn} onPress={props.onClearPress} />
            <ItemButton source={require('../assets/homeBtn.png')} style={styles.homeBtn} onPress={props.onHomePress} />
            <ItemButton source={require('../assets/remove.png')} style={styles.removeBtn} onPress={props.onRemovePress} />
        </View>
    )
};

const styles = StyleSheet.create({
    taskBar: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 7,
        marginTop: 30,

    },
    removeBtn: {
        height: 50,
        width: 50,
        marginTop: 10,
        marginLeft: 40,
    },
    homeBtn: {
        height: 64,
        width: 64,

    },
    clearAllBtn: {
        height: 60,
        width: 60,
        marginRight: 40,
        marginTop: 5,
    },
});

export default TaskBar;