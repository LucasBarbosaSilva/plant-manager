import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native'
import colors from '../styles/colors';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

import userImg from '../../assets/lucas.png';
import fonts from '../styles/fonts';
export function Header() {
  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá, </Text>
        <Text style={styles.userName}>Lucas!</Text>
      </View>
      <Image style={styles.image} source={userImg}/>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: getStatusBarHeight(),
    alignItems: 'center',
    paddingVertical: 20,
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40,
  }, 
  image: {
    width: 70,
    height: 70,
    borderRadius: 35, 
    resizeMode: 'center'
  },
})