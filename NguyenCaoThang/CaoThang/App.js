
import React, { useState } from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from './component/Menu';
import Home from './pages/Home';
import Header from './component/Header';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Footer from './component/Footer';
import Register from './pages/Register';
import Search from './pages/Search';
import { CartProvider } from '../CaoThang/Provider/CartContext';
import AuthContext from './Auth/AuthContext';

const Stack = createStackNavigator();

export default function App() {

  const [registeredUser, setRegisteredUser] = useState(null);

  const register = (email, password) => {
    setRegisteredUser({ email, password });
  };

  const login = (email, password) => {
    if (registeredUser && registeredUser.email === email && registeredUser.password === password) {
      return true;
    }
    return false;
  };
  
  return (

    
    <AuthContext.Provider value={{ login, register }}>
      <CartProvider>
    <View style={{ flex: 1, paddingHorizontal: 10, paddingHorizontal:5 }}>
    <Header></Header>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen

          name="Home"
          component={Home}
          options={{ headerTitle: '' }}
        />
        <Stack.Screen name="SingleProduct" component={ProductDetail} options={{ headerTitle: ' ' }} />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerTitle: 'LOGIN' }} 
        />
         <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ headerTitle: 'CART' }} 
        />
         <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerTitle: 'REGISTER' }} 
        />
         <Stack.Screen
          name="Search"
          component={Search}
          options={{ headerTitle: 'SEARCH' }} 
        />
      </Stack.Navigator>
      <Menu/>
    </NavigationContainer>
    <Footer/>
  </View>
  </CartProvider>
  </AuthContext.Provider>
  );
};
const styles = StyleSheet.create({

})