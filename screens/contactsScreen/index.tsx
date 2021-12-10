import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import Styles from './styles';
import contacts from '../../assets/data/contacts.json';
import dummycontacts from '../../assets/data/contacts.json';
import ContactsHeader from '../../components/contactsHeader';

interface contactsProp{
    item: {
      user_id: String,
      user_name: String,
      user_display_name: String,
    }
  }
  
  const ContactRow = ({item}: contactsProp) => {
    return(
      <View style = {Styles.contactRow}>
        <Text style = {Styles.contactName}>{item.user_display_name}</Text>
        <View style = {Styles.callButtons}>
          {/* <Ionicons name="call" size={24} color="#555" />
          <Feather name="video" size={24} color="#555" /> */}
        </View>
      </View>
      
    )
  }
  
  const ContactScreen = () => {
      const [filteredContacts, setFilteredContacts] = useState(dummycontacts)
      return (
          <View  style = {Styles.page}>
          <ContactsHeader filteredContacts = {filteredContacts} setFilteredContacts ={setFilteredContacts} />
          <FlatList
            data = {filteredContacts}
            renderItem = {({item}) => ContactRow({item})}
            ItemSeparatorComponent = {() => <View style = {Styles.separator} />}
          />
        </View>
      )
  }
  
  export default ContactScreen;
