import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { View, Text, PermissionsAndroid, Alert, Platform } from 'react-native';
import CallingBottomButtons from '../../components/callingBottomButtons';
import Styles from './styles';


const permissions = [
    PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
    PermissionsAndroid.PERMISSIONS.CAMERA
]


const CallingScreen = () => {

    const [permissionGranted, setPermissionGranted] = useState(false);

    const navigation = useNavigation();
    const route = useRoute();

    const item = route?.params?.item;

    // console.log(item);

    const onDecline = () => {
        navigation.navigate('Contacts');
    }

    useEffect(() => {
        const getPermission = async () => {
            const granted = await PermissionsAndroid.requestMultiple(permissions);
            const recordAudioGranted =
            granted[PermissionsAndroid.PERMISSIONS.RECORD_AUDIO] = 'granted';
            const cameraGranted =
            granted[PermissionsAndroid.PERMISSIONS.CAMERA] = 'granted';
            if (!cameraGranted || !recordAudioGranted) {
            Alert.alert('Permissions not granted');
            } else {
            setPermissionGranted(true);
 }
        }

        if (Platform.OS === 'android'){
            getPermission();
        }
        else{
            setPermissionGranted(true);
        }

    }, [])

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
