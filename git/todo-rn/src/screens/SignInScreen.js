import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, View, Pressable, Keyboard, KeyboardAvoidingView, Alert } from 'react-native';
import LogoImage from '../components/LogoImage';
import CustomInput from '../components/CustomInput';
import { KeyboardTypes } from '../components/CustomInput';
import Button from '../components/Button';
import { useEffect, useState } from 'react';
import { LoginAsync } from "../api/auth";




const SignInScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disabled,setDisabled] = useState(true);

    useEffect(() => {
        setDisabled(!email || !password);
    }, [email, password])

        const onSubmit = () => {
            LoginAsync(email, password)
                .then((success) => {
                    console.log(success);
                    Alert.alert('로그인 성공', success);
                })
                .catch((fail) => {
                    console.log(fail);
                    Alert.alert('로그인 실패', fail)
                })
        }

    return(
        <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.select({android: 'padding'})}
        >
        <Pressable
            style={{flex: 1}}
            onPress={() => Keyboard.dismiss()}
        >
            <View style={styles.container}>
                <LogoImage/>
                <CustomInput
                    title = {"아이디"}
                    placeholder={"your@email.com"}
                    keyboardType={KeyboardTypes.EMAIL}
                    icon={"mail"}
                    onChangeText={setEmail}
                    
                />
                <CustomInput
                    title = {"비밀번호"}
                    placeholder={"비밀번호"}
                    keyboardType={KeyboardTypes.DEFAULT}
                    icon={"lock"}
                    onChangeText={setPassword}
                />
                <Button
                    title = {"로그인"}
                    marginTop={40}
                    disabled={disabled}
                    onPress={() => onSubmit()}
                />
                <Button
                    title = {"회원가입"}
                    marginTop={10}
                />
            </View>
        </Pressable>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SignInScreen;