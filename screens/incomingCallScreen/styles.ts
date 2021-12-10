import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    page: {
        width: '100%',
        height: '100%',
        // backgroundColor: '#603778',
    },
    image: {
        width: '100%',
        height: "100%",
        resizeMode: 'cover',
    },
    cameraPreview: {
        // backgroundColor: '#603778',
        flex: 1,
        alignItems: 'center',
        paddingTop: 75,
    },
    name: {
        fontSize: 30,
        margin: 15,
        color: 'white',
    },
    phoneNumber: {
        fontSize: 18,
        color: 'white',
        fontWeight: '300',
        marginLeft: 10,
    },
    whatsappCallContainer: {
        flexDirection: 'row',
    },
    buttonsContainer: {
        width: '100%',
        height: "40%",
    },
    remAndMessContainer: {
        width: '100%',
        height: "40%",
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    remindContainer: {
        alignItems: 'center',
    },
    buttontext: {
        fontSize: 14,
        marginTop: 10,
        color: 'white',
    },
    messageContainer: {
        alignItems: 'center',
    },
    messageIcon: {
        marginTop: 10,
    },
    acceptDeclineContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    declineContainer: {
        alignItems: 'center',
    },
    declineButton: {
        paddingVertical: 12,
        paddingHorizontal: 14,
        backgroundColor: 'red',
        borderRadius: 50,
    },
    acceptContainer: {
        alignItems: 'center',
    },
    acceptButton: {
        paddingVertical: 15,
        paddingHorizontal: 16,
        backgroundColor: '#4a8fff',
        borderRadius: 50,
    },
    checkIcon: {
        marginTop: 0,
    },
});

export default Styles;