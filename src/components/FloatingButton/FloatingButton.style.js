import { StyleSheet } from "react-native";
import colors from "../../styles/colors"

export default StyleSheet.create({
    container:{
        position:"absolute",
        right:20,
        top:500,
        borderRadius:50,
        width:60,
        height:60,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: colors.blue,
        borderColor:"white",
        borderWidth:0.5,
    }
})