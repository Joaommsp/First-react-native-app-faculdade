import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'


export default function Logo() {
  return (
    <Image style={styles.image} source={require('./logo-receba.png')}></Image>
  )
}

const styles = StyleSheet.create({
  image: {
   width: 200,
   height: 100
  }
});
