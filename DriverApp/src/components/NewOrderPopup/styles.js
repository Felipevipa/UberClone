import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    root: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: 20,
        height: '98%',
        justifyContent: 'space-between',
        backgroundColor: '#00000050',
    },
    popupContainer: {
        backgroundColor: 'black',
        height: 250,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    minutes: {
        color: 'lightgrey',
        fontSize: 36,
    },
    distance: {
        color: 'lightgrey',
        fontSize: 26,
    },
    uberType: {
        color: 'lightgrey',
        fontSize: 20,
        marginHorizontal: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    userBg: {
        backgroundColor: '#1495ff',
        width: 75,
        height: 75,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 60,
    },
    declineButton: {
        backgroundColor: 'black',
        padding: 20,
        borderRadius: 50,
        width: 100,
        alignItems: 'center',
    },
    declineText: {
        color: 'white',
        fontWeight: 'bold',
    },
})

export default styles;
