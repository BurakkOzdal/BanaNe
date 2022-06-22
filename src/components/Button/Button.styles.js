import { StyleSheet } from "react-native";
import colors from "../../styles/colors";


const base_style=StyleSheet.create({
    container:{
        padding:6,
        margin:10,
        borderRadius:20,
        alignItems:"center"
    },
    button_container:{
        flexDirection:"row",
        alignItems:"center"
    },
    title:{
       fontSize:18,
       fontWeight:"bold",
    }
});

export default {
    primary: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: colors.blue,
           
        },
        title: {
            ...base_style.title,
            color: "white",
        }
    }),
    secondary: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: 'white',
            borderColor: colors.blue,
            borderWidth:1
        },
        title: {
            ...base_style.title,
            color: colors.blue,
        }
    })
}