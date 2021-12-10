import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import Styles from './styles';;

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const CallingBottomButtons = () => {
    const [videoColor, setVideoColor] = useState('#222');
    const [videoIcon, setVideoIcon] = useState('video-off');
    const [micColor, setMicColor] = useState('#222');
    const [micIcon, setMicIcon] = useState('mic-off');


    const toggleCamera = () => {
        console.warn('Camera Flipped');
    };
    const toggleVideo = () => {
        if(videoColor == "#222"){
            setVideoColor('white');
            setVideoIcon('video');
        }
        else{
            setVideoColor('#222');
            setVideoIcon('video-off');
        }
    };
    const toggleMic = () => {
        if(micColor == "#222"){
            setMicColor('white');
            setMicIcon('mic-sharp');
        }
        else{
            setMicColor('#222');
            setMicIcon('mic-off');
        }
    };
    const onDecline = () => {
        console.warn("Decline Button Clicked.")
    };


    return (
        <View style = {Styles.buttonsContainer}>
                <MaterialIcons style = {Styles.upArrowIcon} name="keyboard-arrow-up" size={30} color="#555" />
                <View style = {Styles.buttonsContainerView}>
                    <Pressable onPress={toggleCamera} style = {Styles.buttonContainer}>
                        <Ionicons style = {Styles.buttonIcon} name="camera-reverse-outline" size={32} color="white" />
                    </Pressable>
                    <Pressable onPress={toggleVideo} style = {Styles.buttonContainer}>
                        <Feather style = {Styles.buttonIcon} name={videoIcon} size={32} color={videoColor} />
                    </Pressable>
                    <Pressable onPress={toggleMic} style = {Styles.buttonContainer}>
                        <Ionicons style = {Styles.buttonIcon} name= {micIcon} size={32} color= {micColor} />
                    </Pressable>
                    <Pressable onPress={onDecline} style = {[Styles.buttonContainer, {backgroundColor: 'red'}]}>
                        <MaterialIcons style = {Styles.buttonIcon} name="call-end" size={32} color="white" />
                    </Pressable>
                </View>
            </View>
    )
}

export default CallingBottomButtons
