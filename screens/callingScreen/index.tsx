import React from 'react';
import { View, Text } from 'react-native';
import CallingBottomButtons from '../../components/callingBottomButtons';
import Styles from './styles';



const CallingScreen = () => {
    return (
        <View style = {Styles.page}>
            <View style = {Styles.cameraPreview}>
                <Text style = {Styles.name}>❤Yammy❤</Text>
                <Text style = {Styles.phoneNumber}>ringing...  +91 - 987 545 8354</Text>
            </View>
            <CallingBottomButtons />
        </View>
    )
}

export default CallingScreen;
