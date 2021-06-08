import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { 
  SafeAreaView, 
  StyleSheet, 
  Text, 
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
 } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function UserIdentification(){
  
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] =useState(false);
  const [name, setName] = useState<string>();

  const navigaton = useNavigation();

  function handleNavigation(){
    navigaton.navigate('Confirmation')
  }

  function handleInputBlur(){
    setIsFocused(false);
    setIsFilled(!!name);
  }
  
  function handleInputFocused(){
    setIsFocused(true);
  }

  function handleInputFilled(value: string){
    setIsFilled(!!value);
    setName(value)
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
        >
          <View style={styles.content}>
            <View style={styles.forms}>
              <View style={styles.header}>
                <Text style={styles.emoji}>
                  {isFilled ? '😊' :'🙂'}
                </Text>
                <Text style={styles.title}>
                  Como podemos {'\n'}
                  chamar você?
                </Text>
              </View>
              <TextInput 
                style={[
                  styles.input,
                  (isFocused || isFilled) && {borderColor: colors.green}
                ]}
                onBlur={handleInputBlur}
                onFocus={handleInputFocused}
                onChangeText={handleInputFilled}
                placeholder={'Digite o seu nome:'}
              />

              <View style={styles.footer} >
                <Button
                  title="Confirmar"
                  onPress={handleNavigation}
                />
              </View>
            </View>
          </View> 
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles =StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      justifyContent: 'space-around',
      alignItems: 'center'
    },

    content: {  
      flex: 1,
      width: '100%'
    },
    
    forms: {  
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 54,
      alignItems: 'center'
    },

    header: {
      alignItems: 'center'
    },

    emoji:{
      fontSize: 54
    },

    title: {
      fontSize: 24,
      lineHeight: 32,
      textAlign: 'center',
      fontFamily: fonts.heading,
      color: colors.heading,
      marginTop: 20
    },

    input: {
      borderBottomWidth: 1,
      borderColor: colors.gray,
      color: colors.heading,
      width: '100%',
      fontSize: 18,
      marginTop: 50,
      padding: 10,
      textAlign: 'center'
    },

    footer: {
      marginTop: 40,
      width: '100%',
      paddingHorizontal: 20,

    }
    

});