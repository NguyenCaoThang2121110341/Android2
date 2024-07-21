import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Alert } from 'react-native';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../Auth/AuthContext';

export default function Login() {
  const navigation = useNavigation();
  const handleRegisterPress = () => {
    navigation.navigate('Register');
};


const [value, setValue] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    const { login } = useContext(AuthContext);


    const handleLogin = () => {

        const loginSuccess = login(email, password);
        if (loginSuccess) {
            Alert.alert('Waiting');
            navigation.replace('Home');
        }
        if (!loginSuccess) {
            Alert.alert('Wrong account password or blank information');
        }
    };


  return (
    <View style={styles.aaa}>
   
    <View style={styles.container}>
      
      <Text style={styles.title}>LOGIN</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.button}  onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
<Text>

</Text>
        <TouchableOpacity
        style={
          styles.rgItem
        }
        onPress={() => handleRegisterPress()}
      >
        <Text style={styles.rgItemText}>You dont have any account? REGISTER</Text>
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