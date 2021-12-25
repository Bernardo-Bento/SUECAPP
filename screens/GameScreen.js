import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Modal, Image, ScrollView, Dimensions, StatusBar, Alert } from "react-native";
import TaskBar from "../components/TaskBar";
import Colors from "../constants/Colors";
import SuecaGame from "../components/SuecaGame";
import SecundaryLogo from "../components/SecundaryLogo";
import RoundedButton from "../components/RoundedButton";
import InfoButton from "../components/InfoButton";
import InfoScreen from "./InfoScreen";
import RedWinScreen from "./RedWinScreen";
import BlackWinScreen from "./BlackWinScreen";


const { width, height } = Dimensions.get('screen');
const GameScreen = props => {


    let language = props.language;
    const [games, setGames] = useState([]);
    const [gameId, setGameId] = useState(1);
    const [showAddBtn, setShowAddBtn] = useState(true);
    const [currentNumOfGames, setCurrentNumOfGames] = useState(games.length);
    const [blackScore, setBlackScore] = useState(0);
    const [redScore, setRedScore] = useState(0);
    const [showWinnerScreen, setShowWinnerScreen] = useState(false);
    const [showWinnerScreenRed, setShowWinnerScreenRed] = useState(false);
    const [gameWinner, setGameWinner] = useState(undefined);


    const [showInfoScreen, setShowInfoScreen] = useState(false);

    let infoScreen;

    infoScreen = (
        <Modal visible={showInfoScreen} animationType="slide">
            <InfoScreen onReturnPress={() => setShowInfoScreen(false)} language={language} />
        </Modal>
    );



    const manageAddNewGameButton = () => {
        setGames([...games, { id: gameId, winner: undefined }]);
        setCurrentNumOfGames(games.length + 1);
        setGameId(gameId + 1);
    };

    useEffect(() => {
        setCurrentNumOfGames(games.length);
        if (currentNumOfGames >= 3) {
            setShowAddBtn(false);
        } else {
            setShowAddBtn(true);
        }

        let blackScore = 0;
        let redScore = 0;
        for (let game of games) {
            if (game.winner === 'black') {
                blackScore++;
            }
            if (game.winner === 'red') {
                redScore++;
            }
        }
        setBlackScore(blackScore);
        setRedScore(redScore);

        if (redScore === 2) {
            setGameWinner('red');
            setShowWinnerScreenRed(true);
        }
        if (blackScore === 2) {
            setGameWinner('black');
            setShowWinnerScreen(true);
        }
        console.log(blackScore + ' - ' + redScore);
    }, [games, setCurrentNumOfGames, currentNumOfGames, setShowAddBtn, blackScore, redScore, gameWinner]);

    let redWinnerScreen;

    const onReturnPress = () => {
        goToHomescreen();
        setShowWinnerScreen(false);
        setShowWinnerScreenRed(false);
        props.onHomePress();
    };
    const onCancelPress = () => {
        setCancelRed(true);
        setShowWinnerScreenRed(false);
    }
    redWinnerScreen = (
        <Modal visible={showWinnerScreenRed} animationType="slide">
            <RedWinScreen gameWinner={props.gameWinner} language={language} onReturnPress={() => onReturnPress()} onCancelPress={() => onCancelPress()} />
        </Modal>
    );

    let blackWinnerScreen;
    blackWinnerScreen = (
        <Modal visible={showWinnerScreen} animationType="slide">
            <BlackWinScreen gameWinner={props.gameWinner} language={language} onReturnPress={() => onReturnPress()} />
        </Modal>
    );

    const onBlackWin = (id) => {
        for (let game of games) {
            if (id === game.id) {
                game.winner = 'black';
            }
        }
        setBlackScore(blackScore + 1);

    };
    const onRedWin = (id) => {
        for (let game of games) {
            if (id === game.id) {
                game.winner = 'red';
            }
        }
        setRedScore(redScore + 1);

    };
    const onBlackWinCancel = (id) => {
        setBlackScore(blackScore - 1);
        for (let game of games) {
            if (id === game.id) {
                game.winner = undefined;
            }
        }
    };
    const onRedWinCancel = (id) => {
        setRedScore(redScore - 1);
        for (let game of games) {
            if (id === game.id) {
                game.winner = undefined;
            }
        }
    };

    function display() {
        return games.map((itemId) => {
            return (
                <View style={styles.games} key={itemId.id}>
                    <SuecaGame setKey={itemId.id} language={language} onBlackWin={() => onBlackWin(itemId.id)} onBlackWinCancel={() => onBlackWinCancel(itemId.id)}
                        onRedWin={() => onRedWin(itemId.id)} onRedWinCancel={() => onRedWinCancel(itemId.id)} />
                </View>
            )
        })
    }

    const resetGame = () => {
        setGames([]);
        setBlackScore(0);
        setRedScore(0);
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
            if (language === 'ENG') {
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
            if (language === 'PT') {
                Alert.alert(

                    "Tens a certeza?",
                    "Esta ação irá fazer com que apagues todos os teus jogos!",

                    [
                        {
                            text: "Cancelar",
                            onPress: () => { return; },
                            style: "cancel",
                        },
                        {
                            text: "Apagar",
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
        }

    };

    const goToHomescreen = () => {
        setCurrentNumOfGames(0);
        setRedScore(0);
        setBlackScore(0);
        setShowAddBtn(true);
        resetGame();
    };

    const manageHomeButton = () => {
        if (currentNumOfGames != 0) {
            if (language === 'ENG') {
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
            }
            if (language === 'PT') {
                Alert.alert(
                    "Tens a certeza?",
                    "Ir para o ecrã inicial irá apagar todos os teus jogos!",
                    [
                        {
                            text: "Cancelar",
                            onPress: () => { return; },
                            style: "cancel",
                        },
                        {
                            text: "Ir para o ecrã inicial",
                            onPress: () => {
                                props.onHomePress();
                                goToHomescreen();
                            },
                            style: "default",
                        }
                    ]
                );
            }
        } else { props.onHomePress() }
    };


    const removeLastGameAdded = () => {
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
                <View style={styles.infoBtn}>
                    <InfoButton onInfoPress={() => setShowInfoScreen(true)} />
                </View>
                <View style={styles.result}>
                    <Text style={styles.redResult}>{redScore} <Text style={styles.separator}> - <Text style={styles.blackResult}> {blackScore}</Text></Text></Text>
                </View>

                <View style={styles.middleContainer}>
                    {display()}
                    {addNewBtn}
                </View>
                <TaskBar onHomePress={manageHomeButton} onClearPress={manageClearButton} onRemovePress={() => removeLastGameAdded()} />
            </View>
            {infoScreen}
            {redWinnerScreen}
            {blackWinnerScreen}
        </Modal>
    );
};

const styles = StyleSheet.create({

    screen: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: Colors.background,
    },
    top: {
        flexDirection: 'row',
    },
    middleContainer: {
        position: 'absolute',
        top: height * 0.16,
        width: width,
        alignItems: 'center',
    },
    infoBtn: {
        position: 'absolute',
        left: 30,
        top: height * 0.075,
    },

    result: {

        alignItems: 'center',
        justifyContent: 'center',
        height: height * 0.05,
        width: width * 0.18,
        position: 'absolute',
        top: height * 0.07,
        right: 20,
        backgroundColor: Colors.primary,
        borderWidth: 2,
        borderRadius: 30,
        borderColor: Colors.primary,
        padding: 2,
    },
    redResult: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: width * 0.03,
    },
    blackResult: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: width * 0.03,
    },

    separator: {
        color: Colors.background,
        fontWeight: 'bold',
        fontSize: width * 0.03,
    },
    addNewGameBtn: {
        // marginTop: height / 40,
        justifyContent: 'center',
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
        borderRadius: 40,
        width: width / 1.5,
        height: height * 0.1,

    },
    btnText: {
        fontSize: 30,
        fontWeight: 'bold',
    },

});

export default GameScreen;
