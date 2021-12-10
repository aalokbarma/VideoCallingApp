import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    page: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    userNameInput:{
        width: '100%',
        borderRadius: 5,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        marginHorizontal: 10,
        letterSpacing: 1,
        marginVertical: 10,
    },
    passwordInput: {
        width: '100%',
        borderRadius: 5,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        marginHorizontal: 10,
        letterSpacing: 1,
        marginVertical: 10,
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        backgroundColor: '#11b1f1',
        padding: 7,
        borderRadius: 7
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '700',
        letterSpacing: 2,
    },
});

export default Styles;