import firebase from 'firebase/app';
import 'firebase/auth';
import LoginScreen from './screens/LoginScreen';

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDtKiDviLvkSvGT5xwFtuC2fo-VF9GxZHA",

  authDomain: "ambientsystemsqr.firebaseapp.com",

  projectId: "ambientsystemsqr",

  storageBucket: "ambientsystemsqr.appspot.com",

  messagingSenderId: "573952725334",

  appId: "1:573952725334:web:b19779484ae95e8c0ec6f7",

  measurementId: "G-V8PV5JYXG3"

};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

//const analytics = getAnalytics(app);


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { getAuth } from 'firebase/auth';

export default function App() {
  return (
    <View>
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
