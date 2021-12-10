import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import Styles from './styles';
import {Voximplant} from 'react-native-voximplant';

import { APP_NAME, ACC_NAME } from '../../constants';
import { useNavigation } from '@react-navigation/core';

const LoginScreen = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const voximplant = Voximplant.getInstance();
    const navigation = useNavigation();

    useEffect (() => {
        const connect = async () => {
            const status = await voximplant.getClientState();
            // console.log(status);
            if (status === Voximplant.ClientState.DISCONNECTED){
                await voximplant.connect();
            }
            else if (status === Voximplant.ClientState.LOGGED_IN) {
                redirectHome();
                }
        };

        connect();
    }, [])

    const onSubmit = async () => {
        try{
            const fqUsername = `${username}@${APP_NAME}.${ACC_NAME}.voximplant.com`;
            await voximplant.login(fqUsername, password);
            redirectHome()
        } catch (e){
            // console.log(e)
            Alert.alert(e.name, `Error code: ${e.code}`)
            setUsername('')
            setPassword('')
        }
    }

    const redirectHome = () => {
        // navigation.navigate('Contacts')
        navigation.reset({
            index: 0,
            routes: [
                {
                    name: 'Contacts'
                },
            ]
        })
    }

    return (
        <View style = {Styles.page}>
            <TextInput
                value= {username}
                onChangeText = {setUsername}
                style = {Styles.userNameInput}
                placeholder='Username'
            />
            <TextInput
                value = {password}
                onChangeText={setPassword}
                style = {Styles.passwordInput}
                placeholder='Password'
                secureTextEntry
            />
            <Pressable onPress= {onSubmit} style = {Styles.buttonContainer}>
                <Text style = {Styles.buttonText}>LOG IN</Text>
            </Pressable>
        </View>
    )
}

export default LoginScreen;
