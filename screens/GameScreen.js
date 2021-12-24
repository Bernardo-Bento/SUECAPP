import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Modal, Image, ScrollView, Dimensions, StatusBar, Alert } from "react-native";
import TaskBar from "../components/TaskBar";
import Colors from "../constants/Colors";
import SuecaGame from "../components/SuecaGame";
import SecundaryLogo from "../components/SecundaryLogo";
import RoundedButton from "../components/RoundedButton";



const { width, height } = Dimensions.get('screen');
const GameScreen = props => {



    const [games, setGames] = useState([]);
    const [gameId, setGameId] = useState(1);
    const [showAddBtn, setShowAddBtn] = useState(true);
    const [currentNumOfGames, setCurrentNumOfGames] = useState(games.length);
    const [lastId, setLastId] = useState(undefined);
    const [lastPlays, setLastPlays] = useState(props.lastPlays);

    let gameWinner;


    const manageAddNewGameButton = () => {
        setGames([...games, { id: gameId }]);
        setCurrentNumOfGames(games.length + 1);
        setLastId(gameId);
        setGameId(gameId + 1);
    };

    useEffect(() => {
        setCurrentNumOfGames(games.length);
        if (currentNumOfGames >= 3) {
            setShowAddBtn(false);
        } else {
            setShowAddBtn(true);
        }
    }, [games, setCurrentNumOfGames, currentNumOfGames, setShowAddBtn]);

    function display() {
        return games.map((itemId) => {
            return (
                <View style={styles.games} key={itemId.id}>
                    <SuecaGame setKey={itemId.id} />
                </View>
            )
        })
    }

    const resetGame = () => {
        setGames([]);
    };



    const checkButton = () => {
        if (currentNumOfGames >= 3) {
            setShowAddBtn(false);
        }
    };
    let addNewBtn;
    if (showAddBtn) {
        addNewBtn = (
            <RoundedButton style={styles.addNewGameBtn} title='+' styleText={styles.btnText} onPress={manageAddNewGameButton} />
        );
        checkButton();
    }

    const manageClearButton = () => {
        if (currentNumOfGames != 0) {
            Alert.alert(
                "Are you sure?",
                "This will delete all your game",
                [
                    {
                        text: "Cancel",
                        onPress: () => { return; },
                        style: "cancel",
                    },
                    {
                        text: "Delete",
                        onPress: () => {
                            setCurrentNumOfGames(0);
                            setShowAddBtn(true);
                            resetGame();
                        },
                        style: "default",
                    }
                ]
            );
        }

    };

    const goToHomescreen = () => {
        setCurrentNumOfGames(0);
        setShowAddBtn(true);
        resetGame();
    };

    const manageHomeButton = () => {
        if (currentNumOfGames != 0) {
            Alert.alert(
                "Are you sure?",
                "Going to the home screen will delete this game",
                [
                    {
                        text: "Cancel",
                        onPress: () => { return; },
                        style: "cancel",
                    },
                    {
                        text: "Go to Home Screen",
                        onPress: () => {
                            props.onHomePress();
                            goToHomescreen();
                        },
                        style: "default",
                    }
                ]
            );
        } else { props.onHomePress() }
    };


    const removeLastGameAdded = (playKey) => {
        let finalArray = [];
        for (let i = 0; i < games.length - 1; i++) {
            finalArray = [...finalArray, games[i]];
        }
        setGames(finalArray);
        setShowAddBtn(true);

    }
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.screen}>
                <SecundaryLogo />
                {display()}
                {addNewBtn}
                <TaskBar onHomePress={manageHomeButton} onClearPress={manageClearButton} onRemovePress={() => removeLastGameAdded(lastId)} />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({

    screen: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: Colors.background,
    },
    games: {

    },
    addNewGameBtn: {
        marginTop: height / 40,
        justifyContent: 'center',
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
        width: width / 1.5,
        height: width / 7,

    },
    btnText: {
        fontSize: 30,
        fontWeight: 'bold',
    },

});

export default GameScreen;
