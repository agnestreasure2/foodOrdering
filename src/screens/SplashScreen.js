import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Cover from '../assets/svgs/cover.svg'

const SplashScreen = () => {
  
    return (
      <View style={styles.container}>
        <Text>Hey</Text>
        <Cover />
      </View>
    );
  };


export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})