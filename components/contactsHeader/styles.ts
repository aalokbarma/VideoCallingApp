import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    headerMain: {
        borderBottomColor: '#222',
        borderBottomWidth: 1.5,
        borderStyle: 'solid',
        width: '100%',
    },
    headingRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headingMinor: {
        fontSize: 18,
        fontWeight: "300",
        color: 'cyan',
    },
    headingMajor: {
        fontSize: 18,
        fontWeight: '500',
        color: 'black',
        marginLeft: -40,
    },
    searchbarContainer: {
        width: '100%',
        height: 32,
        backgroundColor: '#777',
        borderRadius: 10,
        marginTop: 15,
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginBottom: 10,
        
    },
    searchIcon: {
        marginTop: 5,
    },
    searchBar: {
        width: '94%',
        height: 35,
        paddingHorizontal: 5,
        paddingTop: 0,
        paddingBottom: 5,
        borderWidth: 0,
        color: 'white',
        fontWeight: "400",
        letterSpacing: 0.7,
        fontSize: 16,    },
    
});

export default Styles;