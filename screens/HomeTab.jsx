import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileScreen from './ProfileScreen';
import HomeScreen from './HomeScreen';

const Tab = createBottomTabNavigator();

const HomeTab = () => {

    return (
        <Tab.Navigator
                initialRouteName="Productos">
            <Tab.Screen 
                name="Productos" 
                component={HomeScreen}
                options={{ 
                    tabBarLabel: 'Productos',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    )
                }} />

            <Tab.Screen 
                name="Profile" 
                component={ProfileScreen}
                options={{ 
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }} />
        </Tab.Navigator>
    );
}

export default HomeTab;