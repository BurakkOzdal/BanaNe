import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import FloatingButton from "../../components/FloatingButton";
import ContentInputModal from "../../components/Modal/ContentInputModal";
import database from "@react-native-firebase/database";
import auth from "@react-native-firebase/auth";
import parseContentData from "../../utils/parseContentData";
import MessageCard from "../../components/Card/MessageCard/MessageCard";

function Messages() {

    const [inputModalVisible, setInputModalVisible] = useState(false);
    const [contentList, setContentList] = useState([]);

    useEffect(() => {
        database().ref('/messages/').on('value', snapshot => {
            const contentData = snapshot.val()

            const parsedData = parseContentData(contentData || {})
            setContentList(parsedData)
        })
    }, [])

    function handleInputToggle() {
        setInputModalVisible(!inputModalVisible);
    }

    function handleSendContent(content) {

        handleInputToggle()

        sendContet(content)
    }

    function sendContet(content) {

        const userMail = auth().currentUser.email;

        const contentObject = {
            text: content,
            userName: userMail.split('@')[0],
            date: new Date().toISOString(),
            dislike: 0
        }

        console.log(contentObject)

        database().ref('/messages').push(contentObject)
    }

    function handleBanane(item) {
        database().ref(`/messages/${item.id}/`).update({ dislike: item.dislike + 1 })
    }
    const renderContent = ({ item }) => <MessageCard message={item} onBanane={() => handleBanane(item)} />
    return (
        <SafeAreaView>
            <FlatList
                data={contentList}
                renderItem={renderContent} />
            <FloatingButton icon="plus" onPress={handleInputToggle} />
            <ContentInputModal visible={inputModalVisible} onClose={handleInputToggle} onSend={handleSendContent} />
        </SafeAreaView>
    )
}

export default Messages;