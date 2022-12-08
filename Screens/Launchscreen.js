import { View, Text, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'

const Launchscreen = ({navigation}) => {


    useEffect(() => {
        setTimeout(() => {
          navigation.navigate('Home_Screen');
        }, 1000);
      });

  return (
    <ImageBackground source={require('../assets/launch_image.jpg')}
    style={{width:'100%',height:"100%"}}
    />
  )
}

export default Launchscreen