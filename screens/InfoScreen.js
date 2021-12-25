import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, Modal, Dimensions } from "react-native";
import InfoItem from "../components/InfoItem";
import RoundedButton from "../components/RoundedButton";
import Colors from "../constants/Colors";

const { width, height } = Dimensions.get('screen');
const InfoScreen = props => {

    const [currentLanguage, setCurrentLanguage] = useState(props.language);

    const [instructionsText, setInstructionsText] = useState(undefined);
    const [description1, setDescription1] = useState(undefined);
    const [description2, setDescription2] = useState(undefined);
    const [description3, setDescription3] = useState(undefined);
    const [description4, setDescription4] = useState(undefined);
    const [description5, setDescription5] = useState(undefined);
    const [description6, setDescription6] = useState(undefined);
    const [returnText, setReturnText] = useState(undefined);


    useEffect(() => {
        if (currentLanguage === 'ENG') {
            setInstructionsText('Instructions');
            setReturnText('Return')
            setDescription1('Tap on the line to add a circle representing a team point');
            setDescription2('Tap on add button to initialize a new Sueca game');
            setDescription3('Tap on Remove button to delete the last Sueca game added');
            setDescription4('Tap on Delete All button to remove all the current Sueca games');
            setDescription5('Tap on the Home button to return to Home Screen');
            setDescription6('Tap on a red or black circle to remove it');
        }
        if (currentLanguage === 'PT') {
            setInstructionsText('Instruções');
            setReturnText('Voltar')
            setDescription1('Toca em cima da linha para adicionar um ponto à respetiva equipa');
            setDescription2('Toca no botão de Adicionar para adicionar um novo jogo de Sueca');
            setDescription3('Toca no botão da cruz para remover o ultimo jogo adicionado');
            setDescription4('Toca no botão do lixo para remover todos os jogos');
            setDescription5('Toca no botão da casa para voltar ao ecrã inicial');
            setDescription6('Toca numa bola vermelha ou preta para a remover');
        }
    }, [currentLanguage, description1, description2, description3, description4, description5, description6]);

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <Text style={styles.headerText}> {instructionsText} </Text>
                <View style={styles.languageBtnContainer}>
                    {/* <RoundedButton title={currentLanguage} style={styles.languageBtn} styleText={styles.languageStyle} onPress={() => {
                        if (currentLanguage === 'ENG') {
                            setCurrentLanguage('PT')
                        }
                        else {
                            setCurrentLanguage('ENG')
                        }
                    }} /> */}
                </View>
            </View>
            <View style={styles.infoContainer}>
                <InfoItem source={require('../assets/topLine.png')} description={description1} styleImage={styles.image1} styleImageSize={styles.image1Size} />
                <InfoItem source={require('../assets/addForInfo.png')} description={description2} styleImage={styles.image2} styleImageSize={styles.image2Size} />
                <InfoItem source={require('../assets/remove.png')} description={description3} styleImage={styles.image2} />
                <InfoItem source={require('../assets/clearAllForInfo.png')} description={description4} styleImage={styles.image4} />
                <InfoItem source={require('../assets/homeBtnForInfo.png')} description={description5} styleImage={styles.image2} />
                <InfoItem source={require('../assets/twoBtns.png')} description={description6} styleImage={styles.image2} />

            </View>
            <View style={styles.buttonContainer}>
                <RoundedButton title={returnText} style={styles.returnBtn} onPress={props.onReturnPress} />

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: Colors.background,
    },

    languageBtnContainer: {

    },
    languageBtn: {
        borderColor: Colors.primary,
    },
    languageStyle: {
        color: Colors.primary,
        fontSize: height * 0.03,
    },
    header: {
        width: width,
        flexDirection: 'row',
        height: height * 0.07,
        justifyContent: 'center',
        marginTop: height * 0.02,
        paddingHorizontal: width * 0.05,
    },
    headerText: {
        fontSize: 24,
        color: Colors.primary,
        fontWeight: 'bold',
    },
    image1: {
        position: 'absolute',
        top: width / 25,
        right: width / 1.25,
    },
    image2: {
        position: 'absolute',
        top: width / 25,
        right: width / 1.25,
    },
    image2Size: {
        width: width * 0.03,
    },
    image4: {
        position: 'absolute',
        top: width / 25,
        right: width / 1.25,
    },
    image1Size: {
        width: width * 0.01,
    },
    infoContainer: {
        justifyContent: 'center',
        marginTop: width / 30,
        alignItems: 'center',
        //padding: 10,
        width: width,
        height: height * 0.70,
        backgroundColor: Colors.background,
    },
    returnBtn: {

        backgroundColor: Colors.primary,
        width: width / 1.5,
        height: height * 0.07,
        borderColor: Colors.primary,
    },
    buttonContainer: {
        paddingBottom: width / 15,
        flex: 1,
        backgroundColor: Colors.background,
        justifyContent: 'center',


    },
});

export default InfoScreen;