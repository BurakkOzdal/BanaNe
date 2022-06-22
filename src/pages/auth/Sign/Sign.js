import React, { useState } from "react";
import { SafeAreaView, Text } from "react-native";
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { Formik } from "formik";
import styles from './Sign.styles';
import auth from '@react-native-firebase/auth'
import { showMessage } from "react-native-flash-message";
import authErrorMessageParser from "../../../utils/authErrorMessageParser";


const initialFormValues = {
    usermail: "",
    password: "",
    repassword: "",
}

function Sign({ navigation }) {

    const [loading, setLoading] = useState(false);
    function handleLogin() {
        navigation.goBack()
    }

    async function handleFormSubmit(formValues) {
        if (formValues.password !== formValues.repassword) {
            
            showMessage({
                message:"Şifreler uyuşmuyor" ,
                type: "danger"
            })
            return
        }
        try {
            setLoading(true)
            await auth().createUserWithEmailAndPassword(formValues.usermail, formValues.repassword)
            setLoading(false)
            navigation.navigate("MessagesPage")

            showMessage({
                message: "Kayıt Başarılı",
                type: "success"
            })

        } catch (error) {
            setLoading(false)
            showMessage({
                message: authErrorMessageParser(error.code),
                type: "danger"
            })
        }

        console.log(formValues)
    }
    return (
        <SafeAreaView style={styles.constainer}>
            <Text style={styles.header}>bana ne?</Text>

            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
                {({ values, handleChange, handleSubmit }) => (
                    <>
                        <Input value={values.usermail} onChangeText={handleChange('usermail')} placeholder="e-postanızı giriniz..." />
                        <Input value={values.password} onChangeText={handleChange('password')} placeholder="şifrenizi giriniz..." isSecure/>
                        <Input value={values.repassword} onChangeText={handleChange('repassword')} placeholder="şifrenizi tekrar giriniz..." isSecure/>
                        <Button text="Kayıt Ol" onPress={handleSubmit} loading={loading} />
                    </>
                )}
            </Formik>

            <Button text="Giriş Yap" theme="secondary" onPress={handleLogin} />
        </SafeAreaView>
    )
}

export default Sign;