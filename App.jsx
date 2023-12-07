import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeTab from './screens/HomeTab';
import { Provider } from 'react-redux';
import { store } from './reduxtk/store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login">

          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              title: 'Login',
            }} />

          <Stack.Screen
            name="Home"
            component={HomeTab}
            options={{
              title: 'Home',
              headerShown: false,
            }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}