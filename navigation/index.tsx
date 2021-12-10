import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { View, Text } from 'react-native'
import CallingScreen from '../screens/callingScreen';
import CallScreen from '../screens/callScreen';
import ContactScreen from '../screens/contactsScreen';
import IncomingCallScreen from '../screens/incomingCallScreen';
import LoginScreen from '../screens/loginScreen';

const Navigation = () => {

    const Stack  = createNativeStackNavigator();



    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name='Login' 
                    component = {LoginScreen} 
                    options={{
                        headerStyle: {backgroundColor: '#00b487'},
                        headerBlurEffect: 'extraLight',
                        headerTintColor: '#ff8e8e',
                        headerTitleAlign: 'center',
                        headerTitleStyle: {
                            fontWeight: '700',
                        }
                    }} 
                    />
                <Stack.Group screenOptions={{headerShown : false}}>
                    <Stack.Screen name='Contacts' component = {ContactScreen} />
                    <Stack.Screen name='Call' component = {CallScreen} />
                    <Stack.Screen name='Calling' component = {CallingScreen} />
                    <Stack.Screen name='Incoming' component = {IncomingCallScreen} />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;
