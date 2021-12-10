import { useNavigation, useRoute } from '@react-navigation/core';
import React from 'react';
import { View, Text } from 'react-native';
import CallingBottomButtons from '../../components/callingBottomButtons';
import Styles from './styles';



const CallingScreen = () => {

    const navigation = useNavigation();
    const route = useRoute();

    const item = route?.params?.item;

    // console.log(item);

    const onDecline = () => {
        navigation.navigate('Contacts');
    }

    return (
        <View style = {Styles.page}>
            <View style = {Styles.cameraPreview}>
                <Text style = {Styles.name}>{item.user_display_name}</Text>
                <Text style = {Styles.phoneNumber}>ringing...  +91 - {item.number}</Text>
            </View>
            <CallingBottomButtons onDecline = {onDecline} />
        </View>
    )
}

export default CallingScreen;
