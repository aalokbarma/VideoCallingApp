import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    page: {
        padding: 15,
        // marginBottom: 25,
        height: '100%',
        backgroundColor: 'white',
    },
    contactName: {
        fontSize: 18,
        marginVertical: 15,
        fontWeight: '500',
    },
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: "#f0f0f0",
    },
    contactRow: { 
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    callButtons: { 
        flexDirection: "row",
    },
    callButton: {
        marginRight: 15,
    },
    vidCallButton: {
        marginRight: 10,
    },
    
});

export default Styles;