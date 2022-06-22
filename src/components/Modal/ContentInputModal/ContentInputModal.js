import React, { useState } from "react";
import { TextInput, View } from "react-native";
import Button from "../../Button";
import Modal from "react-native-modal";
import styles from "./ContentInputModal.style";

function ContentInputModal({ visible, onClose, onSend }) {

    const [text, setText] = useState(null)

    function handleOnSend() {
        if (!text) {
            return
        }
        onSend(text)
        setText(null)
    }

    return (
        <Modal style={styles.modal} swipeDirection="down" isVisible={visible} onSwipeComplete={onClose} onBackdropPress={onClose} onBackButtonPress={onClose}>
            <View style={styles.container}>
                <View style={styles.input_container}>
                    <TextInput placeholder="Darla hadi milleti" onChangeText={setText} multiline/>
                </View>
                <Button text="Gönder" onPress={handleOnSend} />
            </View>
        </Modal>
    )
}

export default ContentInputModal;