import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';


const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const { uid, email } = userCredential.user;
  
          // Store the user's information in your Heroku PostgreSQL database
          // You can make an API request to your backend server to save the user details
  
          // Example API request using fetch:
          fetch('https://ambient-system.herokuapp.com/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ uid, email }),
          })
            .then((response) => response.json())
            .then((data) => {
              // Handle the response from the backend server
              // This could be displaying a success message or navigating to the next screen
            })
            .catch((error) => {
              console.error('Error saving user:', error);
              Alert.alert('Error', 'Failed to save user information');
            });
        })
        .catch((error) => {
          const errorMessage = error.message;
          Alert.alert('Login Error', errorMessage);
        });
    };
  
    return (
      <View>
        <TextInput
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    );
  };
  
  export default LoginScreen;