import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import QRCodeComponent from '../components/QRCode';

export default function QRCodeGeneratorScreen() {
  const [qrValue, setQRValue] = useState('');

  const handleGenerateQRCode = () => {
    if (qrValue.trim() === '') {
      Alert.alert('Error', 'Please enter a value');
      return;
    }
    // Generate QR code logic here
  };

  return (
    <View>
      <TextInput
        value={qrValue}
        onChangeText={setQRValue}
        placeholder="Enter a value"
      />
      <Button title="Generate QR Code" onPress={handleGenerateQRCode} />
      <QRCodeComponent value={qrValue} size={200} />
    </View>
  );
}