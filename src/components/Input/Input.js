import React from "react";
import { TextInput, View } from "react-native";
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./Input.styles";

function Input({placeholder, value, iconName, onChangeText, isSecure}) {
    return(
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder={placeholder} value={value} onChangeText={onChangeText} secureTextEntry={isSecure}/>
            <Icon name={iconName} size={25} color="gray"/>
        </View>
    )
}
export default Input