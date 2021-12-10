import React, { useState } from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import Styles from './styles';
import contacts from '../../assets/data/contacts.json';
import dummycontacts from '../../assets/data/contacts.json';
import ContactsHeader from '../../components/contactsHeader';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/core';
import CallingScreen from '../callingScreen';

interface contactsProp{
    item: {
      user_id: String,
      user_name: String,
      user_display_name: String,
      number: String,
    }
  }


  
  // const ContactRow = ({item}: contactsProp) => {
  //   return(
  //     <View style = {Styles.contactRow}>
  //       <Text style = {Styles.contactName}>{item.user_display_name}</Text>
  //       <View style = {Styles.callButtons}>
  //         {/* <Pressable onPress={() => console.warn(`Calling to ${item.user_display_name} in Pregress...`)}>
  //           <Ionicons style = {Styles.callButton} name="call" size={24} color="#0cc61b" />
  //         </Pressable> */}
  //         <Pressable onPress={() => callUser({item})}>
  //           <Feather style = {Styles.vidCallButton} name="video" size={30} color="#0cc61b" />
  //         </Pressable>
  //       </View>
  //     </View>
      
  //   )
  // }
  
  const ContactScreen = () => {

    const navigation = useNavigation();


    const callUser = ({item}: contactsProp) => {
      // console.warn(`Calling to ${item.user_display_name} in Pregress...`);
      navigation.navigate('Calling', {item})
    }

      const [filteredContacts, setFilteredContacts] = useState(dummycontacts)
      return (
          <View  style = {Styles.page}>
          <ContactsHeader filteredContacts = {filteredContacts} setFilteredContacts ={setFilteredContacts} />
          <FlatList
            data = {filteredContacts}
            renderItem = {({item}) => 

            <View style = {Styles.contactRow}>
              <Text style = {Styles.contactName}>{item.user_display_name}</Text>
              <View style = {Styles.callButtons}>
                {/* <Pressable onPress={() => console.warn(`Calling to ${item.user_display_name} in Pregress...`)}>
                  <Ionicons style = {Styles.callButton} name="call" size={24} color="#0cc61b" />
                </Pressable> */}
                <Pressable onPress={() => callUser({item})}>
                  <Feather style = {Styles.vidCallButton} name="video" size={30} color="#0cc61b" />
                </Pressable>
              </View>
            </View>
            
            // ContactRow({item})
          
          }
            ItemSeparatorComponent = {() => <View style = {Styles.separator} />}
          />
        </View>
      )
  }
  
  export default ContactScreen;
