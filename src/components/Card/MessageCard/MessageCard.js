import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./MessageCard.style";
import { formatDistance, parseISO } from 'date-fns'
import { tr } from "date-fns/locale";

function MessageCard({ message, onBanane }) {

    const formatedDate = formatDistance(parseISO(message.date), new Date(), {
        addSuffix: true,
        locale: tr
    })
    return (
        <View style={styles.container}>
            <View style={styles.inner_container}>
                <Text style={styles.user}> {message.userName} </Text>
                <Text style={styles.date}> {formatedDate}</Text>
            </View>
            <Text style={styles.title}> {message.text} </Text>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.dislile_container} onPress={onBanane}>
                    {!!message.dislike &&
                        (
                            <View style={styles.dislike_count_container}>
                                <Text style={styles.dislike_count_text}> {message.dislike} </Text>
                            </View>
                        )
                    }
                    <Text style={styles.dislike_text}> bana ne?</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MessageCard;