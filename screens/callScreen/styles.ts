import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#7b4e80'
    },
    cameraPreview: {
        width : 100,
        height: 150,
        borderRadius: 5,
        backgroundColor: '#ffff6e',
        position: 'absolute',
        right: 15,
        top: 25,
    },
});

export default Styles;