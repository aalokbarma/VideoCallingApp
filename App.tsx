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
import CallingScreen from './screens/callingScreen';
import CallScreen from './screens/callScreen';
import ContactScreen from './screens/contactsScreen';
import IncomingCallScreen from './screens/incomingCallScreen';
import Styles from './Styles';

const App = () => {

  return (
    <SafeAreaView style={Styles.mainPage}>
      <StatusBar/>
      {/* <ContactScreen /> */}
      {/* <CallingScreen /> */}
      {/* <IncomingCallScreen /> */}
      <CallScreen />
    </SafeAreaView>
  );
};



export default App;
