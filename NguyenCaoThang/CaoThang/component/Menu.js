import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Menu() {
    const navigation = useNavigation();

    
    const [cartItems, setCartItems] = useState([]);
    const handleHomePress = () => {
        navigation.navigate('Home');
    };
    const handleLoginPress = () => {
        navigation.navigate('Login');
    };
    const handleSearchPress = () => {
        navigation.navigate('Search');
    };
   

    
    


    return (
        <View style={styles.container}>
            <TouchableOpacity style={
                styles.button
            }
                onPress={() => handleHomePress()}
            >
                <Icon name="home" size={20} color="green" />
            </TouchableOpacity>


            <TouchableOpacity style={
                styles.button
            }
                onPress={() => handleLoginPress()}
            >
                <Icon name="user" size={20} color="green" />
            </TouchableOpacity>

            <TouchableOpacity style={
                styles.button
                
            }
            
                onPress={() => handleSearchPress()}
            >
                <Icon name="search" size={20} color="green" />
            </TouchableOpacity>
            
           


            {/* <TouchableOpacity style={[
                styles.button,
                activeMenuItem === 'Cart' && styles.activeMenuItem,
            ]}
                onPress={() => onMenuItemPress('Cart')}
            >
                <Icon name="shopping-cart" size={20} color="#333333" />
            </TouchableOpacity> */}

           
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        height: 50,
 
     
    },
    button: {
        padding: 5,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
    },
    activeMenuItem: {
        backgroundColor: '#e0e0e0',
        height :50
    },
});

export default Menu;