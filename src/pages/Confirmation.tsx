import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import {Button} from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
export function Confirmation(){
  const navigaton = useNavigation();

  function handleNavigation(){
    navigaton.navigate('PlantSelect')
  }

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji} >
          😊
        </Text>      
        <Text style={styles.title}>
          Prontinho!
        </Text>
        <Text style={styles.subtitle}>
          Agora vamos começar a cuidar das suas 
          plantinhas com muito cuidado
        </Text>

        <View style={styles.footer}>
          <Button
            title="Confirmar"
            onPress={handleNavigation}
          /> 
        </View>
      </View>
        
        
      
        
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
    padding:30,
  },
  emoji:{
    fontSize: 78,
    alignSelf: 'center'
  },
  title:{
    fontSize: 32,
    fontFamily: fonts.heading,
    textAlign: 'center',
    lineHeight: 36,
    marginTop: 15,
    color: colors.heading,
  },
  subtitle: {
    fontFamily: fonts.heading,
    textAlign: 'center',
    fontSize: 19,
    paddingVertical: 10,
    color: colors.heading
  },
  footer:{
    width: '100%',
    paddingHorizontal: 50,
    marginTop: 20
  }
});