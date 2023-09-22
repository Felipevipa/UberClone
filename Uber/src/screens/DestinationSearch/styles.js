import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 10,
        // backgroundColor:'#eee',
        height: '100%',
    },
    textInput: {
        padding: 10,
        backgroundColor: '#eee',
        marginVertical: 5,
        marginLeft: 20,
    },
    separator: {
        backgroundColor: '#efefef',
        height: 1,
    },
    listView: {
        position: 'absolute',
        top: 105,
        // backgroundColor: 'red'
    },
    autoCompleteContainer: {
        position: 'absolute',
        top: 0,
        left: 10,
        right: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    iconContainer: {
        backgroundColor: '#a2a2a2',
        padding: 5,
        borderRadius: 50,
        marginRight: 15,
    },
    locationText: {

    },
    circle: {
        position: 'absolute',
        top: 20,
        left: 15,
        width: 5,
        height: 5,
        backgroundColor: 'black',
        borderRadius: 5,
    },
    line: {
        position: 'absolute',
        top: 30,
        left: 17,
        width: 1,
        height: 50,
        backgroundColor: '#c4c4c4',
    },
    square: {
        position: 'absolute',
        top: 80,
        left: 15,
        width: 5,
        height: 5,
        backgroundColor: 'black',
    },
});

export default styles;