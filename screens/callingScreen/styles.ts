import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    page: {
        width: '100%',
        height: '100%',
        backgroundColor: '#7b4e80',
    },
    cameraPreview: {
        backgroundColor: '#7b4e80',
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
    },
    
});

export default Styles;