import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, ImageBackground, Button, Dimensions, TouchableOpacity } from 'react-native';
import Colors from "../constants/Colors";





const { width, height } = Dimensions.get('screen');
const SuecaGame = props => {
    const [b1IsClicked, setB1IsClicked] = useState(false);
    const [b2IsClicked, setB2IsClicked] = useState(false);
    const [b3IsClicked, setB3IsClicked] = useState(false);
    const [b4IsClicked, setB4IsClicked] = useState(false);
    const [b5IsClicked, setB5IsClicked] = useState(false);
    const [b6IsClicked, setB6IsClicked] = useState(false);
    const [b7IsClicked, setB7IsClicked] = useState(false);
    const [b8IsClicked, setB8IsClicked] = useState(false);

    let redButtons = [{ button: 1, clicked: b1IsClicked }, { button: 2, clicked: b2IsClicked },
    { button: 3, clicked: b3IsClicked }, { button: 4, clicked: b4IsClicked }];

    let blackButtons = [{ button: 5, clicked: b5IsClicked }, { button: 6, clicked: b6IsClicked },
    { button: 7, clicked: b7IsClicked }, { button: 8, clicked: b8IsClicked }];

    const [redTeamScore, setRedTeamScore] = useState(0);
    const [blackTeamScore, setBlackTeamScore] = useState(0);
    const [winner, setWinner] = useState(undefined);
    let blocked = false;
    const gameUniqueKey = props.setKey;


    let showWinningTeam;


    const checkTeamScores = () => {
        let red = 0;
        let black = 0;
        for (let btn of redButtons) {
            if (btn.clicked) {
                red++;
            }
        }
        for (let btn of blackButtons) {
            if (btn.clicked) {
                black++;
            }
        }
        setRedTeamScore(red);
        setBlackTeamScore(black);
    }
    useEffect(() => {
        if (redTeamScore === 4) {
            setWinner('red');
        }
        if (redTeamScore < 4 && blackTeamScore < 4) {
            setWinner(undefined);
        }
        if (blackTeamScore === 4) {
            setWinner('black');
        }
        checkTeamScores();
    }, [redTeamScore, showWinningTeam, blackTeamScore, checkTeamScores])

    if (winner === 'red') {
        blocked = true;
        showWinningTeam = (
            <View style={styles.redWin}>
                <Text style={styles.redWinText}>Red Team Won</Text>
                <Text style={styles.gameScoresRed}>{redTeamScore} - {blackTeamScore} </Text>
            </View >
        );
    }

    if (winner === 'black') {
        blocked = true;
        showWinningTeam = (
            <View style={styles.blackWin}>
                <Text style={styles.blackWinText}>Black Team Won</Text>
                <Text style={styles.gameScoresBlack}>{redTeamScore} - {blackTeamScore}</Text>
            </View >
        );
    }

    let circle1;
    if (b1IsClicked) {
        circle1 = (
            <View style={styles.circle1}>
                {/* <View style={styles.circle1}>
                </View> */}
                <View style={styles.circle1Btn}>

                    <Button title="" onPress={() => {
                        setB1IsClicked(false)
                        setB2IsClicked(false)
                        setB3IsClicked(false)
                        setB4IsClicked(false)

                    }} />
                </View>
            </View>
        );
    }
    let circle2;
    if (b2IsClicked) {
        circle2 = (
            <View style={styles.circle2}>
                <View style={styles.circle2Btn}>

                    <Button title="" onPress={() => {
                        setB2IsClicked(false)
                        setB3IsClicked(false)
                        setB4IsClicked(false)

                    }} />
                </View>
            </View>
        );
    }
    let circle3;
    if (b3IsClicked) {
        circle3 = (
            <View style={styles.circle3}>
                <View style={styles.circle3Btn}>

                    <Button title="" onPress={() => {
                        setB3IsClicked(false)
                        setB4IsClicked(false)

                    }} />
                </View>
            </View>
        );
    }
    let circle4;
    if (b4IsClicked) {
        circle4 = (
            <View style={styles.circle4}>
                <View style={styles.circle4Btn}>

                    <Button title="" onPress={() => {
                        setB4IsClicked(false)

                    }} />
                </View>
            </View>
        );
    }
    let circle5;
    if (b5IsClicked) {
        circle5 = (
            <View style={styles.circle5}>
                <View style={styles.circle5Btn}>

                    <Button title="" onPress={() => {
                        setB5IsClicked(false)
                        setB6IsClicked(false)
                        setB7IsClicked(false)
                        setB8IsClicked(false)

                    }} />
                </View>
            </View>
        );
    }
    let circle6;
    if (b6IsClicked) {
        circle6 = (
            <View style={styles.circle6}>
                <View style={styles.circle6Btn}>

                    <Button title="" onPress={() => {
                        setB6IsClicked(false)
                        setB7IsClicked(false)
                        setB8IsClicked(false)

                    }} />
                </View>
            </View>
        );
    }
    let circle7;
    if (b7IsClicked) {
        circle7 = (
            <View style={styles.circle7}>
                <View style={styles.circle7Btn}>

                    <Button title="" onPress={() => {
                        setB7IsClicked(false)
                        setB8IsClicked(false)

                    }} />
                </View>
            </View>
        );
    }
    let circle8;
    if (b8IsClicked) {
        circle8 = (
            <View style={styles.circle8}>
                <View style={styles.circle8Btn}>

                    <Button title="" onPress={() => {
                        setB8IsClicked(false)
                        setBlackTeamScore(blackTeamScore - 1)
                    }} />
                </View>
            </View>
        );
    }

    const onButton1Press = () => {
        setB1IsClicked(true)

    };
    const onButton2Press = () => {
        if (b1IsClicked) {
            setB2IsClicked(true)


        } else {
            return;
        }

    };
    const onButton3Press = () => {
        if (b2IsClicked) {
            setB3IsClicked(true)

        }
        else { return; }
    };
    const onButton4Press = () => {
        if (b3IsClicked) {
            setB4IsClicked(true)
        }
        else { return; }
    };
    const onButton5Press = () => {
        setB5IsClicked(true)


    };
    const onButton6Press = () => {
        if (b5IsClicked) {
            setB6IsClicked(true)


        } else { return; }
    };
    const onButton7Press = () => {
        if (b6IsClicked) {
            setB7IsClicked(true)


        } else { return; }
    };
    const onButton8Press = () => {
        if (b7IsClicked) {
            setB8IsClicked(true)


        } else { return; }
    };

    let button1;
    if (b1IsClicked === false) {
        button1 = (
            <View style={styles.gameButton1}>
                <Button title="" onPress={onButton1Press} color={'#C4C4C4'} disabled={blocked} />
            </View>
        );
    }

    let button2;
    if (b2IsClicked === false) {
        button2 = (
            <View style={styles.gameButton2}>
                <Button title="" onPress={onButton2Press} color={'#C4C4C4'} disabled={blocked} />
            </View>
        );
    }
    let button3;
    if (b3IsClicked === false) {
        button3 = (
            <View style={styles.gameButton3}>
                <Button title="" onPress={onButton3Press} color={'#C4C4C4'} disabled={blocked} />
            </View>
        );
    }
    let button4;
    if (b4IsClicked === false) {
        button4 = (
            <View style={styles.gameButton4}>
                <Button title="" onPress={onButton4Press} color={'#C4C4C4'} disabled={blocked} />
            </View>
        );
    }
    let button5;
    if (b5IsClicked === false) {
        button5 = (
            <View style={styles.gameButton5}>
                <Button title="" onPress={onButton5Press} color={'#C4C4C4'} disabled={blocked} />
            </View>
        );
    }
    let button6;
    if (b6IsClicked === false) {
        button6 = (
            <View style={styles.gameButton6}>
                <Button title="" onPress={onButton6Press} color={'#C4C4C4'} disabled={blocked} />
            </View>
        );
    }
    let button7;
    if (b7IsClicked === false) {
        button7 = (
            <View style={styles.gameButton7}>
                <Button title="" onPress={onButton7Press} color={'#C4C4C4'} disabled={blocked} />
            </View>
        );
    }
    let button8;
    if (b8IsClicked === false) {
        button8 = (
            <View style={styles.gameButton8}>
                <Button title="" onPress={onButton8Press} color={'#C4C4C4'} disabled={blocked} />
            </View>
        );
    }


    return (
        <View key={props.key} style={styles.gameContainer}>
            <ImageBackground source={require('../assets/SuecaGame.png')} style={styles.image} >

                {/* Buttons */}
                {button1}
                {button2}
                {button3}
                {button4}
                {button5}
                {button6}
                {button7}
                {button8}
                {showWinningTeam}
                {/* Circles */}
                {circle1}
                {circle2}
                {circle3}
                {circle4}
                {circle5}
                {circle6}
                {circle7}
                {circle8}
            </ImageBackground>

        </View>
    );

};

