import React from 'react';
import { View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

interface QRCodeProps {
  value: string;
  size: number;
}

const QRCodeComponent: React.FC<QRCodeProps> = ({ value, size }) => {
  return (
    <View>
      <QRCode value={value} size={size} />
    </View>
  );
};

export default QRCodeComponent;
