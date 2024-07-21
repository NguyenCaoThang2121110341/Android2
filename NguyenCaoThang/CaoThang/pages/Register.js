import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Alert } from 'react-native';
import Header from '../component/Header';
import Footer from '../component/Footer';
import AuthContext from '../Auth/AuthContext';
import { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Register() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { register } = useContext(AuthContext);
  const navigation = useNavigation();

  const handleRegister = () => {
    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match');
    } else if (email === '' || password === '' || confirmPassword === '') {
      Alert.alert('Please fill in all fields');
    } else {
      register(email, password);
      Alert.alert('Registration successful');
      navigation.replace('Login');
    }
  };

  const goToLoginScreen = () => {
    navigation.navigate('Login');
  };

  
  return (
    <View style={styles.aaa}>
   
    <View style={styles.container}>
      
      <Text style={styles.title}>REGISTER</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={text => setPassword(text)}
        />
         <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          onChangeText={text => setConfirmPassword(text)}
        />
     
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
      
    </View>
  
    </View>
  );
}

const styles = StyleSheet.create({
  aaa:{
    flex:1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'green',
  },
  formContainer: {
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'green',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  
  },
});