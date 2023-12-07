import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { server } from '../api/server';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUserLogged } from '../reduxtk/slice';


const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const distpath = useDispatch();

    //boton para inciar sesion
    const handleLogin = async () => {
        try {
            const user = {
                email: email,
                password: password
            }

            const response = await axios.post(`${server}/api/login`, user);


            if (!response.data.hasOwnProperty('userId')) {
                Alert.alert('Opps !!', response.data.message, [
                    { text: "Reintentar", onPress: () => {
                        setEmail('');
                        setPassword('');
                    } },
                ]);
            }else {
                distpath(setUserLogged(response.data))
                Alert.alert('Ingreso correcto!!', response.data.message, [
                    { text: "Aceptar", onPress: () => {
                        navigation.navigate("Home")
                    }},
                ]);
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View
            style={styles.container}>
            <View
                style={styles.card}>
                <Text style={styles.title}>Login</Text>

                <TextInput
                    style={styles.input}
                    onChangeText={text => setEmail(text)}
                    value={email}
                    placeholder='Ingrese su correo electronico' />

                <TextInput
                    style={styles.input}
                    onChangeText={text => setPassword(text)}
                    value={password}
                    placeholder='Ingrese su contraseña'
                    secureTextEntry />

                <TouchableOpacity
                    onPress={async () => await handleLogin()}
                    style={styles.button}>
                    <Text style={styles.textButton}>Iniciar Sesión</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    card: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        padding: 10,
        borderRadius: 10,
    },
    title: {
        fontSize: 17,
        fontWeight: 700,
        textAlign: 'center',
        marginBottom: 10,
        color: '#1565C0',
    },
    input: {
        width: '100%',
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#EEEEEE',
        borderRadius: 6,
    },
    button: {
        width: '100%',
        padding: 10,
        backgroundColor: '#1565C0',
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    textButton: {
        color: '#FFFFFF',
        fontWeight: 700,
    }
});
