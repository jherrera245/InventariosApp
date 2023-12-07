import React from 'react';
import { View, StyleSheet} from 'react-native';
import { ProductList } from '../components/ProductList';

const HomeScreen = () => {
    return (
        <View 
            style={styles.container}>
            <ProductList />
        </View>
    );
}

export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    }
});