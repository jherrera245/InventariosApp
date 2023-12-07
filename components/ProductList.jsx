import { Avatar, Button, ListItem } from '@rneui/base';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductData, getProductsError, getProductsStatus, selectAllProducts } from '../reduxtk/slice';

const ProductList = () => {

    const dispatch = useDispatch();
    const products = useSelector(selectAllProducts);
    const status = useSelector(getProductsStatus);
    const errors = useSelector(getProductsError);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProductData());
        }
    }, [status, dispatch])


    return (
        <View style={styles.card}>
            <Text
                onClick={async () => GetAll()}
                style={styles.title}>Listado de productos</Text>

            <ScrollView>
                {
                    (status === 'loading') ? (
                        <Text>Cargando datos...</Text>
                    ) : (
                        (status === 'succeeded') ? (
                            products.map((item, index) => (
                                <ListItem.Swipeable key={index}
                                    rightContent={(reset) => (
                                        <Button
                                            title='Detalles'
                                            icon={{ name: 'details', color: 'white' }}
                                            buttonStyle={{ minHeight: '100%', backgroundColor: '#1565C0' }}
                                            onPress={() => {
                                                Alert.alert(`Existencias ${item.stock}`, `
                                                    Codigo: ${item.codigo}
                                                    Nombre: ${item.producto}
                                                    Categoria: ${item.categoria}
                                                    Concepto: ${item.concepto}
                                                    Consumible: ${item.consumible === 1 ? 'Si' : 'No'}
                                                `, [
                                                    { text: "Cerrar", onPress: () => {
                                                        console.log("Cerrar detalles");
                                                    } },
                                                ]);
                                            }}
                                        />)}>
                                    <Avatar rounded source={{ uri: 'https://cdn.icon-icons.com/icons2/945/PNG/512/Office_-12_icon-icons.com_73953.png' }} />
                                    <ListItem.Content>
                                        <ListItem.Title style={styles.title}>{item.producto}</ListItem.Title>
                                        <ListItem.Subtitle>
                                            Stock: {item.stock}
                                        </ListItem.Subtitle>
                                    </ListItem.Content>
                                    <ListItem.Chevron />
                                </ListItem.Swipeable>
                            ))
                        ) : <Text>No hay productos en la lista</Text>
                    )
                }
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: '95%',
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
    },
    success: {
        color: '#2e7d32',
        fontWeight: 700,
    },
    danger: {
        color: '#d32f2f',
        fontWeight: 700,
    }
});

export { ProductList };