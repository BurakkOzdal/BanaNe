import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./FloatingButton.style";

function Button({onPress, icon}) {
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon name={icon} size={30} color="white"/>
        </TouchableOpacity>
    )
}
export default Button