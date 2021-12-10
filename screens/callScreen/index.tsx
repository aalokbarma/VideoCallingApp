import React from 'react';
import { View, Text } from 'react-native';
import CallingBottomButtons from '../../components/callingBottomButtons';
import Styles from './styles';

const CallScreen = () => {
    return (
        <View style ={Styles.page}>
            <View style = {Styles.cameraPreview}>
            </View>
            <CallingBottomButtons />
        </View>
    )
}

export default CallScreen;
