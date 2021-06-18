import React from "react";
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps }from 'react-native';

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface EnviromentButtonProps extends TouchableOpacityProps {
  title: string,
  isActive?: boolean,

}

export function EnviromentButton({title, isActive = false, ... rest}: EnviromentButtonProps){
  return(
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.container,
          isActive && styles.containerActive
        ]}
        {... rest}
      >
        <Text style={[
          styles.title,
          isActive && styles.titleActive
        ]}>
          {title}
        </Text>

      </TouchableOpacity>
      
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    width: 76,
    height: 40,
    justifyContent: "center",
    alignItems: 'center',
    borderRadius: 12,
    marginRight: 5
  },
  containerActive: {
    backgroundColor: colors.green_light,
  },
  title: {
    fontFamily: fonts.text,
    color: colors.heading
  },
  titleActive: {
    color: colors.green_dark,
    fontFamily: fonts.heading,
  }
})