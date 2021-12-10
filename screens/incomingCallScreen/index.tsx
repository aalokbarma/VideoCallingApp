import React, { useState } from 'react';
import { View, Text, Pressable, ImageBackground } from 'react-native';
import Styles from './styles';
import bg from '../../assets/Images/Inc_bg.jpg';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';


const onDecline = () => {
    console.warn('Decline Button Clicked')
};
const onAccept = () => {
    console.warn('Accept Button Clicked.')
};


const IncomingCallScreen = () => {

    const [remindColor, setRemindColor] = useState('white');


    const onRemindPress = () => {
        if(remindColor == "white"){
            setRemindColor('#0f0');
        } else{
            setRemindColor('white');
        }
    };

    return (
        <View style = {Styles.page}>
            <ImageBackground source={bg} style = {Styles.image}>
                <View style = {Styles.cameraPreview}>
                    <Text style = {Styles.name}>❤Yammy❤</Text>
                    <View style = {Styles.whatsappCallContainer}>
                        <FontAwesome name="whatsapp" size={24} color="#0f0" />
                        <Text style = {Styles.phoneNumber}>WhatsApp Video ...</Text>
                    </View>
                </View>
                <View style = {Styles.buttonsContainer}>
                    <View style = {Styles.remAndMessContainer}>
                        <Pressable onPress={onRemindPress} style = {Styles.remindContainer}>
                            <Ionicons name="alarm" size={30} color={remindColor} />
                            <Text style = {[Styles.buttontext, {color: remindColor}]}>Remind Me</Text>
                        </Pressable>
                        <Pressable style = {Styles.messageContainer}>
                            <AntDesign style = {Styles.messageIcon} name="message1" size={24} color="black" />
                            <Text style = {Styles.buttontext}>Message</Text>
                        </Pressable>
                    </View>
                    <View style = {Styles.acceptDeclineContainer}>
                        <View style = {Styles.declineContainer}>
                            <Pressable onPress={onDecline} style = {Styles.declineButton}>
                                <Entypo name="cross" size={50} color="black" />
                            </Pressable>
                            <Text style = {Styles.buttontext}>Decline</Text>
                        </View>
                        <View style = {Styles.acceptContainer}>
                            <Pressable onPress={onAccept} style = {Styles.acceptButton}>
                                <AntDesign style = {Styles.checkIcon} name="check" size={45} color="black" />
                            </Pressable>
                            <Text style = {Styles.buttontext}>Accept</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default IncomingCallScreen
