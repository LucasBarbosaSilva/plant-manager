import React from 'react';

import { StyleSheet, Text} from 'react-native';
import  {SvgFromUri} from 'react-native-svg';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface PlantCardProps extends RectButtonProps{
  data: {
    name: string,
    photo: string;
  }
}

export const PlantCardPrimary = ({data, ...rest}: PlantCardProps) => {
  return(
    <RectButton
      style={styles.container}
      {...rest}
    >
      <SvgFromUri 
        uri={data.photo}
        width={70}
        height={70}
      />
      <Text
        style={styles.title}
      >
        {data.name}
      </Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: '45%',
    backgroundColor: colors.shape,
    borderRadius: 20,
    paddingVertical: 20,
    alignItems: 'center',
    margin: 10
  },
  title: {
    color: colors.green_dark,
    fontFamily: fonts.heading,
    marginVertical: 16
  }
})