const styles = StyleSheet.create({

    gameContainer: {
        padding: 10,
        width: width,
        height: height / 4.3,
        alignItems: 'center',
        marginTop: -10,
    },

    circle1: {
        position: 'absolute',
        left: width / 5.6,
        top: 10,
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: 'red',
        borderRadius: 100,
    },
    circle1Btn: {
        opacity: 0,
        position: 'absolute',
        left: width / 7 - width / 5.3,
        height: 100,
        width: 70,
    },
    circle2: {
        position: 'absolute',
        left: width / 2.68,
        top: 10,
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: 'red',
        borderRadius: 100,
    },
    circle2Btn: {
        opacity: 0,
        position: 'absolute',
        left: width / 7 - width / 5.3,
        height: 100,
        width: 70,
    },
    circle3: {
        position: 'absolute',
        left: width / 1.765,
        top: 10,
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: 'red',
        borderRadius: 100,
    },
    circle3Btn: {
        opacity: 0,
        position: 'absolute',
        left: width / 7 - width / 5.3,
        height: 100,
        width: 70,
    },
    circle4: {
        position: 'absolute',
        left: width / 1.315,
        top: 10,
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: 'red',
        borderRadius: 100,
    },
    circle4Btn: {
        opacity: 0,
        position: 'absolute',
        left: width / 7 - width / 5.3,
        height: 100,
        width: 70,
    },
    circle5: {
        position: 'absolute',
        left: width / 5.6,
        bottom: 10,
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'black',
        borderRadius: 100,
    },
    circle5Btn: {
        opacity: 0,
        position: 'absolute',
        left: width / 7 - width / 5.3,
        height: 100,
        width: 70,
    },
    circle6: {
        position: 'absolute',
        left: width / 2.68,
        bottom: 10,
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'black',
        borderRadius: 100,
    },
    circle6Btn: {
        opacity: 0,
        position: 'absolute',
        left: width / 7 - width / 5.3,
        height: 100,
        width: 70,
    },
    circle7: {
        position: 'absolute',
        left: width / 1.765,
        bottom: 10,
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'black',
        borderRadius: 100,
    },
    circle7Btn: {
        opacity: 0,
        position: 'absolute',
        left: width / 7 - width / 5.3,
        height: 100,
        width: 70,
    },
    circle8: {
        position: 'absolute',
        left: width / 1.315,
        bottom: 10,
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'black',
        borderRadius: 100,
    },
    circle8Btn: {
        opacity: 0,
        position: 'absolute',
        left: width / 7 - width / 5.3,
        height: 100,
        width: 70,
    },
    gameButton1: {
        opacity: 0,
        position: 'absolute',
        left: width / 7.3,
        height: 100,
        width: 70,
    },
    gameButton2: {
        opacity: 0,
        position: 'absolute',
        left: width / 3,
        height: 100,
        width: 70,
    },
    gameButton3: {
        opacity: 0,
        position: 'absolute',
        left: width / 1.90,
        height: 100,
        width: 70,
    },

    gameButton4: {
        opacity: 0,
        position: 'absolute',
        left: width / 1.40,
        height: 100,
        width: 70,
    },
    gameButton5: {
        opacity: 0,
        position: 'absolute',
        left: width / 7.3,
        bottom: -30,
        height: 80,
        width: 70,
    },
    gameButton6: {
        opacity: 0,
        position: 'absolute',
        left: width / 3,
        bottom: -30,
        height: 80,
        width: 70,
    },
    gameButton7: {
        opacity: 0,
        position: 'absolute',
        left: width / 1.90,
        bottom: -30,
        height: 80,
        width: 70,
    },

    gameButton8: {
        opacity: 0,
        position: 'absolute',
        left: width / 1.40,
        bottom: -30,
        height: 80,
        width: 70,
    },

    image: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: height / 40,
        width: width,
        height: width / 3,
        marginBottom: 20,
        overflow: "hidden"
    },
    redWin: {
        width: width / 2,
        height: width / 8.2,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: Colors.primary,
        borderWidth: 2,
        borderColor: 'red',
        borderRadius: 30,
    },
    redWinText: {
        fontSize: 20,
        color: 'red',
        fontWeight: 'bold',
    },

    blackWin: {
        width: width / 2,
        height: width / 8.2,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: Colors.primary,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 30,
    },
    blackWinText: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },
    gameScoresRed: {
        fontWeight: 'bold',
        color: 'red',
    },
    gameScoresBlack: {
        fontWeight: 'bold',
        color: 'black',

    },
});

export default SuecaGame;