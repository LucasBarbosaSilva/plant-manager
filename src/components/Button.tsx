import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps {
  title: string,
  onPress: () => void,
}

export function Button({title, onPress}: ButtonProps){
  return(
    <TouchableOpacity 
      style={styles.container} 
      onPress={onPress}
    >
      <Text style={styles.title}>
        {title}
      </Text>      
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.heading
  },
})