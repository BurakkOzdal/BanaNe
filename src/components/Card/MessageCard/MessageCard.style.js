import { StyleSheet } from "react-native";
import colors from "../../../styles/colors"

export default StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        margin: 10,
        padding: 10,
        borderRadius: 10
    },
    inner_container: {
        flexDirection: "row",
    },
    user: {
        flex: 1,
        color: "white",
        fontSize: 16,
    },
    date: {
        color: "white",
        fontSize: 16,
    },
    title: {
        marginTop: 8,
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        fontStyle: "italic"
    },
    footer: {
        alignItems: "flex-end",
    },
    dislile_container: {
        flexDirection: "row",
        backgroundColor: "white",
        padding: 3,
        paddingHorizontal: 10,
        borderRadius: 20,
        alignItems: "center"
    },
    dislike_count_container: {
        backgroundColor: colors.blue,
        padding: 3,
        borderRadius: 20,
        marginRight: 3,
    },
    dislike_count_text: {
        color: "white",
        fontWeight: "bold",
    },
    dislike_text: {
        color: colors.blue,
        fontWeight: "bold",
    }
})