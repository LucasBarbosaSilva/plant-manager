import React from 'react';
import { 
  Image, 
  Text, 
  TouchableOpacity, 
  View, 
  StyleSheet, 
  SafeAreaView,
  Dimensions
} from 'react-native';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

import {Feather} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function Welcome(){
  
  const navegation = useNavigation();

  function handleStart(){ 
    navegation.navigate('UserIdentification')
  }
  
  return(
    <SafeAreaView style={styles.container}>
        <View style={styles.wrapper} >
          <Text style={styles.title}>
              Gerencie {'\n'}
              suas plantas de{'\n'}
              forma fácil
          </Text>
          <Image 
            source={wateringImg} 
            style={styles.image}
            resizeMode={'contain'}  
          />
          <Text style={styles.subitem}>
            Não esqueça mais de regar suas plantas.
            Nós cuidamos de lembrar você sempre que precisar.
          </Text>

          <TouchableOpacity 
            style={styles.button}
            activeOpacity={0.7}
            onPress={() => handleStart()}
          >
            <Feather 
              name="chevron-right"
              style={styles.buttonIcon}
            />
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  wrapper:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20
  },   
  
  title: {
    fontSize: 30,
    fontFamily: fonts.text,
    fontWeight: 'bold',
    lineHeight: 40,
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38
  },

  image: {
    height: Dimensions.get('screen').width * 0.7
  },

  subitem: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: fonts.text,
    paddingHorizontal: 20,
    lineHeight: 30,
    color: colors.heading
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    width: 56,
    borderRadius: 16,
    marginBottom: 56,
  },
  buttonIcon:{
    fontSize: 28,
    color: colors.white
  }
});