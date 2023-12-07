import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

const ProfileScreen = () => {
    const user = useSelector(state => state.user)
    const navigation = useNavigation();

    //metodo para cerrar sesión
    const handleSingOut = () => {
        navigation.replace("Login");
    }

    useEffect(() => {
        readUserData();
    }, [])

    return (
        <View style={styles.container}>
            <View 
                style={styles.card}>
                <Text style={styles.title}>Perfil del usuario</Text>

                <MaterialCommunityIcons style={styles.icon} name="account" />
                <Text style={styles.userTextLabel}>Nombre</Text>
                <Text style={styles.userText}>Nombre: {user.username}</Text>
                <Text style={styles.userTextLabel}>Rol Access</Text>
                <Text style={styles.userText}>{user.rol}</Text>

                <TouchableOpacity
                    onPress={handleSingOut}
                    style={styles.button}>
                    <Text style={styles.textButton}>Cerrar Sesión</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default ProfileScreen;


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
    userTextLabel:{
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center',
    },
    userText:{
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center',
    },
    icon: {
      fontSize: 100,
      color: '#1565C0',
      textAlign: 'center',
      marginBottom: 10,
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