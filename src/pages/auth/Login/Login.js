import React, { useState } from "react";
import { SafeAreaView, Text } from "react-native";
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { Formik } from "formik";
import styles from './Login.styles';
import auth from '@react-native-firebase/auth'
import { showMessage } from "react-native-flash-message";
import authErrorMessageParser from "../../../utils/authErrorMessageParser";


const initialFormValues = {
    usermail: "",
    password: ""
}

function Login({ navigation }) {

    const [loading, setLoading] = useState(false);

    function handleSignUp() {
        navigation.navigate('SignPage')
    }

    async function handleFormSubmit(formValues) {
        try {
            setLoading(true)
            await auth().signInWithEmailAndPassword(formValues.usermail, formValues.password)
            navigation.navigate("MessagesPage")
            setLoading(false)
        } catch (error) {

            console.log(error)
            setLoading(false)
            showMessage({
                message:authErrorMessageParser(error.code),
                type: "danger",
              });
        }
    }


    return (
        <SafeAreaView style={styles.constainer}>
            <Text style={styles.header}>bana ne?</Text>

            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
                {({ values, handleSubmit, handleChange }) => (
                    <>
                        <Input value={values.usermail} onChangeText={handleChange('usermail')} placeholder="e-postanızı giriniz..." />
                        <Input value={values.password} onChangeText={handleChange('password')} placeholder="şifrenizi giriniz..." isSecure/>
                        <Button text="Giriş Yap" onPress={handleSubmit} loading={loading}/>
                    </>
                )}
            </Formik>

            <Button text="Kayıt Ol" theme="secondary" onPress={handleSignUp} />
        </SafeAreaView>
    )
}
export default Login;