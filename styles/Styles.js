import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#dfebfb',
        alignItems: 'center',
        flex: 1,
    },
    header:{
        fontFamily: "RussoOne-Regular",
        fontSize: 34,
        paddingBottom: 30,
        color: "#0f428a",
    },
    radioAlign:{
        flexDirection: 'row',
        alignItems:'center'
    },
    settingsDescr:{
        fontSize: 18,
        paddingBottom: 30
    },
    exerciseButtons:{
        flexDirection:'row',
        flexWrap: 'wrap',
        gap: 2
    },
    btnStyle:{
        marginTop: 10,
        backgroundColor: "#c7dcf9",
        borderRadius: 20
    },
    txtInput:{
        width: 300,
        marginTop:10,
        
    },
    cardStyle:{
        margin:5,
        width: "80%"
    },
    sports:{
        backgroundColor: "#c7dcf9",
        borderRadius: 20
    },
    chipStyle:{
        margin: 2
    },
    totalExTxt:{
        fontSize: 18,
        paddingBottom: 10
    }
})