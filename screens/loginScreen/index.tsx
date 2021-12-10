import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import Styles from './styles';

const LoginScreen = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = () => {
        console.warn('Login Successful')
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
