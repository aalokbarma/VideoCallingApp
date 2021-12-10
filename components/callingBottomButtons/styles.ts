import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    buttonsContainer: {
        height: '20%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: 'darkgray',
        paddingHorizontal: 25,
        paddingTop: 5,
        alignItems: 'center',
        marginTop: 'auto',
    },
    upArrowIcon: {
        fontWeight: "600",
    },
    buttonsContainerView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: "100%",
        marginTop: 10,
    },
    buttonContainer: {
        paddingHorizontal: 12,
        paddingVertical: 10,
        backgroundColor: '#666',
        borderRadius: 50,
    },
    redButtonContainer: {
        paddingHorizontal: 12,
        paddingVertical: 10,
        backgroundColor: 'red',
        borderRadius: 50,
    },
    buttonIcon: {

    },
});

export default Styles;