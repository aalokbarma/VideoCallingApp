/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView,StatusBar,Text,} from 'react-native';

import Styles from './Styles';

import { NavigationContainer } from '@react-navigation/native';
import Navigation from './navigation';

const App = () => {

  return (
    <SafeAreaView style={Styles.mainPage}>
      <StatusBar/>
      <Navigation />




      {/* <NavigationContainer>
        <ContactScreen />
      </NavigationContainer> */}
      {/* <CallingScreen /> */}
      {/* <IncomingCallScreen /> */}
      {/* <CallScreen /> */}
    </SafeAreaView>
  );
};



export default App;
