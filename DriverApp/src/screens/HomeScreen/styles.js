import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    bottomContainer: {
        height: 100,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
    },
    bottomText: {
        fontSize: 22,
        color: '#4a4a4a'
    },
    roundButton: {
        position: 'absolute',
        backgroundColor: "white",
        padding: 10,
        borderRadius: 25,
    },
    goButtonContainer: {
        position: 'absolute',
        // top: 0,
        left: 0,
        right: 0,
        bottom: 110,
        justifyContent: 'center',
        alignItems: 'center',
    },
    goButton: {
        // position: 'absolute',
        backgroundColor: "#1495ff",
        width: 75,
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        // bottom: 110,
        // left: '50%'
    },
    goText: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
    },
    balanceContainer: {
        position: 'absolute',
        // top: 0,
        left: 0,
        right: 0,
        top: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    balanceButton: {
        // position: 'absolute',
        backgroundColor: "#000",
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        // bottom: 110,
        // left: '50%'
    },
    balanceText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
})

export default styles;
