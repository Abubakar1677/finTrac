import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image
              source={require('../assets/coin.png')}
              style={styles.logo}
            />
    </View>
  );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#0D47A1",
        },
    logo: {
      width: 150, 
      height: 150,
      resizeMode: 'contain',
      aspectRatio: 1
      }
});