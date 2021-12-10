import React, { useEffect, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import Styles from './styles';
import contacts from '../../assets/data/contacts.json';
// import { AntDesign } from '@expo/vector-icons'; 
import AntDesign from 'react-native-vector-icons/AntDesign';
// import Ionicons   from 'react-native-vector-icons/Ionicons';

interface filtertypes{
    filteredContacts: [String],
    setFilteredContacts: Function,
}

const ContactsHeader = ({filteredContacts, setFilteredContacts}: filtertypes) => {

    const [search, setSearch] = useState('');

    useEffect(() => {
        const newContacts = contacts.filter( contact => contact.user_display_name.toLowerCase().includes(search.toLowerCase()));
        setFilteredContacts(newContacts);
    }, [search]);

    return (
        <View style = {Styles.headerMain}>
            <View style = {Styles.headingRow}>
                <Text style = {Styles.headingMinor}>
                    Groups
                </Text>
                <Text style = {Styles.headingMajor}>
                    Contacts
                </Text>
                <Text style = {Styles.headingMinor}>
                    <AntDesign name="plus" size={24} color="cyan" />
                </Text>
            </View>
            <View style = {Styles.searchbarContainer}>
                <AntDesign style = {Styles.searchIcon} name="search1" size={22} color="#333" />
                <TextInput
                    style = {Styles.searchBar}
                    placeholder = "Search"
                    placeholderTextColor= '#444'
                    value = {search}
                    onChangeText = {setSearch}
                />
            </View>
        </View>
    )
}

export default ContactsHeader;
